/* ════════════════════════════════════════════════════
   시나리오 데이터 — "기획·시나리오" 담당이 여기를 수정하세요.
   (디자인/CSS/레이아웃은 index.html 에서 작업)

   구조: 각 시나리오 = { id, label, persona, tagline, panel, scenes[] }
   scenes[] 의 각 씬 = { chat:[...], preview:'타입', hl:'상태라벨' }
   chat 역할(role): system / file / user / ai / choices
   ai 메시지: text(마크다운 **굵게**), source/sources(출처), block(인라인 표)
   ════════════════════════════════════════════════════ */
const SCENARIOS=[ /* ① 설계 (was C) — 리서치 흐름: 설계 */
 {id:'C',label:'K뷰티 미국 진출 설문 설계',tagline:'한 줄 요청이 로직까지 살아있는 검증 설문으로',hook:'이런 설문, 우리 제품으로 설계하려면',scenes:[
   {chat:[{role:'user',text:'지금 미국 진출 하려는데, K뷰티 컨셉 조사 설계해줘.'}],preview:'cskel',hl:'설문 요청',dwell:80},
   {chat:[{role:'ai',process:[{t:'리서치 목표 정리 중...',b:['AI가 입력하신 내용을 바탕으로 리서치의 목표, 알아내야 할 것들, 의사결정 포인트를 정리하고 있어요.',"전문 리서처가 프로젝트 시작 전에 하는 '프로젝트 브리프' 작성 과정이에요."]},{t:'설문 개요 정리 중...',b:['어떤 질문들로 구성해야 분석까지 잘 진행될지','질문 순서는 어떻게 구성해야 응답에 편향이 없을지','어떤 응답자에게 수집하는 것이 좋을지']},{t:'설문지에 문항 작성 중...',b:['바로 편집하실 수 있도록 문항을 채워넣고 로직을 검수하고 있어요.','10분 이상 걸릴 수 있으니 이 탭만 열어두시면 다른 곳에 다녀오셔도 괜찮아요.']}]}],preview:'cskel',hl:'설문 설계 중',dwell:700},
   {chat:[{role:'ai',done:[{t:'프로젝트 브리프 완료',open:'briefdocC',title:'미국 진출 K뷰티 컨셉 검증 프로젝트 브리프',sec:'1. 배경',b:['미국 뷰티 시장에서 K-컬처 확산과 TikTok·Instagram·YouTube 바이럴, 인플루언서·리뷰 기반 구매가 강화되며 K뷰티 관심이 확대되고 있습니다.',"'관심·호감'이 실제 단기 구매로 이어지는지를 가격·성분/효능·브랜드 신뢰·채널 접근성 등으로 정량 검증해야 합니다."]},{t:'설문 설계서 완료',open:'plandocC',title:'미국 진출 K뷰티 컨셉 검증 정량조사 설계서',sec:'1. 조사 목적',b:['미국 MZ 여성의 향후 3개월 구매 의향 수준 측정','구매를 좌우하는 핵심 결정 요인(가격·성분/효능·브랜드 신뢰·채널) 규명']}],datarow:{name:'K-beauty 미국 MZ 여성 U&A 설문',meta:'설문 · 33문항 · 방금 생성됨',open:'surveydoc'},text:'검증된 문항뱅크 기반으로 **33문항 설문**을 생성했어요. 스크리닝 통과 조건·보기 파이핑·척도까지 자동 설계했습니다. 우측에서 전체 설문을 확인하세요.'}],preview:'prompt',hl:'설문 생성 완료',walk:['briefdocC','plandocC','surveydoc']},
   {chat:[],editor:true,hl:'설문 편집'},
 ]},
 /* ② 분석 (was A) — 리서치 흐름: 수집 → 분석 · 디폴트 자동재생 */
 {id:'A',label:'구글폼 설문 응답 주요 인사이트 요약·연령대별 분석',tagline:'구글폼만 연동하면, 가공 없이 바로 분석이 시작됩니다',hook:'내 구글폼 설문으로 직접 분석해 보려면',scenes:[
   {chat:[{role:'system',text:'구글폼 설문 응답이 연동되었습니다.'},{role:'file',name:'브랜드 인지도 설문 (Google Forms)',sub:'구글폼 응답 · 임포트',badge:'응답 2,400건',ftype:'gform'}],preview:'upload',hl:'구글폼 연동'},
   {chat:[{role:'user',text:'이 구글폼 응답의 주요 인사이트를 요약해줘'}],preview:'prompt',hl:'자연어 질문'},
   {chat:[{role:'ai',text:'**Summary**\n1. 브랜드 인지도는 20대(78%)에서 가장 높고, 50대(41%)에서 가장 낮습니다.\n2. 구매 경험자의 재구매 의향은 82%로 높은 충성도를 보입니다.\n3. 주요 구매 채널은 온라인(64%)이며, 오프라인 대비 빠르게 성장 중입니다.',source:'Source 1'}],preview:'insights',hl:'데이터 기반 인사이트'},
   {chat:[{role:'user',text:'20대 응답자만 별도로 분석해줘'},{role:'ai',text:'**Korea | 20s (20–29): key insights**\n\n브랜드 인지도 TOP2: **78%** (전체 평균 대비 +18%p)\n재구매 의향: **89%**\n주요 채널: 인스타그램 광고(41%), 유튜브(33%)',source:'Source 1'}],preview:'filter',hl:'세그먼트 필터'},
   {chat:[{role:'user',text:'연령대별 결과를 bar chart로 보여줘'},{role:'file',name:'연령대별_브랜드인지도.chart',sub:'시각화 · 막대 차트',badge:'Chart 생성',open:'chart'}],preview:'chart',hl:'차트 자동 생성'},
   {chat:[{role:'system',text:'분석 결과가 프로젝트에 저장되었습니다.'}],preview:'overview',hl:'프로젝트 저장'},
 ]},
 /* ③ 공유 (was B) — 리서치 흐름: 분석 → 공유 */
 {id:'B',label:'한국 vs 미국 소비자 AI 검색 행동 차이 비교',tagline:'분석이 팀의 자산이 되고, 누구나 이어서 질문합니다',hook:'우리 팀과 함께 이렇게 분석하려면',panel:false,scenes:[
   {chat:[{role:'system',text:'트렌드 데이터셋이 선택되었습니다.'},{role:'file',name:'2025 한미일 AI 검색 트렌드',sub:'트렌드 리포트 · 3개국',badge:'n=3,000',ftype:'trend'}],preview:'dataset',hl:'데이터셋 선택'},
   {chat:[{role:'user',text:'한국과 미국의 소비자 AI 검색 행동 차이를 비교해줘'}],preview:'prompt',hl:'크로스컨트리 질문'},
   {chat:[{role:'ai',text:'**Summary**\n- 한국은 AI 검색 도구 체험률이 가장 높습니다 (ChatGPT 시도: KR **50.9%** vs JP 14.8%).\n- 미국은 ChatGPT 검색 만족도·신뢰도가 가장 높습니다 (만족 TOP2: US **85.9%**).\n- 일본은 상대적으로 신중·중립적 태도입니다.',source:'2025 한미일 AI 검색 트렌드'}],preview:'insights2',hl:'다국가 비교 인사이트'},
   {chat:[{role:'user',text:'한국+일본을 East Asia로 묶어서 미국과 크로스탭 해줘'},{role:'ai',text:'**East Asia vs US — 통계적 유의 차이**',table:true,source:'2025 한미일 AI 검색 트렌드'}],preview:'crosstab',hl:'변수 재코딩 · 유의차 검정'},
   {chat:[{role:'system',text:'팀원에게 공유되었습니다.'},{role:'user',text:'일본만 따로 보면 어떻게 돼?',avatar:'J',name:'지연 (팀원)'},{role:'ai',text:'**Japan only | key findings**\n\n일본 응답자의 ChatGPT 시도율은 **14.8%**로 3개국 중 가장 낮습니다. 만족도(TOP2: 55.4%)는 중간 수준이나, 중립 응답이 상대적으로 높습니다.'}],preview:'collaborate',hl:'팀 협업 채팅'},
 ]},
 /* ① 설계 — 김민정 팀장(리서치 수행자) · media1 */
 {id:'design',label:'MZ세대 설문 수집',persona:'김민정 팀장 · 리서치 수행',tagline:'설문이 곧장 응답 수집으로',hook:'우리 브랜드 조사를 직접 설계·수집하려면',scenes:[
   {chat:[{role:'user',text:'MZ세대 브랜드 인식 조사에 대한 설문을 바로 돌리고 싶어.',typed:true}],preview:'cskel',hl:'설문 미리보기',dwell:200},
   {chat:[{role:'system',text:'MZ세대 브랜드 인식 조사 설문이 연동되었습니다.'},{role:'file',name:'MZ세대 브랜드 인식 조사',sub:'설문 · 18문항',badge:'방금 생성됨',open:'designsurvey',ftype:'survey',skel:true}],preview:'cskel',skelTo:'designsurvey',skelMs:1100,hl:'설문 미리보기',dwell:2600},
   {chat:[{role:'ai',collect:true,text:'**누구에게 물어볼까요?** 브랜드 인식 조사는 탐색적 조사이기 때문에 빠르게 인사이트를 얻을 수 있는 **합성 패널**을 추천해요.'}],preview:'collectdoc',hl:'수집 대상 선택',open:'collectdoc',press:'.co-start'},
 ]},
 /* ② 분석 — 박준호 PM(결과 활용자) · media2 · 디폴트 */
 {id:'analyze',label:'신제품 15개 컨셉 구매 의향 TOP2 비교 분석',persona:'박준호 PM · 결과 활용',panel:false,tagline:'교차분석·세그먼트 유의차까지, 리서처처럼 답합니다',hook:'내 컨셉 테스트 결과로 직접 비교해 보려면',scenes:[
   {chat:[{role:'system',text:'컨셉 테스트 결과가 연동되었습니다.'},{role:'file',name:'2026 K뷰티 신제품 컨셉 테스트',sub:'컨셉 평가 · 15개 컨셉',badge:'n=1,164',open:'concepts',ftype:'survey'}],preview:'conceptds',hl:'데이터셋 연동'},
   {chat:[{role:'user',text:'15개 컨셉의 구매 의향을 TOP2 기준으로 비교해줘'}],preview:'prompt',hl:'컨셉 비교 질문'},
   {chat:[{role:'ai',text:'**컨셉 구매 의향 TOP2 비교** (5점 척도, 전체 BASE n=1,164)\n- 상위: **VT Reedle Shot 앰플 57.6%**, AESTURA 크림 55.9%, Primera 클렌징 54.7%[[1]]\n- 하위: Medicube Age-R 33.8%, Whoo 쿠션 28.9%\n\n핵심 인사이트 3개를 함께 정리했습니다.',block:'concepts',source:'Source 1',sources:[{n:1,title:'2026 K뷰티 신제품 컨셉 테스트',type:'설문',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'concepts',hl:'컨셉 TOP2 비교'},
   {chat:[{role:'user',text:'TOP2가 60% 이상인 제품 3개를 연령대별 구매의향으로 비교해줘'}],preview:'prompt',hl:'세그먼트 질문'},
   {chat:[{role:'ai',text:'**TOP2 60%+ 컨셉 3개 · 연령대별 구매의향(TOP2)**\n3개 컨셉 모두 **30–39세가 가장 높고(약 70%)**, 40–49세가 가장 낮은 패턴이 공통으로 나타납니다.[[1]]\n색상은 신뢰수준 80%에서 통계적으로 유의한 차이입니다.',block:'agecross',source:'Source 1',sources:[{n:1,title:'2026 K뷰티 신제품 컨셉 테스트',type:'설문',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'agecross',hl:'세그먼트 유의차 검정'},
 ]},
 /* ③ 탐색·트래킹 — 이수민 마케터(예산·시간 없이 근거) · media3 */
 {id:'explore',label:'2026 건강기능식품 뜨는 카테고리 트렌드 탐색',persona:'이수민 마케터 · 근거 필요',panel:false,tagline:'보유 데이터가 없어도, 마켓플레이스 데이터로 근거를 만듭니다',hook:'우리 카테고리 트렌드를 직접 찾아보려면',scenes:[
   {chat:[{role:'system',text:'트렌드 데이터를 마켓플레이스에서 가지고 오겠습니다.'},{role:'file',name:'건강기능식품 트렌드 데이터 (2025·2026)',sub:'트렌드 리포트 · 마켓플레이스',badge:'출처 2건',open:'library',ftype:'trend'}],preview:'library',hl:'마켓플레이스 데이터'},
   {chat:[{role:'user',text:'건강기능식품에서 2025 대비 2026에 뜨는 카테고리 알려줘'}],preview:'prompt',hl:'트렌드 질문'},
   {chat:[{role:'ai',text:'**2025 → 2026 섭취율 증가 카테고리** (단위 %p, 복수응답)\n- **오메가3 (+2.7%p)**, 수면 케어 (+1.0%p), 항산화/노화방지 (+0.7%p) 순으로 증가[[1,2]]\n- 참고: 2026엔 ‘모발/탈모 영양제’(11.8%)가 신규 포함되어 직접 비교는 주의가 필요합니다.',block:'wave',source:'출처 1·2',sources:[{n:1,title:'2025 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'},{n:2,title:'2026 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'}]}],preview:'wave',hl:'웨이브 트래킹 비교'},
   {chat:[{role:'user',text:'30대 타깃으로 더 깊이 분석해줘'}],preview:'prompt',hl:'세그먼트 딥다이브'},
   {chat:[{role:'ai',text:'**30대 핵심 인사이트**\n- **속성**: 효능·성분·후기를 최우선 (효능 48.8%)[[1]]\n- **제형**: 알약/캡슐 79.8%, ‘먹기 편함’으로 소형 캡슐·스틱 보조\n- **채널**: 네이버 46.2% · 쿠팡 44.9% + 약국/대형마트(신뢰)\n- **가격**: 5~10만원 25%가 최다',source:'출처 1',sources:[{n:1,title:'2026 건강기능식품 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈',open:'library'}]}],preview:'trendins',hl:'세그먼트 인사이트'},
 ]},
 /* ⑦ Proof Seeker — 소형 K뷰티 브랜드 마케터 · 미국 진출 (가설→근거→보고서) */
 {id:'proof',label:'미국 진출 가설 근거 탐색 → 투자자용 기회 보고서',persona:'이서연 · 소형 K뷰티 브랜드 마케터',tagline:'내가 세운 가설을, 출처 있는 근거로 백업합니다',hook:'내 가설을 데이터 근거로 백업하려면',panel:false,scenes:[
   {chat:[{role:'user',text:'미국 진출 덱 쓰는 중인데, K뷰티 루틴이 미국에서 뜰 거고 그 중에 토너패드나 스팟케어가 유망하단 근거 있어?'}],preview:'prompt',hl:'가설 + 근거 요청',dwell:200},
   {chat:[{role:'ai',text:'네, 출처에 바로 있어요. **2025 미국 K-뷰티 트렌드 데이터** 기준이에요.[[1,2]]\n- **토너패드는 ‘쓸 의향’이 35.2%인데 지금 쓰는 사람은 21.0%** — 14%p가 비어 있어요. 부스팅 에센스는 의향 35.5% vs 현재 18.4%로 격차가 더 큽니다.\n- ‘쓰고 싶은데 아직 안 쓰는’ 카테고리 1·2위가 딱 부스팅 에센스·토너패드라, 가설이 숫자로 그대로 맞아요.',block:'proofgap',sources:[{n:1,title:'[Eat Buy Play] 2025 미국 K-뷰티 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈'},{n:2,title:'2023 미국 뷰티 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈'}],followups:['‘쓰고 싶은데 아직 안 쓰는’ 카테고리, 연령대로 쪼개서 보여줘','경쟁 K뷰티 브랜드 인지도도 같이 볼게요','이 근거로 투자자 덱용 보고서 만들어줘']}],preview:'prompt',hl:'인접 근거 확인 (의향-보급 Gap)',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'‘쓰고 싶은데 아직 안 쓰는’ 카테고리, 연령대로 쪼개서 보여줘'},{role:'ai',text:'**핵심 타깃은 30대**예요. 토너패드 포함 확장 카테고리 4개 전부에서 향후·신규 사용 의향이 제일 높아요.[[1]]\n- **40대는 ‘필요하면 쓴다’는 잠재층** — 지금은 덜 쓰지만, 토너패드·기초에서 ‘쓸 의향’과의 격차가 특히 큽니다.\n- 30대 코어·40대 잠재 패턴이 또렷합니다.',block:'proofcross',sources:[{n:1,title:'[Eat Buy Play] 2025 미국 K-뷰티 트렌드 데이터',type:'트렌드 리포트',kind:'trend',emoji:'📈'}],followups:['이 근거로 투자자 덱용 보고서 만들어줘','첫 구매로 넘어오는 지점도 짚어줘']}],preview:'prompt',hl:'연령대별 교차 (30대 코어·40대 Gap)',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'이 근거로 투자자 덱용 보고서 만들어줘'},{role:'ai',process:[{t:'보고서 작성 중...',b:['근거와 차트를 헤드라인 중심으로 묶고, 숫자마다 출처를 붙이고 있어요.','투자자·바이어가 그대로 인용할 수 있는 형태로 맞추는 중이에요.']}]}],preview:'prompt',hl:'보고서 작성 중',dwell:1600},
   {chat:[{role:'ai',datarow:{name:'미국 스킨케어 기회 지도 — 성장 카테고리·연령 타깃·진입 우선순위',meta:'보고서 · 방금 생성됨',open:'report'},text:'**투자자용 기회 보고서 나왔어요.** 헤드라인 인사이트 5개에 차트랑 출처(데이터 2개·표본/표본오차)까지 다 붙였어요. 우측에서 전체 확인해보세요.',followups:['슬라이드용 한 줄로 요약해줘','바이어용 1페이저로 만들어줘']}],hl:'기회 보고서 완성',open:'report',press:'.cc-data'},
 ]},
 /* ⑧ 타겟 페르소나 탐색 — 검색→세그먼트→가상 소비자 인터뷰 (Figma 신규 UI) */
 {id:'persona',label:'제로 탄산음료 타깃 탐색 → 가상 소비자 인터뷰',persona:'정우진 마케터 · 신제품 검토',tagline:'가설이 없어도, 데이터가 타깃을 찾아 대화로 잇습니다',hook:'우리 신제품 타깃을 찾아 가상 인터뷰까지 해보려면',scenes:[
   {chat:[{role:'user',text:'제로 탄산 신제품 라인 준비 중인데, 메인 타깃을 누구로 잡을지 감이 안 와요. 갖고 있는 데이터에서 유망한 소비자층 좀 뽑아줄래요?'}],preview:'prompt',hl:'타깃 탐색 요청'},
   {chat:[{role:'ai',text:'스페이스의 **제로 탄산 트렌드 보고서**를 돌려봤더니, 결이 뚜렷하게 다른 두 집단이 잡혀요.[[1]] 둘은 마시는 이유도, 걸리는 지점도 달라서 **메시지를 따로 가져가는 게** 맞아 보여요.',search:{segs:[{tag:'맛 타협 불가',name:'제로 섭취층',size:'32.5%',n:'130명',desc:'맛이 1순위 — 제로 특유의 인공감미료 뒷맛에 예민한 층'},{tag:'죄책감 방어형',name:'라이트 섭취층',size:'23.7%',n:'95명',desc:'맛보다 칼로리 — 죄책감 덜려고 제로로 갈아탄 층'}],note:'두 층은 맛·칼로리 민감도가 정반대라, 한 메시지로 묶으면 둘 다 놓치기 쉬워요.'},sources:[{n:1,title:'제로 탄산 트렌드 보고서',type:'보고서',kind:'survey',emoji:'📊'}],followups:['이 세그먼트에 해당하는 가상 소비자랑 얘기해볼 수 있어요?','다른 기준으로도 세그먼트 나눠줄래요?']}],hl:'세그먼트 도출',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'이 세그먼트에 해당하는 가상 소비자랑 얘기해볼 수 있어요?'},{role:'ai',personas:'zero',text:'네, 두 층을 대표하는 가상 소비자를 만들어 봤어요. 맛 타협 불가 층은 **김도윤 과장**, 죄책감 방어형 층은 **박준영 대리**예요. 프로필이 궁금하면 [특징 보기], 바로 인터뷰하려면 [대화 시작하기]를 눌러보세요.',sources:[{n:1,title:'제로 탄산 트렌드 보고서',type:'보고서',kind:'survey',emoji:'📊'}],followups:['김도윤 과장이랑 먼저 얘기해볼게요','박준영 대리랑 얘기해볼게요']}],hl:'가상 소비자 2종 생성',open:'personaHn',press:'.pc-detail-hn',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'김도윤 과장이랑 먼저 얘기해볼게요'},{role:'persona',who:'hn',text:'안녕하세요, 김도윤입니다. 편하게 물어보세요.'}],preview:'personaHn',hl:'가상 인터뷰 시작'},
   {chat:[{role:'user',text:'제로 콜라, 솔직히 맛 때문에 안 사게 된 적 있어요?'},{role:'persona',who:'hn',text:'솔직히 자주요. 그 인공감미료 끝맛이 영 걸리거든요. 그래도 일하다 단 거 당길 때 칼로리 걱정 없이 마실 수 있다는 건 확실한 장점이라, 맛만 진짜 콜라에 더 붙으면 망설임 없이 살 것 같아요.'}],preview:'personaHn',hl:'인터뷰 — 맛 거부감'},
   {chat:[{role:'user',text:'대화 종료하기'},{role:'ai',text:'**가상 인터뷰를 마쳤어요.**\n요약하면, ‘맛 타협 불가’ 층은 아직 ‘진짜 콜라 맛’을 원하고, 인공감미료 뒷맛이 제일 큰 걸림돌이에요. 천연 감미료로 맛 간극만 좁히면 구매 빈도가 확 올라올 여지가 큽니다.\n\n다음은 뭘 해볼까요?',followups:['방금 대화 요약 보고서로 정리해줘','이 인사이트로 컨셉 테스트 설문 만들어줘','박준영 대리랑도 얘기해볼게요']}],preview:'personaHn',hl:'인터뷰 종료 · 다음 단계'},
 ]},
];

