"use client";

import { useEffect, useRef, useState } from "react";

const nav = [
  ["home", "首页"],
  ["experience", "个人经历"],
  ["interests", "兴趣爱好"],
  ["gallery", "个人相册"],
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
    school: "第二段教育经历",
    years: "待补充",
    programme: "学校、学院与专业信息待补充",
    degree: "教育经历",
    courses: "请把第二段教育经历的学校、时间、专业、学历与主修课程发给我，我会继续补充在这里。",
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
  const experienceTimerRef = useRef<number | null>(null);
  const thoughtsTimerRef = useRef<number | null>(null);
  const [active, setActive] = useState("home");
  const [exp, setExp] = useState(0);
  const [selectedExp, setSelectedExp] = useState(0);
  const [experienceSwitching, setExperienceSwitching] = useState(false);
  const [educationIndex, setEducationIndex] = useState(0);
  const [showThoughts, setShowThoughts] = useState(false);
  const [thoughtsClosing, setThoughtsClosing] = useState(false);
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
    setSelectedExp(index);
    setExperienceSwitching(true);
    if (experienceTimerRef.current) window.clearTimeout(experienceTimerRef.current);
    experienceTimerRef.current = window.setTimeout(() => {
      setExp(index);
      setExperienceSwitching(false);
    }, 220);
  };

  const openThoughts = () => {
    setEducationIndex(0);
    setThoughtsClosing(false);
    setShowThoughts(true);
  };

  const closeThoughts = () => {
    setThoughtsClosing(true);
    if (thoughtsTimerRef.current) window.clearTimeout(thoughtsTimerRef.current);
    thoughtsTimerRef.current = window.setTimeout(() => {
      setShowThoughts(false);
      setThoughtsClosing(false);
      setEducationIndex(0);
    }, 280);
  };

  useEffect(() => {
    if (!showThoughts) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeThoughts();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showThoughts]);

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
        <div className={`tab-card ${exp === 0 ? "education-mode" : ""} ${experienceSwitching ? "is-leaving" : ""}`}>
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
                <div className="education-photos" aria-label="上海大学校园风光">
                  {education.photos.map((photo) => (
                    <figure key={photo.src}><img src={photo.src} alt={photo.alt} /></figure>
                  ))}
                </div>
              ) : (
                <div className="education-placeholder" aria-label="第二段教育经历内容待补充">
                  <span>02</span>
                  <p>等待你的下一段故事</p>
                </div>
              )}

              <div className="education-actions">
                {educationIndex === 0 && <button className="education-action" onClick={openThoughts}>吹吹的碎碎念</button>}
                <button className="education-action" onClick={() => setEducationIndex(educationIndex === 0 ? 1 : 0)}>
                  {educationIndex === 0 ? "下一段教育经历" : "返回 01 教育经历"}
                </button>
              </div>
            </article>
          ) : (
            <>
              <div className={`card-copy ${experience[exp].color}`} key={`copy-${exp}`}>
                <span>{experience[exp].years}</span>
                <h3>{experience[exp].title}</h3>
                <p>{experience[exp].text}</p>
                <button onClick={() => switchExperience((exp + 1) % experience.length)}>下一段故事</button>
              </div>
              <div className="card-photo" key={`photo-${exp}`}><img src={experience[exp].image} style={{ objectPosition: experience[exp].pos }} alt={`${experience[exp].title}的复古热带风景`} /></div>
            </>
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
              <p>加缪说：“在隆冬，我终于知道，我身上有一个不可战胜的夏天。”可我的夏天，被困在了上海漫长的梅雨季里。</p>
              <p>九月的开学季，我初来上海。闷热、潮湿、拥挤是我对这座城的初印象。连带着，对新学校也没了多少期待。上海的雨很细，不像北方那样来得痛快。它总是黏在空气里，落在头发上、肩膀上、鞋面上，也落在人的情绪里。地铁站里人潮涌动，大家都行色匆匆。那时我常常觉得，自己像被这座城市吞进去的一粒灰尘，没有方向，也没有声音。</p>
              <p>但天气总有放晴的时候。金黄灿烂的银杏树、清澈湛蓝的天空，就这样抱着电脑躺在学院门口的大草坪上，沐浴在天地光华下，日光之下万物鲜妍可爱。直到这种时刻才会真正感慨：没有永恒的雨季，只有久违的艳阳天。</p>
              <p>希望上海这座城市保留她包容万千的气象，让每一个在这里或路过暂驻、或长久栖留的人，都能从她冷漠又温情的秩序与边界中找到一个文明发达的现代都市带给人的安全感和确定性。上海永远是《繁花》，梧桐树下太多吉光片羽，在这里就像坐着一艘前路无尽但令人安心的夜航船，空枝对晚风，海上花永远在开。</p>
            </div>
            <button className="thoughts-return" onClick={closeThoughts}>返回</button>
          </article>
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
