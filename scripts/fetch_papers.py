#!/usr/bin/env python3
"""
매일 arXiv API에서 3개 주제의 신규 논문을 수집해 data/papers.js에 추가합니다.
Google Scholar는 공식 API가 없고 크롤링을 차단하므로 arXiv API를 사용합니다.
(지금까지 추적한 논문의 대다수가 arXiv에 등재되어 있어 실용적으로 충분합니다.)

중복 판정: arXiv ID 또는 제목(소문자, 공백 정규화) 일치 시 건너뜀.
제외 목록(EXCLUDED)에 있는 논문도 건너뜀.
"""
import json, re, time, urllib.request, urllib.parse, xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

# 학회 수집기와 동일한 eval 추정기 / abstract 발췌기 재사용
from fetch_conferences import classify_eval, brief_note

ROOT = Path(__file__).resolve().parent.parent
PAPERS_JS = ROOT / "data" / "papers.js"

ARXIV_API = "http://export.arxiv.org/api/query"
NS = {"a": "http://www.w3.org/2005/Atom"}

# 주제별 arXiv 검색 쿼리 (abs/title 대상). 필요 시 자유롭게 수정하세요.
QUERIES = {
    "1": [  # CXL Memory: expander, PNM, 활용처 전반
        'abs:"CXL" AND (abs:"memory expander" OR abs:"near-data processing" OR abs:"processing near memory" OR abs:"PNM" OR abs:"memory expansion")',
        'abs:"CXL" AND (abs:"memory pooling" OR abs:"tiered memory" OR abs:"memory tiering")',
    ],
    "2": [  # GPU 물리 공유 메모리 (UVM 제외)
        '(abs:"unified memory" OR abs:"shared physical memory") AND (abs:"Jetson" OR abs:"Grace Hopper" OR abs:"SoC" OR abs:"integrated GPU") ANDNOT abs:"UVM"',
    ],
    "3": [  # CXL case study / evaluation / survey
        'abs:"Compute Express Link" AND (abs:"evaluation" OR abs:"case study" OR abs:"survey" OR abs:"characterization" OR abs:"benchmark")',
    ],
    "g": [  # Graph 특집 (5회차에 추가된 관심사)
        'abs:"CXL" AND (abs:"graph processing" OR abs:"graph analytics" OR abs:"nearest neighbor search" OR abs:"GNN")',
    ],
}

MAX_PER_QUERY = 25          # 쿼리당 최신 N건 확인
REQUEST_INTERVAL_SEC = 3.5  # arXiv API 예의상 요청 간격 (3초 이상 권장)


def norm_title(t: str) -> str:
    return re.sub(r"\s+", " ", t).strip().lower()


def load_db():
    """papers.js에서 PAPERS / EXCLUDED 배열을 파싱."""
    src = PAPERS_JS.read_text(encoding="utf-8")
    papers = json.loads(re.search(r"window\.PAPERS\s*=\s*(\[.*?\]);", src, re.S).group(1))
    excluded = json.loads(re.search(r"window\.EXCLUDED\s*=\s*(\[.*?\]);", src, re.S).group(1))
    return src, papers, excluded


def save_db(src: str, papers: list):
    payload = "window.PAPERS = " + json.dumps(papers, ensure_ascii=False, indent=2) + ";"
    # replacement에 lambda 사용: 문자열로 주면 \m 같은 백슬래시(LaTeX 등)가 re.sub 이스케이프로 오해석됨
    new_src = re.sub(r"window\.PAPERS\s*=\s*\[.*?\];", lambda m: payload, src, flags=re.S)
    PAPERS_JS.write_text(new_src, encoding="utf-8")


def fetch(query: str):
    url = f"{ARXIV_API}?{urllib.parse.urlencode({'search_query': query, 'sortBy': 'submittedDate', 'sortOrder': 'descending', 'max_results': MAX_PER_QUERY})}"
    with urllib.request.urlopen(url, timeout=30) as r:
        root = ET.fromstring(r.read())
    for e in root.findall("a:entry", NS):
        arxiv_id = e.find("a:id", NS).text.rsplit("/", 1)[-1]
        arxiv_id = re.sub(r"v\d+$", "", arxiv_id)  # 버전 제거
        yield {
            "id": arxiv_id,
            "title": re.sub(r"\s+", " ", e.find("a:title", NS).text).strip(),
            "url": f"https://arxiv.org/abs/{arxiv_id}",
            "published": e.find("a:published", NS).text[:10],
            "abstract": re.sub(r"\s+", " ", (e.findtext("a:summary", "", NS) or "")).strip(),
        }


def main():
    src, papers, excluded = load_db()
    seen_ids = {p["id"] for p in papers} | {x["id"] for x in excluded}
    seen_titles = {norm_title(p["title"]) for p in papers} | {norm_title(x["title"]) for x in excluded}
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    added = []
    for topic, queries in QUERIES.items():
        for q in queries:
            try:
                for hit in fetch(q):
                    if hit["id"] in seen_ids or norm_title(hit["title"]) in seen_titles:
                        continue
                    ev = classify_eval(hit["title"], hit["abstract"])
                    entry = {
                        "id": hit["id"], "title": hit["title"],
                        "venue": f"arXiv {hit['id']} ({hit['published']})",
                        "topic": [topic], "tags": ["arXiv"], "eval": ev,
                        "url": hit["url"], "date": hit["published"],
                        "fetched": today,
                        "note": brief_note(hit["abstract"])
                                + (" · eval 자동추정" if ev != "unknown" else ""),
                    }
                    papers.append(entry)
                    seen_ids.add(hit["id"]); seen_titles.add(norm_title(hit["title"]))
                    added.append(entry)
            except Exception as ex:
                print(f"[warn] query failed ({topic}): {ex}")
            time.sleep(REQUEST_INTERVAL_SEC)

    if added:
        save_db(src, papers)
        print(f"{len(added)}편 추가 ({today}):")
        for a in added:
            print(f"  - [{'/'.join(a['topic'])}] {a['title']}")
    else:
        print("이전 대비 새로운 논문 없음.")


if __name__ == "__main__":
    main()
