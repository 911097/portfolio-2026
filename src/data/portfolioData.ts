import { Project, EducationCourse, HonorAward, WorkExperience, NextDirection } from '../types/portfolio';

export const PROFILE_INFO = {
  name: '吳雨柔',
  nameEn: 'Yu-Jou Wu',
  year: '2026',
  tagline: '資訊管理 · 全端與跨域設計',
  headline: '嗨，我是 吳雨柔',
  headlineSub: '我在設計與科技之間，',
  headlineHighlight: '跨域數位體驗',
  headlineHighlightSuffix: '',
  headlineFull: '打造真正可用的 跨域數位體驗',
  title: '資訊管理學士 · 全端與跨域設計',
  subtitle: 'Information Management Portfolio 2026',
  email: 'ccyzjy0569@gmail.com',
  github: 'https://github.com/911097',
  githubHandle: 'github.com/911097',
  bioScreenshot: '復興美工視覺設計訓練出身，主修資訊管理，結合設計與技術兩種訓練路徑。從使用者需求出發，運用 Python、YOLOv8n、Web 與資料分析等能力，將想法轉化為具備美感、邏輯與實際價值的數位成果。',
  bioDetail: '我高職念美工科，大學轉資管。現在主要寫 Python 和 SQL，做過影像追蹤、資料分析和網頁介面。系統做完之後，畫面我也會自己改到能用。',
  coreMotto: '先讓它跑得穩，再讓人看得懂。',
  corePositioning: 'Python／SQL 系統開發 × 介面與視覺設計',
  inventionRole: '團隊專題入選首爾 SIIF、曼谷 IPITEX、高雄 KIDE，我負責參展代表與視覺統整、出賽海報製作與成果彙整。',
  schoolSummary: '亞東科技大學 資訊管理系（平均 86.4 分｜班排第 5 名，前 17.24%）',
  hsSummary: '復興商工 美工科（2019–2022：視覺設計、數位繪圖、3D 動畫）'
};

export const MARQUEE_ITEMS = [
  'Illustration',
  'Typography',
  'HTML5 / CSS3',
  'Figma',
  'Prototyping',
  'Data Visualization',
  'Python',
  'YOLOv8n',
  'SQL & MySQL',
  'MediaPipe',
  'Power BI',
  'Patent I906167',
  'RWD Web Dev'
];

