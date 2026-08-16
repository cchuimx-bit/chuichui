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
    "加缪说：“在隆冬，我终于知道，我身上有一个不可战胜的夏天。”可我的夏天，被困在了上海漫长的梅雨季里。",
    "九月的开学季，我初来上海。闷热、潮湿、拥挤是我对这座城的初印象。连带着，对新学校也没了多少期待。上海的雨很细，不像北方那样来得痛快。它总是黏在空气里，落在头发上、肩膀上、鞋面上，也落在人的情绪里。地铁站里人潮涌动，大家都行色匆匆。那时我常常觉得，自己像被这座城市吞进去的一粒灰尘，没有方向，也没有声音。",
    "但天气总有放晴的时候。金黄灿烂的银杏树、清澈湛蓝的天空，就这样抱着电脑躺在学院门口的大草坪上，沐浴在天地光华下，日光之下万物鲜妍可爱。直到这种时刻才会真正感慨：没有永恒的雨季，只有久违的艳阳天。",
    "希望上海这座城市保留她包容万千的气象，让每一个在这里或路过暂驻、或长久栖留的人，都能从她冷漠又温情的秩序与边界中找到一个文明发达的现代都市带给人的安全感和确定性。上海永远是《繁花》，梧桐树下太多吉光片羽，在这里就像坐着一艘前路无尽但令人安心的夜航船，空枝对晚风，海上花永远在开。",
  ],
  ["关于东北师范大学的校园记忆与思考，正在慢慢整理中。"],
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

