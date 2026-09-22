import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  Menu,
  QrCode,
  Radio,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";

const assets = {
  logo: "./assets/smart-lanyard-company-logo.png",
  dynamicId: "./assets/smart-lanyard-dynamic-id.png",
  qr: "./assets/smart-lanyard-qr-digital-pass.png",
  timetable: "./assets/smart-lanyard-live-timetable.png",
  access: "./assets/smart-lanyard-campus-access.png",
  parents: "./assets/smart-lanyard-parent-connectivity.png",
  safety: "./assets/smart-lanyard-sos-safety.png",
};

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4";
const posterUrl =
  "https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg";

const features = [
  {
    number: "01",
    label: "Dynamic identity",
    title: "An ID card that stays current.",
    copy: "Keep names, roles, profiles and credentials visible without treating every change like a reprint.",
    image: assets.dynamicId,
    icon: Sparkles,
  },
  {
    number: "02",
    label: "Digital pass",
    title: "Show a pass. Scan in. Keep moving.",
    copy: "Use dynamic QR codes for events, visitors, permissions and checkpoints that need a quick visual check.",
    image: assets.qr,
    icon: QrCode,
  },
  {
    number: "03",
    label: "Live updates",
    title: "The day changes. The card keeps up.",
    copy: "Timetables, room changes, announcements and workplace notices stay close to the person who needs them.",
    image: assets.timetable,
    icon: CalendarClock,
  },
  {
    number: "04",
    label: "One-tap access",
    title: "One tap for the places that make up the day.",
    copy: "Connect approved credentials to libraries, buses, labs, cafeterias, offices, events and more.",
    image: assets.access,
    icon: Wifi,
  },
];

