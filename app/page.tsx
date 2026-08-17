"use client";

import { useEffect, useRef, useState } from "react";

const nav = [
  ["home", "首页"],
  ["experience", "个人经历"],
  ["interests", "作品集"],
  ["gallery", "兴趣爱好"],
  ["contact", "联系我"],
] as const;

const experience = [
  { tab: "教育经历", years: "2021 — 2022", title: "新闻与传播", text: "在文字、影像与采访中练习观察世界。开始相信，好的表达应该真诚、清楚，也保留温度。", image: "/photos/tropical-coast.png", color: "cream", pos: "left center" },
  { tab: "实习经历", years: "2023 — 2024", title: "内容与实践", text: "参与校园媒体与项目实践，从策划、拍摄到落地，把脑海中的想法一步步变成真实作品。", image: "/photos/tropical-coast.png", color: "wine", pos: "right center" },
  { tab: "项目经历", years: "2025 — 至今", title: "新的旅程", text: "继续学习，继续出发。希望遇见不同的人和地方，也期待把兴趣发展成更长久的方向。", image: "/photos/tropical-coast.png", color: "teal", pos: "center bottom" },
];

const educationHistory = [
  {
    number: "01",
    school: "上海大学",
    years: "2024 — 2027",
    programme: "新闻传播学院 · 新闻传播学专业",
    degree: "硕士研究生",
    courses: "新闻传播理论研究、新闻传播历史研究、马克思主义新闻学、媒介技术与社会、传播学定量研究、数字记忆研究、数字媒介研究关键词、媒介与文化史",
    photos: [
      { src: "/photos/education/shanghai-university-campus.jpg", alt: "上海大学校园春日风光" },
      { src: "/photos/education/shanghai-university-red-building.jpg", alt: "树荫下的上海大学红砖教学楼" },
    ],
  },
  {
    number: "02",
    school: "东北师范大学",
    years: "2020 — 2024",
    programme: "传媒科学学院（新闻学院） · 广播电视编导专业",
    degree: "本科生",
    courses: "文化基础、艺术基础、传播学概论、新媒体概论、社会心理学、市场调查与分析、新闻采访与写作、数字媒体艺术理论、中外美学史、新媒体写作",
    photos: [
      { src: "/photos/education/northeast-normal-clocktower.jpg", alt: "东北师范大学校园钟楼" },
      { src: "/photos/education/northeast-normal-campus.jpg", alt: "东北师范大学校园与教学楼" },
    ],
  },
] as const;

const educationThoughts = [
  [
    "加缪说：“在隆冬，我终于知道，我身上有一个不可战胜的夏天。”我一直以为，我的夏天被困在上海漫长的梅雨季里。",
    "闷热、潮湿、拥挤是我对这座城的初印象。",
    "初来上海，是在 24 年的春天。彼时的我刚保完研不久，欢欢喜喜地踏入魔都，想着提前和这座未来三年的落脚地打个照面。那年春天阴雨连绵，淅淅沥沥的小雨接连下了半个月。上海的雨很细，它总是黏在空气里，落在头发上、肩膀上、鞋面上，也落在人的情绪里。身边的姐姐告诉我，这还只是开胃小菜，等到梅雨季，才是真正的令人绝望。",
    "从那个时候起，我就对梅雨充满敬畏，也期待体验一场，真真正正的梅雨季。",
    "后来也是赶巧，我的每一段实习都在梅雨季。上下班的路上，地铁站里人潮涌动、摩肩擦踵，大家都行色匆匆。雨滴顺着伞滴落在我的鞋面，我盯着被晕开的水花，感觉自己好像变成了一颗苔藓植物，竟然在这样潮湿的城市里，生出几缕归属感。",
    "梅雨季只有一个月，苔藓植物也需要阳光。",
    "阳光穿过满城的梧桐树，大大的叶子被风吹落，落在街角、店铺与每一个角落，时不时也会落在我的头顶。我被突然掉在头顶的梧桐树叶吓了几跳，竟开始期待，这一敲会不会让我顿悟成为学术天才。我肆无忌惮地呼吸着桂花的香气，抱着电脑躺在学院门口的大草坪上，沐浴在天地光华下，日光之下万物鲜妍可爱。",
    "原来上海没有永恒的雨季，只有久违的艳阳天。",
  ],
  [
    "从毕业离开东师的那一刻，对长春的眷恋就像一颗种子深埋在血液里，在每一个想家的夜晚肆意疯长。从此，我无比期盼这颗种子在未来的某一天，能够扎根于此、生长于此……",
    "我成长于小县城。",
    "初入东师，浑身上下都是不谙世事的天真与独身开始新生活的期待。本来还在担心自己会不会无法融入，但东师真的无比包容，包容我的想法、创意、天真与热情，也包容我的鲁莽、粗糙、敏感与失意。我的一切情绪在这里都被稳稳托住，就像一双坚实温暖的手，永远在你的背后为你支撑起一切。毕业后，我和本科同学一起戏称东师为“西施”，无比美好纯粹、惹人怀念的“西施”。",
    "我常常想，我对东师的热爱是不是来自于故土的亲切感。",
    "我不知道该如何形容东北孩子对故乡的眷恋，不过大抵就是寒冬冷冽的风、傍晚似血的残阳、广袤无垠的黑土地、老重工业基地的衰败萧条与民风的热情豪爽。我沉迷于雪花扫过脸颊最后落在地上的轻柔，热爱低矮蓝天中每一朵奇形怪状的云朵，期待归家途中从飞机上望下去一览无余的平原，也享受身边人朴实无华的每一句乡音。",
    "我喜欢这里的太多太多了，每一股喜欢都涓涓流淌，最后汇聚成热烈的激流。我的每一次思念都无处遁形，激流拍打着我，一次，又一次……",
  ],
] as const;

