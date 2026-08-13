"use client";

import { useEffect, useState } from "react";

const nav = [
  ["home", "首页"],
  ["experience", "个人经历"],
  ["interests", "兴趣爱好"],
  ["gallery", "个人相册"],
  ["contact", "联系我"],
] as const;

const experience = [
  { tab: "初识世界", years: "2021 — 2022", title: "新闻与传播", text: "在文字、影像与采访中练习观察世界。开始相信，好的表达应该真诚、清楚，也保留温度。", image: "/photos/tropical-coast.png", color: "cream", pos: "left center" },
  { tab: "持续探索", years: "2023 — 2024", title: "内容与实践", text: "参与校园媒体与项目实践，从策划、拍摄到落地，把脑海中的想法一步步变成真实作品。", image: "/photos/tropical-coast.png", color: "wine", pos: "right center" },
  { tab: "正在发生", years: "2025 — 至今", title: "新的旅程", text: "继续学习，继续出发。希望遇见不同的人和地方，也期待把兴趣发展成更长久的方向。", image: "/photos/tropical-coast.png", color: "teal", pos: "center bottom" },
];

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

export default function Home() {
  const [active, setActive] = useState("home");
  const [exp, setExp] = useState(0);
  const [note, setNote] = useState(1);
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const sections = nav.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id));
    }, { rootMargin: "-42% 0px -48%" });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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
        <div className="grain" />
        <div className="sun-disc" />
        <div className="palm-tree palm-left"><i /><b /><span /></div>
        <div className="palm-tree palm-right"><i /><b /><span /></div>
        <div className="hero-logo">
          <h1 className="hero-welcome">WELCOME TO MY<br /><em>LITTLE WORLD</em></h1>
          <div className="hero-flourish">☼</div>
          <p className="hero-sub">你呢 你会怎样度过今天？</p>
        </div>
        <div className="address-mark">PERSONAL ARCHIVE<br />CHINA · EST. 2026</div>
      </section>

      <section className="intro-strip">
        <div className="round-sticker">嘿！<br />很高兴<br />认识你</div>
        <div className="photo-slice scene-crop scene-crop-left" role="img" aria-label="复古热带海岸风景" />
        <div className="intro-copy">
          <span>ABOUT ME</span>
          <h2>认真生活，<br />偶尔做梦。</h2>
          <p>这里是我的个人小站，记录经历、热爱与路上捡到的闪光片段。</p>
        </div>
        <div className="photo-slice scene-crop scene-crop-right" role="img" aria-label="复古热带海岸风景" />
        <div className="color-block">慢慢走<br /><b>也很好</b></div>
      </section>

      <section className="experience-section scenic" id="experience">
        <div className="section-heading">
          <p>01 / MY JOURNEY</p>
          <h2>个人经历</h2>
          <span>一路走来，一路收集</span>
        </div>
        <div className="tab-card">
          <div className="tab-row">
            {experience.map((item, index) => <button key={item.tab} className={exp === index ? `selected tab-${index}` : ""} onClick={() => setExp(index)}>{item.tab}</button>)}
          </div>
          <div className={`card-copy ${experience[exp].color}`}>
            <span>{experience[exp].years}</span>
            <h3>{experience[exp].title}</h3>
            <p>{experience[exp].text}</p>
            <button onClick={() => setExp((exp + 1) % experience.length)}>下一段故事</button>
          </div>
          <div className="card-photo"><img key={`${experience[exp].image}-${exp}`} src={experience[exp].image} style={{ objectPosition: experience[exp].pos }} alt={`${experience[exp].title}的复古热带风景`} /></div>
        </div>
        <button className="scenic-button" onClick={() => go("interests")}>继续向下逛</button>
      </section>

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
