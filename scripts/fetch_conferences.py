#!/usr/bin/env python3
"""
지정 학회(HPCA, CGO, CC, PPoPP, MICRO, ASPLOS, OSDI, OOPSLA, EuroSys, PLDI,
Middleware, ISCA)의 논문을 **한 달 단위**로 수집합니다.

동작 원리 (정직한 설명):
- 학회 사이트를 직접 크롤링하지 않습니다. 학회 프로그램 페이지는 구조가 제각각이고
  자주 바뀌어서 유지보수가 불가능합니다. 대신:
  1. DBLP API (학회별 논문 목록의 사실상 표준, 무료·크롤링 차단 없음)에서
     학회·연도별 논문 목록을 가져오고,
  2. Semantic Scholar API 로 DOI를 조회해 abstract를 붙인 뒤,
  3. 제목+abstract를 주제 키워드로 필터링하여 관련 논문만 추가합니다.
- note에는 abstract 첫 문장(들)을 기계적으로 잘라 넣습니다. (LLM 요약 아님)
- DBLP는 학회 종료 후 수일~수주 내 인덱싱됩니다. PLDI/OOPSLA/PPoPP처럼
  PACMPL 저널로 나오는 학회도 DBLP 스트림에 연결되면 잡힙니다.
  이번 달에 안 잡힌 논문은 다음 달 실행에서 자동으로 들어옵니다 (제목/DOI 중복 제거).

사용법:
  python scripts/fetch_conferences.py             # 올해 논문 수집
  python scripts/fetch_conferences.py --year 2026 # 특정 연도
"""
import argparse, json, os, re, sys, time, urllib.request, urllib.parse
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PAPERS_JS = ROOT / "data" / "papers.js"

DBLP_API = "https://dblp.org/search/publ/api"
S2_BATCH = "https://api.semanticscholar.org/graph/v1/paper/batch"
S2_API_KEY = os.environ.get("SEMANTIC_SCHOLAR_API_KEY", "")  # 없어도 동작 (rate limit만 낮음)

# DBLP 스트림 키 → 표시 이름
CONFERENCES = {
    "hpca": "HPCA", "cgo": "CGO", "cc": "CC", "ppopp": "PPoPP",
    "micro": "MICRO", "asplos": "ASPLOS", "osdi": "OSDI", "oopsla": "OOPSLA",
    "eurosys": "EuroSys", "pldi": "PLDI", "middleware": "Middleware", "isca": "ISCA",
}

# 주제 키워드 (제목+abstract 대상, 대소문자 무시).
# 학회 프로시딩 전체를 넣으면 피드가 무너지므로 사이트 주제에 맞는 논문만 필터링합니다.
# 전부 수집하고 싶으면 RELEVANCE_FILTER = False 로 바꾸세요.
RELEVANCE_FILTER = True
TOPIC_PATTERNS = {
    "1": [  # CXL Memory / PNM
        r"\bCXL\b", r"compute express link",
        r"near[- ]data processing", r"near[- ]memory (?:processing|computing|accelerat)",
        r"processing[- ]in[- ]memory", r"\bPIM\b", r"\bPNM\b",
        r"memory pool(?:ing)?", r"memory tier(?:ing|ed)?", r"tiered memory",
        r"memory expan(?:der|sion)", r"disaggregated memory", r"memory disaggregat",
        r"far memory",
    ],
    "2": [  # GPU 물리 공유 메모리
        r"unified memory", r"grace[- ]hopper", r"\bGH200\b",
        r"integrated GPU", r"shared physical memory",
    ],
}
GRAPH_PATTERNS = [r"graph (?:processing|analytics)", r"\bGNN\b", r"nearest neighbor search", r"\bANNS\b"]

NOTE_MAX_CHARS = 220  # abstract 앞부분을 이 길이까지만 note에 사용


def norm_title(t: str) -> str:
    return re.sub(r"\s+", " ", t).strip().lower().rstrip(".")


def http_json(url, data=None, headers=None, retries=4, backoff=5.0):
    """JSON GET/POST + 지수 백오프 재시도 (DBLP 500 / S2 429 대응)."""
    req = urllib.request.Request(url, data=data, headers=headers or {})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=45) as r:
                return json.loads(r.read())
        except Exception as ex:
            wait = backoff * (2 ** attempt)
            print(f"  [retry {attempt+1}/{retries}] {ex} — {wait:.0f}s 대기")
            time.sleep(wait)
    return None


def load_db():
    src = PAPERS_JS.read_text(encoding="utf-8")
    papers = json.loads(re.search(r"window\.PAPERS\s*=\s*(\[.*?\]);", src, re.S).group(1))
    excluded = json.loads(re.search(r"window\.EXCLUDED\s*=\s*(\[.*?\]);", src, re.S).group(1))
    return src, papers, excluded


def save_db(src, papers):
    payload = "window.PAPERS = " + json.dumps(papers, ensure_ascii=False, indent=2) + ";"
    # replacement에 lambda 사용: 문자열로 주면 \m 같은 백슬래시(LaTeX 등)가 re.sub 이스케이프로 오해석됨
    new_src = re.sub(r"window\.PAPERS\s*=\s*\[.*?\];", lambda m: payload, src, flags=re.S)
    PAPERS_JS.write_text(new_src, encoding="utf-8")


