# Paper Archive

CXL / GPU 공유 메모리 논문을 **매일(arXiv) + 매월(주요 학회) 자동 수집**하고, 북마크를 관리하는 정적 사이트입니다.
Claude와의 대화에서 수집한 논문 39편과 북마크 12편이 시드 데이터로 포함되어 있습니다.
피드는 **출판월 기준**으로 그룹핑됩니다 (각 논문의 `date` 필드).

## 동작 원리 (정직한 설명)

- GitHub Pages는 정적 호스팅이라 **사이트 자체는 크롤링을 못 합니다.**
  모든 수집은 **GitHub Actions cron**이 스크립트를 실행해 `data/papers.js`에 커밋하는 방식입니다.
- **매일 수집** (`.github/workflows/daily-fetch.yml`, 23:00 UTC = 08:00 KST):
  `scripts/fetch_papers.py`가 **arXiv 공식 API**에서 주제별 신규 논문을 수집합니다.
- **매월 수집** (`.github/workflows/monthly-conf-fetch.yml`, 매월 1일 23:30 UTC):
  `scripts/fetch_conferences.py`가 지정 학회
  **HPCA, CGO, CC, PPoPP, MICRO, ASPLOS, OSDI, OOPSLA, EuroSys, PLDI, Middleware, ISCA**
  의 해당 연도 논문을 수집합니다.
  - 학회 사이트를 직접 크롤링하지 않습니다 — 프로그램 페이지는 구조가 제각각이고 자주 바뀌어
    유지보수가 불가능합니다. 대신 **DBLP API**(학회별 논문 목록의 사실상 표준)에서 목록을 받고,
    **Semantic Scholar API**로 abstract를 붙인 뒤, 제목+abstract를 주제 키워드로 필터링합니다.
  - note에는 abstract 첫 문장을 기계적으로 발췌합니다 (LLM 요약 아님).
  - DBLP는 학회 종료 후 수일~수주 뒤에 인덱싱됩니다. 이번 달에 안 잡힌 논문은
    다음 달 실행에서 자동으로 들어옵니다 (제목/DOI 기준 중복 제거).
    PLDI·OOPSLA·PPoPP처럼 PACMPL 저널로 발행되는 학회도 DBLP 스트림에 연결되는 대로 잡힙니다.
- **Google Scholar는 공식 API가 없고 크롤링을 차단**하므로 사용하지 않습니다.
  arXiv(일간) + DBLP(월간 학회) 조합이 그 역할을 대신합니다.
- GitHub cron은 부하에 따라 수 분~수십 분 지연될 수 있습니다.

## 배포 방법

1. 새 GitHub 레포를 만들고 이 폴더 전체를 push
2. **Settings → Pages → Source: Deploy from a branch → main / (root)** 선택
3. **Settings → Actions → General → Workflow permissions → "Read and write permissions"** 활성화
   (봇이 papers.js를 커밋하는 데 필요)
4. 끝. 다음 날 오전 8시부터 자동 수집됩니다.
   즉시 테스트하려면 **Actions 탭 → Daily paper fetch / Monthly conference fetch → Run workflow**.
   (Monthly는 `year` 입력으로 특정 연도를 지정할 수 있습니다)

## 태그 필터

- 각 논문에 `tags` 배열이 있습니다: 학회 논문은 학회명(`HPCA`, `ASPLOS`…), arXiv 수집분은 `arXiv`.
  arXiv 프리프린트이면서 학회에 게재된 논문은 둘 다 갖습니다 (다중 태그).
- 검색창 아래 태그 토글 바에서 **여러 태그를 동시에 선택**(OR 조건)할 수 있습니다.
  태그 목록과 논문 수는 데이터에서 자동 집계되므로 새 학회가 추가되면 토글도 자동 생성됩니다.

## 북마크 운영

- 사이트에서 ○ 버튼으로 토글 → 브라우저 localStorage에 즉시 저장
- 기기 간 공유하려면 **"북마크 내보내기"** 버튼으로 `bookmarks.js`를 받아
  `data/bookmarks.js`에 덮어쓰고 커밋
- FIFO 순서가 유지됩니다 (북마크 탭에서 0x01부터 재번호)

## 자동 수집 논문의 평가방법 분류

- **학회 논문**(월간 수집): abstract 내용을 키워드 매칭해 평가방법을 **추정**해서 채웁니다
  (gem5/simulator→sim, FPGA/QEMU→emu, real hardware/testbed→real, 복수 신호→mixed).
  추정으로 채운 논문은 note에 `eval 자동추정` 표시가 붙습니다. 신호가 없으면 unknown으로 남습니다.
  - 미분류로 남은 학회 논문을 나중에 다시 채우려면: `python scripts/fetch_conferences.py --reclassify`
    (abstract 전문을 출력하므로 Claude에게 검수를 맡기기 좋습니다)
  - note 표시 구분: `eval abstract 확인`(초록에 평가방법 명시) / `eval 추정 ⚠️`(정황 추정) /
    `eval 자동추정`(키워드 매칭)
- **arXiv 논문**(일간 수집): `eval: "unknown"`으로 들어옵니다. 확인 후 직접 수정하거나
  Claude에게 확인을 요청하세요.

## 검색 쿼리 / 학회·키워드 수정

- arXiv 쿼리: `scripts/fetch_papers.py`의 `QUERIES` 딕셔너리
- 학회 목록: `scripts/fetch_conferences.py`의 `CONFERENCES` (DBLP 스트림 키 기준)
- 학회 논문 주제 필터: 같은 파일의 `TOPIC_PATTERNS`
  (학회 전체 논문을 다 넣고 싶으면 `RELEVANCE_FILTER = False`)
- 주제 추가 시 `index.html`의 `TOPIC_LABEL`과 필터 `<option>`도 함께 갱신하세요.

## 파일 구조

```
├── index.html                      # 사이트 (단일 파일)
├── data/
│   ├── papers.js                   # 논문 DB (봇이 갱신, date=출판일)
│   └── bookmarks.js                # 북마크 (수동 커밋)
├── scripts/
│   ├── fetch_papers.py             # arXiv 수집기 (일간)
│   └── fetch_conferences.py        # 학회 수집기 (월간, DBLP+Semantic Scholar)
└── .github/workflows/
    ├── daily-fetch.yml             # 매일 08:00 KST
    └── monthly-conf-fetch.yml      # 매월 1일 23:30 UTC
```
