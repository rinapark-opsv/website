/* ════════════════════════════════════════════════════
   Scenario data — the "planning/scenarios" owner edits here.
   (Design/CSS/layout work happens in index.html)

   Structure: each scenario = { id, label, persona, tagline, panel, scenes[] }
   each scene in scenes[] = { chat:[...], preview:'type', hl:'status label' }
   chat roles: system / file / user / ai / choices
   ai message: text (markdown **bold**), source/sources, block (inline table)
   ════════════════════════════════════════════════════ */
const SCENARIOS=[ /* ① Design (was C) — research flow: design */
 {id:'C',label:'Survey design for a K-beauty US market entry',tagline:'From a one-line request to a validated survey with logic built in',hook:'To design a survey like this with our product',scenes:[
   {chat:[{role:'user',text:'We\'re entering the US market — design a K-beauty concept study for me.'}],preview:'cskel',hl:'Survey request',dwell:80},
   {chat:[{role:'ai',process:[{t:'Defining research objectives...',b:['Based on your input, the AI is laying out the research objectives, the questions to answer, and the decision points.',"This is the 'project brief' a professional researcher writes before kicking off a project."]},{t:'Outlining the survey...',b:['Which questions will set the study up for clean analysis','How to order questions so responses stay free of bias','Which respondents are the right ones to collect from']},{t:'Writing questions into the survey...',b:['Filling in the questions so you can edit right away, and reviewing the logic.','This can take 10+ minutes — just keep this tab open and feel free to step away.']}]}],preview:'cskel',hl:'Designing the survey',dwell:700},
   {chat:[{role:'ai',done:[{t:'Project brief ready',open:'briefdocC',title:'Project brief: US market K-beauty concept validation',sec:'1. Background',b:['As K-culture spreads in the US beauty market and TikTok/Instagram/YouTube virality plus influencer- and review-driven purchasing intensify, interest in K-beauty is expanding.',"We need to quantitatively validate whether that 'interest and affinity' actually converts to near-term purchase, measured across price, ingredients/efficacy, brand trust, and channel access."]},{t:'Survey design document ready',open:'plandocC',title:'Quantitative research design: US market K-beauty concept validation',sec:'1. Research objectives',b:['Measure the next-3-month purchase intent of US MZ women','Identify the key decision drivers behind purchase (price, ingredients/efficacy, brand trust, channel)']}],datarow:{name:'K-beauty US MZ women U&A survey',meta:'Survey · 33 questions · just created',open:'surveydoc'},text:'I generated a **33-question survey** from a validated question bank. Screening pass conditions, option piping, and scales are all designed automatically. See the full survey on the right.'}],preview:'prompt',hl:'Survey generated',walk:['briefdocC','plandocC','surveydoc']},
   {chat:[],editor:true,hl:'Editing the survey'},
 ]},
 /* ② Analysis (was A) — research flow: collect → analyze · default autoplay */
 {id:'A',label:'Summarize key insights from Google Forms responses, then analyze by age group',tagline:'Connect Google Forms and analysis starts instantly — no prep needed',hook:'To analyze my own Google Forms survey directly',scenes:[
   {chat:[{role:'system',text:'Google Forms responses have been connected.'},{role:'file',name:'Brand awareness survey (Google Forms)',sub:'Google Forms responses · imported',badge:'2,400 responses',ftype:'gform'}],preview:'upload',hl:'Google Forms connected'},
   {chat:[{role:'user',text:'Summarize the key insights from these Google Forms responses'}],preview:'prompt',hl:'Natural-language question'},
   {chat:[{role:'ai',text:'**Summary**\n1. Brand awareness is highest among those in their 20s (78%) and lowest among those in their 50s (41%).\n2. Repurchase intent among past buyers is high at 82%, showing strong loyalty.\n3. The main purchase channel is online (64%), and it is growing faster than offline.',source:'Source 1'}],preview:'insights',hl:'Data-driven insights'},
   {chat:[{role:'user',text:'Analyze only respondents in their 20s'},{role:'ai',text:'**Korea | 20s (20–29): key insights**\n\nBrand awareness TOP2: **78%** (+18%p vs overall average)\nRepurchase intent: **89%**\nMain channels: Instagram ads (41%), YouTube (33%)',source:'Source 1'}],preview:'filter',hl:'Segment filter'},
   {chat:[{role:'user',text:'Show the results by age group as a bar chart'},{role:'file',name:'brand_awareness_by_age.chart',sub:'Visualization · bar chart',badge:'Chart created',open:'chart'}],preview:'chart',hl:'Chart auto-generated'},
   {chat:[{role:'system',text:'The analysis results have been saved to the project.'}],preview:'overview',hl:'Saved to project'},
 ]},
 /* ③ Share (was B) — research flow: analyze → share */
 {id:'B',label:'Compare AI-search behavior between Korean and US consumers',tagline:'Analysis becomes a team asset, and anyone can pick up the thread',hook:'To analyze like this together with our team',panel:false,scenes:[
   {chat:[{role:'system',text:'A trend dataset has been selected.'},{role:'file',name:'2025 AI search trends: Korea, US, Japan',sub:'Trend report · 3 countries',badge:'n=3,000',ftype:'trend'}],preview:'dataset',hl:'Dataset selected'},
   {chat:[{role:'user',text:'Compare AI-search behavior between Korean and US consumers'}],preview:'prompt',hl:'Cross-country question'},
   {chat:[{role:'ai',text:'**Summary**\n- Korea has the highest trial rate for AI search tools (tried ChatGPT: KR **50.9%** vs JP 14.8%).\n- The US has the highest satisfaction and trust in ChatGPT search (satisfaction TOP2: US **85.9%**).\n- Japan shows a relatively cautious, neutral stance.',source:'2025 AI search trends: Korea, US, Japan'}],preview:'insights2',hl:'Multi-country comparison insights'},
   {chat:[{role:'user',text:'Group Korea + Japan as East Asia and cross-tab against the US'},{role:'ai',text:'**East Asia vs US — statistically significant differences**',table:true,source:'2025 AI search trends: Korea, US, Japan'}],preview:'crosstab',hl:'Variable recoding · significance testing'},
   {chat:[{role:'system',text:'Shared with a teammate.'},{role:'user',text:'What does it look like for Japan on its own?',avatar:'J',name:'Ji-yeon (teammate)'},{role:'ai',text:'**Japan only | key findings**\n\nJapanese respondents have the lowest ChatGPT trial rate among the three countries at **14.8%**. Satisfaction (TOP2: 55.4%) is mid-level, but neutral responses are relatively high.'}],preview:'collaborate',hl:'Team collaboration chat'},
 ]},
 /* ① Design — Team lead Kim Min-jeong (research practitioner) · media1 */
 {id:'design',label:'MZ-generation survey fielding',persona:'Team lead Kim Min-jeong · research practitioner',tagline:'From survey straight to response collection',hook:'To design and field our own brand study directly',scenes:[
   {chat:[{role:'user',text:'I want to field a survey on MZ-generation brand perception right away.'}],hl:'Survey request',dwell:700},
   {chat:[{role:'file',name:'MZ-generation brand perception study',sub:'Survey · 18 questions',badge:'just created',open:'designsurvey',ftype:'survey',skel:true,connectMsg:'The MZ-generation brand perception survey has been connected.'}],hl:'Survey connected',dwell:1500},
   {chat:[{role:'ai',collect:true,text:'**Who should we ask?** Since a brand perception study is exploratory, I recommend a **synthetic panel** so you can get insights fast.'}],preview:'collectdoc',hl:'Choose collection audience',open:'collectdoc',press:'.co-start'},
 ]},
 /* ② Analysis — PM Park Jun-ho (results consumer) · media2 · default */
 {id:'analyze',label:'Compare purchase-intent TOP2 across 15 new-product concepts',persona:'PM Park Jun-ho · results consumer',panel:false,tagline:'From cross-tabs to segment significance — it answers like a researcher',hook:'To compare my own concept-test results directly',scenes:[
   {chat:[{role:'system',text:'Concept-test results have been connected.'},{role:'file',name:'2026 K-beauty new-product concept test',sub:'Concept evaluation · 15 concepts',badge:'n=1,164',open:'concepts',ftype:'survey'}],preview:'conceptds',hl:'Dataset connected'},
   {chat:[{role:'user',text:'Compare purchase intent across the 15 concepts on a TOP2 basis'}],preview:'prompt',hl:'Concept comparison question'},
   {chat:[{role:'ai',text:'**Concept purchase-intent TOP2 comparison** (5-point scale, total BASE n=1,164)\n- Top: **VT Reedle Shot ampoule 57.6%**, AESTURA cream 55.9%, Primera cleansing 54.7%[[1]]\n- Bottom: Medicube Age-R 33.8%, Whoo cushion 28.9%\n\nI also pulled together 3 key insights.',block:'concepts',source:'Source 1',sources:[{n:1,title:'2026 K-beauty new-product concept test',type:'Survey',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'concepts',hl:'Concept TOP2 comparison'},
   {chat:[{role:'user',text:'Take the 3 products with TOP2 above 60% and compare their purchase intent by age group'}],preview:'prompt',hl:'Segment question'},
   {chat:[{role:'ai',text:'**3 concepts at TOP2 60%+ · purchase intent (TOP2) by age group**\nAll 3 concepts share the same pattern: **highest among 30–39 (about 70%)** and lowest among 40–49.[[1]]\nColors indicate statistically significant differences at the 80% confidence level.',block:'agecross',source:'Source 1',sources:[{n:1,title:'2026 K-beauty new-product concept test',type:'Survey',kind:'survey',emoji:'📊',open:'conceptds'}]}],preview:'agecross',hl:'Segment significance testing'},
 ]},
 /* ③ Explore & track — marketer Lee Su-min (needs evidence without budget/time) · media3 */
 {id:'explore',label:'Explore rising 2026 health-supplement category trends',persona:'Marketer Lee Su-min · needs evidence',panel:false,tagline:'No first-party data? Build the evidence from marketplace data',hook:'To find our own category trends directly',scenes:[
   {chat:[{role:'system',text:'I\'ll pull trend data from the marketplace.'},{role:'file',name:'Health supplement trend data (2025 · 2026)',sub:'Trend report · marketplace',badge:'2 sources',open:'library',ftype:'trend'}],preview:'library',hl:'Marketplace data'},
   {chat:[{role:'user',text:'Tell me which health-supplement categories are rising in 2026 vs 2025'}],preview:'prompt',hl:'Trend question'},
   {chat:[{role:'ai',text:'**Categories with rising consumption, 2025 → 2026** (in %p, multiple response)\n- Increases led by **Omega-3 (+2.7%p)**, sleep care (+1.0%p), and antioxidant/anti-aging (+0.7%p)[[1,2]]\n- Note: in 2026 ‘hair/hair-loss supplements’ (11.8%) was newly added, so direct comparison needs care.',block:'wave',source:'Sources 1·2',sources:[{n:1,title:'2025 health supplement trend data',type:'Trend report',kind:'trend',emoji:'📈',open:'library'},{n:2,title:'2026 health supplement trend data',type:'Trend report',kind:'trend',emoji:'📈',open:'library'}]}],preview:'wave',hl:'Wave-tracking comparison'},
   {chat:[{role:'user',text:'Analyze the 30s target in more depth'}],preview:'prompt',hl:'Segment deep dive'},
   {chat:[{role:'ai',text:'**Key insights for people in their 30s**\n- **Attributes**: efficacy, ingredients, and reviews come first (efficacy 48.8%)[[1]]\n- **Format**: pills/capsules 79.8%, with small capsules and sticks supporting ‘easy to take’\n- **Channels**: Naver 46.2% · Coupang 44.9% + pharmacies/large marts (trust)\n- **Price**: KRW 50,000–100,000 is the most common, at 25%',source:'Source 1',sources:[{n:1,title:'2026 health supplement trend data',type:'Trend report',kind:'trend',emoji:'📈',open:'library'}]}],preview:'trendins',hl:'Segment insights'},
 ]},
 /* ⑦ Proof Seeker — small K-beauty brand marketer · US market entry (hypothesis → evidence → report) */
 {id:'proof',label:'Find evidence for a US market-entry hypothesis → investor opportunity report',persona:'Lee Seo-yeon · small K-beauty brand marketer',tagline:'Back the hypotheses you set with sourced evidence',hook:'To back my hypothesis with data-backed evidence',panel:false,scenes:[
   {chat:[{role:'user',text:'I\'m writing a US market-entry deck. Is there evidence that K-beauty routines will take off in the US, and that toner pads or spot care are promising within that?'}],preview:'prompt',hl:'Hypothesis + evidence request',dwell:200},
   {chat:[{role:'ai',text:'Yes, it\'s right there in the sources. This is based on the **2025 US K-beauty trend data**.[[1,2]]\n- **Toner pads have 35.2% ‘intent to use’ but only 21.0% currently using them** — a 14%p gap. For boosting essence the gap is even bigger: 35.5% intent vs 18.4% current.\n- The #1 and #2 ‘want to use but not yet using’ categories are exactly boosting essence and toner pads, so the hypothesis matches the numbers cleanly.',block:'proofgap',sources:[{n:1,title:'[Eat Buy Play] 2025 US K-beauty trend data',type:'Trend report',kind:'trend',emoji:'📈'},{n:2,title:'2023 US beauty trend data',type:'Trend report',kind:'trend',emoji:'📈'}],followups:['Break the ‘want to use but not yet using’ categories down by age group','Let\'s also look at competitor K-beauty brand awareness','Build a report for the investor deck from this evidence']}],preview:'prompt',hl:'Adjacent evidence (intent–adoption gap)',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'Break the ‘want to use but not yet using’ categories down by age group'},{role:'ai',text:'**The core target is people in their 30s.** Across all 4 expansion categories, including toner pads, they have the highest future and new-use intent.[[1]]\n- **People in their 40s are a latent ‘will use if needed’ segment** — they use less now, but for toner pads and basics the gap with ‘intent to use’ is especially large.\n- The 30s-core, 40s-latent pattern is clear.',block:'proofcross',sources:[{n:1,title:'[Eat Buy Play] 2025 US K-beauty trend data',type:'Trend report',kind:'trend',emoji:'📈'}],followups:['Build a report for the investor deck from this evidence','Point out where they convert to a first purchase too']}],preview:'prompt',hl:'Age-group cross-tab (30s core · 40s gap)',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'Build a report for the investor deck from this evidence'},{role:'ai',process:[{t:'Writing the report...',b:['Grouping the evidence and charts around headlines, and attaching a source to every number.','Shaping it so investors and buyers can quote it as-is.']}]}],preview:'prompt',hl:'Writing the report',dwell:1600},
   {chat:[{role:'ai',datarow:{name:'US skincare opportunity map — growth categories, age targets, entry priorities',meta:'Report · just created',open:'report'},text:'**Your investor opportunity report is ready.** I attached 5 headline insights with charts and sources (2 datasets · sample/margin of error). See the full report on the right.',followups:['Summarize it in one line for a slide','Make a one-pager for buyers']}],hl:'Opportunity report complete',open:'report',press:'.cc-data'},
 ]},
 /* ⑧ Target persona discovery — search → segment → synthetic consumer interview (new Figma UI) */
 {id:'persona',label:'Find the target for a zero-sugar soda → synthetic consumer interview',persona:'Marketer Jeong Woo-jin · new-product review',tagline:'No hypothesis needed — the data finds the target and turns it into a conversation',hook:'To find our new-product target and run a synthetic interview',scenes:[
   {chat:[{role:'user',text:'I\'m prepping a new zero-sugar soda line but I have no sense of who the main target should be. Can you pull out promising consumer segments from the data we have?'}],preview:'prompt',hl:'Target discovery request'},
   {chat:[{role:'ai',text:'I ran the **zero-sugar soda trend report** in the space, and two clearly distinct groups emerge.[[1]] They differ in why they drink it and what holds them back, so **separate messaging** looks right.',search:{segs:[{tag:'No taste compromise',name:'Zero drinkers',size:'32.5%',n:'130 people',desc:'Taste comes first — sensitive to the artificial-sweetener aftertaste of zero drinks'},{tag:'Guilt defense',name:'Light drinkers',size:'23.7%',n:'95 people',desc:'Calories over taste — switched to zero to ease the guilt'}],note:'The two groups are opposite on taste vs calorie sensitivity, so bundling them into one message risks losing both.'},sources:[{n:1,title:'Zero-sugar soda trend report',type:'Report',kind:'survey',emoji:'📊'}],followups:['Can I talk to a synthetic consumer from these segments?','Could you also segment by a different criterion?']}],hl:'Segments derived',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'Can I talk to a synthetic consumer from these segments?'},{role:'ai',personas:'zero',text:'Sure — I created synthetic consumers to represent the two groups. For the no-taste-compromise group, **Manager Kim Do-yoon**; for the guilt-defense group, **Assistant Manager Park Jun-young**. Tap [View traits] for a profile, or [Start conversation] to interview right away.',sources:[{n:1,title:'Zero-sugar soda trend report',type:'Report',kind:'survey',emoji:'📊'}],followups:['I\'ll talk to Manager Kim Do-yoon first','Let me talk to Assistant Manager Park Jun-young']}],hl:'2 synthetic consumers created',open:'personaHn',press:'.pc-detail-hn',chipAfter:'.cc-follow-chip'},
   {chat:[{role:'user',text:'I\'ll talk to Manager Kim Do-yoon first'},{role:'persona',who:'hn',text:'Hi, I\'m Kim Do-yoon. Feel free to ask me anything.'}],preview:'personaHn',hl:'Synthetic interview begins'},
   {chat:[{role:'user',text:'Have you ever decided not to buy zero cola, honestly because of the taste?'},{role:'persona',who:'hn',text:'Honestly, often. That artificial-sweetener aftertaste really bothers me. Still, being able to drink it without worrying about calories when I crave something sweet at work is a clear plus — so if the taste got closer to real cola, I\'d buy it without hesitation.'}],preview:'personaHn',hl:'Interview — taste resistance'},
   {chat:[{role:'user',text:'End the conversation'},{role:'ai',text:'**Wrapped up the synthetic interview.**\nIn short, the ‘no taste compromise’ group still wants ‘real cola taste,’ and the artificial-sweetener aftertaste is the biggest barrier. Close just that taste gap with natural sweeteners and there\'s strong upside in purchase frequency.\n\nWhat should we do next?',followups:['Pull that conversation into a summary report','Build a concept-test survey from this insight','Let me talk to Assistant Manager Park Jun-young too']}],preview:'personaHn',hl:'Interview ended · next steps'},
 ]},
];

