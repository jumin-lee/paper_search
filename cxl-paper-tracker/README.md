# 0xCXL Paper Map

CXL / GPU 공유 메모리 논문을 **매일 오전 8시(KST)에 자동 수집**하고, 북마크를 관리하는 정적 사이트입니다.
Claude와의 대화에서 수집한 논문 39편과 북마크 12편이 시드 데이터로 포함되어 있습니다.

## 동작 원리 (정직한 설명)

- GitHub Pages는 정적 호스팅이라 **사이트 자체는 크롤링을 못 합니다.**
- 대신 **GitHub Actions cron**(`.github/workflows/daily-fetch.yml`)이 매일 23:00 UTC(= 08:00 KST)에
  `scripts/fetch_papers.py`를 실행하여 **arXiv 공식 API**에서 신규 논문을 수집하고,
  중복을 제거한 뒤 `data/papers.js`에 커밋합니다. 사이트는 그 파일을 읽어 렌더링합니다.
- **Google Scholar는 공식 API가 없고 크롤링을 차단**하므로 사용하지 않습니다.
  지금까지 추적한 논문 대부분이 arXiv에 있으므로 실용적으로 충분하며,
  학회 단독 게재 논문(CIDR, SIGMOD Companion 등)은 수동으로 `data/papers.js`에 추가하면 됩니다.
- GitHub cron은 부하에 따라 수 분~수십 분 지연될 수 있습니다.

## 배포 방법

1. 새 GitHub 레포를 만들고 이 폴더 전체를 push
2. **Settings → Pages → Source: Deploy from a branch → main / (root)** 선택
3. **Settings → Actions → General → Workflow permissions → "Read and write permissions"** 활성화
   (봇이 papers.js를 커밋하는 데 필요)
4. 끝. 다음 날 오전 8시부터 자동 수집됩니다.
   즉시 테스트하려면 **Actions 탭 → Daily paper fetch → Run workflow**.

## 북마크 운영

- 사이트에서 ○ 버튼으로 토글 → 브라우저 localStorage에 즉시 저장
- 기기 간 공유하려면 **"북마크 내보내기"** 버튼으로 `bookmarks.js`를 받아
  `data/bookmarks.js`에 덮어쓰고 커밋
- FIFO 순서가 유지됩니다 (북마크 탭에서 0x01부터 재번호)

## 자동 수집 논문의 평가방법 분류

자동 수집된 논문은 `eval: "unknown"`(미분류)로 들어옵니다.
초록만으로 simulation / emulation / real-world를 기계적으로 단정하는 것은 부정확하므로
의도적으로 자동 분류하지 않았습니다. 확인 후 `data/papers.js`에서 직접 수정하거나,
Claude에게 해당 논문의 평가방법 확인을 요청하세요.

## 검색 쿼리 수정

`scripts/fetch_papers.py`의 `QUERIES` 딕셔너리를 편집하면 됩니다.
주제 추가 시 `index.html`의 `TOPIC_LABEL`과 필터 `<option>`도 함께 갱신하세요.

## 파일 구조

```
├── index.html                      # 사이트 (단일 파일)
├── data/
│   ├── papers.js                   # 논문 DB (봇이 갱신)
│   └── bookmarks.js                # 북마크 (수동 커밋)
├── scripts/fetch_papers.py         # arXiv 수집기
└── .github/workflows/daily-fetch.yml
```
