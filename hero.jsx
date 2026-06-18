// ===== Hero: scroll-morph cluster of mock social posts =====
const TOTAL = 20;
const lerp = (a, b, t) => a * (1 - t) + b * t;
const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

// curated, teal-leaning palette for the post "photos"
const PHOTO = [
  ["#1FD8BC", "#0B8C7B"], ["#3B4B5B", "#1E2A33"], ["#E8CBA9", "#C99B6E"],
  ["#86C7BE", "#3E9183"], ["#9AA7C7", "#5E6E96"], ["#1FD8BC", "#147F8A"],
  ["#E8978B", "#C76A5A"], ["#0B8C7B", "#062b27"], ["#C7D4D0", "#8AA39D"],
  ["#2FB6C9", "#13707E"],
];
const PLATFORMS = ["Instagram", "TikTok", "X", "Facebook", "LinkedIn", "YouTube", "Threads", "Pinterest"];
const POST_COUNT = 15;

function PostCard({ i, target }) {
  const plat = PLATFORMS[i % PLATFORMS.length];
  const post = "posts/post" + String((i % POST_COUNT) + 1).padStart(2, "0") + ".png";
  const st = {
    transform: `translate(-50%,-50%) translate(${target.x}px,${target.y}px) rotate(${target.rotation}deg) scale(${target.scale})`,
    opacity: target.opacity,
    left: "50%", top: "50%",
  };
  return (
    <div className="card" style={st}>
      <div className="card-inner">
        <div className="face face-front">
          <img className="post-img" src={post} alt="" loading="lazy" draggable="false" />
        </div>
        <div className="face face-back">
          <div style={{ textAlign: "center" }}>
            <div className="pf">{plat}</div>
            <div className="pn">View post</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const stageRef = React.useRef(null);
  const heroRef = React.useRef(null);
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  const [phase, setPhase] = React.useState("scatter"); // scatter -> line -> circle
  const [morph, setMorph] = React.useState(0);   // 0 circle -> 1 bottom arc
  const [shuffle, setShuffle] = React.useState(0); // 0..1 extra rotation
  const [parallax, setParallax] = React.useState(0);
  const [progress, setProgress] = React.useState(0); // overall scroll 0..1

  // scatter positions (stable)
  const scatter = React.useMemo(() =>
    Array.from({ length: TOTAL }, () => ({
      x: (Math.random() - 0.5) * 1400,
      y: (Math.random() - 0.5) * 900,
      rotation: (Math.random() - 0.5) * 160,
      scale: 0.6, opacity: 0,
    })), []);

  // measure stage
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) =>
      setSize({ width: e.contentRect.width, height: e.contentRect.height }));
    ro.observe(el);
    setSize({ width: el.offsetWidth, height: el.offsetHeight });
    return () => ro.disconnect();
  }, []);

  // intro timeline
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase("line"), 450);
    const t2 = setTimeout(() => setPhase("circle"), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  // scroll-driven morph (page scroll across the tall hero section)
  React.useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const hero = heroRef.current;
        if (!hero) return;
        const rect = hero.getBoundingClientRect();
        const scrollable = hero.offsetHeight - window.innerHeight;
        const p = clamp(-rect.top / scrollable, 0, 1);
        setProgress(p);
        setMorph(clamp(p / 0.62, 0, 1));      // morph completes at 62%
        setShuffle(clamp((p - 0.62) / 0.38, 0, 1));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mouse parallax
  React.useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      setParallax(nx * 60);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  // per-card target
  const targets = React.useMemo(() => {
    return Array.from({ length: TOTAL }, (_, i) => {
      if (phase === "scatter") return scatter[i];
      if (phase === "line") {
        const sp = 70, total = TOTAL * sp;
        return { x: i * sp - total / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
      }
      const W = size.width, H = size.height;
      const isMobile = W < 768;
      const minD = Math.min(W, H);

      // circle
      const cR = Math.min(minD * 0.34, 330);
      const cAng = (i / TOTAL) * 360;
      const cRad = (cAng * Math.PI) / 180;
      const circle = { x: Math.cos(cRad) * cR, y: Math.sin(cRad) * cR, rotation: cAng + 90 };

      // bottom arc (convex-up rainbow)
      const baseR = Math.min(W, H * 1.5);
      const arcR = baseR * (isMobile ? 1.4 : 1.05);
      const apexY = H * (isMobile ? 0.34 : 0.22);
      const arcCY = apexY + arcR;
      const spread = isMobile ? 110 : 132;
      const start = -90 - spread / 2;
      const step = spread / (TOTAL - 1);
      const bounded = -shuffle * (spread * 0.55);
      const ang = start + i * step + bounded;
      const aRad = (ang * Math.PI) / 180;
      const arc = {
        x: Math.cos(aRad) * arcR + parallax * (1 - morph * 0.4),
        y: Math.sin(aRad) * arcR + arcCY,
        rotation: ang + 90,
        scale: isMobile ? 1.35 : 1.7,
      };

      return {
        x: lerp(circle.x + parallax, arc.x, morph),
        y: lerp(circle.y, arc.y, morph),
        rotation: lerp(circle.rotation, arc.rotation, morph),
        scale: lerp(1, arc.scale, morph),
        opacity: 1,
      };
    });
  }, [phase, size, morph, shuffle, parallax, scatter]);

  // copy reacts to morph: headline lifts & subline swaps
  const lift = -morph * 90;
  const introOpacity = 1 - clamp(morph / 0.5, 0, 1);
  const arcOpacity = clamp((morph - 0.55) / 0.4, 0, 1);

  return (
    <section className="hero" ref={heroRef} data-screen-label="Hero">
      <div className="hero-stage" ref={stageRef}>
        <div className="hero-grid"></div>
        <div className="stage-cards">
          {targets.map((t, i) => <PostCard key={i} i={i} target={t} />)}
        </div>

        <div className="hero-copy" style={{ transform: `translate(-50%,calc(-50% + ${lift}px))` }}>
          <span className="eyebrow">Marketing on autopilot</span>
          <h1>Your AI marketing<br/><span className="gl">department.</span></h1>
          <p style={{ opacity: introOpacity, height: arcOpacity > 0.1 ? 0 : "auto", marginTop: arcOpacity > 0.1 ? 0 : 20, overflow: "hidden", transition: "opacity .4s" }}>
            The all-in-one AI platform for growing businesses — Wizora runs your social, content, paid ads, landing pages, SEO, reputation and messages, all from one place.
          </p>
          <p style={{ opacity: arcOpacity, position: arcOpacity < 0.5 ? "absolute" : "static", pointerEvents: "none", transition: "opacity .4s" }}>
            You focus on running your business. Wizora handles your marketing.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => window.dispatchEvent(new Event("wizora:signup"))}>
              Start free trial
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
            <a className="btn btn-ghost btn-lg" href="#how" style={{ color: "var(--hero-ink)", boxShadow: "inset 0 0 0 1px var(--hero-line)", background: "rgba(11,26,24,.04)" }}>See how it works</a>
          </div>
        </div>

        <div className="hero-scroll" style={{ opacity: 1 - clamp(progress / 0.2, 0, 1) }}>
          <span>Scroll</span>
          <span className="line"></span>
        </div>
        <div className="hero-fade"></div>
      </div>
    </section>
  );
}

window.Hero = Hero;
