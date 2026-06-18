// ===== App root =====
function Nav({ onSignup }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on, { passive: true });
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a className="brand" href="#top"><img src="uploads/wizora_icon_transparent.png" alt="" />Wizora</a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#platforms">Platforms</a>
        <a href="#how">How it works</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="nav-cta">
        <a className="nav-signin" href="#" onClick={(e) => { e.preventDefault(); onSignup(); }}>Sign in</a>
        <button className="btn btn-primary" onClick={onSignup}>Start free trial</button>
      </div>
    </nav>
  );
}

function App() {
  const [signup, setSignup] = React.useState(false);
  React.useEffect(() => {
    const open = () => setSignup(true);
    window.addEventListener("wizora:signup", open);
    return () => window.removeEventListener("wizora:signup", open);
  }, []);
  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -7% 0px" });
    const t = setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
        if (el.classList.contains("reveal-stagger")) {
          Array.from(el.children).forEach((c, i) => { c.style.transitionDelay = (i * 65) + "ms"; });
        }
        io.observe(el);
      });
    }, 60);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
  const open = () => setSignup(true);
  return (
    <React.Fragment>
      <span id="top"></span>
      <Nav onSignup={open} />
      <Hero />
      <TrustStrip />
      <Constellation />
      <LearnsBusiness />
      <AITeam />
      <Features />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <TaglineBand />
      <Footer />
      <SignupModal open={signup} onClose={() => setSignup(false)} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
