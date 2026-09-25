import { ArrowRight, Download, Layers3, Menu, Sparkles, UsersRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { routerBase } from "../lib/site-path";

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260818_072341_50851634-bbc3-4c33-9acc-7647d4db44aa.mp4";

const navItems = ["Product", "Solutions", "Safety", "FAQ"];

function LanyardMark() {
  return (
    <svg className="lanyard-mark" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="2.5" width="6" height="19" rx="3" fill="currentColor" opacity=".42" />
      <rect x="14" y="2.5" width="6" height="19" rx="3" fill="currentColor" opacity=".92" />
      <rect x="8.5" y="10.4" width="7" height="2.6" rx="1.3" fill="currentColor" />
    </svg>
  );
}

function SmartLanyardBrand() {
  return (
    <a className="vesper-logo" href="#top" aria-label="Smart Lanyard home">
      <LanyardMark />
      <span>Smart Lanyard</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const demoPath = `${routerBase()}/demo`;

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <main className="vesper-page" id="top">
      <div className="grain" aria-hidden="true" />
      <video className="hero-photo" autoPlay muted loop playsInline preload="auto" src={videoUrl} aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="vesper-layout">
        <div className={`menu-backdrop ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen} onClick={() => setMenuOpen(false)} />

        <header className="vesper-header">
          <SmartLanyardBrand />

          <nav className="vesper-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </nav>

          <a className="vesper-btn vesper-btn--solid header-cta" href={demoPath}>Request a demo</a>

          <button
            className="vesper-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={19} aria-hidden="true" />
            <X size={19} aria-hidden="true" />
          </button>
        </header>

        <aside className={`mobile-nav ${menuOpen ? "is-open" : ""}`} id="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
          <a className="vesper-btn vesper-btn--solid" href={demoPath} onClick={() => setMenuOpen(false)}>Request a demo</a>
        </aside>

        <section className="vesper-hero" aria-labelledby="hero-title">
          <div className="vesper-hero-copy">
            <div className="vesper-badge"><Sparkles className="badge-star" size={17} aria-hidden="true" /> Connected identity infrastructure</div>
            <h1 id="hero-title">
              <span className="headline-line">One card for <em>connected identity</em></span>
              <span className="headline-line">access, updates, and safety.</span>
            </h1>
            <p className="vesper-lede">A familiar e-paper ID card that brings identity, NFC access, attendance, live updates, QR passes, and SOS support together for schools and workplaces.</p>
            <div className="vesper-actions">
              <a className="vesper-btn vesper-btn--solid vesper-btn--hero" href={demoPath}>Request a demo <ArrowRight size={15} aria-hidden="true" /></a>
              <a className="vesper-btn vesper-btn--ghost vesper-btn--hero" href="#product">See it in action</a>
            </div>
          </div>
        </section>

        <footer className="vesper-stats" aria-label="Smart Lanyard product highlights">
          <div className="vesper-stat"><Layers3 size={20} aria-hidden="true" /><span>Dynamic identity + access</span></div>
          <div className="vesper-stat"><Download size={20} aria-hidden="true" /><span>Updates without reprinting</span></div>
          <div className="vesper-stat"><UsersRound className="stat-icon-wide" size={22} aria-hidden="true" /><span>Built for schools and workplaces</span></div>
        </footer>
      </div>
    </main>
  );
}