const internshipHistory = [
  {
    number: "01",
    company: "字节跳动",
    business: "抖音电商",
    role: "头部作者运营",
    years: "2026.03 — 2026.07",
    highlights: [
      { title: "618大促运营", text: "协助大促 POC 负责部门 618 全周期运营，核心指标达成 103%；负责 KA 作者分层运营、作者资源摸排、异常场次归因；跟进大促五阶段 700+ 重点直播，覆盖支付 GMV 约 50 亿元，推动经营优化。" },
      { title: "耐消专项", text: "独立搭建品牌达人合作库，完成 300+ 达人摸排及 100+ 意向达人拓展，推动 700+ 场品牌合作直播，覆盖支付 GMV 超 14 亿元；策划线下商达撮合会，对接 100+ 品牌及 100+ 达人资源，促进品牌与达人合作。" },
      { title: "品类营销活动", text: "独立负责智能装备、清凉节专项运营，负责类目资源协调、活动信息宣发、经营监控及复盘分析；落地 60+ 场头部达人直播，推动品类目标达成率分别达 107% 和 104%。" },
      { title: "AI运营提效", text: "基于 AIME 搭建经营数据实时推送模板，实现经营指标自动汇总及推送，提升团队经营分析效率。" },
    ],
    photos: [
      { src: "/photos/internship/bytedance-team-polaroid.jpg", alt: "字节跳动团队拍立得合影" },
      { src: "/photos/internship/bytedance-618-team.jpg", alt: "抖音电商 618 团队合影" },
    ],
  },
  {
    number: "02",
    company: "蔚来",
    business: "NIO App",
    role: "活动运营 · 内容运营",
    years: "2025.05 — 2025.07",
    highlights: [
      { title: "活动运营", text: "策划并落地 NIO App 线上营销活动数 5+（账号：粉丝福利官多多），设计抽奖、任务打卡及互动玩法，实现用户留资 1w+、锁单 80+；持续监测曝光、参与及转化等核心指标，结合数据表现优化活动机制。" },
      { title: "内容与用户运营", text: "围绕用户购车全生命周期策划 UGC 内容，联动 NIO App、社交媒体及社群开展整合运营，建立用户互动机制，持续提升社区内容活跃度及用户参与度。" },
      { title: "经营分析", text: "监测活动核心指标达成情况，结合用户行为与内容表现进行分析，迭代内容方向与运营策略，持续优化内容分发机制与投放策略，提升内容传播效率与用户转化效果并强化增长表现。" },
    ],
    photos: [
      { src: "/photos/internship/nio-badge.jpg", alt: "蔚来实习工牌" },
      { src: "/photos/internship/nio-office.jpg", alt: "蔚来办公园区" },
    ],
  },
  {
    number: "03",
    company: "阳狮",
    business: "内容营销",
    role: "内容营销策划",
    years: "2024.02 — 2024.04",
    highlights: [
      { title: "内容策略", text: "洞察影视剧、综艺及短剧营销趋势，筛选优质 IP 资源并参与输出内容营销策略方案、竞品分析及媒介资源评估报告，为客户在不同内容场景下的投放决策提供结构化参考。" },
      { title: "品牌营销", text: "联系并协调各大咖啡品牌与其他知名 IP，推动客户欧莱雅与咖啡品牌的联名合作，打造创新营销方案。" },
      { title: "数据分析", text: "围绕合作短剧及内容投放项目，持续跟踪播放量、互动率、完播率及带货转化等核心指标，输出投放效果复盘报告与优化建议，为后续内容投放策略迭代、预算分配与资源优先级调整提供数据支持。" },
    ],
    photos: [
      { src: "/photos/internship/publicis-event.jpg", alt: "阳狮集团品牌活动现场" },
      { src: "/photos/internship/publicis-team.jpg", alt: "阳狮集团活动团队合影" },
    ],
  },
] as const;

const internshipThoughts = [
  ["关于这段实习的思考与感悟，正在慢慢整理中。"],
  ["关于第二段实习经历的思考与感悟，正在慢慢整理中。"],
  ["关于第三段实习经历的思考与感悟，正在慢慢整理中。"],
] as const;

const projectHistory = [
  {
    number: "01",
    title: "小红书个人账号运营",
    subtitle: "账号 ID：十九河道",
    years: "2023.10 — 至今",
    details: [
      { title: "内容策划与账号运营", text: "独立运营小红书游戏类内容账号，围绕游戏体验、玩法分享、入坑建议等方向进行选题策划与图文创作。结合平台用户兴趣与真实游戏体验，优化标题、封面和正文结构，提升内容在小红书场景中的吸引力与传播效果。" },
      { title: "视觉呈现与内容制作", text: "负责笔记文案撰写、图片排版、封面设计与发布优化，注重内容的视觉统一性和阅读体验。依托视觉设计基础，提升笔记的第一眼呈现效果，使内容表达更清晰、更具辨识度。" },
      { title: "数据复盘与用户洞察", text: "累计发布 20 余篇图文内容，获得 30 万以上浏览量和 1.9 万以上赞藏。通过关注点赞、收藏、评论等互动数据，分析用户偏好的游戏类型与内容角度，并据此调整后续选题方向，提升内容策划、用户洞察和数据复盘能力。" },
    ],
    photos: [
      { src: "/photos/projects/xiaohongshu-account.png", alt: "小红书账号十九河道的主页与内容数据" },
    ],
  },
  {
    number: "02",
    title: "编导专业联合创作",
    subtitle: "校园影视内容项目",
    years: "2021.09 — 2023.12",
    details: [
      { title: "项目策划与统筹执行", text: "参与校园影视内容项目策划与制作，担任组长、制片及后期成员，负责前期选题策划、拍摄方案制定、脚本沟通以及项目整体推进。协调团队成员分工，推动影视作品从创意构思到拍摄制作、后期交付的完整落地。" },
      { title: "资源协调与团队管理", text: "负责演员、拍摄场地及外部合作资源对接，根据项目进度协调人员安排和拍摄流程，保障各环节顺利衔接。项目执行期间累计沟通 30 余家商家，促成 5 家合作，获得 5000 余元赞助支持，为项目开展提供资源保障。" },
      { title: "内容制作与项目复盘优化", text: "深度参与脚本完善、现场拍摄、后期剪辑和成片优化等环节，根据传播需求调整内容表现形式，提升作品完整度和传播效果。通过项目实践，培养了影视内容策划、团队协作、资源整合和项目管理能力。" },
    ],
    photos: [
      { src: "/photos/projects/film-team.jpg", alt: "编导专业联合创作团队合影" },
      { src: "/photos/projects/film-shoot.jpg", alt: "校园影视项目夜间拍摄现场" },
    ],
  },
  {
    number: "03",
    title: "学院公众号运营",
    subtitle: "账号 ID：东师传媒",
    years: "2020.09 — 2023.09",
    details: [
      { title: "内容运营", text: "参与学院官方微信公众号“东师传媒”的日常运营与内容建设，负责校园动态、师生风采、活动报道等主题内容策划、素材采集、采访撰稿和图文编辑。累计输出原创图文 10 余篇，总阅读量超过 1 万，具备从选题规划到内容发布的完整运营经验。" },
      { title: "选题策划", text: "参与编辑部选题讨论，结合校园热点、受众兴趣和传播效果优化内容方向，对文章标题、内容结构和呈现形式进行调整。通过持续复盘内容反馈，提高选题质量，选题建议采纳率达到 90% 以上。" },
      { title: "团队协作", text: "在团队运营过程中，负责协调稿件采编流程，与采访、编辑等成员协作推进内容生产。通过校园媒体实践，提升了新闻敏感度、文字表达能力、内容策划能力以及团队协同推进能力。" },
    ],
    photos: [
      { src: "/photos/projects/dongshi-media.jpg", alt: "东师传媒微信公众号内容列表" },
    ],
  },
  {
    number: "04",
    title: "“快通”——智慧助力老年人接轨数字化生活",
    subtitle: "创新创业项目",
    years: "2022.07",
    details: [
      { title: "项目策划", text: "作为创新创业项目组长，围绕老年群体数字化生活需求开展项目设计，聚焦智能手机使用、线上支付、数字政务、出行服务等场景中的数字鸿沟问题。通过文献梳理、问卷调研和竞品分析，挖掘用户痛点，并形成面向老年人的智能化辅助服务方案。" },
      { title: "市场分析与方案设计", text: "负责项目竞争态势分析、营销策划内容撰写和方案优化，运用 SWOT 分析等方法评估项目发展方向。同时参与设计“老年人智能手机使用数字鸿沟”调查问卷，并基于 SPSS 完成数据整理与分析，为用户画像构建、服务定位和后续方案调整提供数据支持。" },
      { title: "项目落地与成果转化", text: "统筹团队推进项目调研、方案完善和展示材料制作，最终形成较完整的创新创业项目方案。项目获得 2022 年东北师范大学“互联网+”大学生创新创业大赛铜奖，以及第十三届“挑战杯”东北师范大学大学生创业计划竞赛三等奖，提升了项目管理、团队协作和商业方案设计能力。" },
    ],
    photos: [],
  },
  {
    number: "05",
    title: "优秀志愿者",
    subtitle: "疫情防控志愿服务",
    years: "2022.05",
    details: [
      { title: "疫情防控志愿服务参与", text: "参与 2022 年疫情防控志愿服务工作，积极配合学校开展疫情防控相关任务，协助完成核酸检测现场组织、人员引导、信息登记等工作，保障疫情防控流程有序开展。" },
      { title: "现场协调与服务保障", text: "在志愿服务过程中，负责现场秩序维护、人员沟通协调和信息统计等工作，根据现场需求及时调整安排，提升了面对复杂场景时的沟通协调能力和问题处理能力。" },
      { title: "责任意识与团队协作提升", text: "在疫情防控志愿服务期间，与团队成员密切配合，共同完成阶段性服务任务。该经历强化了服务意识、团队协作能力和责任担当，也培养了快速响应和执行落地能力。" },
    ],
    photos: [
      { src: "/photos/projects/volunteer-certificate.png", alt: "东北师范大学优秀抗疫志愿者荣誉证书" },
    ],
  },
  {
    number: "06",
    title: "东师青年报社视觉设计中心",
    subtitle: "视觉设计中心副部长",
    years: "2020.09 — 2022.09",
    details: [
      { title: "视觉内容策划", text: "担任东师青年报社视觉设计中心副部长，负责校园人物采访、专题报道和品牌宣传等内容的视觉策划与呈现。参与选题讨论、采访执行、素材整合、版式设计和内容审核，提升校园媒体内容的传播效果和视觉品质。" },
      { title: "团队管理", text: "负责视觉设计中心日常运营，统筹团队成员招募培养、任务分配、进度管理和成果审核。协调采编、摄影、新媒体等多个部门开展协作，推动内容生产流程顺畅运行，提升团队整体执行效率。" },
      { title: "视觉设计", text: "深度参与校园媒体平台内容建设，围绕不同传播主题完成视觉方案设计与素材优化，持续提升图文内容的呈现质量。通过长期媒体实践，积累了内容策划、视觉表达、项目协同和团队管理经验。" },
    ],
    photos: [],
  },
] as const;

