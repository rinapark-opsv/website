# OpenSurvey Dataspace AI — Hero 데모

웹 메인 Hero 인터랙션 데모. 시나리오를 고르면 제품 목업 위에서 좌:채팅 / 우:아티팩트 패널이 자동재생됩니다.

## 🤝 협업 분업 (충돌 최소화)

| 담당 | 파일 | 내용 |
|---|---|---|
| **기획 · 시나리오** | `scenarios.js` | 시나리오 내용·대화·순서·페르소나·태그라인 |
| **디자인 · 레이아웃** | `index.html` | CSS, 컴포넌트, 재생 엔진, 인라인 표 데이터 |

두 파일이 분리돼 있어 **서로 다른 파일을 작업**하면 git 충돌이 거의 없습니다.
`scenarios.js`의 각 시나리오 = `{ id, label, persona, tagline, panel, scenes[] }`,
각 씬 = `{ chat:[...], preview:'타입', hl:'라벨' }`.

## 💻 각자 Claude로 작업하는 법

```bash
# 1) 처음 한 번: repo 받기
git clone https://github.com/rinapark-opsv/website.git
cd website

# 2) 작업 시작 전 — 최신 받기
git pull

# 3) Claude 실행해서 자기 영역 작업
claude        # 기획자는 scenarios.js / 디자이너는 index.html 위주

# 4) 작업 후 — 올리기
git add -A && git commit -m "무엇을 했는지 메모" && git push
```

## 👀 로컬에서 미리보기

```bash
python3 -m http.server 8090
# 브라우저에서 http://localhost:8090
```

## 🚀 배포

- 라이브: https://main-hero-cyan.vercel.app  (비밀번호 게이트 — `middleware.js`)
- 배포 명령: `./deploy.sh`  (= `npx vercel --prod --yes`)