/* ── Scenario C full survey (33 questions) — main view ── */
const SURVEY_C = {
 title:'K-beauty Purchase Intent & Channel U&A — US MZ Women',
 meta:'33 questions · ~7–9 min · English (US) · based on a validated question bank',
 sections:[
  {name:'Screening block', note:"Pass condition: pass only if Skincare/Makeup is selected in Q1 AND 'purchased within the past 12 months' is selected in Q2", qs:[
   {n:'Q1', type:'Multi-select', cons:'min 1–max 9', q:'In the past 12 months, which have you personally purchased for yourself?',
     opts:['Hair care','Fragrance','Skincare (cleanser, moisturizer, SPF, serum)','Makeup/cosmetics','Body care','Grooming tools','Supplements/vitamins','Apparel/shoes','Electronics/accessories']},
   {n:'Q2', type:'Single-select', q:'When did you last purchase skincare and/or makeup?',
     opts:['Within past 1 month','1–3 months ago','4–6 months ago','7–12 months ago','More than 12 months ago','Never purchased'], logic:['Shown only if Skincare/Makeup is selected in Q1']},
  ]},
  {name:'B1. K-beauty concept/category purchase intent', qs:[
   {n:'Q3', type:'Single-select', q:'Before today, how familiar were you with the term "K-beauty"?',
     opts:['Very familiar','Somewhat familiar','Not very familiar','Not familiar at all','Not sure']},
   {n:'Q4', type:'Single-select', q:'Which best describes your experience with K-beauty products?',
     opts:['Have purchased before','Used but did not purchase myself','Not used, but interested','Not used, not interested','Not sure']},
   {n:'Q5', type:'Multi-select', cons:'min 1–max 19', q:'Which types of K-beauty products have you purchased?',
     opts:['Cleanser','Toner/essence','Serum/ampoule','Moisturizer/cream','Sunscreen/SPF','Exfoliator','Masks','Eye care','Lip care','Acne treatment','Cushion foundation','Foundation/concealer','Setting powder/spray','Blush/bronzer','Eye makeup','Lip makeup','Makeup remover','Tools/accessories','Other'], logic:['Shown only if \'Have purchased before\' is selected in Q4']},
   {n:'Q6', type:'5-point scale', q:'In the next 3 months, how likely to purchase a K-beauty skincare product?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)']},
   {n:'Q7', type:'5-point scale', q:'In the next 3 months, how likely to purchase a K-beauty makeup product?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)']},
  ]},
  {name:'B2. Brand funnel + Company K funnel/purchase intent', qs:[
   {n:'Q8', type:'Open-ended', q:'When you think of K-beauty brands, what is the FIRST brand that comes to mind?', text:true},
   {n:'Q9', type:'Open-ended', q:'What other K-beauty brands can you think of?', text:true},
   {n:'Q10', type:'Multi-select', cons:'min 1–max 20', q:'Which of the following K-beauty brands have you heard of?',
     opts:['K Company Brand','Laneige','Innisfree','COSRX','Beauty of Joseon','Dr. Jart+','Sulwhasoo','Etude','MISSHA','Banila Co','TONYMOLY','The Face Shop','SKIN1004','Round Lab','Some By Mi','Dear Klairs','Mediheal','Neogen','Pyunkang Yul','Other']},
   {n:'Q11', type:'Multi-select', q:'Which of those have you ever purchased or used?', ref:'Only options selected in Q10 (option piping)'},
   {n:'Q12', type:'Multi-select', q:'Which have you purchased/used in the past 12 months?', ref:'Only options selected in Q11 (option piping)'},
   {n:'Q13', type:'Single-select', q:'Which ONE brand do you purchase/use most often nowadays?', ref:'Only options selected in Q12'},
   {n:'Q14', type:'5-point scale', q:'Overall, how favorable is your opinion of [K Company Brand]?', scale:['Very unfavorable (1)','2','Neutral (3)','4','Very favorable (5)'], logic:['Shown only if aware of Company K in Q10']},
   {n:'Q15', type:'5-point scale', q:'How likely to purchase [K Company Brand] for the FIRST time in next 3 months?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)'], logic:['Shown only if Q10 aware AND Q11 not purchased']},
   {n:'Q16', type:'5-point scale', q:'How likely to repurchase [K Company Brand] in next 3 months?', scale:['Not at all (1)','2','Neither (3)','4','Extremely (5)'], logic:['Shown only if Company K purchased in Q11']},
  ]},
  {name:'B3. Purchase channel usage/preference (first purchase vs repurchase)', qs:[
   {n:'Q17', type:'Multi-select', cons:'min 1–max 16', q:'In the past 12 months, where have you purchased skincare and/or makeup?',
     opts:['Sephora','Ulta Beauty','Amazon','Brand website (DTC)','Brand store (physical)','TikTok Shop','Walmart','Target','Drugstore (CVS/Walgreens)','Department store','K-beauty specialty (Soko Glam)','Asian marketplace (YesStyle, etc.)','Olive Young Global','Subscription box','Local beauty supply','Other']},
   {n:'Q18', type:'Ranking', cons:'TOP 3', q:'Rank your TOP 3 channels you use most often.', ref:'Only options selected in Q17'},
   {n:'Q19', type:'Multi-select', cons:'min 1–max 16', q:'For a FIRST-TIME K-beauty purchase, which channels would you consider?', ref:'Same channel options (Q17)'},
   {n:'Q20', type:'Single-select', q:'Which ONE channel is most likely for that first-time purchase?', ref:'Only options selected in Q19'},
   {n:'Q21', type:'Multi-select', cons:'min 1–max 16', q:'For repurchasing K-beauty, which channels would you consider?', ref:'Same channel options (Q17)', logic:['Shown only if purchased in Q4']},
   {n:'Q22', type:'Single-select', q:'Which ONE channel is most likely for repurchase?', ref:'Only options selected in Q21', logic:['Shown if Q4 purchased AND Q21 answered']},
  ]},
  {name:'B4. Channel choice factors / switching barriers · triggers', qs:[
   {n:'Q23', type:'Ranking', cons:'TOP 5 (1=most)', q:'When choosing WHERE to buy K-beauty, what matters most?',
     opts:['Authentic (not counterfeit)','Lower price/deals','Promotions','Fast delivery','Low/free shipping','Easy returns','Trusted reviews','Try in person','Wide selection','Convenience','Loyalty rewards','Customer service','Clear product info','Other']},
   {n:'Q24', type:'Multi-select', cons:'min 1–max 14', q:'What could stop you from buying K-beauty in the next 3 months?',
     opts:['Nothing would stop me','Too expensive','Unsure what suits my skin','Worry about irritation','Counterfeit concerns','Hard to find in US','Slow shipping','High shipping cost','Difficult returns','Not enough reviews','Prefer non-K brands','Ingredient concerns','Shade range','Too complicated','Other']},
   {n:'Q25', type:'Multi-select', cons:'min 1–max 15', q:'What would make you MORE likely to buy K-beauty?',
     opts:['Nothing in particular','Discounts/sale','Free shipping','Faster delivery','Free samples','Gift/bundle','Trustworthy reviews','Influencer rec','Friend/family rec','Dermatologist rec','Clear skin-type guidance','Easier returns','Sold at retailer I shop','Authentic/verified','Try in store','Other']},
  ]},
  {name:'B5. Information sources / content influence', qs:[
   {n:'Q26', type:'Multi-select', cons:'min 1–max 17', q:'In the past 3 months, where have you gotten beauty info/inspiration?',
     opts:['None','TikTok','Instagram','YouTube','Pinterest','Facebook','Reddit','Google/search','Sephora/Ulta reviews','Amazon reviews','Brand websites','Beauty blogs','Friends/family','Dermatologist','In-store advisors','Online communities','Email/text alerts','Other']},
   {n:'Q27', type:'Ranking', cons:'TOP 3 (1=most)', q:'Rank your TOP 3 most influential sources.', ref:'Only options selected in Q26'},
   {n:'Q28', type:'5-point scale', q:'How much do social media/online content influence your K-beauty interest & purchases?', scale:['Not at all (1)','2','Somewhat (3)','4','A great deal (5)']},
  ]},
  {name:'B6. Profile for segment analysis', qs:[
   {n:'Q29', type:'Single-select', q:'Approximate annual household income (USD)?',
     opts:['Prefer not to answer','Under $25k','$25–35k','$35–50k','$50–75k','$75–100k','$100–125k','$125–150k','$150–200k','$200–250k','$250k+']},
   {n:'Q30', type:'5-point scale', q:'How involved are you in beauty (enjoy, follow trends, spend time/money)?', scale:['Not at all (1)','2','Moderately (3)','4','Very involved (5)']},
   {n:'Q31', type:'Multi-select', cons:'min 1–max 15', q:'Which skin concerns are relevant to you?',
     opts:['No specific concerns','Acne/breakouts','Dark spots','Uneven tone','Dryness','Oiliness','Redness/rosacea','Visible pores','Blackheads','Fine lines/wrinkles','Loss of firmness','Dullness','Dehydration','Under-eye concerns','Sun damage','Other']},
   {n:'Q32', type:'Single-select', q:'Which best describes your skin sensitivity?', opts:['Very sensitive','Somewhat sensitive','Not very sensitive','Not sensitive at all','Not sure']},
   {n:'Q33', type:'Single-select', q:'Which best describes your race/ethnicity?',
     opts:['Prefer not to answer','White','Black/African American','Hispanic/Latina','East Asian','Southeast Asian','South Asian','MENA','Native American','Pacific Islander','Multiracial','Other']},
  ]},
  {name:'End page', end:true},
 ]
};

const ANALYSIS_IDX=4;          // default autoplay = concept-test results analysis (new · inline)

/* UI chrome 번역 로더 — index.html 수정 없이 ?lang=en|ja 에서 동작 */
(function(){try{var s=document.createElement('script');s.src='ui-i18n.js';document.head.appendChild(s);}catch(e){}})();