const nioCampaignDesignTitle = "蔚来线上活动图片及海报设计";
const nioCampaignDesignBackground = "围绕蔚来粉丝专属试驾活动与夏日营销主题，为活动传播提供统一、清晰且具有出行氛围的视觉内容。";
const nioCampaignDesignContent = "完成车型场景图、盲盒主视觉、社交媒体方图及竖版活动海报等多尺寸视觉设计，将试驾福利、新疆旅行和夏日盲盒等核心信息转化为适配不同传播场景的图片素材。";

const portfolioItems = [
  {
    number: "01",
    title: "《繁花》招商与广告植入案例分析",
    category: "案例分析",
    cover: "/portfolio/covers/blossom-case.jpg",
    src: "/portfolio/blossom-case.jpg",
    background: "2024年，《繁花》热播并引发大量讨论，剧中的品牌植入也成为影视营销案例。本案例以剧中合作品牌为研究对象，结合播放表现、广告投放、品牌曝光和社交平台热度，分析影视内容与品牌传播之间的结合方式。",
    content: "案例整理《繁花》的招商情况和品牌合作信息，通过数据图表梳理广告投放规模、合作品牌数量及传播表现。同时选取百事可乐、光明乳业、雅诗兰黛等品牌植入片段，分析产品如何融入人物关系、剧情发展和时代背景，并结合热搜话题、短视频讨论等内容，观察剧集热度如何带动品牌关注。",
  },
  {
    number: "02",
    title: "短剧内容植入与投后数据复盘分析",
    category: "投后复盘",
    cover: "/portfolio/covers/short-drama-postbuy.jpg",
    src: "/portfolio/short-drama-postbuy.jpg",
    background: "短剧凭借节奏快、传播范围广等特点，逐渐成为美妆品牌进行内容营销的重要渠道。本案例以欧莱雅集团产品在抖音短剧中的植入项目为对象，选取《逆旅》《重生后我平等的创飞每个人》《本命少女合租日记》三部短剧，分析内容特点与品牌传播效果。",
    content: "案例从项目介绍、剧情特点、产品植入和用户分析四个方面展开。通过整理短剧账号数据、播放表现和产品露出方式，分析品牌在剧情中的呈现效果；同时结合观众年龄、性别、地域以及点赞、评论、分享等互动数据，判断短剧用户与品牌目标人群的匹配程度，为后续内容投放提供参考。",
  },
  {
    number: "03",
    title: "2024年1—3月短剧市场规模与趋势分析",
    category: "行业研究",
    cover: "/portfolio/covers/short-drama-market-q1.jpg",
    src: "/portfolio/short-drama-market-q1.jpg",
    background: "2024年初，短剧市场继续保持增长，平台竞争、内容类型和商业模式不断变化。本报告结合市场数据、平台表现和代表项目，对短剧行业的发展情况进行梳理。",
    content: "报告首先整理短剧市场规模、用户付费情况、平台竞争情况和热门项目表现，通过数据分析行业整体发展状态；随后从题材变化、用户需求、平台布局、内容出海和商业投放等方面总结市场趋势。报告呈现了短剧行业的发展特点，为内容策划、项目判断和市场分析提供参考。",
  },
  {
    number: "04",
    title: "华伦天奴 Spike Lipstick 内容合作项目提案",
    category: "内容提案",
    cover: "/portfolio/covers/valentino-spike-proposal.jpg",
    src: "/portfolio/valentino-spike-proposal.jpg",
    background: "本策划案针对华伦天奴 Spike Lipstick 新品上市需求，希望通过内容合作提升产品关注度，并吸引年轻消费者。结合口红产品特点、品牌风格和目标用户兴趣，寻找适合品牌传播的音乐、潮流和综艺资源。",
    content: "方案从产品卖点、传播目标和合作方向进行分析，提出适合新品推广的内容选择标准。项目推荐部分重点研究TMEA腾讯音乐娱乐盛典、说唱节目、乐队综艺等资源，从节目影响力、用户特点、传播场景和品牌契合度等方面进行比较，为品牌选择合作项目提供决策依据。",
  },
  {
    number: "05",
    title: "Haircare品牌综艺内容合作项目推荐",
    category: "项目推荐",
    cover: "/portfolio/covers/haircare-variety-recommendation.jpg",
    src: "/portfolio/haircare-variety-recommendation.jpg",
    background: "2024年综艺市场持续变化，品牌在选择合作节目时更加关注内容特点与用户需求是否匹配。本策划案围绕Haircare品类营销需求，结合年度综艺趋势和平台热门项目，筛选适合品牌推广的内容资源。",
    content: "方案梳理2024年综艺市场变化，分析不同平台的热门节目和内容方向，并重点评估《一起露营吧》《毛雪汪》《令人心动的offer》《种地吧2》《怦然心动20岁》等项目。分析内容包括节目定位、嘉宾特点、观众画像、植入空间等，为品牌后续综艺合作选择提供参考。",
  },
  {
    number: "06",
    title: "巴欧2024 Content Annual Plan",
    category: "年度规划",
    cover: "/portfolio/covers/bao-content-annual-plan.jpg",
    src: "/portfolio/bao-content-annual-plan.jpg",
    background: "随着内容营销竞争加剧，品牌在选择剧综合作资源时，需要综合考虑平台影响力、节目特点和用户匹配程度。本策划案针对巴欧年度内容合作需求，对主要视频平台的重点项目进行分析。",
    content: "方案比较腾讯视频、爱奇艺、优酷、芒果等平台的内容资源和合作方式，筛选适合品牌传播的剧集和综艺项目。通过分析项目类型、内容风格、嘉宾阵容、用户特点和品牌植入方式，对不同项目的合作价值进行评估，为年度内容投放规划提供参考。",
  },
  {
    number: "07",
    title: "巴黎欧莱雅2024内容合作趋势分析与项目推荐",
    category: "趋势分析",
    cover: "/portfolio/covers/loreal-content-trends.jpg",
    src: "/portfolio/loreal-content-trends.jpg",
    background: "2024年，剧集和综艺依然是品牌内容营销的重要渠道，各平台持续推出不同类型的热门项目。本策划案结合巴黎欧莱雅的传播需求，分析内容市场变化，并筛选适合品牌合作的项目资源。",
    content: "方案梳理户外体验、音乐竞演、都市爱情、女性题材等热门内容方向，并分析《奔赴！万人现场》《怦然心动20岁4》《半熟男女》《春色寄情人》《玫瑰故事》《我的阿勒泰》等项目。从平台资源、节目特点、上线时间、合作方式和品牌植入空间等方面进行评估，同时参考竞品案例，总结不同品牌在节目露出和社交传播中的应用方式。",
  },
  {
    number: "08",
    title: "兰蔻×NBA 2024情人节合作结案报告",
    category: "结案报告",
    cover: "/portfolio/covers/lancome-nba-report.jpg",
    src: "/portfolio/lancome-nba-report.jpg",
    background: "该项目结合兰蔻情人节营销需求，通过NBA赛事内容与节日消费场景，提升品牌关注度和产品认知。本报告对项目执行效果进行整理和分析，复盘品牌合作表现。",
    content: "报告整理项目曝光数据、互动情况、平台传播效果和用户反馈，分析不同传播渠道和内容形式的表现差异。同时结合达人内容、赛事场景和节日营销素材，梳理品牌如何借助NBA合作扩大影响力，并提升消费者对产品的关注。",
  },
  {
    number: "09",
    title: "巴黎欧莱雅×快手短剧营销共建案",
    category: "营销共建",
    cover: "/portfolio/covers/kuaishou-short-drama.jpg",
    src: "/portfolio/kuaishou-short-drama.jpg",
    background: "2024年短剧内容持续受到用户关注，凭借强情节和高互动特点，成为品牌探索内容营销的新场景。本方案结合巴黎欧莱雅品牌需求，对快手短剧合作机会进行分析。",
    content: "方案首先分析快手短剧的内容特点、用户基础和商业化优势，进一步研究美妆品牌进入短剧场景的适合方式。方案提出明星定制剧、星芒S+短剧、剧场冠名等合作形式，并结合剧情植入、互动玩法和社交传播方式，探索品牌如何借助短剧内容提升用户关注和产品认知。",
  },
  {
    number: "10",
    title: "粉丝专属｜试驾得盲盒，赢9天8晚新疆之旅",
    category: "线上活动",
    cover: "/portfolio/covers/nio-xinjiang-article.jpg",
    src: "/portfolio/nio-xinjiang-article.jpg",
    background: "为提升用户试驾体验和品牌互动，蔚来面向粉丝用户推出专属试驾活动。活动结合夏日出行场景，通过试驾体验、福利奖励和旅行主题玩法，吸引用户参与并增强品牌好感。",
    content: "围绕用户参与规则、试驾流程、福利设置和传播内容进行设计。用户完成首次试驾预约后，可获得盲盒抽奖机会，奖品涵盖新疆深度旅行、露营装备、品牌周边等，将车辆体验与生活场景结合。",
    externalUrl: "https://l.nio.cn/JtJILod",
    readerFormat: "h5",
  },
  {
    number: "11",
    title: "粉丝专属｜试驾得盲盒，赢9天8晚新疆之旅｜活动规则",
    category: "活动规则",
    cover: "/portfolio/covers/nio-xinjiang-rules.jpg",
    src: "/portfolio/nio-xinjiang-rules.jpg",
    background: "作为同主题线上活动的独立规则页面，本作品承接主活动传播内容，帮助用户集中了解参与条件、活动时间、奖励机制与注意事项。",
    content: "将试驾预约、盲盒抽奖、新疆旅行大奖及其他福利的参与方式拆解为清晰规则，并补充兑奖说明和活动须知，让用户在进入活动后能够快速确认流程与权益。",
    externalUrl: "https://l.nio.cn/KiAJoz9",
    readerFormat: "h5",
  },
  {
    number: "12",
    title: "夏日打卡，赢ET7 30天使用权",
    category: "线上活动",
    cover: "/portfolio/covers/nio-et7-checkin.jpg",
    src: "/portfolio/nio-et7-checkin.jpg",
    background: "针对夏季用户出行需求，蔚来推出线上打卡活动，通过任务互动和福利奖励吸引用户参与，提升用户对 ET7 车型和品牌服务的关注。",
    content: "设置每日打卡任务，引导用户完成指定操作并获得抽奖机会；奖品包括 ET7 使用权、品牌周边、线下体验券等。",
    externalUrl: "https://l.nio.cn/eRCfHFf",
    readerFormat: "h5",
  },
  {
    number: "13",
    title: "粉丝专属｜试驾有礼，夏日新启",
    category: "线上活动",
    cover: "/portfolio/covers/nio-summer-testdrive.jpg",
    src: "/portfolio/nio-summer-testdrive.jpg",
    background: "面向蔚来粉丝用户，通过试驾体验和福利活动提升参与积极性。",
    content: "围绕试驾预约、福利领取和用户互动展开；首次试驾后可获得夏日主题礼品，包括露营装备、品牌周边和线下体验权益。",
    externalUrl: "https://l.nio.cn/yHjCU4s",
    readerFormat: "h5",
  },
  {
    number: "14",
    title: "6月新朋友礼遇，限时领取中",
    category: "线上活动",
    cover: "/portfolio/covers/nio-new-user-june.jpg",
    src: "/portfolio/nio-new-user-june.jpg",
    background: "针对新注册用户推出专属欢迎活动，通过任务引导和福利激励，提高新用户对品牌和车型的了解。",
    content: "任务包括浏览车型信息、查看车辆配置、了解金融方案、咨询服务顾问和预约试驾等；完成后获得活动奖励。",
    externalUrl: "https://l.nio.cn/JqwB9Sg",
    readerFormat: "h5",
  },
  {
    number: "15",
    title: "解锁夏日盲盒，赢ET7使用权",
    category: "玩法页面",
    cover: "/portfolio/covers/nio-et7-blindbox.jpg",
    src: "/portfolio/nio-et7-blindbox.jpg",
    background: "结合夏日营销节点，通过盲盒玩法提升用户参与兴趣，并借助车辆使用权益吸引用户进一步了解蔚来产品。",
    content: "设置浏览文章、完成车型配置、分享活动等任务，完成后获得盲盒抽奖机会；奖品包括 ET7 30天使用权、品牌周边、线下体验券等。",
    readerFormat: "h5",
  },
  {
    number: "16",
    title: nioCampaignDesignTitle,
    category: "视觉设计",
    cover: "/portfolio/covers/nio-campaign-group-01.jpg",
    background: nioCampaignDesignBackground,
    content: nioCampaignDesignContent,
    readerFormat: "gallery",
    gallery: [
      { src: "/portfolio/nio-campaign-design/poster-01.jpg", alt: "粉色蔚来车型试驾盲盒活动方图" },
      { src: "/portfolio/nio-campaign-design/poster-02.jpg", alt: "灰色蔚来车型试驾盲盒活动方图" },
      { src: "/portfolio/nio-campaign-design/poster-04.webp", alt: "新疆山景试驾盲盒活动缩略图" },
      { src: "/portfolio/nio-campaign-design/poster-06.jpg", alt: "雪山背景蔚来车型试驾活动方图" },
      { src: "/portfolio/nio-campaign-design/poster-09.jpg", alt: "城市道路背景蔚来车型试驾活动方图" },
    ],
  },
  {
    number: "17",
    title: nioCampaignDesignTitle,
    category: "视觉设计",
    cover: "/portfolio/covers/nio-campaign-group-02.jpg",
    background: nioCampaignDesignBackground,
    content: nioCampaignDesignContent,
    readerFormat: "gallery",
    gallery: [
      { src: "/portfolio/nio-campaign-design/poster-03.jpg", alt: "夏日探趣盲盒产品主视觉" },
      { src: "/portfolio/nio-campaign-design/poster-08.png", alt: "夏日车生活体验盲盒方形主视觉" },
    ],
  },
  {
    number: "18",
    title: nioCampaignDesignTitle,
    category: "视觉设计",
    cover: "/portfolio/covers/nio-campaign-group-03.jpg",
    background: nioCampaignDesignBackground,
    content: nioCampaignDesignContent,
    readerFormat: "gallery",
    gallery: [
      { src: "/portfolio/nio-campaign-design/poster-05.png", alt: "夏日探趣盲盒竖版活动海报" },
      { src: "/portfolio/nio-campaign-design/poster-07.png", alt: "夏日车生活体验盲盒竖版海报" },
    ],
  },
  {
    number: "19",
    title: nioCampaignDesignTitle,
    category: "视觉设计",
    cover: "/portfolio/covers/nio-campaign-group-04.jpg",
    background: nioCampaignDesignBackground,
    content: nioCampaignDesignContent,
    readerFormat: "gallery",
    gallery: [
      { src: "/portfolio/nio-campaign-design/poster-10.jpg", alt: "试驾抽好礼新疆之旅竖版海报" },
    ],
  },
] as const;

