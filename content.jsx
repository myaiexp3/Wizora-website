// ===== Content sections =====
const PLAT = [
  { img: "uploads/instagram-2016-6.svg", name: "Instagram" }, { img: "uploads/tiktok.svg", name: "TikTok" },
  { img: "uploads/x-black.svg", name: "X" }, { img: "uploads/facebook.svg", name: "Facebook" },
  { img: "uploads/linkedin-icon.svg", name: "LinkedIn" }, { img: "uploads/youtube.svg", name: "YouTube" },
  { img: "uploads/threads-clean.svg", name: "Threads" }, { img: "uploads/pinterest.svg", name: "Pinterest" },
  { img: "uploads/google-ads.svg", name: "Google Ads" }, { img: "uploads/Meta_Platforms.svg", name: "Meta Ads" },
  { img: "uploads/wordpress.svg", name: "WordPress" }, { img: "uploads/google.svg", name: "Google Business" },
];

function Constellation() {
  const R = 46; // orbit radius, % of the square orbit area
  const nodes = PLAT.map((p, i) => {
    const ang = (i / PLAT.length) * Math.PI * 2 - Math.PI / 2;
    return { ...p, x: 50 + Math.cos(ang) * R, y: 50 + Math.sin(ang) * R };
  });
  return (
    <section className="section platforms" id="platforms">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal">One hub, every channel</span>
          <h2 className="reveal">Reach your customers wherever they spend their time.</h2>
          <p className="reveal">Link your accounts once — Facebook, Instagram, LinkedIn, TikTok, X, Threads, your Google Business Profile and more. Wizora then creates, publishes, optimizes and replies across every one of them, automatically. Hover to pause and explore.</p>
        </div>

        <div className="constellation">
          <div className="orbit-area">
            <div className="orbit-ring"></div>
            <div className="orbit">
              <svg className="con-svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#1FD8BC" stopOpacity="0"/>
                    <stop offset="0.5" stopColor="#1FD8BC" stopOpacity="0.5"/>
                    <stop offset="1" stopColor="#1FD8BC" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                {nodes.map((n, i) => (
                  <line key={i} x1="50" y1="50" x2={n.x} y2={n.y}
                    stroke="url(#ln)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                ))}
              </svg>

              {nodes.map((n, i) => (
                <div className="node" key={i} style={{ left: n.x + "%", top: n.y + "%" }}>
                  <div className="node-spin">
                    <div className="node-dot"><img src={n.img} alt={n.name} /></div>
                    <div className="node-label">{n.name}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="hub"><img src="uploads/wizora_icon_transparent.png" alt="Wizora" /></div>
          </div>
        </div>

        <div className="nodes-mobile">
          {PLAT.map((p, i) => (
            <div className="node" key={i}>
              <div className="node-dot"><img src={p.img} alt={p.name} /></div>
              <div className="node-label">{p.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const I = {
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/><path d="M19 16l.7 2 .3.0M5 4l.6 1.6"/></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6"/></svg>,
  target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.6" fill="currentColor"/></svg>,
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>,
  chat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-4 4V5z"/><path d="M8 9.5h8M8 12.5h5"/></svg>,
  magnet: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v8a6 6 0 0012 0V3"/><path d="M6 3H2v8a10 10 0 0020 0V3h-4M6 8h12"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3.2l2.6 5.3 5.8.85-4.2 4.1 1 5.78L12 16.6 6.8 19.2l1-5.78-4.2-4.1 5.8-.85L12 3.2z"/></svg>,
  page: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3.5" y="4" width="17" height="16" rx="2.2"/><path d="M3.5 9h17M8 9v11"/></svg>,
  inbox: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l2.4-7.2A2 2 0 018.3 4.4h7.4a2 2 0 011.9 1.4L20 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5z"/><path d="M4 13h4.5l1.3 2.2h4.4L15.5 13H20"/></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.4V12l3.1 1.9"/></svg>,
  layers: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>,
};

const FEATS = [
  { ic: I.spark, tag: "Publish", t: "Social media management", d: "Create, schedule and publish content automatically across Facebook, Instagram, LinkedIn, TikTok, X, Threads and Google Business Profile — reaching customers wherever they spend their time online." },
  { ic: I.star, tag: "Protect", t: "Reputation management", d: "Wizora monitors reviews across multiple platforms, alerts you to new feedback, and generates professional responses that show customers you care — without the hours of manual work." },
  { ic: I.chart, tag: "Optimize", t: "Optimization hub", d: "Turn data into growth. Wizora analyzes your content performance, identifies what works best, and adapts future content based on real results. The more you use it, the smarter it becomes." },
  { ic: I.search, tag: "Rank", t: "Organic SEO", d: "Wizora writes SEO-optimized blog articles around your industry, products and services — each in your brand voice and published straight to your website. Generate traffic while you sleep." },
  { ic: I.target, tag: "Advertise", t: "Paid advertising", d: "Stop guessing which ads will perform. Wizora turns your highest-performing organic content into optimized paid campaigns — built on proven winners, not assumptions." },
  { ic: I.page, tag: "Convert", t: "High-converting landing pages", d: "Every campaign deserves a dedicated destination. Wizora builds landing pages tailored to specific audiences, offers and campaigns — so valuable traffic finally converts." },
  { ic: I.inbox, tag: "Coming soon", t: "One inbox", d: "All your customer conversations in one place. Manage messages from social platforms, website forms and other channels through a single inbox — and never miss a chance to engage." },
];

function Features() {
  const secRef = React.useRef(null);
  const cardRefs = React.useRef([]);
  const railRefs = React.useRef([]);
  const n = FEATS.length;

  React.useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const mq = window.matchMedia("(max-width:820px)");
    const rm = window.matchMedia("(prefers-reduced-motion:reduce)");
    let raf = 0;

    const apply = () => {
      raf = 0;
      const staticMode = mq.matches || rm.matches;
      sec.classList.toggle("static", staticMode);
      if (staticMode) {
        cardRefs.current.forEach((el) => {
          if (!el) return;
          el.style.transform = ""; el.style.opacity = ""; el.style.zIndex = ""; el.style.pointerEvents = "";
        });
        railRefs.current.forEach((el) => el && el.classList.remove("on"));
        return;
      }
      const rect = sec.getBoundingClientRect();
      const total = sec.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, -rect.top / total));
      const active = p * (n - 1);
      const cur = Math.round(active);
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const local = active - i;
        let y, rot, x, sc, op;
        if (local >= 0) {
          const t = Math.min(local, 1);
          y = -t * 132 + "%";
          rot = -t * 9;
          x = t * 6;
          sc = 1;
          op = 1 - Math.max(0, (t - 0.4) / 0.6);
        } else {
          const depth = Math.min(-local, 3);
          y = depth * 18 + "px";
          rot = depth * -1.2;
          x = 0;
          sc = 1 - depth * 0.05;
          op = -local > 3 ? 0 : 1;
        }
        el.style.transform = "translateX(" + x + "%) translateY(" + y + ") rotate(" + rot + "deg) scale(" + sc + ")";
        el.style.opacity = op;
        el.style.zIndex = 500 - i;
        el.style.pointerEvents = op < 0.1 ? "none" : "auto";
      });
      railRefs.current.forEach((el, i) => el && el.classList.toggle("on", i === cur));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [n]);

  const goTo = (k) => {
    const sec = secRef.current;
    if (!sec || sec.classList.contains("static")) return;
    const total = sec.offsetHeight - window.innerHeight;
    const top = window.scrollY + sec.getBoundingClientRect().top;
    window.scrollTo({ top: top + (k / (n - 1)) * total, behavior: "smooth" });
  };

  return (
    <section className="section feat-stack" id="features" ref={secRef}>
      <div className="feat-stack-pin">
        <div className="feat-grid"></div>
        <div className="wrap feat-stack-grid">
          <div className="feat-stack-copy">
            <span className="eyebrow">Everything Wizora does</span>
            <h2>One platform. Every marketing job.</h2>
            <p>From the first post to the final conversion, Wizora creates, publishes, optimizes, protects and converts across every channel you run.</p>
            <ul className="feat-rail">
              {FEATS.map((f, i) => (
                <li key={i} ref={(el) => (railRefs.current[i] = el)} className={i === 0 ? "on" : ""} onClick={() => goTo(i)}>
                  <span className="rn">{"0" + (i + 1)}</span>
                  <span className="rt">{f.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="feat-stack-cards">
            {FEATS.map((f, i) => (
              <article className="fcard" key={i} ref={(el) => (cardRefs.current[i] = el)}>
                <div className="fcard-top">
                  <div className="fcard-ico">{f.ic}</div>
                  <span className="fcard-num">{"0" + (i + 1)} / 0{n}</span>
                </div>
                <span className="fcard-tag">{f.tag}</span>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnsBusiness() {
  const rows = [
    { t: "Brand voice", d: "warm, confident" },
    { t: "Visual style", d: "clean, modern" },
    { t: "Audience", d: "owners & teams" },
    { t: "Industry", d: "auto-detected" },
    { t: "Products & services", d: "from your pages" },
    { t: "Marketing goals", d: "reach & leads" },
  ];
  return (
    <section className="section learns" id="learns">
      <div className="wrap learns-split">
        <div className="learns-copy">
          <span className="eyebrow reveal">Onboarding in minutes</span>
          <h2 className="reveal">Marketing that learns your business.</h2>
          <p className="reveal">Wizora learns your brand by analyzing your website and asking a few quick questions during onboarding. From there, it understands everything it needs to market like you.</p>
          <p className="learns-foot reveal">Then it builds a personalized strategy designed specifically for your business.</p>
          <div className="reveal">
            <button className="btn btn-primary btn-lg" onClick={() => window.dispatchEvent(new Event("wizora:signup"))}>
              Generate my marketing strategy
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
        <div className="scan reveal">
          <div className="scan-bar">
            <span className="scan-dots"><i></i><i></i><i></i></span>
            <span className="scan-url">{I.lock} yourbrand.com</span>
            <span className="scan-status">Analyzing</span>
          </div>
          <div className="scan-body">
            <div className="scan-sweep"></div>
            <div className="reveal-stagger">
              {rows.map((r, i) => (
                <div className="scan-row" key={i}>
                  <span className="scan-check">{Chk}</span>
                  <span className="scan-t">{r.t}</span>
                  <span className="scan-v">{r.d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AITeam() {
  const cards = [
    { n: "01", t: "Strategy & planning", d: "Wizora generates a complete marketing strategy tailored to your business — your ideal content mix, positioning, messaging and growth opportunities, so you always know what to publish and why." },
    { n: "02", t: "Content creation", d: "Every post, blog, email and advertisement is created in your unique brand voice. No generic AI content, no copy-and-paste templates — content that sounds like you." },
    { n: "03", t: "Smart scheduling", d: "Once approved, Wizora automatically schedules and publishes across your connected channels at the optimal time for each platform. Your calendar stays full without the manual work." },
  ];
  return (
    <section className="section tint" id="how">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Your AI marketing team</span>
          <h2>A full marketing department, working on day one.</h2>
        </div>
        <div className="steps flow reveal-stagger">
          {cards.map((s) => (
            <div className="step" key={s.n}>
              <div className="step-n">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const q = [
    { s: "★★★★★", p: "Wizora writes and posts for us, then optimizes our Meta Ads off the very same data. It genuinely feels like we hired a whole marketing team.", n: "Maya Rourke", r: "Founder, Lumen", a: "M" },
    { s: "★★★★★", p: "It replies to every comment and Google review in our voice. Our response time went from days to minutes — our rating climbed with it.", n: "Devon Aki", r: "Owner, Foldr Studio", a: "D" },
    { s: "★★★★★", p: "The lead generation alone paid for it. Qualified leads just show up in my inbox now while it runs my SEO in the background.", n: "Priya Sen", r: "Creator, 480k followers", a: "P" },
    { s: "★★★★★", p: "Setup took an afternoon. By the next morning it was already publishing on a cadence tuned to when our audience is actually online.", n: "Leo Marchetti", r: "Owner, North Roastery", a: "L" },
    { s: "★★★★★", p: "I used to dread the content calendar. Now I just review and approve — the blank page is gone and the quality is honestly better than mine.", n: "Hana Yusuf", r: "Marketing Lead, Verve", a: "H" },
    { s: "★★★★★", p: "Our SEO climbed without us touching a thing. Audits, fixes, on-page tweaks — all handled quietly in the background while we ran the shop.", n: "Tomás Reyes", r: "Co-founder, Caldera", a: "T" },
    { s: "★★★★★", p: "Managing five brands used to mean five dashboards and chaos. Wizora runs them all from one place and nothing slips through anymore.", n: "Ada Okonkwo", r: "Director, Bright Agency", a: "A" },
    { s: "★★★★★", p: "It caught a trending format before we did and shipped a post that pulled our best week ever. It pays attention so I don't have to.", n: "Niko Vlahos", r: "Creator, 210k followers", a: "N" },
    { s: "★★★★★", p: "Comments and reviews never go cold now. Customers feel heard within minutes, and that alone lifted our repeat-booking rate.", n: "Sofia Bianchi", r: "Owner, Studio Bianchi", a: "S" },
  ];
  const rows = [q.slice(0, 5), q.slice(4, 9)];
  const dur = [52, 60];
  const Card = (x, key) => (
    <div className="quote" key={key}>
      <div className="stars">{x.s}</div>
      <p>“{x.p}”</p>
      <div className="who">
        <div className="av">{x.a}</div>
        <div><div className="nm">{x.n}</div><div className="rl">{x.r}</div></div>
      </div>
    </div>
  );
  return (
    <section className="section" id="testimonials">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Loved by busy marketers</span>
          <h2>Like hiring a full marketing team overnight.</h2>
        </div>
        <div className="trows">
          {rows.map((row, ri) => (
            <div className="trow" key={ri}>
              <div className={"trow-track" + (ri === 1 ? " trow-rev" : "")} style={{ animationDuration: dur[ri] + "s" }}>
                {row.map((x, i) => Card(x, i))}
                {row.map((x, i) => Card(x, "dup" + i))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Chk = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>;

function WhyChoose() {
  const outs = [
    { ic: I.clock, t: "Hours back every week", d: "Reclaim the time you'd otherwise spend writing, scheduling, posting and replying — Wizora does the legwork." },
    { ic: I.star, t: "Never miss a review or comment", d: "Every piece of feedback gets a fast, on-brand response, so customers always feel heard." },
    { ic: I.layers, t: "One login, one bill", d: "Replace a stack of point tools with a single platform for content, ads, SEO and reputation." },
    { ic: I.spark, t: "Always on-brand", d: "Your voice and visual style carried across every channel automatically — never generic, never off." },
    { ic: I.chart, t: "Marketing that compounds", d: "It learns from real performance and gets sharper every week you keep it running." },
    { ic: I.magnet, t: "Leads, not just likes", d: "Turns attention into qualified conversations, bookings and sales — not vanity metrics." },
  ];
  return (
    <section className="section why" id="why">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Why it matters</span>
          <h2>The payoff: growth you can feel.</h2>
        </div>
        <div className="out-grid reveal-stagger">
          {outs.map((o, i) => (
            <div className="out-card" key={i}>
              <div className="out-ico">{o.ic}</div>
              <h3>{o.t}</h3>
              <p>{o.d}</p>
            </div>
          ))}
        </div>
        <div className="why-cta reveal">
          <button className="btn btn-primary btn-lg" onClick={() => window.dispatchEvent(new Event("wizora:signup"))}>
            Start free trial
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const open = () => window.dispatchEvent(new Event("wizora:signup"));
  const [annual, setAnnual] = React.useState(true);
  const tiers = [
    { n: "Starter", m: 49, a: 39, sub: "For solo creators getting started.", feats: ["Up to 5 accounts", "AI content + auto-publish", "Insights & basic optimization", "Comment replies"], cta: "Start 7-day free trial", cls: "btn-ghost" },
    { n: "Pro", m: 99, a: 79, sub: "For creators and businesses on autopilot.", feats: ["All social, Ads & SEO channels", "Unlimited AI content & publishing", "Google & Meta Ads optimization", "Automated SEO", "Auto-reply comments & reviews", "Lead capture", "3 team seats"], cta: "Start 7-day free trial", cls: "btn-primary", pop: true },
    { n: "Studio", m: 299, a: 239, sub: "For agencies running many brands.", feats: ["Everything in Pro", "Unlimited brands & accounts", "Advanced reports & exports", "Priority support", "10 team seats"], cta: "Talk to sales", cls: "btn-ghost" },
  ];
  return (
    <section className="section pricing" id="pricing">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans that scale with you.</h2>
          <p>Every plan starts with a free 7-day trial. No card required to begin.</p>
          <div className="bill-toggle">
            <button className={annual ? "" : "on"} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={annual ? "on" : ""} onClick={() => setAnnual(true)}>Annual <span className="bill-save">−20%</span></button>
          </div>
        </div>
        <div className="tiers reveal-stagger">
          {tiers.map((t) => (
            <div className={"tier" + (t.pop ? " pop" : "")} key={t.n}>
              {t.pop && <div className="tier-tag">Most popular</div>}
              <h3>{t.n}</h3>
              <div className="price">£{annual ? t.a : t.m}<span>/mo</span></div>
              <div className="sub">{t.sub}{annual ? " Billed annually." : ""}</div>
              <ul>{t.feats.map((f, i) => <li key={i}>{Chk}<span>{f}</span></li>)}</ul>
              <button className={"btn " + t.cls} onClick={open}>{t.cta}</button>
              <div className="tier-note">No card required · Cancel anytime</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap trust-inner">
        <span className="trust-label">Built for</span>
        <span className="trust-items"><b>Solo founders</b><span>·</span><b>Local businesses</b><span>·</span><b>Agencies</b><span>·</span><b>Growing teams</b></span>
      </div>
    </div>
  );
}

function TaglineBand() {
  return (
    <section className="tagband">
      <div className="wrap">
        <p className="tagband-line reveal">Marketing on Autopilot. <span>Growth on Purpose.</span></p>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="finalcta">
      <div className="wrap">
        <span className="eyebrow" style={{ display: "block", marginBottom: 20 }}>Growth on purpose</span>
        <h2>Marketing shouldn’t be a <span className="gl">full-time job.</span></h2>
        <p>Most business owners didn’t start a business to become marketers. Wizora gives you the power of an entire marketing team — without the cost, complexity or time commitment.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <button className="btn btn-primary btn-lg" onClick={() => window.dispatchEvent(new Event("wizora:signup"))}>
            Start free trial
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
          <button className="btn btn-ghost btn-lg" onClick={() => window.dispatchEvent(new Event("wizora:signup"))}>Generate my marketing strategy</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const hrefs = { "Privacy": "/privacy.html", "Terms": "/terms.html" };
  const cols = [
    { h: "Product", l: ["Features", "Pricing", "Integrations", "Changelog"] },
    { h: "Company", l: ["About", "Careers", "Blog", "Contact"] },
    { h: "Resources", l: ["Help center", "API docs", "Privacy", "Terms"] },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="brand"><img src="uploads/wizora_icon_transparent.png" alt="" />Wizora</div>
            <p>Your AI autopilot for content, ads, SEO, replies and leads — across every channel.</p>
          </div>
          {cols.map((c) => (
            <div className="foot-col" key={c.h}>
              <h4>{c.h}</h4>
              {c.l.map((x) => <a href={hrefs[x] || "#"} key={x}>{x}</a>)}
            </div>
          ))}
        </div>
        <div className="foot-bot">
          <span>© 2026 Wizora, Inc.</span>
          <span>Made for people who post a lot.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Constellation, Features, LearnsBusiness, AITeam, Testimonials, WhyChoose, Pricing, FinalCTA, Footer, TrustStrip, TaglineBand });