export const EDUCATION_DATA: EducationCourse[] = [
  {
    category: '技術核心（Systems & Coding）',
    courses: [
      { name: '資料結構', score: 99 },
      { name: '資料庫系統', score: 94 },
      { name: 'Java 程式設計', score: 92 },
      { name: '系統分析與設計', score: 91 },
    ]
  },
  {
    category: '數據分析（Data & Analytics）',
    courses: [
      { name: '商業智慧 (BI)', score: 97 },
      { name: '供應鏈管理', score: 97 },
      { name: '統計軟體應用', score: 92 },
    ]
  },
  {
    category: '實作專題（Research & Vision）',
    courses: [
      { name: '專題研究', score: 90 },
      { name: '影像處理', score: 90 },
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: '系統開發與資料庫 (Systems & Database)',
    skills: ['Python', 'Java', 'SQL', 'MySQL'],
    description: '修過資料庫設計與系統分析；專題中參與後端邏輯與資料庫設計，注重資料結構與跑動穩定度。'
  },
  {
    title: '數據分析與 AI 應用 (Data & AI Vision)',
    skills: ['Python', 'OpenCV', 'YOLOv8n', 'Power BI', 'MediaPipe', 'Deep SORT'],
    description: '智慧醫院專題負責特徵工程實作、影片測試與誤判除錯；用 Power BI 與 RFM 處理 23.8 萬筆商品數據儀表板。'
  },
  {
    title: 'UI/UX 與視覺設計 (Design & Frontend)',
    skills: ['Figma', 'HTML/CSS (RWD)', 'Illustrator', 'Photoshop', '3ds Max'],
    description: '做過網站切版（RWD）和 App 介面；高職復興商工美工科的視覺扎實訓練，直接落實於直覺易懂的介面配置。'
  },
  {
    title: '商業與專案管理 (Business & Project)',
    skills: ['ERP（鼎新配銷模組）', '專案管理', '商業計畫書推估'],
    description: '專題中負責統籌會議記錄、進度追蹤、跨團隊溝通，並主導撰寫 36 頁 SmartFit 商業計劃書。'
  }
];

export const PROJECTS: Project[] = [
  // 1. Anonymous Tracking System (智慧醫院匿名特徵感知與預警平臺 · 畢業專題)
  {
    id: 'anonymous-tracking-system',
    title: '智慧醫院匿名特徵感知與預警平臺',
    originalTitle: '智慧醫院匿名特徵感知與預警平臺',
    filterCategory: 'ai_systems',
    displayBadge: '畢業專題 ‧ AI 系統',
    tags: ['Python', 'YOLOv8n', 'ReID 匿名追蹤'],
    year: '2026',
    role: '特徵工程實作、影片測試與誤判除錯、統籌團隊會議記錄',
    tools: ['Python', 'YOLOv8n', 'OpenCV', 'CIELAB', 'RTX 5060'],
    leadParagraph: '醫院管制區防走失匿名追蹤系統。不留存人臉影像，改用 3D 骨架幾何比例、CIELAB 衣著色彩與步態特徵認人；異常對象另建立危險事件特徵追蹤池供事後回溯。',
    problem: '醫院管制區要防走失與異常滯留，但不留存人臉影像。',
    solutionAndMethods: '不辨識人臉，改用 3D 骨架幾何比例、CIELAB 軀幹與下肢色彩及步態動力學認人。以 HEAD_EXCLUSION_RATIO = 0.25 排除頭部色彩干擾。設計動態可信度驗證閥門解決口罩遮蔽、側身旋轉與走廊交錯漂移，連續 3～5 幀通過比對才發放正式 ID。',
    highlights: [
      '動態可信度驗證閥門（Dynamic Validation Gate）：解決口罩遮蔽（有效膚色不足標 Unavailable）、側身旋轉（偵測到側身退出該項比對，分母加保護常數 ϵ）、走廊交錯（設運動合理範圍丟掉跳點，改用軀幹中心估計）。',
      '3 人交錯測試影片：未加閥門誤換 ID 約 9 次 → 啟動動態閥門後降到 5～6 次。',
      '比對閥值調校：ReID Threshold 0.65（初期 0.80 過嚴易漏配，測試調校後優化至 0.65，平衡辨識率與召回率），連續 3～5 幀通過比對才發放正式 ID。',
      '滯留示警（Overstay Limit）：管制區逾時 90 幀（約 12 秒）即觸發示警。'
    ],
    metrics: [
      { label: '已實作特徵維度', value: '28 維 (目標 34 維)' },
      { label: '自錄測試影片', value: '7 支' },
      { label: '最長測試片段', value: '13,959 幀 (~7.7 分鐘)' },
      { label: '交錯誤換 ID 改善', value: '9 次 → 5~6 次' }
    ],
    artTheme: 'anonymous-tracking-ui',
    inventionAward: '高雄 KIDE 國際發明展（2026/11 出賽代表）',
    videoLink: 'https://youtu.be/DzUjcut3XwM',
    subPages: [
      { subtitle: '1/3 總覽與系統架構', description: '入口 QR Code 同意 → 攝影機取特徵 → 比對 → LINE Bot 通報（規劃串接中）。筆電 RTX 5060 順暢執行。' },
      { subtitle: '2/3 特徵工程與比對', description: '排除頭部干擾 (HEAD_EXCLUSION_RATIO = 0.25)，專注軀幹與下肢 CIELAB 色彩與 3D 骨架。' },
      { subtitle: '3/3 動態可信度驗證閥門', description: '針對遮蔽、側轉、視角交錯設計防護邏輯，將誤換 ID 頻率大幅壓制。' }
    ]
  },

  // 2. LT Architects (Slide 17: Wix 範本架構重構與視覺改作)
  {
    id: 'lt-architects-web',
    title: 'LT ARCHITECTS',
    originalTitle: 'Wix 範本架構重構與視覺改作',
    filterCategory: 'web_dev',
    displayBadge: 'Web ｜ 視覺改作',
    designBadges: ['Wix 範本', 'Figma', '視覺改作'],
    concept: 'Concept：深色底、金色小字，圖放大，文字退後。',
    tags: ['Wix 範本', 'Figma', '視覺改作', '深色極簡', '建築美學'],
    year: '2024',
    role: 'Wix 範本架構重組、Figma 視覺改作、響應式切版與 GitHub Pages 部署',
    tools: ['Figma', 'Wix 範本重構', 'HTML5 / CSS3', 'GitHub Pages', '資訊架構 (IA)'],
    liveUrl: 'https://911097.github.io/LT-Architects/',
    githubUrl: 'https://github.com/911097/LT-Architects',
    leadParagraph: '針對建築事務所進行 Wix 範本架構重構與視覺改作。核心設計理念為「深色底、金色小字，圖放大，文字退後」，在 Figma 中完整規劃多裝置網格與響應式原型，打破套版文字喧賓奪主的框架，將純粹的建築光影與空間尺度推至視覺首位。',
    problem: '常見套版範本排版擁擠且字體粗重喧賓奪主，容易分散訪客對建築作品空間張力與材質細節的注意力，缺乏頂級建築事務所應有的靜謐與高級感。',
    solutionAndMethods: '以「深色底、金色小字，圖放大，文字退後」為核心方針：在 Figma 中拆解重組資訊架構，確立 12 欄響應式網格；弱化導覽與文字標題為極簡冷灰與金黃微光，作品圖幅推向極致；並將設計落地實作，部署至 GitHub Pages 線上展示。',
    highlights: [
      '【視覺概念】深色底、金色小字，圖放大，文字退後，營造高奢建築畫廊沉浸感。',
      '【架構重構】打破原始範本多層混亂巢狀，提煉出 PORTFOLIO、ABOUT、NEWS 三大純粹動線。',
      '【Figma 全案】完成 Mobile (375px) 到 Desktop (1440px) 完整響應式原型與元件規範。',
      '【實作上線】完成網頁開發並部署至 GitHub Pages，提供流暢的即時互動體驗。'
    ],
    metrics: [
      { label: '設計 Concept', value: '深色底 / 金色小字' },
      { label: '畫面比重', value: '圖放大 · 文字退後' },
      { label: '核心工具', value: 'Wix + Figma' }
    ],
    artTheme: 'lt-architects'
  },

  // 3. E-COMMERCE RFM & BI (Slide 13: 電商顧客分群｜RFM、Power BI 與精準行銷)
  {
    id: 'rfm-data-analytics',
    title: 'E-COMMERCE RFM & BI',
    subtitleEn: '03 — DATA & BUSINESS · 13 / 31',
    originalTitle: '電商顧客分群｜RFM、Power BI 與精準行銷',
    filterCategory: 'data_bi',
    displayBadge: '商業智慧 ‧ 數據分析',
    designBadges: ['Power BI', 'RFM 分群', 'Google Apps Script', '開源專案'],
    concept: '儀錶板呈現：Google Apps Script 互動儀表板 ｜ GitHub 開源：911097/114-2Fin',
    tags: ['Power BI (pbix)', 'RFM 模型', 'Google Apps Script', 'UCI Retail', '54.1萬筆交易'],
    year: '2026',
    role: '資料前處理、異常值清洗、RFM 等頻分群演算、Power BI 5 頁報表建置、Google Apps Script 互動儀表板開發、IEEE 專題報告撰寫',
    tools: ['Power BI (pbix)', 'Excel (樞紐/PERCENTILE)', 'Google Apps Script', 'GitHub 開源', 'UCI Online Retail'],
    githubUrl: 'https://github.com/911097/114-2Fin',
    liveUrl: 'https://script.google.com/macros/s/AKfycbzJpt1QhyBJtfJzkzOGebXk5obPGzD_gGKDseyc0Q18/dev',
    leadParagraph: '個人專案（商業智慧課，2026/06）。以 UCI Online Retail 54.1 萬筆交易為基礎，嚴格剔除無 ID 與退貨零值後，透過 Excel 樞紐與 PERCENTILE 等頻切分 1–5 分建立 RFM 模型。建構 5 頁 Power BI 報表與 Google Apps Script 互動儀表板，並提出精準行銷策略。',
    problem: 'UCI 原始 541,909 筆交易資料混雜無 Customer ID 紀錄 (135,080 筆)、退貨負值與零值 (10,624 筆)，若未經清理將產生巨大偏誤；且傳統均分法無法呈現電商顧客真實二八貢獻法則。',
    solutionAndMethods: '嚴格清洗後鎖定 4,338 位有效顧客。計算最近購買日 (R)、消費頻率 (F)、消費金額 (M)，以 PERCENTILE 等頻切分為 1–5 分，再依規則歸納為 VIP、重要客戶、高消費客、流失客戶。透過 Power BI 製作 5 頁報表，並結合 Google Apps Script 開發線上互動儀表板，成果發表為 5 頁 IEEE 格式報告（含 7 項參考文獻）。',
    highlights: [
      '【客群貢獻對比】VIP 848 人（占 19.6%）貢獻 62.0% 營收；流失客戶 1,307 人（占 30.1%）僅貢獻 5.4%，完美驗證二八法則。',
      '【多端視覺化】建構 5 頁 Power BI 深入報表，並以 Google Apps Script 開發線上網頁版互動儀表板。',
      '【精準行銷策略】針對四大客群分別提出行銷方案，並對照資策會 MIC 網購調查數據驗證策略可行性。',
      '【全案開源】54.1 萬筆原始交易、清洗程式碼、RFM 分群邏輯與 Power BI .pbix 原始檔完整於 GitHub 開源。'
    ],
    metrics: [
      { label: '原始交易資料', value: '541,909 筆' },
      { label: '清洗後有效顧客', value: '4,338 人' },
      { label: 'VIP 營收貢獻', value: '62.0% (848人)' },
      { label: '流失客營收占比', value: '5.4% (1,307人)' }
    ],
    artTheme: 'rfm-analytics'
  }
];

export const ARCHIVED_TEAM_PROJECTS: Project[] = [
  // Additional Deep-Dive Projects accessible via Case Studies
  {
    id: 'campus-event-branding',
    title: '校園活動視覺識別',
    subtitleEn: 'CAMPUS EVENT VISUAL IDENTITY',
    originalTitle: '亞東資管系學會年度活動視覺識別系統',
    filterCategory: 'visual_design',
    displayBadge: '視覺設計',
    tags: ['視覺識別', '海報排版', '社群素材'],
    year: '2025',
    role: '主視覺設計、海報排版、社群媒體動態素材統籌',
    tools: ['Illustrator', 'Photoshop', 'After Effects', 'Figma'],
    leadParagraph: '為亞東資管系學會年度活動設計完整視覺識別系統，涵蓋主視覺海報、社群媒體模板、周邊商品及動態素材，以幾何色塊融合資訊意象，建立一致且富有科技活力的品牌形象。',
    problem: '系所學術與聯誼活動繁多，以往視覺零碎混亂，缺乏統一辨識度與傳播張力。',
    solutionAndMethods: '拆解資管「資料流」與「邏輯節點」為基礎幾何色塊，建立色彩規範與排版網格系統，應用於大圖海報、IG 輪播圖與周邊紀念品。',
    highlights: [
      '主視覺海報、社群輪播貼文模板、動態宣傳短片一體化設計。',
      '建立色彩網格規範，小組組員可直接依模板產出延伸素材。',
      '實體周邊包含工作證、貼紙組與帆布包周邊設計。'
    ],
    metrics: [
      { label: '活動曝光觸及', value: '2,500+ 人次' },
      { label: '設計項目規模', value: '18 件延伸物料' }
    ],
    artTheme: 'campus-branding'
  },
  {
    id: 'mobile-wallet-app-ui',
    title: '行動錢包 App 介面設計',
    subtitleEn: 'MOBILE WALLET APP UI',
    originalTitle: '大學生智慧行動錢包與分帳支付系統',
    filterCategory: 'ui_ux',
    displayBadge: 'UI / UX',
    tags: ['UI 設計', '使用者體驗', '原型設計'],
    year: '2025',
    role: '使用者研究、線框稿、高保真原型設計與互動動畫',
    tools: ['Figma', 'Prototyping', 'Design System', 'Micro-interactions'],
    leadParagraph: '從使用者研究到高保真原型，設計一款針對大學生的行動支付 App。包含帳戶總覽、交易記錄、分帳功能與互動動畫，以 Figma 製作可互動原型並完成多輪可用性易用性測試。',
    problem: '大學生同儕聚餐拆帳流程痛苦，市售錢包軟體層級深且繁瑣，容易發生漏記或轉帳確認拖延。',
    solutionAndMethods: '規劃「一鍵群組智慧分帳」動線，以直觀卡片呈現帳戶餘額與待收款項，透過平滑的微互動回饋提升支付安全感與愉悅感。',
    highlights: [
      '首頁快速轉帳、相簿掃碼與好友分帳三步閉環流暢動線。',
      '精確的微交互動畫：按鈕觸覺震顫模擬、卡片翻轉明細。',
      '通過 12 位大學生受測者可用性測試，任務完成率達 100%。'
    ],
    metrics: [
      { label: '完成介面數量', value: '24 個高保真頁面' },
      { label: '可用性任務完成率', value: '100%' }
    ],
    artTheme: 'mobile-wallet'
  },

  // 3. Infographic & Poster Design (from Screenshot 3 & PDF P.23)
  {
    id: 'infographic-poster-design',
    title: '資訊圖表與海報設計',
    subtitleEn: 'INFOGRAPHIC & POSTER DESIGN',
    originalTitle: '複雜數據視覺化轉化與系列海報創作',
    filterCategory: 'graphic',
    displayBadge: 'Graphic',
    tags: ['Infographic', 'Typography', 'Print'],
    year: '2024',
    role: '資訊架構梳理、圖表視覺化、印刷完稿',
    tools: ['Illustrator', 'InDesign', 'Photoshop', '2.5D Isometric'],
    leadParagraph: '將複雜數據轉化為視覺清晰、層次分明的資訊圖表與海報，以復興美工的排版訓練為基礎，結合資管系的數據分析能力，讓資訊兼具美感與可讀性。',
    problem: '大量技術與統計數據往往充斥枯燥表格，閱聽者在幾秒內即失去耐心與閱讀興趣。',
    solutionAndMethods: '運用對比、留白、層級字體與 2.5D 等角透視圖，將抽象數據轉譯為直覺易懂的視覺故事，並落實至大圖印刷規範。',
    highlights: [
      '亞東科技大學 2.5D 等角校園導覽大圖海報（整合空拍、實景與手繪立體圖）。',
      '2024 甲辰龍年對折賀卡（外頁紅色宮燈、內頁米白水墨留白）。',
      '高職美工科三年的扎實字體、色彩與完稿訓練完整發揮。'
    ],
    metrics: [
      { label: '海報透視維度', value: '2.5D Isometric' },
      { label: '排版規範準確度', value: '100% 印刷完稿' }
    ],
    artTheme: 'infographic-poster'
  },

  // 4. Smart Hospital Sensing (PDF P.08-10)
  {
    id: 'smart-hospital-sensing',
    title: '智慧醫院匿名特徵感知與事件預警平臺',
    subtitleEn: 'SMART HOSPITAL SENSING',
    originalTitle: '智慧醫院匿名特徵感知與事件預警平臺',
    filterCategory: 'ai_systems',
    displayBadge: 'AI / Systems',
    tags: ['Python', 'YOLOv8n', 'ReID 匿名追蹤'],
    year: '2026',
    role: '特徵工程實作、影片測試與誤判除錯、統籌團隊會議記錄',
    tools: ['Python', 'YOLOv8n', 'OpenCV', 'CIELAB', 'RTX 5060'],
    leadParagraph: '醫院管制區防走失匿名追蹤系統。不留存人臉影像，改用 3D 骨架幾何比例、CIELAB 軀幹與下肢色彩及步態動力學認人，兼顧患者隱私與安全監控。',
    problem: '醫院管制區要防走失與異常滯留，但病患與長者對隱私極其敏感，依法規不能隨意儲存或辨識人臉生物特徵。',
    solutionAndMethods: '摒除人臉辨識，萃取 3D 骨架幾何比例、CIELAB 衣著色彩與步態特徵；異常對象另建立「危險事件特徵追蹤池」，在匿名前提下保留特徵向量供事後回溯。自錄 7 支影片、13,959 幀驗證。',
    highlights: [
      '動態可信度驗證閥門（Dynamic Validation Gate）：解決口罩遮蔽 (ΔE 暴增標 Unavailable)、側身旋轉 (肩寬投影近 0 加常數 ϵ)、走廊交錯 (腳踝漂移改用軀幹中心)。',
      '3 人交錯測試影片：未加閥門誤換 ID 約 9 次 → 啟動動態閥門後降到 5～6 次。',
      '比對閥值調校：ReID Threshold 0.65（初期 0.80 過嚴易漏配，調校至 0.65 平衡辨識率與召回率），連續 3～5 幀通過才發放正式 ID。',
      '滯留示警（Overstay Limit）：管制區逾時 90 幀（約 12 秒）即觸發預警推播。'
    ],
    metrics: [
      { label: '已實作特徵維度', value: '28 維 (目標 34 維)' },
      { label: '自錄測試影片', value: '7 支' },
      { label: '最長測試片段', value: '13,959 幀 (~7.7分)' },
      { label: '交錯誤換 ID 改善', value: '9次 → 5~6次' }
    ],
    artTheme: 'hospital-sensing',
    inventionAward: '高雄 KIDE 國際發明展（2026/11 出賽代表）',
    videoLink: 'https://youtu.be/DzUjcut3XwM',
    subPages: [
      { subtitle: '1/3 總覽與系統架構', description: '入口 QR Code 同意 → 攝影機取特徵 → 比對 → LINE Bot 通報（規劃串接中）。筆電 RTX 5060 順暢執行。' },
      { subtitle: '2/3 特徵工程與比對', description: '排除頭部干擾 (HEAD_EXCLUSION_RATIO = 0.25)，專注軀幹與下肢 CIELAB 色彩與 3D 骨架。' },
      { subtitle: '3/3 動態可信度驗證閥門', description: '針對遮蔽、側轉、視角交錯設計防護邏輯，將誤換 ID 頻率大幅壓制。' }
    ]
  },

  // 5. AI Rehabilitation System (PDF P.11)
  {
    id: 'ai-rehabilitation-system',
    title: '智慧居家復健系統及方法',
    subtitleEn: 'AI REHABILITATION SYSTEM',
    originalTitle: '智慧居家復健系統及方法（專利 I906167）',
    filterCategory: 'ai_systems',
    displayBadge: 'AI / Systems',
    tags: ['MediaPipe', '專利 I906167', 'SIIF 首爾'],
    year: '2026',
    role: '參展代表與視覺統整、負責出賽海報製作與成果彙整',
    tools: ['Python', 'MediaPipe', 'OpenCV', '關節座標演算法'],
    leadParagraph: '專利發明 I906167。非侵入式居家復健系統，透過一般網路攝影機即時取得全身關節座標，無須穿戴任何穿戴式感測器，畫面即時給予 0–100 分姿勢修正提示。',
    problem: '傳統居家復健缺乏專業指導容易姿勢錯誤導致二度傷害，且昂貴的穿戴式感測設備對長者極不友善。',
    solutionAndMethods: '利用一般網路攝影機搭配 MediaPipe 進行骨架追蹤，與臨床標準動作模型實時比對關節角度偏移量與位移差，即時換算 0–100 分並提示姿勢修正。',
    highlights: [
      '獲取中華民國發明專利：專利證號 I906167。',
      '入選首爾 SIIF 國際發明展（2026/12 代表出賽）。',
      '即時姿勢比對反饋：畫面即時標註動作偏差角度，長者在家即可獲得臨床標準對照。'
    ],
    metrics: [
      { label: '專利狀態', value: '專利 I906167' },
      { label: '國際展覽', value: '首爾 SIIF 入選' },
      { label: '評分機制', value: '0–100 即時評分' }
    ],
    artTheme: 'rehab-skeleton',
    inventionAward: '中華民國發明專利 I906167｜首爾 SIIF 2026/12 出賽'
  },

  // 6. AI Safety Monitoring (PDF P.12)
  {
    id: 'ai-safety-monitoring',
    title: '環境安全監測系統及方法',
    subtitleEn: 'AI SAFETY MONITORING',
    originalTitle: '夜間盲區自動補光與 Deep SORT 人群追蹤',
    filterCategory: 'ai_systems',
    displayBadge: 'AI / Systems',
    tags: ['Deep SORT', 'Edge AI', 'IPITEX 曼谷'],
    year: '2026',
    role: '參展代表與視覺統整、出賽海報製作與成果彙整',
    tools: ['Deep SORT', 'Microcontroller', 'Photocell Sensor', 'Edge AI'],
    leadParagraph: '夜間盲區與高風險管制場域的全天候監測系統。鏡頭即時串流搭配光敏自動補光與 Deep SORT 人群追蹤，偵測到爬牆或肢體異常時即刻推播警示。',
    problem: '傳統安防監視器在夜間低照度或人群交錯陰影時容易跟丟目標，且警衛人力有限無法 24 小時緊盯螢幕。',
    solutionAndMethods: '光敏感測器量測場域照度，微控制器依亮度調整補光強度；Deep SORT 在連續影像中持續追同一個人，人群交錯或有陰影時不易跟丟。',
    highlights: [
      '通過校內研發處審查入選國際發明展。',
      '即將代表團隊出賽曼谷 IPITEX（2027/02）與高雄 KIDE（2026/11）。',
      '軟硬體整合：自動補光電路配合連續追蹤，降低逆光與盲區誤判。'
    ],
    metrics: [
      { label: '出賽展覽', value: '曼谷 IPITEX' },
      { label: '出賽展覽 2', value: '高雄 KIDE' },
      { label: '追蹤核心', value: 'Deep SORT' }
    ],
    artTheme: 'safety-surveillance',
    inventionAward: '曼谷 IPITEX (2027/02) & 高雄 KIDE (2026/11) 入選'
  },

  // 7. Nike Supply Chain (PDF P.14)
  {
    id: 'nike-supply-chain',
    title: 'Nike 全球供應鏈管理策略',
    subtitleEn: 'NIKE GLOBAL SUPPLY CHAIN STRATEGY',
    originalTitle: 'Nike 全球供應鏈管理｜策略配適、風險評估與韌性轉型',
    filterCategory: 'graphic',
    displayBadge: 'Graphic',
    tags: ['SCM', 'Fisher Matrix', 'Risk Map'],
    year: '2025',
    role: '財務報表比對、供應鏈風險熱力圖繪製、策略建議統整',
    tools: ['Nike 10-K & 財報', 'Fisher 矩陣', 'S&OP', '風險矩陣分析'],
    leadParagraph: '剖析 Nike 從原料到零售 5 個環節的供應鏈韌性。運用 Fisher 矩陣比對基本款與限量潮鞋需求，製作風險熱力圖提出近岸外包策略。',
    problem: 'Nike 產品前置時間長達 6 個月，換款快易產生高額存貨跌價；且產能過度集中單一國家，地緣風險居高不下。',
    solutionAndMethods: '依據 Nike FY2022–FY2025 10-K 及 FY2026 Q3 財報深入分析，指出毛利率由 44.6% 降至 40.2% 之主因，提出混合型供應鏈與墨西哥/印度近岸外包解方。',
    highlights: [
      'Fisher 矩陣分析：基本款適合效率型供應鏈，潮流限量款適合敏捷回應型，Nike 需採混合型架構。',
      '毛利率走勢洞察：FY24 44.6% → FY25 42.7% → FY26 Q3 40.2%，主因北美關稅上升與庫存促銷。',
      '產能集中度風險：越南產能占 51%，存在單點斷鏈隱憂，提出近岸轉型與聯合 S&OP 策略。'
    ],
    metrics: [
      { label: '越南產能集中度', value: '51%' },
      { label: '前置期 (Lead Time)', value: '約 6 個月' },
      { label: 'FY26 Q3 毛利率', value: '40.2%' }
    ],
    artTheme: 'supply-chain'
  },

  // 9. SmartFit Business & Finance (PDF P.15)
  {
    id: 'smartfit-business-plan',
    title: 'SmartFit 智慧健身鏡營運規劃',
    subtitleEn: 'SMARTFIT BUSINESS & FINANCE',
    originalTitle: 'SmartFit 智慧健身鏡營運規劃與損益兩平試算',
    filterCategory: 'graphic',
    displayBadge: 'Graphic',
    tags: ['商業計畫書', '36頁完整案', '損益兩平'],
    year: '2025',
    role: '獨立完成 36 頁商業計畫書：內容撰寫、財務推估與簡報視覺設計',
    tools: ['商業計畫書', '財務敏感度分析', '損益兩平模型', 'PPT/Figma'],
    leadParagraph: '獨立完成 36 頁完整智慧硬體商業計畫書。規劃產品定價梯隊、ODM 製造流程、三年財務營收推估與損益兩平點試算。',
    problem: '居家健身硬體開發初期投資巨大，若無嚴密的毛利架構與訂閱分層，容易面臨現金流斷裂。',
    solutionAndMethods: '規劃硬體銷售結合月訂閱的雙軌營收模式。標準版定價 NT$39,800，單位毛利 NT$21,800，精確算出初期投入 700–800 萬下 370 台之損益平衡門檻。',
    highlights: [
      '獨立完成 36 頁商業企劃：涵蓋研發、ODM 打樣、量產 6 步製造流程與品質管理。',
      '精確財務模型：入門版 29,800｜標準版 39,800｜高級版 49,800｜線上課程 399/月。',
      '三年營收階梯目標：第 1 年 600 萬 → 第 2 年 1,200 萬 (+100%) → 第 3 年 2,000 萬 (+66.7%)。'
    ],
    metrics: [
      { label: '計畫書規模', value: '獨立完成 36 頁' },
      { label: '損益平衡銷量', value: '370 台' },
      { label: '三年營收目標', value: '2,000 萬元' },
      { label: '單位毛利', value: 'NT$21,800' }
    ],
    artTheme: 'smartfit-mirror'
  },

  // 10. Ancient Luoyang RWD Web (PDF P.18)
  {
    id: 'ancient-luoyang-rwd',
    title: '古都洛陽 RWD 響應式網頁',
    subtitleEn: 'ANCIENT LUOYANG RWD WEB',
    originalTitle: '古都洛陽介紹站｜HTML/CSS 響應式排版設計',
    filterCategory: 'web_dev',
    displayBadge: 'Web Dev',
    tags: ['HTML5', 'CSS3', 'RWD 1440/375'],
    year: '2024',
    role: '前端切版、RWD 響應式設計、純手寫 HTML/CSS',
    tools: ['HTML5', 'CSS3', 'Media Queries (RWD)'],
    leadParagraph: '古都洛陽文化介紹網站。同一份內容同時針對桌機 (1440px) 與手機 (375px) 視窗進行個別排版與斷點適配，呈現純手寫前端切版功力。',
    problem: '傳統文化主題網頁容易在手機端出現水平捲動條或文字擁擠折行。',
    solutionAndMethods: '採用語意化 HTML 標籤與彈性 Flexbox 排版，在 1440px 桌機端展示寬闊橫幅，在 375px 行動端重構成單手可瀏覽的乾淨卡片流。',
    highlights: [
      '嚴謹斷點適配：Desktop 1440px 與 Mobile 375px 雙端排版。',
      '純手寫原生 HTML/CSS 切版，代碼結構清晰，無第三方框架負擔。'
    ],
    metrics: [
      { label: '桌機基準寬', value: '1440px' },
      { label: '手機基準寬', value: '375px' },
      { label: '技術', value: '純手寫 HTML/CSS' }
    ],
    artTheme: 'rwd-luoyang'
  },

  // 11. 3D White Model (PDF P.22)
  {
    id: '3d-white-model',
    title: '3D 白模結構建模與空間幾何配置',
    subtitleEn: '3D WHITE MODEL SPATIAL SETUP',
    originalTitle: '3D 白模結構建模與空間幾何配置',
    filterCategory: 'illustration',
    displayBadge: 'Illustration',
    tags: ['3ds Max', 'Clay White', '空間幾何'],
    year: '2023',
    role: '自行建模與空間配置',
    tools: ['3ds Max', 'Clay / Viewport Modeling'],
    leadParagraph: '期末聖誕主題場景白模建模。自行構思空間幾何配置，在 3ds Max 中以純白模結構展現空間比例與造型素養。',
    problem: '在未上材質與色彩前，如何僅靠幾何體積、比例與光影配置傳達場景主題張力。',
    solutionAndMethods: '以 Clay 模式細緻推敲梯田式展台、幾何立體聖誕樹與背景牆面，展現高職美工科訓練帶來的紮實三維造型能力。',
    highlights: [
      '純幾何結構空間推演，展現三維結構美感。',
      '無材質輔助下的立體空間比例掌控。'
    ],
    metrics: [
      { label: '軟體工具', value: '3ds Max' },
      { label: '展示模式', value: 'Clay / Viewport' }
    ],
    artTheme: 'white-model-3d'
  }
];

export const HONORS_AWARDS: HonorAward[] = [
  {
    event: '高雄 KIDE 國際發明暨設計展（2026/11 出賽）',
    dateOrYear: '2026/11',
    project: '智慧醫院匿名特徵感知與事件預警平臺',
    role: '參展代表與視覺統整、負責出賽海報製作與成果彙整',
    note: '通過校內研發處嚴格審查入選，代表團隊出賽發表',
    type: 'international'
  },
  {
    event: '首爾 SIIF 國際發明展（2026/12 出賽）',
    dateOrYear: '2026/12',
    project: '智慧居家復健系統及方法（中華民國發明專利 I906167）',
    role: '參展代表與視覺統整、負責出賽海報製作與成果彙整',
    note: '團隊專利研發，入選首爾發明展代表出賽',
    type: 'international'
  },
  {
    event: '曼谷 IPITEX 國際發明展（2027/02 出賽）／高雄 KIDE',
    dateOrYear: '2027/02',
    project: '環境安全監測系統及方法',
    role: '參展代表與視覺統整、負責出賽海報製作與成果彙整',
    note: '通過校內審查入選，即將赴曼谷與高雄出賽',
    type: 'international'
  },
  {
    event: 'EEC 企業電子化軟體應用師 - ERP（鼎新配銷模組）',
    dateOrYear: '2024',
    project: '企業資源規劃 ERP 專業證照',
    role: '合格認證',
    type: 'certification'
  },
  {
    event: 'EEC 企業電子化助理規劃師',
    dateOrYear: '2024',
    project: '企業電子化專業認證',
    role: '合格認證',
    type: 'certification'
  },
  {
    event: 'TQC-DK 電子商務概論',
    dateOrYear: '2023',
    project: '電子商務核心知識認證',
    role: '專業認證合格',
    type: 'certification'
  },
  {
    event: 'ITS 網路安全管理核心能力',
    dateOrYear: '2023',
    project: 'IT Specialist - Network Security',
    role: '國際專業認證',
    type: 'certification'
  },
  {
    event: '資管系證照達人競賽 第三名',
    dateOrYear: '2024',
    project: '亞東科技大學資訊管理系',
    role: '系級競賽個人獲獎',
    type: 'campus'
  },
  {
    event: '教學助理 TA 證書／TA 培訓認證',
    dateOrYear: '2024',
    project: '教學卓越計畫',
    role: '通過培訓合格',
    type: 'campus'
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    period: '2020 – 至今',
    company: '萊爾富超商',
    title: '門市人員',
    durationOrScope: '5 年 8 個月長期經歷',
    description: '長期第一線門市服務，培養高度耐心、細膩商品與庫存管理意識。',
    details: [
      '長期負責收銀結帳、補貨上架、商品陳列整理、定期庫存盤點與即時顧客服務。',
      '培養高壓環境下穩定作業、細心點算與同理心溝通能力。'
    ]
  },
  {
    period: '2024 – 2026',
    company: '亞東科技大學',
    title: '教學助理 (TA) & 系辦行政工讀',
    durationOrScope: '11 個月（2025/04–2026/02）',
    description: '支援教學與系所行政運作，發揮美工與資管雙重專長。',
    details: [
      '擔任《計算機概論》教學助理，協助學生解題與上機實作。',
      '支援《多元跨域教師社群》：出缺勤數據統計、行政文書處理。',
      '負責系所宣傳海報視覺設計，兼具專業行政與美感統整。'
    ]
  },
  {
    period: '2023 寒假',
    company: '教育優先區寒假營隊',
    title: '教案企劃 & 分組輔導員',
    durationOrScope: '全營 60 人，分組帶領 10 位學員',
    description: '參與營隊教案編寫，並獨立開課講授翻書動畫創意課程。',
    details: [
      '全營共 60 位學員，擔任分組輔導員帶領 10 位學員完成各項營隊挑戰。',
      '獨立開發並講授《翻書就好不翻臉》翻書動畫創意課程與實體教案。'
    ]
  },
  {
    period: '2026',
    company: '旭軟電子科技',
    title: '生產線作業員',
    durationOrScope: '製造業產線實務',
    description: '深入科技硬體產線現場，理解精密標準作業程序 (SOP)。',
    details: [
      '依照 PCB 軟板產線標準作業程序 (SOP) 嚴謹完成現場作業。',
      '配合產線流水線排程、品質目檢與團隊工序協同分工。'
    ]
  }
];

export const NEXT_ROADMAP: NextDirection[] = [
  {
    title: '研究所方向 (Research)',
    subtitle: '電腦視覺匿名特徵擷取演算法',
    items: [
      '不用人臉生物特徵，攻克在遮擋、側身、視角大幅切換時的穩定個體辨識。',
      '深入多目標追蹤 (MOT) 與高維特徵匹配 (ReID) 演算法優化。'
    ]
  },
  {
    title: '就業方向 (Career)',
    subtitle: '後端與資料庫系統整合工程',
    items: [
      '將邊緣端 AI 影像感知結果無縫介接至後端關聯式資料庫 (SQL)。',
      '串接即時自動化警報通報流程 (如 LINE Bot、Webhook)，讓數據真正落地應用。'
    ]
  },
  {
    title: '專案進行中 (In Progress)',
    subtitle: '智慧醫院系統後續演進',
    items: [
      '特徵維度擴展：現行 28 維 → 規劃升級至 34 維完整規格。',
      '髮型與輪廓特徵模型訓練（目前以 HEAD_EXCLUSION_RATIO = 0.25 暫時排除）。',
      'LINE Bot 警報通報模組實機串接。'
    ]
  }
];