const portfolioColumns = [
  [0, 3, 6, 9, 12, 15, 18],
  [1, 4, 7, 10, 13, 16],
  [2, 5, 8, 11, 14, 17],
] as const;

const photos = [
  ["coast-a", "海边的午后"],
  ["coast-b", "棕榈树的影子"],
  ["coast-c", "远方的岛屿"],
  ["coast-d", "落日以前"],
] as const;

const upperReelPhotos = [
  { src: "/photos/reel/sunset-coast.jpg", alt: "晚霞下的海岸与棕榈树", shape: "wide" },
  { src: "/photos/reel/green-canopy.jpg", alt: "阳光下的绿色树冠", shape: "wide" },
  { src: "/photos/reel/blue-mountains.jpg", alt: "蓝色暮色中的雪山", shape: "wide" },
  { src: "/photos/reel/forest-path.jpg", alt: "树林里的弯曲小路", shape: "wide" },
  { src: "/photos/reel/west-lake.jpg", alt: "树影覆盖的安静湖面", shape: "wide" },
  { src: "/photos/reel/lake-garden.jpg", alt: "树荫下的湖畔花园", shape: "wide" },
  { src: "/photos/reel/clear-water.jpg", alt: "清澈海水中的小船", shape: "portrait" },
] as const;

const lowerReelPhotos = [
  { src: "/photos/reel-bottom/sunlit-riverside.jpg", alt: "阳光穿过树影的河岸步道", shape: "portrait" },
  { src: "/photos/reel-bottom/tropical-sunset.jpg", alt: "晚霞下的热带海滩", shape: "portrait" },
  { src: "/photos/reel-bottom/golden-city-road.jpg", alt: "金色阳光中的林荫街道", shape: "portrait" },
  { src: "/photos/reel-bottom/palm-sunset.jpg", alt: "棕榈树环绕的落日海岸", shape: "portrait" },
  { src: "/photos/reel-bottom/rainy-willow-path.jpg", alt: "雨中的柳树湖畔栈道", shape: "portrait" },
  { src: "/photos/reel-bottom/lakeside-tree-walk.jpg", alt: "大树下的湖滨步道", shape: "portrait" },
  { src: "/photos/reel-bottom/sunlit-riverbank.jpg", alt: "阳光闪烁的河边日常", shape: "portrait" },
  { src: "/photos/reel-bottom/rainbow-palms.jpg", alt: "彩虹下的棕榈树", shape: "portrait" },
  { src: "/photos/reel-bottom/city-lake.jpg", alt: "云影下的城市湖面", shape: "wide" },
  { src: "/photos/reel-bottom/urban-palms.jpg", alt: "城市中的棕榈树", shape: "portrait" },
] as const;

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const portfolioScrollRef = useRef<HTMLElement>(null);
  const experienceTimerRef = useRef<number | null>(null);
  const thoughtsTimerRef = useRef<number | null>(null);
  const [active, setActive] = useState("home");
  const [exp, setExp] = useState(0);
  const [selectedExp, setSelectedExp] = useState(0);
  const [experienceSwitching, setExperienceSwitching] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0);
  const [internshipIndex, setInternshipIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);
  const [showThoughts, setShowThoughts] = useState(false);
  const [thoughtsClosing, setThoughtsClosing] = useState(false);
  const [thoughtsContext, setThoughtsContext] = useState<"education" | "internship">("education");
  const [zoomedPhoto, setZoomedPhoto] = useState<{ src: string; alt: string } | null>(null);
  const [portfolioOpen, setPortfolioOpen] = useState<number | null>(null);
  const [portfolioFlipped, setPortfolioFlipped] = useState(false);
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(true);

  useEffect(() => {
    const sections = nav.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: "-42% 0px -48%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.58;
    audio.play().then(() => setMusicPlaying(true)).catch(() => setMusicPlaying(false));
  }, []);

  useEffect(() => () => {
    if (experienceTimerRef.current) window.clearTimeout(experienceTimerRef.current);
    if (thoughtsTimerRef.current) window.clearTimeout(thoughtsTimerRef.current);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const copy = async () => {
    await navigator.clipboard.writeText("hello@yourname.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  const openPortfolioItem = (index: number) => {
    setPortfolioFlipped(false);
    setPortfolioOpen(index);
  };

  const switchExperience = (index: number) => {
    if (index === selectedExp) return;
    setShowThoughts(false);
    setThoughtsClosing(false);
    setZoomedPhoto(null);
    setSelectedExp(index);
    setExperienceSwitching(true);
    if (experienceTimerRef.current) window.clearTimeout(experienceTimerRef.current);
    experienceTimerRef.current = window.setTimeout(() => {
      setExp(index);
      setExperienceSwitching(false);
    }, 220);
  };

  const openThoughts = (context: "education" | "internship") => {
    setThoughtsContext(context);
    setThoughtsClosing(false);
    setShowThoughts(true);
  };

  const closeThoughts = () => {
    setThoughtsClosing(true);
    if (thoughtsTimerRef.current) window.clearTimeout(thoughtsTimerRef.current);
    thoughtsTimerRef.current = window.setTimeout(() => {
      setShowThoughts(false);
      setThoughtsClosing(false);
    }, 280);
  };

  useEffect(() => {
    if (!showThoughts && !zoomedPhoto && portfolioOpen === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (portfolioOpen !== null) {
        setPortfolioOpen(null);
        setPortfolioFlipped(false);
      } else if (zoomedPhoto) setZoomedPhoto(null);
      else closeThoughts();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showThoughts, zoomedPhoto, portfolioOpen]);

  useEffect(() => {
    const scroller = portfolioScrollRef.current;
    if (!scroller || portfolioOpen === null) return;

    const handleWheel = (event: WheelEvent) => {
      const maxScroll = scroller.scrollHeight - scroller.clientHeight;
      if (maxScroll <= 0) return;
      event.preventDefault();
      event.stopPropagation();
      scroller.scrollTop = Math.max(0, Math.min(maxScroll, scroller.scrollTop + event.deltaY));
    };

    scroller.addEventListener("wheel", handleWheel, { passive: false });
    return () => scroller.removeEventListener("wheel", handleWheel);
  }, [portfolioOpen]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setMusicPlaying(true);
      } catch {
        setMusicPlaying(false);
      }
    } else {
      audio.pause();
      setMusicPlaying(false);
    }
  };

  const education = educationHistory[educationIndex];
  const internship = internshipHistory[internshipIndex];
  const project = projectHistory[projectIndex];
  const thoughts = thoughtsContext === "education" ? educationThoughts[educationIndex] : internshipThoughts[internshipIndex];
  const portfolioItem = portfolioOpen === null ? null : portfolioItems[portfolioOpen];

  return (
    <main>
      <header className="capsule-nav">
        <button className="palm" onClick={() => go("home")} aria-label="返回首页">✺</button>
        <nav aria-label="主要导航">
          {nav.filter(([id]) => id !== "home" && id !== "contact").map(([id, label]) => <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>{label}</button>)}
        </nav>
        <button className="contact-pill" onClick={() => go("contact")}>联系我</button>
        <button className="mobile-toggle" onClick={() => setMenu(!menu)} aria-expanded={menu}>{menu ? "关闭" : "菜单"}</button>
      </header>

      <div className={`mobile-drawer ${menu ? "show" : ""}`}>
        {nav.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
      </div>

      <section className="tropical-hero" id="home">
        <div className="hero-background" aria-hidden="true" />
        <div className="grain" />
        <div className="hero-logo">
          <h1 className="hero-welcome">WELCOME TO MY<br /><em>LITTLE WORLD</em></h1>
          <div className="hero-building-frame" aria-hidden="true">
            <img
              className="hero-building"
              src="/illustrations/warehouse-gold-v2.png"
              alt=""
            />
          </div>
          <p className="hero-sub">你呢 你会怎样度过今天？</p>
        </div>
        <div className="address-mark">PERSONAL ARCHIVE<br />CHINA · EST. 2026</div>
      </section>

      <section className="intro-strip" aria-label="流动风景与音乐播放器">
        <div className="music-deck">
          <audio
            ref={audioRef}
            src="/audio/city-of-stars-preview.m4a"
            autoPlay
            loop
            preload="auto"
            onPlay={() => setMusicPlaying(true)}
            onPause={() => setMusicPlaying(false)}
          />
          <button
            className={`vinyl-control ${musicPlaying ? "is-playing" : "is-paused"}`}
            onClick={toggleMusic}
            aria-label={musicPlaying ? "暂停 City of Stars" : "播放 City of Stars"}
            title={musicPlaying ? "暂停音乐" : "播放音乐"}
          >
            <span className="vinyl-disc" aria-hidden="true">
              <i className="vinyl-label" />
              <b className="vinyl-hole" />
            </span>
            <span className="music-state" aria-hidden="true">{musicPlaying ? "Ⅱ" : "▶"}</span>
          </button>
          <span className="tonearm" aria-hidden="true" />
        </div>

        <div className="moving-gallery">
          {["left", "right"].map((direction, row) => (
            <div className={`reel-row reel-${direction}`} key={direction}>
              <div className="reel-track">
                {[0, 1].map((copyIndex) => (
                  <div className="reel-group" aria-hidden={copyIndex === 1} key={copyIndex}>
                    {(row === 0 ? upperReelPhotos : lowerReelPhotos).map((photo) => (
                      <figure className={`reel-frame ${photo.shape}`} key={`${copyIndex}-${photo.src}`}>
                        <img src={photo.src} alt={copyIndex === 0 ? photo.alt : ""} />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section scenic" id="experience">
        <div className="section-heading">
          <p>01 / MY JOURNEY</p>
          <h2>个人经历</h2>
        </div>
        <div className={`tab-card ${exp === 0 ? "education-mode" : exp === 1 ? "internship-mode" : "project-mode"} ${experienceSwitching ? "is-leaving" : ""}`}>
          <div className="tab-row">
            {experience.map((item, index) => <button key={item.tab} className={`${selectedExp === index ? "selected " : ""}tab-${index}`} onClick={() => switchExperience(index)}>{item.tab}</button>)}
          </div>
          {exp === 0 ? (
            <article className={`education-panel ${education.photos.length ? "" : "is-placeholder"}`} key={education.number}>
              <div className="education-copy">
                <div className="education-heading">
                  <span>{education.number}</span>
                  <h3>{education.school}</h3>
                  <time>{education.years}</time>
                </div>
                <div className="education-programme">
                  <p>{education.programme}</p>
                  <b>{education.degree}</b>
                </div>
                <div className="education-details">
                  <section>
                    <h4>主修课程</h4>
                    <p>{education.courses}</p>
                  </section>
                </div>
              </div>

              {education.photos.length ? (
                <div className="education-photos" aria-label={`${education.school}校园风光`}>
                  {education.photos.map((photo) => (
                    <figure key={photo.src}>
                      <button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}>
                        <img src={photo.src} alt={photo.alt} />
                      </button>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="education-placeholder" aria-label="第二段教育经历内容待补充">
                  <span>02</span>
                  <p>等待你的下一段故事</p>
                </div>
              )}

              <div className="education-actions">
                <button className="education-action" onClick={() => openThoughts("education")}>吹吹的碎碎念</button>
                <button className="education-action" onClick={() => setEducationIndex(educationIndex === 0 ? 1 : 0)}>
                  {educationIndex === 0 ? "下一段教育经历" : "返回 01 教育经历"}
                </button>
              </div>
            </article>
          ) : exp === 1 ? (
            <article className={`internship-panel ${internship.photos.length ? "" : "is-placeholder"}`} key={internship.number}>
              <div className="internship-copy">
                <div className="internship-heading">
                  <span>{internship.number}</span>
                  <h3>{internship.company}</h3>
                  <time>{internship.years}</time>
                </div>
                <div className="internship-role">
                  <b>{internship.business}</b>
                  <p>{internship.role}</p>
                </div>
                <section className="internship-work">
                  <h4>工作内容</h4>
                  <ul>
                    {internship.highlights.map((item) => (
                      <li key={item.title}>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {internship.photos.length ? (
                <div className="internship-photos" aria-label={`${internship.company}实习影像`}>
                  {internship.photos.map((photo) => (
                    <figure key={photo.src}>
                      <button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}>
                        <img src={photo.src} alt={photo.alt} />
                      </button>
                    </figure>
                  ))}
                </div>
              ) : (
                <div className="internship-placeholder" aria-label={`${internship.company}内容待补充`}>
                  <span>{internship.number}</span>
                  <p>等待下一段职场故事</p>
                </div>
              )}

              <div className="internship-actions">
                <button className="education-action" onClick={() => openThoughts("internship")}>吹吹的碎碎念</button>
                <button className="education-action" onClick={() => setInternshipIndex((internshipIndex + 1) % internshipHistory.length)}>下一段实习经历</button>
              </div>
            </article>
          ) : (
            <article className={`project-panel ${project.photos.length ? "" : "is-placeholder"} ${project.number === "04" || project.number === "06" ? "no-photo-space" : ""}`} key={project.number}>
              <div className="project-copy">
                <div className="project-heading">
                  <span>{project.number}</span>
                  <h3>{project.title}</h3>
                  <time>{project.years}</time>
                </div>
                <div className="project-meta">
                  <b>项目经历</b>
                  <p>{project.subtitle}</p>
                </div>
                <section className="project-work">
                  <h4>具体内容</h4>
                  <ul>
                    {project.details.map((item) => (
                      <li key={item.title}>
                        <h5>{item.title}</h5>
                        <p>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {project.photos.length ? (
                <div className={`project-photos count-${project.photos.length} ${project.number === "01" || project.number === "03" ? "compact-photo" : ""}`} aria-label={`${project.title}项目影像`}>
                  {project.photos.map((photo) => (
                    <figure key={photo.src}>
                      <button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}>
                        <img src={photo.src} alt={photo.alt} />
                      </button>
                    </figure>
                  ))}
                </div>
              ) : project.number !== "04" && project.number !== "06" ? (
                <div className="project-placeholder" aria-label={`${project.title}项目档案`}>
                  <span>{project.number}</span>
                  <p>PROJECT ARCHIVE</p>
                </div>
              ) : null}

              <div className="project-actions">
                <button className="education-action" onClick={() => setProjectIndex((projectIndex + 1) % projectHistory.length)}>
                  {projectIndex === projectHistory.length - 1 ? "返回 01 项目经历" : "下一段项目经历"}
                </button>
              </div>
            </article>
          )}
        </div>
      </section>

      {showThoughts && (
        <div
          className={`thoughts-backdrop ${thoughtsClosing ? "is-closing" : ""}`}
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && closeThoughts()}
        >
          <article className="thoughts-card" role="dialog" aria-modal="true" aria-labelledby="thoughts-title">
            <header>
              <p>CHUICUI&apos;S LITTLE MUSINGS</p>
              <h3 id="thoughts-title">吹吹的碎碎念</h3>
            </header>
            <div className="thoughts-copy">
              {thoughts.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <button className="thoughts-return" onClick={closeThoughts}>返回</button>
          </article>
        </div>
      )}

      {zoomedPhoto && (
        <div
          className="photo-lightbox"
          role="presentation"
          onMouseDown={(event) => event.target === event.currentTarget && setZoomedPhoto(null)}
        >
          <section role="dialog" aria-modal="true" aria-label={zoomedPhoto.alt}>
            <button className="photo-lightbox-close" onClick={() => setZoomedPhoto(null)} aria-label="关闭大图">×</button>
            <figure>
              <img src={zoomedPhoto.src} alt={zoomedPhoto.alt} />
              <figcaption>{zoomedPhoto.alt}</figcaption>
            </figure>
          </section>
        </div>
      )}

      {portfolioItem && (
        <div
          className="portfolio-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target !== event.currentTarget) return;
            setPortfolioOpen(null);
            setPortfolioFlipped(false);
          }}
        >
          <section
            className={
              "readerFormat" in portfolioItem
                ? portfolioItem.readerFormat === "h5"
                  ? "is-mobile-work"
                  : "is-gallery-work"
                : undefined
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-dialog-title"
          >
            <header className="portfolio-reader-header">
              <div>
                <small><b>{portfolioItem.number}</b><span> / {portfolioItem.category}</span></small>
                <h3 id="portfolio-dialog-title">{portfolioItem.title}</h3>
              </div>
              <div className="portfolio-reader-actions">
                <button
                  className="portfolio-flip-action"
                  onClick={() => setPortfolioFlipped((current) => !current)}
                >
                  {portfolioFlipped
                    ? "gallery" in portfolioItem ? "查看作品图片" : "查看作品长图"
                    : "查看作品介绍"}
                </button>
                <button
                  className="portfolio-close"
                  onClick={() => {
                    setPortfolioOpen(null);
                    setPortfolioFlipped(false);
                  }}
                  aria-label="关闭作品大图"
                >×</button>
              </div>
            </header>
            <p className="portfolio-flip-hint">
              {portfolioFlipped
                ? "gallery" in portfolioItem ? "点击作品介绍即可翻转返回图片" : "点击作品介绍即可翻转返回长图"
                : "gallery" in portfolioItem ? "向下滚动浏览完整图片及海报 · 点击作品即可翻转" : "向下滚动查看完整作品 · 点击作品即可翻转"}
            </p>
            <div className={`portfolio-reader ${portfolioFlipped ? "is-flipped" : ""}`}>
              <div className="portfolio-reader-inner">
                <figure
                  ref={portfolioScrollRef}
                  className="portfolio-reader-front"
                >
                  {"gallery" in portfolioItem ? (
                    <div
                      className={`portfolio-design-gallery gallery-count-${Math.min(portfolioItem.gallery.length, 3)}`}
                      aria-label="蔚来线上活动图片及海报作品画廊"
                    >
                      {portfolioItem.gallery.map((image, index) => (
                        <button
                          type="button"
                          onClick={() => setPortfolioFlipped(true)}
                          aria-label={`查看作品介绍：${image.alt}`}
                          key={image.src}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading={index < 3 ? "eager" : "lazy"}
                            decoding="async"
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={portfolioItem.src}
                      alt={portfolioItem.title}
                      role="button"
                      tabIndex={0}
                      onClick={() => setPortfolioFlipped(true)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault();
                          setPortfolioFlipped(true);
                        }
                      }}
                    />
                  )}
                </figure>
                <article
                  className="portfolio-reader-back"
                  role="button"
                  tabIndex={0}
                  aria-label="翻转返回作品长图"
                  onClick={() => setPortfolioFlipped(false)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setPortfolioFlipped(false);
                    }
                  }}
                >
                  <small>{portfolioItem.number} / {portfolioItem.category}</small>
                  <h3>{portfolioItem.title}</h3>
                  <div className="portfolio-copy-block">
                    <span>作品背景</span>
                    <p>{portfolioItem.background}</p>
                  </div>
                  <div className="portfolio-copy-block">
                    <span>作品内容</span>
                    <p>{portfolioItem.content}</p>
                  </div>
                  {"externalUrl" in portfolioItem && (
                    <a
                      className="portfolio-external-link"
                      href={portfolioItem.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      点击跳转至原活动 ↗
                    </a>
                  )}
                  <button className="portfolio-back-button" onClick={() => setPortfolioFlipped(false)}>
                    {"gallery" in portfolioItem ? "返回作品图片" : "返回作品长图"}
                  </button>
                </article>
              </div>
            </div>
          </section>
        </div>
      )}

      <section className="interest-section" id="interests">
        <div className="section-heading portfolio-heading">
          <p>02 / MY PORTFOLIO</p>
          <h2>作品集</h2>
        </div>
        <div className="portfolio-mosaic" aria-label="作品集图片墙">
          {portfolioColumns.map((column, columnIndex) => (
            <div className={`portfolio-column portfolio-column-${columnIndex + 1}`} key={columnIndex}>
              <div className="portfolio-track">
                {[0, 1].map((copyIndex) => (
                  <div className="portfolio-loop-set" aria-hidden={copyIndex === 1} key={copyIndex}>
                    {column.map((itemIndex) => {
                      const item = portfolioItems[itemIndex];
                      return (
                        <button
                          className="portfolio-card"
                          onMouseDown={(event) => event.button === 0 && openPortfolioItem(itemIndex)}
                          onClick={() => openPortfolioItem(itemIndex)}
                          aria-label={`放大查看作品 ${item.number}：${item.title}`}
                          tabIndex={copyIndex === 1 ? -1 : 0}
                          key={`${item.number}-${copyIndex}`}
                        >
                          <img
                            src={item.cover}
                            alt={copyIndex === 0 ? item.title : ""}
                            loading="lazy"
                            decoding="async"
                          />
                          <span>
                            <small>{item.number} / {item.category}</small>
                            <strong>{item.title}</strong>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="section-heading">
          <p>03 / PHOTO ALBUM</p>
          <h2>个人相册</h2>
          <span>一些被我好好保存的瞬间</span>
        </div>
        <div className="photo-grid">
          {photos.map(([crop, title], index) => (
            <figure key={crop}>
              <div className={`album-scene ${crop}`} role="img" aria-label={`${title}的复古热带风景`} />
              <figcaption><span>0{index + 1}</span><p>{title}<small>私人影像记录 · 2025</small></p></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-card">
          <div>
            <span>DROP ME A LINE</span>
            <h2>想和我<br />聊聊天？</h2>
            <p>可以分享一个想法、一首歌、一段旅程，或只是一句简单的“你好”。</p>
            <button onClick={copy}>{copied ? "邮箱已复制 ✓" : "复制我的邮箱"}</button>
          </div>
          <div className="postcard">
            <p>TO: <b>新的朋友</b></p>
            <i />
            <h3>hello@yourname.com</h3>
            <span>期待收到你的来信。</span>
            <div className="stamp">✺<small>CHINA<br />2026</small></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <nav>{nav.map(([id, label]) => <button key={id} onClick={() => go(id)}>{label}</button>)}</nav>
        <div className="footer-logo"><h2>林知远</h2><span>☼</span><p>把日子过成喜欢的样子</p></div>
        <div className="footer-note">谢谢你来到这里。<br />愿我们都能保留好奇，认真感受，<br />并在自己的路上慢慢发光。</div>
        <button className="back-top" onClick={() => go("home")}>回到顶部 ↑</button>
      </footer>
    </main>
  );
}