def fetch_dblp(stream, year):
    """DBLP에서 해당 학회·연도의 논문 목록 (제목/DOI/URL).
    DBLP는 요청당 최대 100건만 반환하므로 f(offset)로 페이지네이션."""
    q = f"stream:streams/conf/{stream}: year:{year}"
    out, offset = [], 0
    while True:
        url = f"{DBLP_API}?{urllib.parse.urlencode({'q': q, 'h': 100, 'f': offset, 'format': 'json'})}"
        data = http_json(url)
        if not data:
            break
        hits = data["result"]["hits"]
        total = int(hits["@total"])
        for h in hits.get("hit", []):
            info = h["info"]
            if info.get("type") == "Editorship":  # 프로시딩 자체(목차) 항목 제외
                continue
            title = re.sub(r"\s+", " ", info.get("title", "")).strip().rstrip(".")
            if not title or title.lower().startswith("proceedings of"):
                continue
            out.append({
                "title": title,
                "doi": info.get("doi", ""),
                "ee": info.get("ee", ""),
            })
        offset += int(hits["@sent"])
        if offset >= total or int(hits["@sent"]) == 0:
            break
        time.sleep(3)  # DBLP rate limit 예의
    return out


def fetch_abstracts(papers):
    """Semantic Scholar 배치 API로 DOI 기반 abstract/출판일 조회. 실패해도 진행."""
    doi_papers = [p for p in papers if p["doi"]]
    headers = {"Content-Type": "application/json"}
    if S2_API_KEY:
        headers["x-api-key"] = S2_API_KEY
    for i in range(0, len(doi_papers), 100):
        chunk = doi_papers[i:i + 100]
        body = json.dumps({"ids": [f"DOI:{p['doi']}" for p in chunk]}).encode()
        url = f"{S2_BATCH}?fields=abstract,publicationDate"
        res = http_json(url, data=body, headers=headers)
        if res:
            for p, item in zip(chunk, res):
                if item:
                    p["abstract"] = item.get("abstract") or ""
                    p["pubdate"] = item.get("publicationDate") or ""
        time.sleep(5)  # S2 무인증 rate limit 예의 (429 빈발 시 API 키 발급 권장)


def classify(title, abstract):
    """제목+abstract를 키워드 매칭해 topic 리스트 반환. 미매칭이면 []"""
    text = f"{title} {abstract}"
    topics = [t for t, pats in TOPIC_PATTERNS.items()
              if any(re.search(p, text, re.I) for p in pats)]
    if "1" in topics and any(re.search(p, text, re.I) for p in GRAPH_PATTERNS):
        topics.append("g")
    return topics


def brief_note(abstract):
    """abstract 첫 문장(들)을 NOTE_MAX_CHARS 이내로 자른 기계적 요약."""
    if not abstract:
        return "학회 자동 수집 — abstract 미확보, 평가방법 미분류"
    text = re.sub(r"\s+", " ", abstract).strip()
    # LaTeX 마크업 정리: $\mathbf{C}^{\mathbf{3}}$ → C^3
    text = re.sub(r"\\[a-zA-Z]+", "", text).translate(str.maketrans("", "", "${}"))
    out = ""
    for sent in re.split(r"(?<=[.!?])\s+", text):
        if out and len(out) + len(sent) + 1 > NOTE_MAX_CHARS:
            break
        out = f"{out} {sent}".strip()
        if len(out) >= NOTE_MAX_CHARS:
            out = out[:NOTE_MAX_CHARS].rstrip() + "…"
            break
    return out + " (abstract 발췌)"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--year", type=int, default=datetime.now(timezone.utc).year)
    args = ap.parse_args()

    src, papers, excluded = load_db()
    seen_titles = {norm_title(p["title"]) for p in papers} | {norm_title(x["title"]) for x in excluded}
    seen_ids = {p["id"] for p in papers} | {x["id"] for x in excluded}
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    added = []
    for stream, name in CONFERENCES.items():
        print(f"[{name} {args.year}] DBLP 조회…")
        hits = fetch_dblp(stream, args.year)
        print(f"  {len(hits)}편 (DBLP)")
        time.sleep(3)  # DBLP rate limit 예의
        if not hits:
            continue

        fetch_abstracts(hits)

        for h in hits:
            if norm_title(h["title"]) in seen_titles:
                continue
            topics = classify(h["title"], h.get("abstract", ""))
            if RELEVANCE_FILTER and not topics:
                continue
            pid = h["doi"] or f"{stream}{args.year}-{norm_title(h['title'])[:40]}"
            if pid in seen_ids:
                continue
            url = f"https://doi.org/{h['doi']}" if h["doi"] else h["ee"]
            entry = {
                "id": pid,
                "title": h["title"],
                "venue": f"{name} {args.year}",
                "topic": topics or ["3"],
                "eval": "unknown",
                "url": url,
                "date": h.get("pubdate") or f"{args.year}",
                "fetched": today,
                "note": brief_note(h.get("abstract", "")),
            }
            papers.append(entry)
            seen_titles.add(norm_title(h["title"]))
            seen_ids.add(pid)
            added.append(entry)
            print(f"  + [{'/'.join(entry['topic'])}] {h['title']}")

    if added:
        save_db(src, papers)
        print(f"\n총 {len(added)}편 추가 ({today})")
    else:
        print("\n이전 대비 새로운 논문 없음.")


if __name__ == "__main__":
    main()
