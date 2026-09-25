import { ChevronDown, Menu, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260803_192301_9231ed6b-c55c-4a48-909c-4ebe11cf2e11.mp4";

const navItems = ["Modules", "Clientele", "Solutions", "Billing"];

function NexumMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 256 256"
      fill="currentColor"
    >
      <path d="M 128 128 C 128 198.692 70.692 256 0 256 C 0 185.308 57.308 128 128 128 Z M 128 128 C 198.692 128 256 185.308 256 256 C 185.308 256 128 198.692 128 128 Z M 0 0 C 70.692 0 128 57.308 128 128 C 57.308 128 0 70.692 0 0 Z M 256 0 C 256 70.692 198.692 128 128 128 C 128 57.308 185.308 0 256 0 Z" />
    </svg>
  );
}

function GetStartedButton({ className = "" }: { className?: string }) {
  return (
    <button className={`nexum-cta ${className}`} type="submit">
      Get started
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent("Get started with Nexum");
    const body = encodeURIComponent(`Hello Nexum, my email is ${email}.`);
    window.location.href = `mailto:hello@smartlanyard.in?subject=${subject}&body=${body}`;
  };

  return (
    <main className="nexum-page">
      <section className="nexum-hero" aria-labelledby="nexum-title">
        <video
          className="nexum-video"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          src={videoUrl}
          aria-hidden="true"
        />

        <div className="nexum-shell">
          <header className="nexum-nav">
            <a className="nexum-brand" href="#top" aria-label="Nexum home">
              <NexumMark className="nexum-brand-mark" />
              <span>nexum</span>
            </a>

            <nav className="nexum-desktop-nav" aria-label="Primary navigation">
              <div className="nexum-nav-cluster">
                {navItems.map((item) => (
                  <a href={`#${item.toLowerCase()}`} key={item}>
                    {item}
                    {item === "Solutions" && <ChevronDown size={14} aria-hidden="true" />}
                  </a>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <GetStartedButton />
              </form>
            </nav>

            <button
              className="nexum-menu-button"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="nexum-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Menu className={`nexum-menu-icon ${menuOpen ? "is-hidden" : ""}`} size={20} aria-hidden="true" />
              <X className={`nexum-close-icon ${menuOpen ? "" : "is-hidden"}`} size={20} aria-hidden="true" />
            </button>
          </header>

          <div className={`nexum-menu-backdrop ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} onClick={() => setMenuOpen(false)} />
          <aside className={`nexum-mobile-drawer ${menuOpen ? "is-open" : ""}`} id="nexum-mobile-menu" aria-label="Mobile navigation">
            <nav className="nexum-mobile-links">
              {navItems.map((item, index) => (
                <a href={`#${item.toLowerCase()}`} key={item} style={{ transitionDelay: menuOpen ? `${(index + 1) * 60}ms` : "0ms" }} onClick={() => setMenuOpen(false)}>
                  {item}
                  {item === "Solutions" && <ChevronDown size={18} aria-hidden="true" />}
                </a>
              ))}
            </nav>
            <form className="nexum-mobile-cta-wrap" onSubmit={handleSubmit}>
              <GetStartedButton />
            </form>
          </aside>

          <div className="nexum-content" id="top">
            <div className="nexum-copy">
              <h1 id="nexum-title">Ship AI workers that grind while you rest</h1>
              <form className="nexum-email-form" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="nexum-email">Your email address</label>
                <input
                  id="nexum-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Type your email"
                  autoComplete="email"
                  required
                />
                <GetStartedButton />
              </form>
            </div>

            <div className="nexum-cards" aria-label="Nexum highlights">
              <article className="nexum-glass-card nexum-stats-card">
                <strong className="nexum-stat-number">42,500+</strong>
                <p>Teams run Nexum to handle recurring ops daily.</p>
              </article>

              <article className="nexum-glass-card nexum-testimonial-card">
                <div className="nexum-testimonial-brand"><span> S </span><strong>Stratify</strong></div>
                <blockquote>“With Nexum we went from managing tedious operational work to having AI agents that handle everything.”</blockquote>
                <div className="nexum-testimonial-author">
                  <img src="https://i.pravatar.cc/72?img=12" alt="Sara Klein" />
                  <div><strong>Sara Klein</strong><span>Dir of Operations</span></div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
