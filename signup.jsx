// ===== Signup modal =====
function SignupModal({ open, onClose }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setShow(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    }
  }, [open]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const goSignup = () => { window.location.href = "https://app.wizora.co.uk/signup"; };
  const goGoogle = () => { window.location.href = "https://app.wizora.co.uk/signup"; };
  const goLogin  = (e) => { e.preventDefault(); window.location.href = "https://app.wizora.co.uk/login"; };

  const G = <svg viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.5-1.7 4.4-5.5 4.4A6.5 6.5 0 1112 5.5c1.86 0 3.1.8 3.8 1.5l2.6-2.5C16.7 2.9 14.6 2 12 2a10 10 0 100 20c5.77 0 9.6-4 9.6-9.7 0-.65-.07-1.15-.16-1.65H12z"/></svg>;

  return (
    <div className={"modal-scrim" + (show ? " in" : "")} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="x" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>

        <div className="m-brand"><img src="uploads/wizora_icon_transparent.png" alt="" />Wizora</div>
        <h3>Start your free trial</h3>
        <p className="m-sub">No credit card required. Cancel anytime.</p>

        <div className="oauth">
          <button type="button" onClick={goGoogle}>{G} Continue with Google</button>
        </div>
        <div className="divider">OR</div>

        <button className="btn btn-primary" style={{ width: "100%", marginTop: 4 }} onClick={goSignup}>Create account with email</button>

        <p className="m-foot">Already have an account? <a href="https://app.wizora.co.uk/login" onClick={goLogin}>Sign in</a></p>
        <p className="m-terms">By signing up you agree to Wizora's <a href="/terms.html">Terms of Service</a> and <a href="/privacy.html">Privacy Policy</a>.</p>
      </div>
    </div>
  );
}

window.SignupModal = SignupModal;