/* ── 시나리오 C 풀 설문 (33문항) — 메인 뷰 ── */
const SURVEY_C = {
 title:'K-beauty Purchase Intent & Channel U&A — US MZ Women',
 meta:'33문항 · 약 7–9분 · English (US) · 검증된 문항뱅크 기반',
 sections:[
  {name:'스크리닝 블록', note:"통과 조건: Q1에서 Skincare·Makeup 선택 그리고 Q2에서 '최근 12개월 내 구매' 선택 시에만 통과", qs:[
   {n:'Q1', type:'객관식 다중', cons:'최소1~최대9', q:'In the past 12 months, which have you personally purchased for yourself?',
     opts:['Hair care','Fragrance','Skincare (cleanser, moisturizer, SPF, serum)','Makeup/cosmetics','Body care','Grooming tools','Supplements/vitamins','Apparel/shoes','Electronics/accessories']},
   {n:'Q2', type:'객관식 단일', q:'When did you last purchase skincare and/or makeup?',
     opts:['Within past 1 month','1–3 months ago','4–6 months ago','7–12 months ago','More than 12 months ago','Never purchased'], logic:['Q1에서 Skincare·Makeup 선택 시에만 제시']},
  ]},
  {name:'B1. K-beauty 컨셉/카테고리 구매의향', qs:[
   {n:'Q3', type:'객관식 단일', q:'Before today, how familiar were you with the term "K-beauty"?',
     opts:['Very familiar','Somewhat familiar','Not very familiar','Not familiar at all','Not sure']},
   {n:'Q4', type:'객관식 단일', q:'Which best describes your experience with K-beauty products?',
     opts:['Have purchased before','Used but did not purchase myself','Not used, but interested','Not used, not interested','Not sure']},
   {n:'Q5', type:'객관식 다중', cons:'최소1~최대19', q:'Which types of K-beauty products have you purchased?',
     opts:['Cleanser','Toner/essence','Serum/ampoule','Moisturizer/cream','Sunscreen/SPF','Exfoliator','Masks','Eye care','Lip care','Acne treatment','Cushion foundation','Foundation/concealer','Setting powder/spray','Blush/bronzer','Eye makeup','Lip makeup','Makeup remover','Tools/accessories','Other'], logic:['Q4에서 \'구매 경험 있음\' 선택 시에만 제시']},
   {n:'Q6', type:'평가형 5점', q:'In the next 3 months, how likely to purchase a K-beauty skincare product?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)']},
   {n:'Q7', type:'평가형 5점', q:'In the next 3 months, how likely to purchase a K-beauty makeup product?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)']},
  ]},
  {name:'B2. 브랜드 퍼널 + K사 퍼널/구매의향', qs:[
   {n:'Q8', type:'주관식', q:'When you think of K-beauty brands, what is the FIRST brand that comes to mind?', text:true},
   {n:'Q9', type:'주관식', q:'What other K-beauty brands can you think of?', text:true},
   {n:'Q10', type:'객관식 다중', cons:'최소1~최대20', q:'Which of the following K-beauty brands have you heard of?',
     opts:['K Company Brand','Laneige','Innisfree','COSRX','Beauty of Joseon','Dr. Jart+','Sulwhasoo','Etude','MISSHA','Banila Co','TONYMOLY','The Face Shop','SKIN1004','Round Lab','Some By Mi','Dear Klairs','Mediheal','Neogen','Pyunkang Yul','Other']},
   {n:'Q11', type:'객관식 다중', q:'Which of those have you ever purchased or used?', ref:'Q10에서 선택한 보기만 제시 (보기 파이핑)'},
   {n:'Q12', type:'객관식 다중', q:'Which have you purchased/used in the past 12 months?', ref:'Q11에서 선택한 보기만 제시 (보기 파이핑)'},
   {n:'Q13', type:'객관식 단일', q:'Which ONE brand do you purchase/use most often nowadays?', ref:'Q12에서 선택한 보기만 제시'},
   {n:'Q14', type:'평가형 5점', q:'Overall, how favorable is your opinion of [K Company Brand]?', scale:['Very unfavorable (1)','2','Neutral (3)','4','Very favorable (5)'], logic:['Q10에서 K사 인지 시에만 제시']},
   {n:'Q15', type:'평가형 5점', q:'How likely to purchase [K Company Brand] for the FIRST time in next 3 months?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)'], logic:['Q10 인지 AND Q11 미구매 시에만 제시']},
   {n:'Q16', type:'평가형 5점', q:'How likely to repurchase [K Company Brand] in next 3 months?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)'], logic:['Q11에서 K사 구매 경험 시에만 제시']},
  ]},
  {name:'B3. 구매 채널 이용/선호 (첫 구매 vs 재구매)', qs:[
   {n:'Q17', type:'객관식 다중', cons:'최소1~최대16', q:'In the past 12 months, where have you purchased skincare and/or makeup?',
     opts:['Sephora','Ulta Beauty','Amazon','Brand website (DTC)','Brand store (physical)','TikTok Shop','Walmart','Target','Drugstore (CVS/Walgreens)','Department store','K-beauty specialty (Soko Glam)','Asian marketplace (YesStyle 등)','Olive Young Global','Subscription box','Local beauty supply','Other']},
   {n:'Q18', type:'객관식 순위', cons:'TOP 3', q:'Rank your TOP 3 channels you use most often.', ref:'Q17에서 선택한 보기만 제시'},
   {n:'Q19', type:'객관식 다중', cons:'최소1~최대16', q:'For a FIRST-TIME K-beauty purchase, which channels would you consider?', ref:'채널 보기 동일 (Q17)'},
   {n:'Q20', type:'객관식 단일', q:'Which ONE channel is most likely for that first-time purchase?', ref:'Q19에서 선택한 보기만 제시'},
   {n:'Q21', type:'객관식 다중', cons:'최소1~최대16', q:'For repurchasing K-beauty, which channels would you consider?', ref:'채널 보기 동일 (Q17)', logic:['Q4에서 구매 경험 시에만 제시']},
   {n:'Q22', type:'객관식 단일', q:'Which ONE channel is most likely for repurchase?', ref:'Q21에서 선택한 보기만 제시', logic:['Q4 구매경험 AND Q21 응답 시 제시']},
  ]},
  {name:'B4. 채널 선택 요인 / 전환 장벽·트리거', qs:[
   {n:'Q23', type:'객관식 순위', cons:'TOP 5 (1=most)', q:'When choosing WHERE to buy K-beauty, what matters most?',
     opts:['Authentic (not counterfeit)','Lower price/deals','Promotions','Fast delivery','Low/free shipping','Easy returns','Trusted reviews','Try in person','Wide selection','Convenience','Loyalty rewards','Customer service','Clear product info','Other']},
   {n:'Q24', type:'객관식 다중', cons:'최소1~최대14', q:'What could stop you from buying K-beauty in the next 3 months?',
     opts:['Nothing would stop me','Too expensive','Unsure what suits my skin','Worry about irritation','Counterfeit concerns','Hard to find in US','Slow shipping','High shipping cost','Difficult returns','Not enough reviews','Prefer non-K brands','Ingredient concerns','Shade range','Too complicated','Other']},
   {n:'Q25', type:'객관식 다중', cons:'최소1~최대15', q:'What would make you MORE likely to buy K-beauty?',
     opts:['Nothing in particular','Discounts/sale','Free shipping','Faster delivery','Free samples','Gift/bundle','Trustworthy reviews','Influencer rec','Friend/family rec','Dermatologist rec','Clear skin-type guidance','Easier returns','Sold at retailer I shop','Authentic/verified','Try in store','Other']},
  ]},
  {name:'B5. 정보원 / 콘텐츠 영향', qs:[
   {n:'Q26', type:'객관식 다중', cons:'최소1~최대17', q:'In the past 3 months, where have you gotten beauty info/inspiration?',
     opts:['None','TikTok','Instagram','YouTube','Pinterest','Facebook','Reddit','Google/search','Sephora/Ulta reviews','Amazon reviews','Brand websites','Beauty blogs','Friends/family','Dermatologist','In-store advisors','Online communities','Email/text alerts','Other']},
   {n:'Q27', type:'객관식 순위', cons:'TOP 3 (1=most)', q:'Rank your TOP 3 most influential sources.', ref:'Q26에서 선택한 보기만 제시'},
   {n:'Q28', type:'평가형 5점', q:'How much do social media/online content influence your K-beauty interest & purchases?', scale:['Not at all (1)','2','Somewhat (3)','4','A great deal (5)']},
  ]},
  {name:'B6. 세그먼트 분석용 프로필', qs:[
   {n:'Q29', type:'객관식 단일', q:'Approximate annual household income (USD)?',
     opts:['Prefer not to answer','Under $25k','$25–35k','$35–50k','$50–75k','$75–100k','$100–125k','$125–150k','$150–200k','$200–250k','$250k+']},
   {n:'Q30', type:'평가형 5점', q:'How involved are you in beauty (enjoy, follow trends, spend time/money)?', scale:['Not at all (1)','2','Moderately (3)','4','Very involved (5)']},
   {n:'Q31', type:'객관식 다중', cons:'최소1~최대15', q:'Which skin concerns are relevant to you?',
     opts:['No specific concerns','Acne/breakouts','Dark spots','Uneven tone','Dryness','Oiliness','Redness/rosacea','Visible pores','Blackheads','Fine lines/wrinkles','Loss of firmness','Dullness','Dehydration','Under-eye concerns','Sun damage','Other']},
   {n:'Q32', type:'객관식 단일', q:'Which best describes your skin sensitivity?', opts:['Very sensitive','Somewhat sensitive','Not very sensitive','Not sensitive at all','Not sure']},
   {n:'Q33', type:'객관식 단일', q:'Which best describes your race/ethnicity?',
     opts:['Prefer not to answer','White','Black/African American','Hispanic/Latina','East Asian','Southeast Asian','South Asian','MENA','Native American','Pacific Islander','Multiracial','Other']},
  ]},
  {name:'종료 페이지', end:true},
 ]
};

const ANALYSIS_IDX=4;          // 디폴트 자동재생 = 컨셉 테스트 결과 분석(신규·인라인)
