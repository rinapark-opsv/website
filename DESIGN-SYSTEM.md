# OpenSurvey Dataspace AI — Hero 데모 디자인 시스템

> **Canonical 기준 = 시나리오 ①(C, 설계) · ④(design, 설계·수집).** 가장 완성도 높은 이 둘의 컴포넌트가 표준이다.
> 나머지 시나리오(②A 분석 · ③B 공유 · ⑤analyze · ⑥explore)는 이 문서의 프리미티브로 **재표현**한다 (일회성 마크업 금지).
> 대상 파일: `index.html`(토큰·CSS·렌더러·아티팩트) · `scenarios.js`(데이터만).

---

## 0. 원칙

1. **시나리오 = 데이터.** 모든 인터랙션·플로우·콘텐츠는 `scenarios.js`에 있고, 엔진/렌더러는 프리미티브만 안다. 시나리오별 HTML/하드코딩 금지. (자동 클릭·턴 진행도 시나리오 데이터 기반 — `autoTapFollowup`은 다음 씬 유저 메시지와 매칭.)
2. **시각 언어 = ChatGPT 뉴트럴 + 자사 DS.** 중립 그레이/플랫 섀도우/큰 라운드(ChatGPT 참고) + 폰트(Pretendard)·아이콘(Phosphor)·메인컬러(Blue #4781FF)는 자사 DS.
3. **새 시나리오가 들어와도 이 프리미티브 조합으로만** 구성한다. 새 컴포넌트가 필요하면 먼저 이 문서에 프리미티브로 추가하고 토큰을 쓴다.
4. **솔리드 버튼 클릭 피드백 = 오퍼시티.** 솔리드 블루 버튼(`.send-btn`·`.btn-blue`)은 호버/클릭 시 색을 회색·다른 색으로 바꾸지 않고 블루를 유지한 채 오퍼시티만 뺀다 (hover 0.82 / active·`.pressing` 0.7). `.pressing` 전역 회색 배경은 이 버튼들에서 오버라이드.

---

## 1. 토큰 (Design Tokens) — `:root`

### 컬러
| 토큰 | 값 | 용도 |
|---|---|---|
| `--text-primary` | `#0D0D0D` | 제목·핵심 본문 |
| `--text-secondary` | `#5D5D5D` | 보조 본문(챗 카드 본문) |
| `--text-tertiary` | `#8F8F8F` | 캡션·메타·비활성 |
| `--blue` | `#4781FF` | 메인(Blue-07) |
| `--blue-soft` | `#F0F5FF` | 연한 면(Blue-01) |
| `--blue-light` | `#E0EAFF` | 아이콘 배경(Blue-02) |
| `--blue-hover` | `#2469FF` | 호버(Blue-08) |
| `--blue-deep` | `#0050FF` | 전송 버튼 활성(Blue-09) |
| `--border` / `--border-strong` | `#ECECEC` / `#D9D9D9` | 보더 |
| `--bg-canvas` / `--bg-hover` | `#fff` / `#F3F3F3` | 면/호버 |
| 유저 버블 | `bg #F1F6FF` · `text #003BDD` | 우측 사용자 발화 |
| cc-data fill | `#F1F6FF` (=유저 버블색) · hover/press `#E7EFFF` | 데이터 카드 |
| state | `--red #DD4040`(유의) · `--green #40B08E` · `--sky #0E9CAA` | 데이터 강조 |

### 라운드 (황금비 스케일 8/13/21 — Apple식 중첩)
`--r-sm 8`(칩·소형 버튼·탭 하이라이트) · `--r-md 13`(카드·버블·모달 요소) · `--r-lg 21`(입력창·프레임) · `--r-pill 9999`(pill).
정적값으로 박힌 곳도 이 스케일을 따른다: 프레임 21 / 입력창 21 / 카드·버블·출처카드·collect 13 / 칩·더보기 8.

### 섀도우 / 모션
- 섀도우 최소화: `--shadow-sm 0 1px 2px rgba(0,0,0,.05)`. 카드는 보더 또는 옅은 섀도우 중 하나만.
- 모션: `--t-fast 150ms` · `--t-normal 200ms`. 패널 진입·그리드 리사이즈 = `cubic-bezier(0.32,0.72,0,1) 460ms`(Claude식 감속).

### 타이포 스케일 (Pretendard)
| 역할 | 값 | 클래스 |
|---|---|---|
| 완료 카드 헤더 | 14 / 600 / primary | `.cc-title` |
| 문서 제목(패널) | 22 / 600 / 1.54 / primary | `.cc-doc-title`, `.sd-title` |
| 카드 내 문서 제목 | 13 / 500 | `.cc-doc-title-sm` |
| 섹션 헤딩(패널) | 13.5 / 600 / primary | `.cc-doc-sec`(패널은 primary) |
| 섹션 헤딩(챗 카드) | 12.5 / 500 / secondary | `.cc-card .cc-doc-sec` |
| 본문 불릿(패널) | 13 / `#3D3D3D` / 1.7 | `.cc-doc-ul li`, `.bd-p` |
| 본문 불릿(챗 카드) | 12 / secondary | `.cc-card .cc-doc-ul li` |
| 챗 프로즈 | 14 / 400 / 24 / primary | `.ai-prose` |
| 설문 문항 | 13.5 / 600 / primary | `.sd-qq` (Q번호 `.sd-qn` 13.5/700) |
| 출처 라벨 / 제목 | 11 / 500 · 11.5 / 400 | `.fig-src-label` / `.fig-src-title` |
| 출처 번호·타입·화살표 | 모노폰트, tertiary @ 0.7 (3요소 동일 톤) | `.fig-src-num`(11.5) / `.fig-src-type`(10.5) / `.fig-src-go`(12) |

> **핵심 위계 규칙:** 챗 카드 = 가볍게(secondary·작게), 아티팩트 패널 문서 = 가독성 우선(색만 진하게, primary/#3D3D3D). 같은 클래스도 `.cc-card` vs `.artifact-body` 스코프로 분기.

---

## 2. AI 심볼 (Dataspace AI surface) — Figma 711-17860

| 심볼 | 자산 | 사용처 |
|---|---|---|
| 솔리드 헥사곤 + 화이트 스파클 | `dataspace-hex.svg` (JS `STATIC_HEX`) | **생성 완료** AI 아바타(정적) |
| 소프트/프로스트 헥사곤 (Lottie) | `ai-indicator-*` (JS `STAR`, `.ai-ind`) | **생성 중**(process) AI 아바타(애니) |
| 설문 아이콘(블루 리스트) | `SURVEY_ICON` 상수 | 설문 데이터 카드·설문 출처 |
| OpenSurvey 마크(블루 라운드+심볼) | `OS_ICON` 상수 | 트렌드/OS 출처 아이콘 |
| Dataspace AI 버튼(아웃라인) | `textbtn-ai-outlined.svg` | projectdata pill |

**규칙:** 생성 중 = 소프트 헥사곤(애니), 생성 완료 = 솔리드 헥사곤(정적). `msgHTML`에서 `m.process ? STAR : STATIC_HEX`.

### 파일/데이터 타입 아이콘 — `fileIcon(ftype)` (file 메시지·projectdata 공용)
`csv`/`xlsx`/`excel`→`file-csv.svg`(녹색 그리드) · `gform`→`file-gform.svg`(보라) · `ai`/`insight`→`file-ai.svg`(AI 보고서) · `survey`/`trend`/`report`→`file-survey.svg`(블루 리스트) · 기타→인라인 그린 폴백. scenarios.js file 메시지의 `ftype` 필드로 지정. (참고: cc-data 생성 설문=`SURVEY_ICON`, 출처=`OS_ICON`.)

---

## 3. 챗 프리미티브 (렌더러 + 데이터 API)

모든 챗은 `msgHTML(m)` 한 곳에서 분기. `m`의 필드가 곧 API.

| 프리미티브 | 렌더러 | 데이터 API (m.*) | 비고 |
|---|---|---|---|
| **완료/문서 카드** | `ccBrief(o)` *(← `ccDone` 병합 예정)* | `briefcard:{t, title, sec, body[], open}` | 헤더(✓+t)→hr→제목→섹션→본문→fade→"더 보기"(open 클릭=패널). max-height 클램프. |
| **데이터 카드** | `ccData(d)` | `datarow:{name, meta, open}` (+ icon 종류) | fill `#F1F6FF`, 끝 ↗, 클릭=패널. 파일·설문·데이터셋 공용. |
| **생성 과정** | `ccProcess(items)` | `process:[{t, b[]}]` | 스피너 + 진행 텍스트. 아바타=애니 헥사곤. |
| **수집 선택** | `ccCollect()` | `collect:true` (+ text) | 합성패널/소비자패널/내 고객 옵션 카드. |
| **꼬리질문** | `ccFollowups(arr)` | `followups:[string]` | 라인형(보더 없음), 선두 블루 ↗, 호버=블랙 6% 채움. 첫 칩이 다음 씬 유저 메시지와 매칭→자동 클릭. 위에 구분 bar(등장 시 노출). |
| **인라인 근거 칩** | `md()` `[[n]]`·`[[1,2]]` → `.cite` | 본문 텍스트에 마커 | 문장/불릿 끝의 작은 회색 번호 칩(18px·라운드5). 번호=출처 번호와 매칭. 호버 시 블루. |
| **출처** | `srcRows(list)` | `sources:[{n,title,type,kind,emoji,os,open}]` | "출처"(11/회색 라벨) + 행: **번호 칩** + 아이콘 + 제목 + 타입(우측) + 끝 ↗. 번호·타입·↗는 **모노폰트 + tertiary @ 0.7 동일 톤**. kind=survey→SURVEY_ICON, trend/os→OS_ICON. **순서: 본문 → 출처 → 꼬리질문.** |
| **프로즈** | `md(t)` → `.ai-prose` | `text:'**굵게**\n- 불릿'` | 문단/불릿. 본문은 **한 번에 페이드**, 칩 버블은 하나씩(위→아래 순). |
| **인라인 표** | `chatBlock(type)` | `block:'<key>'` | 미니 표. → ②③⑤⑥ 리워크 시 단일 `Table` 스타일로 통일. |
| 시스템/파일/유저 | `msgHTML` role 분기 | `role:'system'\|'file'\|'user'` | 유저 버블 `#F1F6FF`/`#003BDD`. |

**아바타:** 완료=`STATIC_HEX`, 생성중=`STAR`. **헤더 토글:** "생성 과정 보기"(text-secondary).

---

## 4. 아티팩트 패널 템플릿

| 템플릿 | 클래스/케이스 | 용도 | 표준 출처 |
|---|---|---|---|
| **문서(DocPanel)** | `.av.bd` — `briefdocC`·`plandocC` | 기획서/설계서 등 산출 문서 | C |
| **설문 문서(SurveyDoc)** | `.av.sd` — `surveydoc`/`designsurvey` (`renderSurveyDoc`) | 브리프 문서와 동일 위계(제목 22/600=`.cc-doc-title`, 섹션 13.5/600 회색=`.sd-sec`≈`.cc-doc-sec`). 문항 단위로 묶임: 문항 간 얇은 구분선(`.sd-q` border-top). **모든 요소가 Q번호 좌측 끝 하나의 라인에 좌측정렬** — Q번호는 질문(`.sd-qq` 15/600)의 인라인 접두(`.sd-qn` 700), 유형 태그·옵션·파이핑 노트 모두 컨테이너 좌측. 유형=모노톤 회색 fill 태그(`.sd-qtype` 9.5/tertiary/bg-hover), 옵션=라디오(단일)/체크박스(다중) 행(`.sd-opt`+`.sd-opt-mark` 13px). 파이핑/로직/통과조건 노트(`.sd-ref`·`.sd-logic`·`.sd-secnote`)는 모노톤 회색(teal·블루 보더 제거). 척도=`.sd-scale` | C/design |
| **프로젝트 데이터(ProjectData)** | `.pd-*` — `projectdata` | 데이터 목록(아이콘·이름·메타·Dataspace AI 아웃라인 버튼·진행 배지) | design |
| **수집 조건(Collect)** | `collectdoc` | 쿼터/대상 | design |
| **데이터 인사이트(DataInsight)** *(신설)* | → `insights·insights2·filter·overview·crosstab·concepts·agecross·wave·trendins` 통합 | 헤더 + 표/요약 + 출처. 분석 시나리오 패널을 한 템플릿으로 | ②③⑤⑥ 리워크 대상 |

- 패널 컨테이너: `.artifact-inner`(radius 13, 보더) · `.artifact-body`(padding 36, 좁은 화면 32) · `.artifact-title`(11/600/secondary, 제목 아래 bar 제거).
- 진입: 그리드 0→42% 보간(`cubic-bezier`), 콘텐츠 `avUp` 페이드업.
- **더보기 클릭 → 패널 등장(채팅 축소) → 패널 위→아래 스킴 스크롤 → 그 다음 꼬리질문** (완료 카드까진 패널 닫힘).

---

## 5. 시나리오 데이터 계약 (scenarios.js)

```js
{ id, label, tagline,
  hook,            // CTA 앞 문구(시나리오별). 없으면 DEFAULT_HOOK
  persona?,        // 페르소나(선택)
  panel?: false,   // 인라인(패널 없음) 시나리오
  scenes: [
    { chat: [ /* role:user/system/file/ai + 위 프리미티브 필드 */ ],
      preview,     // 시작 시 아티팩트(없거나 'prompt'면 닫힘)
      hl,          // 사이드바 현재 단계 라벨
      open,        // 완료 후 열 패널
      press,       // 자동 클릭 셀렉터('.cc-more'/'.cc-data'/'.co-start')
      chipAfter,   // 꼬리질문 자동 선택
      dwell }      // 머무는 시간(ms)
  ] }
```

신규/리워크 시나리오는 **위 필드만으로** 표현된다. 새 화면이 필요하면 §4 템플릿을 재사용하거나 새 템플릿을 이 문서에 먼저 정의.

---

## 6. 등장(reveal) 규칙
- **엄격한 DOM 순서(위→아래)**: `revealStaged`가 units를 DOM 순서대로 step 분할 — **연속된 본문(문단·불릿·표)은 한 step에 한 번에 페이드**, 카드/칩/출처는 각자 한 step씩(150ms). 카드(모달)가 위에 있으면 카드가 먼저, 그 아래 텍스트가 다음. (아래 텍스트가 위 카드보다 먼저 뜨는 역전 금지.)
- 출처는 꼬리질문 다음. 꼬리질문 자동 선택은 §3 매칭 규칙.
- 패널 오픈 시 챗 자동 스크롤(최신 챗 유지).

---

## 7. 표 스타일 (canonical)
- **인라인/패널 표 = `.cb-table` 스타일이 표준**: 13px, 숫자 우측정렬·첫 칼럼 좌측, padding 10~12, `tbody tr:hover=bg-page`, 강조 `.cb-hi=--red`·`.cb-lo=--blue-deep`. 구형 `.ai-prose table.mini`·`.av-ct`도 이 스타일로 정렬됨.

## 8. 정비 현황 / To-Do
- ✅ **②③⑤⑥ 분석 패널 시각 정렬(2026-06-09)**: `.av-ins/.av-ov-card/.av-ds` 라운드 8→13, surface `#F6F8FC`, 강조 숫자 `--blue-deep`, 배지 라운드 6, `.mini` 표→canonical(cb-table) 스타일. → 13개 분석 패널이 C 토큰·표·라운드와 일관.
- ⬜ **마크업 템플릿 통합(선택)**: 일회성 `.av-*` 패널들을 `DataInsight` 단일 템플릿으로 구조 통합(시각은 이미 정렬, 코드 구조만 남음).
- ⬜ **프리미티브 통합**: `ccBrief`+`ccDone` → 단일 `Card`.
- ⬜ **죽은 케이스 삭제**: `brief·briefv2·designbrief·nextstep·project·survey`(시나리오 미사용).
- ⬜ **토큰화 마감**: 잔여 정적 라운드/색 토큰 치환.

> 관련 메모리: 디자인 기준 · Dataspace AI 인디케이터 · 시나리오 기반 플로우.