const notes = [
  { label: "摄影", text: "我喜欢按下快门的瞬间。照片会记住光线，也会记住当时没有说出口的心情。", cls: "note-yellow" },
  { label: "旅行", text: "去陌生的城市散步，把地图折起来，偶尔迷路，往往会遇到当天最惊喜的风景。", cls: "note-orange" },
  { label: "阅读", text: "在别人的故事里生活一会儿。读小说、随笔，也收集一切古怪又可爱的句子。", cls: "note-teal" },
  { label: "音乐", text: "我的日常背景音。从独立音乐到老唱片，一首歌常常就是一段时间的入口。", cls: "note-green" },
];

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
  const educationRailRef = useRef<HTMLDivElement>(null);
  const internshipRailRef = useRef<HTMLDivElement>(null);
  const projectRailRef = useRef<HTMLDivElement>(null);
  const railDragRef = useRef({ element: null as HTMLDivElement | null, pointerId: -1, startX: 0, scrollLeft: 0, moved: false });
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
  const [note, setNote] = useState(1);
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

  const openThoughts = (context: "education" | "internship", index: number) => {
    if (context === "education") setEducationIndex(index);
    else setInternshipIndex(index);
    setThoughtsContext(context);
    setThoughtsClosing(false);
    setShowThoughts(true);
  };

  const updateRailIndex = (element: HTMLDivElement, count: number, setter: (index: number) => void) => {
    if (!element.clientWidth) return;
    setter(Math.max(0, Math.min(count - 1, Math.round(element.scrollLeft / element.clientWidth))));
  };

  const slideRail = (rail: HTMLDivElement | null, index: number) => {
    if (!rail) return;
    rail.scrollTo({ left: index * rail.clientWidth, behavior: "smooth" });
  };

  const beginRailDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const element = event.currentTarget;
    railDragRef.current = { element, pointerId: event.pointerId, startX: event.clientX, scrollLeft: element.scrollLeft, moved: false };
    element.setPointerCapture(event.pointerId);
    element.classList.add("is-dragging");
  };

  const moveRailDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = railDragRef.current;
    if (drag.element !== event.currentTarget || drag.pointerId !== event.pointerId) return;
    const distance = event.clientX - drag.startX;
    if (Math.abs(distance) > 5) drag.moved = true;
    if (drag.moved) drag.element.scrollLeft = drag.scrollLeft - distance;
  };

  const endRailDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = railDragRef.current;
    if (drag.element !== event.currentTarget || drag.pointerId !== event.pointerId) return;
    drag.element.classList.remove("is-dragging");
    if (drag.element.hasPointerCapture(event.pointerId)) drag.element.releasePointerCapture(event.pointerId);
    const page = Math.round(drag.element.scrollLeft / drag.element.clientWidth);
    drag.element.scrollTo({ left: page * drag.element.clientWidth, behavior: "smooth" });
    window.setTimeout(() => { railDragRef.current.moved = false; }, 0);
  };

  const stopDraggedClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!railDragRef.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
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
    if (!showThoughts && !zoomedPhoto) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (zoomedPhoto) setZoomedPhoto(null);
      else closeThoughts();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showThoughts, zoomedPhoto]);

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

  const thoughts = thoughtsContext === "education" ? educationThoughts[educationIndex] : internshipThoughts[internshipIndex];

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
            <div className="experience-viewport">
              <div
                ref={educationRailRef}
                className="experience-rail"
                aria-label="教育经历，左右滑动查看"
                tabIndex={0}
                onScroll={(event) => updateRailIndex(event.currentTarget, educationHistory.length, setEducationIndex)}
                onPointerDown={beginRailDrag}
                onPointerMove={moveRailDrag}
                onPointerUp={endRailDrag}
                onPointerCancel={endRailDrag}
                onClickCapture={stopDraggedClick}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                  event.preventDefault();
                  const next = event.key === "ArrowRight" ? Math.min(educationHistory.length - 1, educationIndex + 1) : Math.max(0, educationIndex - 1);
                  slideRail(educationRailRef.current, next);
                }}
              >
                {educationHistory.map((item, index) => (
                  <div className="experience-slide" key={item.number}>
                    <article className={`education-panel ${item.photos.length ? "" : "is-placeholder"}`}>
                      <div className="education-copy">
                        <div className="education-heading"><span>{item.number}</span><h3>{item.school}</h3><time>{item.years}</time></div>
                        <div className="education-programme"><p>{item.programme}</p><b>{item.degree}</b></div>
                        <div className="education-details"><section><h4>主修课程</h4><p>{item.courses}</p></section></div>
                      </div>
                      <div className="education-photos" aria-label={`${item.school}校园风光`}>
                        {item.photos.map((photo) => <figure key={photo.src}><button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}><img src={photo.src} alt={photo.alt} /></button></figure>)}
                      </div>
                      <div className="education-actions">
                        <button className="education-action" onClick={() => openThoughts("education", index)}>吹吹的碎碎念</button>
                        <button className="education-action swipe-cue" onClick={() => slideRail(educationRailRef.current, (index + 1) % educationHistory.length)}>滑动查看下一段经历 <span aria-hidden="true">→</span></button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ) : exp === 1 ? (
            <div className="experience-viewport">
              <div
                ref={internshipRailRef}
                className="experience-rail"
                aria-label="实习经历，左右滑动查看"
                tabIndex={0}
                onScroll={(event) => updateRailIndex(event.currentTarget, internshipHistory.length, setInternshipIndex)}
                onPointerDown={beginRailDrag}
                onPointerMove={moveRailDrag}
                onPointerUp={endRailDrag}
                onPointerCancel={endRailDrag}
                onClickCapture={stopDraggedClick}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                  event.preventDefault();
                  const next = event.key === "ArrowRight" ? Math.min(internshipHistory.length - 1, internshipIndex + 1) : Math.max(0, internshipIndex - 1);
                  slideRail(internshipRailRef.current, next);
                }}
              >
                {internshipHistory.map((item, index) => (
                  <div className="experience-slide" key={item.number}>
                    <article className={`internship-panel ${item.photos.length ? "" : "is-placeholder"}`}>
                      <div className="internship-copy">
                        <div className="internship-heading"><span>{item.number}</span><h3>{item.company}</h3><time>{item.years}</time></div>
                        <div className="internship-role"><b>{item.business}</b><p>{item.role}</p></div>
                        <section className="internship-work"><h4>工作内容</h4><ul>{item.highlights.map((highlight) => <li key={highlight.title}><h5>{highlight.title}</h5><p>{highlight.text}</p></li>)}</ul></section>
                      </div>
                      <div className="internship-photos" aria-label={`${item.company}实习影像`}>
                        {item.photos.map((photo) => <figure key={photo.src}><button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}><img src={photo.src} alt={photo.alt} /></button></figure>)}
                      </div>
                      <div className="internship-actions">
                        <button className="education-action" onClick={() => openThoughts("internship", index)}>吹吹的碎碎念</button>
                        <button className="education-action swipe-cue" onClick={() => slideRail(internshipRailRef.current, (index + 1) % internshipHistory.length)}>滑动查看下一段经历 <span aria-hidden="true">→</span></button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="experience-viewport">
              <div
                ref={projectRailRef}
                className="experience-rail"
                aria-label="项目经历，左右滑动查看"
                tabIndex={0}
                onScroll={(event) => updateRailIndex(event.currentTarget, projectHistory.length, setProjectIndex)}
                onPointerDown={beginRailDrag}
                onPointerMove={moveRailDrag}
                onPointerUp={endRailDrag}
                onPointerCancel={endRailDrag}
                onClickCapture={stopDraggedClick}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
                  event.preventDefault();
                  const next = event.key === "ArrowRight" ? Math.min(projectHistory.length - 1, projectIndex + 1) : Math.max(0, projectIndex - 1);
                  slideRail(projectRailRef.current, next);
                }}
              >
                {projectHistory.map((item, index) => (
                  <div className="experience-slide" key={item.number}>
                    <article className={`project-panel ${item.photos.length ? "" : "is-placeholder"} ${item.number === "04" || item.number === "06" ? "no-photo-space" : ""}`}>
                      <div className="project-copy">
                        <div className="project-heading"><span>{item.number}</span><h3>{item.title}</h3><time>{item.years}</time></div>
                        <div className="project-meta"><b>项目经历</b><p>{item.subtitle}</p></div>
                        <section className="project-work"><h4>具体内容</h4><ul>{item.details.map((detail) => <li key={detail.title}><h5>{detail.title}</h5><p>{detail.text}</p></li>)}</ul></section>
                      </div>
                      {item.photos.length ? (
                        <div className={`project-photos count-${item.photos.length} ${item.number === "01" || item.number === "03" ? "compact-photo" : ""}`} aria-label={`${item.title}项目影像`}>
                          {item.photos.map((photo) => <figure key={photo.src}><button className="zoomable-photo" onClick={() => setZoomedPhoto(photo)} aria-label={`放大查看：${photo.alt}`}><img src={photo.src} alt={photo.alt} /></button></figure>)}
                        </div>
                      ) : null}
                      <div className="project-actions"><button className="education-action swipe-cue" onClick={() => slideRail(projectRailRef.current, (index + 1) % projectHistory.length)}>滑动查看下一段经历 <span aria-hidden="true">→</span></button></div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="scenic-button" onClick={() => go("interests")}>继续向下逛</button>
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

      <section className="interest-section" id="interests">
        <div className="section-heading dark-heading">
          <p>02 / THINGS I LOVE</p>
          <h2>兴趣爱好</h2>
          <span>这些事，让普通日子变得发亮</span>
        </div>
        <div className="notes-stack">
          {notes.map((item, index) => (
            <button key={item.label} className={`paper-note ${item.cls} ${note === index ? "top" : ""}`} style={{ "--i": index } as React.CSSProperties} onClick={() => setNote(index)}>
              <small>{item.label} · NOTE 0{index + 1}</small>
              <p>{item.text}</p>
              <b>{note === index ? "正在翻阅" : "点我看看"}</b>
            </button>
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
