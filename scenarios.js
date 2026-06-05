/* ════════════════════════════════════════════════════
   시나리오 데이터 — "기획·시나리오" 담당이 여기를 수정하세요.
   (디자인/CSS/레이아웃은 index.html 에서 작업)

   구조: 각 시나리오 = { id, label, persona, tagline, panel, scenes[] }
   scenes[] 의 각 씬 = { chat:[...], preview:'타입', hl:'상태라벨' }
   chat 역할(role): system / file / user / ai / choices
   ai 메시지: text(마크다운 **굵게**), source/sources(출처), block(인라인 표)
   ════════════════════════════════════════════════════ */
const SCENARIOS=[ /* ① 설계 (was C) — 리서치 흐름: 설계 */
 {id:'C',label:'미국 MZ 여성 K뷰티 구매 의향 조사 브리프·설문 설계',tagline:'브리프 한 줄이 검증된 설문 문항으로, 10분 만에',scenes:[
   {chat:[{role:'user',text:'미국 MZ 여성 대상 K뷰티 구매 의향 조사 브리프 써줘'}],preview:'prompt',hl:'리서치 목적 입력'},
   {chat:[{role:'ai',text:'**Research Brief**\n\n**목적**: 미국 MZ 여성(18–35세)의 K뷰티 제품 구매 의향 및 채널 선호 파악\n**타겟**: 미국 거주 여성, 18–35세, 뷰티 제품 월 1회 이상 구매\n**핵심 질문**: 브랜드 인지 경로 / 구매 장벽 / 선호 채널 / 재구매 의향',source:'Source 1'}],preview:'brief',hl:'브리프 자동 생성'},
   {chat:[{role:'system',text:'다음 단계를 선택하세요'},{role:'choices',choices:['설문 문항 설계','타겟 패널 추천','경쟁 브랜드 분석']}],preview:'nextstep',hl:'Next Step 선택'},
   {chat:[{role:'ai',text:'**설문 문항 (초안)**\n\nQ1. 다음 중 알고 있는 K뷰티 브랜드를 모두 선택해주세요.\nQ2. K뷰티 제품을 구매한 경험이 있으신가요?\nQ3. 주로 어떤 채널에서 K뷰티 제품을 구매하시나요?\nQ4. K뷰티 제품 구매 시 가장 중요하게 생각하는 요소는?\nQ5. 향후 6개월 내 K뷰티 제품을 구매할 의향이 있으신가요?',source:'검증된 문항 뱅크'}],preview:'survey',hl:'설문 문항 자동 설계'},
 ]},
 /* ② 분석 (was A) — 리서치 흐름: 수집 → 분석 · 디폴트 자동재생 */
 {id:'A',label:'설문 로데이터 주요 인사이트 요약·연령대별 분석',tagline:'로데이터를 올리면, 가공 없이 바로 분석이 시작됩니다',scenes:[
   {chat:[{role:'system',text:'설문 파일이 업로드되었습니다.'},{role:'file',name:'survey_rawdata_2025.xlsx',sub:'설문 원데이터 · 스프레드시트',badge:'+2,400 rows'}],preview:'upload',hl:'데이터 업로드'},
   {chat:[{role:'user',text:'이 설문 데이터의 주요 인사이트를 요약해줘'}],preview:'prompt',hl:'자연어 질문'},
   {chat:[{role:'ai',text:'**Summary**\n1. 브랜드 인지도는 20대(78%)에서 가장 높고, 50대(41%)에서 가장 낮습니다.\n2. 구매 경험자의 재구매 의향은 82%로 높은 충성도를 보입니다.\n3. 주요 구매 채널은 온라인(64%)이며, 오프라인 대비 빠르게 성장 중입니다.',source:'Source 1'}],preview:'insights',hl:'데이터 기반 인사이트'},
   {chat:[{role:'user',text:'20대 응답자만 별도로 분석해줘'},{role:'ai',text:'**Korea | 20s (20–29): key insights**\n\n브랜드 인지도 TOP2: **78%** (전체 평균 대비 +18%p)\n재구매 의향: **89%**\n주요 채널: 인스타그램 광고(41%), 유튜브(33%)',source:'Source 1'}],preview:'filter',hl:'세그먼트 필터'},
   {chat:[{role:'user',text:'연령대별 결과를 bar chart로 보여줘'},{role:'file',name:'연령대별_브랜드인지도.chart',sub:'시각화 · 막대 차트',badge:'Chart 생성',open:'chart'}],preview:'chart',hl:'차트 자동 생성'},
   {chat:[{role:'system',text:'분석 결과가 프로젝트에 저장되었습니다.'}],preview:'overview',hl:'프로젝트 저장'},
 ]},
 /* ③ 공유 (was B) — 리서치 흐름: 분석 → 공유 */
 {id:'B',label:'한국 vs 미국 소비자 AI 검색 행동 차이 비교',tagline:'분석이 팀의 자산이 되고, 누구나 이어서 질문합니다',panel:false,scenes:[
   {chat:[{role:'system',text:'트렌드 데이터셋이 선택되었습니다.'},{role:'file',name:'2025 AI Search Trend Report (KR+US+JP)',sub:'트렌드 리포트 · 3개국',badge:'n=3,000'}],preview:'dataset',hl:'데이터셋 선택'},
   {chat:[{role:'user',text:'한국과 미국의 소비자 AI 검색 행동 차이를 비교해줘'}],preview:'prompt',hl:'크로스컨트리 질문'},
   {chat:[{role:'ai',text:'**Summary**\n- 한국은 AI 검색 도구 체험률이 가장 높습니다 (ChatGPT 시도: KR **50.9%** vs JP 14.8%).\n- 미국은 ChatGPT 검색 만족도·신뢰도가 가장 높습니다 (만족 TOP2: US **85.9%**).\n- 일본은 상대적으로 신중·중립적 태도입니다.',source:'Source 1'}],preview:'insights2',hl:'다국가 비교 인사이트'},
   {chat:[{role:'user',text:'한국+일본을 East Asia로 묶어서 미국과 크로스탭 해줘'},{role:'ai',text:'**East Asia vs US — 통계적 유의 차이**',table:true,source:'Source 1'}],preview:'crosstab',hl:'변수 재코딩 · 유의차 검정'},
   {chat:[{role:'system',text:'팀원에게 공유되었습니다.'},{role:'user',text:'일본만 따로 보면 어떻게 돼?',avatar:'J',name:'지연 (팀원)'},{role:'ai',text:'**Japan only | key findings**\n\n일본 응답자의 ChatGPT 시도율은 **14.8%**로 3개국 중 가장 낮습니다. 만족도(TOP2: 55.4%)는 중간 수준이나, 중립 응답이 상대적으로 높습니다.'}],preview:'collaborate',hl:'팀 협업 채팅'},
 ]},
 /* ① 설계 — 김민정 팀장(리서치 수행자) · media1 */
 {id:'design',label:'건강 스낵 브랜드 론치 타당성 검증 리서치 기획',persona:'김민정 팀장 · 리서치 수행',tagline:'브리프 한 줄이 검증된 설문 문항으로, 10분 만에',scenes:[
   {chat:[{role:'system',text:'프로젝트가 선택되었습니다.'},{role:'file',name:'건강 스낵 브랜드 론치 타당성 검토',sub:'프로젝트 · 식음료 제조사 A',badge:'Project',open:'project'}],preview:'project',hl:'프로젝트 선택'},
   {chat:[{role:'user',text:'이 프로젝트로 리서치 기획서 작성해줘'}],preview:'prompt',hl:'리서치 기획 요청'},
   {chat:[{role:'ai',text:'**리서치 기획서 완료**\n신규 건강 스낵 브랜드 시장 진입 타당성 검증 조사 브리프를 작성했습니다.\n- **회사**: 식음료 제조사 A\n- **목적**: 건강 스낵 카테고리 수요·구매 맥락 + 신규 컨셉 수용성 검증\n- **타깃**: 전국 20~59세 일반인\n\n이어서 누구에게 물어볼지·어떻게 조사할지도 정리해드릴까요?',source:'프로젝트 브리프',sources:[{n:1,title:'신규 건강 스낵 브랜드 타당성 검증 브리프',type:'프로젝트 문서',kind:'doc',emoji:'📋',open:'brief'}]}],preview:'designbrief',hl:'브리프 자동 생성'},
   {chat:[{role:'user',text:'이번엔 정량조사만 할게요. 핵심 질문 4개로 한정 — ①Size of opportunity ②Source of business ③Brand concept acceptance ④Product evaluation'}],preview:'prompt',hl:'조사 범위 한정'},
   {chat:[{role:'ai',text:'**리서치 설계서 완료**\n정량조사 단독, 4개 핵심 질문으로 범위를 좁혀 다시 설계했습니다.\n- **표본**: 총 1,200명 (기본 800 + 부스터 400)\n- **방법**: 온라인 정량조사 (U&A · 성장성/장벽 · 컨셉 수용도 · 후보 제품 평가)\n\n이어서 이 설계서대로 **설문**까지 생성해드릴까요?',source:'프로젝트 브리프'}],preview:'briefv2',hl:'설계서 갱신'},
   {chat:[{role:'user',text:'응, 설문 문항까지 만들어줘'},{role:'ai',text:'**설문 문항 (초안)**\n검증된 문항뱅크를 기반으로 스크리닝~본문항을 설계했습니다.',source:'검증된 문항뱅크',sources:[{n:1,title:'검증된 문항뱅크 (Question Bank)',type:'라이브러리',kind:'doc',emoji:'📚',open:'survey'}]}],preview:'designsurvey',hl:'설문 문항 자동 설계'},
 ]},
 /* ② 분석 — 박준호 PM(결과 활용자) · media2 · 디폴트 */
 {id:'analyze',label:'신제품 15개 컨셉 구매 의향 TOP2 비교 분석',persona:'박준호 PM · 결과 활용',panel:false,tagline:'교차분석·세그먼트 유의차까지, 리서처처럼 답합니다',scenes:[
   {chat:[{role:'system',text:'컨셉 테스트 결과가 연동되었습니다.'},{role:'file',name:'2026 K뷰티 신제품 컨셉 테스트',sub:'컨셉 평가 · 15개 컨셉',badge:'n=1,164',open:'concepts'}],preview:'conceptds',hl:'데이터셋 연동'},
   {chat:[{role:'user',text:'15개 컨셉의 구매 의향을 TOP2 기준으로 비교해줘'}],preview:'prompt',hl:'컨셉 비교 질문'},
   {chat:[{role:'ai',text:'**컨셉 구매 의향 TOP2 비교** (5점 척도, 전체 BASE n=1,164)\n- 상위: **VT Reedle Shot 앰플 57.6%**, AESTURA 크림 55.9%, Primera 클렌징 54.7%\n- 하위: Medicube Age-R 33.8%, Whoo 쿠션 28.9%\n\n핵심 인사이트 3개를 함께 정리했습니다.',block:'concepts',source:'Source 1',sources:[{n:1,title:'2026 K뷰티 신제품 컨셉 테스트',type:'설문',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'concepts',hl:'컨셉 TOP2 비교'},
   {chat:[{role:'user',text:'TOP2가 60% 이상인 제품 3개를 연령대별 구매의향으로 비교해줘'}],preview:'prompt',hl:'세그먼트 질문'},
   {chat:[{role:'ai',text:'**TOP2 60%+ 컨셉 3개 · 연령대별 구매의향(TOP2)**\n3개 컨셉 모두 **30–39세가 가장 높고(약 70%)**, 40–49세가 가장 낮은 패턴이 공통으로 나타납니다.\n색상은 신뢰수준 80%에서 통계적으로 유의한 차이입니다.',block:'agecross',source:'Source 1',sources:[{n:1,title:'2026 K뷰티 신제품 컨셉 테스트',type:'설문',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'agecross',hl:'세그먼트 유의차 검정'},
 ]},
 /* ③ 탐색·트래킹 — 이수민 마케터(예산·시간 없이 근거) · media3 */
 {id:'explore',label:'2026 건강기능식품 뜨는 카테고리 트렌드 탐색',persona:'이수민 마케터 · 근거 필요',panel:false,tagline:'보유 데이터가 없어도, 라이브러리로 근거를 만듭니다',scenes:[
   {chat:[{role:'system',text:'분석할 자체 데이터가 없어 라이브러리에서 탐색합니다.'},{role:'file',name:'건강기능식품 트렌드 데이터 (2025·2026)',sub:'트렌드 리포트 · 라이브러리',badge:'출처 2건',open:'library'}],preview:'library',hl:'라이브러리 데이터'},
   {chat:[{role:'user',text:'건강기능식품에서 2025 대비 2026에 뜨는 카테고리 알려줘'}],preview:'prompt',hl:'트렌드 질문'},
   {chat:[{role:'ai',text:'**2025 → 2026 섭취율 증가 카테고리** (단위 %p, 복수응답)\n- **오메가3 (+2.7%p)**, 수면 케어 (+1.0%p), 항산화/노화방지 (+0.7%p) 순으로 증가\n- 참고: 2026엔 ‘모발/탈모 영양제’(11.8%)가 신규 포함되어 직접 비교는 주의가 필요합니다.',block:'wave',source:'출처 1·2',sources:[{n:1,title:'2025 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'},{n:2,title:'2026 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'}]}],preview:'wave',hl:'웨이브 트래킹 비교'},
   {chat:[{role:'user',text:'30대 타깃으로 더 깊이 분석해줘'}],preview:'prompt',hl:'세그먼트 딥다이브'},
   {chat:[{role:'ai',text:'**30대 핵심 인사이트**\n- **속성**: 효능·성분·후기를 최우선 (효능 48.8%)\n- **제형**: 알약/캡슐 79.8%, ‘먹기 편함’으로 소형 캡슐·스틱 보조\n- **채널**: 네이버 46.2% · 쿠팡 44.9% + 약국/대형마트(신뢰)\n- **가격**: 5~10만원 25%가 최다',source:'출처 1',sources:[{n:1,title:'2026 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'}]}],preview:'trendins',hl:'세그먼트 인사이트'},
 ]},
];
const ANALYSIS_IDX=4;          // 디폴트 자동재생 = 컨셉 테스트 결과 분석(신규·인라인)