const faqs = [
  [
    "Is Smart Lanyard only for schools?",
    "No. It can be configured for schools, workplaces, campuses, events and other organisations that need connected identity and access.",
  ],
  [
    "Does the card replace a normal ID card?",
    "It keeps the familiar form of an ID card while adding a dynamic display and connected features such as QR, NFC, updates and safety alerts.",
  ],
  [
    "Can the card information be updated?",
    "The platform is designed to support updates to schedules, roles, permissions and other approved information without treating every change as a new printed-card project.",
  ],
  [
    "What happens when someone needs help?",
    "A configured one-touch SOS action can send a safety alert through the connected dashboard so trusted staff or response teams can review and act.",
  ],
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="Smart Lanyard home">
      <img src={assets.logo} alt="" />
      <span>SMART<br />LANYARD</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solution, setSolution] = useState<"schools" | "workplaces">("schools");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell" id="top">
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          poster={posterUrl}
          src={videoUrl}
        />
        <div className="hero-veil" />
        <div className="hero-grid" />

        <header className={`topbar ${menuOpen ? "topbar--open" : ""}`}>
          <Brand />
          <button
            className="menu-trigger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className={`nav-panel ${menuOpen ? "nav-panel--open" : ""}`}>
            <nav className="nav-links" aria-label="Primary navigation">
              <a href="#product" onClick={closeMenu}>Product</a>
              <a href="#solutions" onClick={closeMenu}>Solutions</a>
              <a href="#safety" onClick={closeMenu}>Safety</a>
              <a href="#faq" onClick={closeMenu}>FAQ</a>
            </nav>
            <a className="nav-pill" href="#demo" onClick={closeMenu}>
              Request a demo <ArrowUpRight size={15} />
            </a>
          </div>
        </header>

        <main className="hero-content">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> Connected identity for everyday life</p>
            <h1>One smart card.<br /><em>Unlimited possibilities.</em></h1>
            <p className="hero-subcopy">Identity, entry, updates and safety—brought together in a familiar card for schools and workplaces.</p>
            <div className="hero-actions">
              <a className="button button--light" href="#demo">Request a demo <ArrowRight size={17} /></a>
              <a className="text-link" href="#product">See how it works <ArrowDownRight size={17} /></a>
            </div>
          </div>
          <div className="hero-product" aria-label="Smart Lanyard product preview">
            <div className="product-orbit product-orbit--one" />
            <div className="product-orbit product-orbit--two" />
            <div className="product-frame">
              <div className="product-frame__top"><span>EPAPER / 01</span><span>LIVE ID</span></div>
              <img src={assets.dynamicId} alt="Smart Lanyard dynamic identity card" />
              <div className="product-frame__bottom"><span className="status-dot" /> Display ready <span>01 / 06</span></div>
            </div>
            <span className="floating-note floating-note--top"><Sparkles size={14} /> Dynamic display</span>
            <span className="floating-note floating-note--bottom"><Wifi size={14} /> NFC enabled</span>
          </div>
        </main>

        <div className="hero-footer">
          <div className="hero-footer__statement">A familiar ID card,<br /><span>connected to what matters.</span></div>
          <div className="hero-footer__features">
            {["Identity", "Access", "Updates", "Safety"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <span className="scroll-cue">Scroll to explore <ArrowDownRight size={15} /></span>
        </div>
      </section>

      <section className="intro-section section-pad" id="product">
        <div className="section-kicker"><span>01</span> The product</div>
        <div className="intro-grid">
          <div>
            <h2>A familiar ID card.<br /><em>With a little more help.</em></h2>
          </div>
          <div className="intro-copy">
            <p>Smart Lanyard looks like a normal ID card, but it is built for a more connected day. The display can keep identity information current, while smart features help people move through approved spaces, stay informed and access support.</p>
            <p className="muted-copy">Simple for the wearer. Clearer for the people and teams supporting them.</p>
            <a className="inline-link" href="#solutions">Explore the solutions <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="signal-row">
          <div><span className="signal-icon"><Smartphone size={18} /></span><strong>Card + app</strong><span>One connected experience</span></div>
          <div><span className="signal-icon"><Radio size={18} /></span><strong>Live when it matters</strong><span>Updates without reprinting</span></div>
          <div><span className="signal-icon"><ShieldCheck size={18} /></span><strong>Built for trust</strong><span>Relevant access and alerts</span></div>
        </div>
      </section>

      <section className="feature-section section-pad">
        <div className="section-heading-row">
          <div><div className="section-kicker"><span>02</span> What the card does</div><h2>Make everyday moments<br /><em>more useful.</em></h2></div>
          <p>One credential for the moments that make up a school or workday—from the first check-in to the last update.</p>
        </div>
        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;
            return <article className="feature-card" key={feature.number}>
              <div className="feature-card__image"><img src={feature.image} alt={feature.title} /><span className="image-index">{feature.number}</span></div>
              <div className="feature-card__body"><div className="feature-card__meta"><span>{feature.label}</span><Icon size={17} /></div><h3>{feature.title}</h3><p>{feature.copy}</p><a href="#demo" className="card-link">Learn more <ArrowUpRight size={15} /></a></div>
            </article>;
          })}
        </div>
      </section>

      <section className="solutions-section section-pad" id="solutions">
        <div className="section-kicker"><span>03</span> One platform / two worlds</div>
        <div className="solutions-header"><h2>Built around the way<br /><em>your organisation works.</em></h2><div className="solution-switcher" role="tablist" aria-label="Solutions"><button className={solution === "schools" ? "active" : ""} onClick={() => setSolution("schools")} role="tab">For schools</button><button className={solution === "workplaces" ? "active" : ""} onClick={() => setSolution("workplaces")} role="tab">For workplaces</button></div></div>
        <div className="solution-panel">
          <div className="solution-panel__copy"><span className="solution-label">0{solution === "schools" ? "1" : "2"} / {solution === "schools" ? "Schools" : "Workplaces"}</span><h3>{solution === "schools" ? "A school ID card that helps the day run more smoothly." : "A workplace credential that moves with the way teams work."}</h3><p>{solution === "schools" ? "One card to help students check in, enter the right places and keep parents updated—while giving staff a clearer operational view." : "One flexible credential for identity, access, role-based permissions, check-ins and important workplace updates."}</p><a className="inline-link inline-link--light" href="#demo">See the full solution <ArrowUpRight size={16} /></a></div>
          <div className="solution-list">{(solution === "schools" ? ["Student identity + dynamic QR", "NFC attendance and campus access", "Timetables, assignments and alerts", "Parent connectivity and SOS"] : ["Employee identity and building access", "Visitor and event passes", "Role updates and facility permissions", "Emergency alerts and administration"]).map((item, index) => <div className="solution-list__item" key={item}><span>0{index + 1}</span><strong>{item}</strong><Check size={16} /></div>)}</div>
        </div>
      </section>

      <section className="safety-section section-pad" id="safety">
        <div className="safety-image"><img src={assets.safety} alt="Smart Lanyard safety card with SOS status" /><div className="safety-stamp"><ShieldCheck size={18} /> Safety ready</div></div>
        <div className="safety-copy"><div className="section-kicker"><span>04</span> Safety when it matters</div><h2>Help is<br /><em>one touch away.</em></h2><p>When something goes wrong, speed and clarity matter. A one-touch SOS trigger can send an alert through the connected dashboard, helping the right people respond faster and with better context.</p><div className="safety-points"><div><span>01</span><strong>Ask for help quickly.</strong></div><div><span>02</span><strong>Give trusted teams context.</strong></div><div><span>03</span><strong>Keep human decisions central.</strong></div></div><a className="button button--outline" href="#demo">Talk about your needs <ArrowRight size={17} /></a></div>
      </section>

      <section className="steps-section section-pad">
        <div className="section-kicker"><span>05</span> How it works</div><div className="steps-heading"><h2>Simple for the wearer.<br /><em>Powerful for the organisation.</em></h2><p>Designed to feel familiar on day one, then become more useful as your workflows connect.</p></div>
        <div className="steps-grid">{[["01", "Wear it", "Visible, familiar and ready whenever identity needs to be confirmed."], ["02", "Tap or scan", "Use NFC, QR or an approved reader to enter, check in or confirm a pass."], ["03", "Stay updated", "Receive relevant timetable, attendance, access or operational updates."], ["04", "Respond when needed", "Use alerts and SOS tools to help trusted teams act with context."]].map(([number, title, copy]) => <div className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="step-arrow" size={18} /></div>)}</div>
      </section>

      <section className="faq-section section-pad" id="faq">
        <div className="faq-intro"><div className="section-kicker"><span>06</span> Frequently asked</div><h2>Good questions.<br /><em>Clear answers.</em></h2><p>We are building a calmer, more connected way to handle identity, access, updates and safety.</p></div>
        <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div>
      </section>

      <section className="demo-section section-pad" id="demo">
        <div className="demo-glow" /><div className="section-kicker"><span>07</span> Start a conversation</div><h2>Ready to make identity<br /><em>more useful?</em></h2><p>See how Smart Lanyard could work across your school, campus, workplace or organisation.</p><div className="demo-actions"><a className="button button--light" href="https://wa.me/917022004954?text=Hello%20Smart%20Lanyard%2C%20I%20would%20like%20to%20know%20more%20about%20Smart%20Lanyard." target="_blank" rel="noreferrer">WhatsApp the team <ArrowUpRight size={17} /></a><a className="text-link" href="mailto:hello@smartlanyard.in">hello@smartlanyard.in <ArrowRight size={16} /></a></div></section>

      <footer className="site-footer"><Brand compact /><p>One simple card for identity, entry, updates and safety.</p><div className="footer-links"><a href="#product">The product</a><a href="#solutions">Solutions</a><a href="#safety">Safety</a><a href="#faq">FAQ</a></div><span>© 2026 Smart Lanyard</span></footer>
    </div>
  );
}

