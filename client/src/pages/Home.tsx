/**
 * Future Signal design: near-black spatial canvas, signal-blue as active interface light,
 * oversized Space Grotesk type, and one physical lanyard showcase surrounded by abstract data motion.
 */
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  Building2,
  Check,
  ChevronDown,
  CircleDot,
  Clock3,
  Fingerprint,
  GraduationCap,
  LayoutGrid,
  MapPinned,
  RadioTower,
  ScanLine,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wifi,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../future.css";

type Audience = "students" | "teams";

const productImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const modes = {
  students: {
    label: "EDUCATION MODE",
    name: "A calmer campus signal.",
    detail: "A single credential makes arrivals, schedules, access and care easier to understand for everyone around a student.",
    icon: GraduationCap,
    cards: [
      { icon: ScanLine, title: "Arrive with certainty", note: "Attendance and entry become a clear live moment, not another manual task.", tags: ["NFC check-in", "Arrival update"] },
      { icon: BellRing, title: "Keep the right people in sync", note: "Timetable changes, notices and reminders land on the credential when they matter.", tags: ["E-paper updates", "Family alerts"] },
      { icon: ShieldCheck, title: "Make safety immediate", note: "A visible identity layer and one-touch response support safer everyday movement.", tags: ["SOS ready", "Secure access"] },
    ],
  },
  teams: {
    label: "WORKPLACE MODE",
    name: "One identity. A more fluid workday.",
    detail: "Give employees a single wearable layer for entering, navigating, staying informed and responding with confidence.",
    icon: Building2,
    cards: [
      { icon: Fingerprint, title: "Make access effortless", note: "Identity and access move together across spaces, rooms and the moments in between.", tags: ["Dynamic credential", "NFC access"] },
      { icon: Clock3, title: "Keep the day visible", note: "The card can surface schedules, meeting changes and vital workday information in context.", tags: ["Live agenda", "Shift updates"] },
      { icon: RadioTower, title: "Respond as one system", note: "Live notifications and safety signals are there when a fast, coordinated response counts.", tags: ["Safety alert", "Card control"] },
    ],
  },
} as const;

const principles = [
  { icon: Wifi, index: "01", title: "Always current", body: "The card becomes a living display for the identity and information a person needs right now." },
  { icon: MapPinned, index: "02", title: "Built for movement", body: "The experience connects the people, places and transitions that shape an ordinary day." },
  { icon: UsersRound, index: "03", title: "Designed for trust", body: "Clear signals and careful controls make the system useful without making it feel intrusive." },
];

function goTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [audience, setAudience] = useState<Audience>("students");
  const active = modes[audience];
  const ActiveIcon = active.icon;
  const requestDemo = () => toast("Demo request started", { description: "We’ll help you plan the right first deployment." });

  return (
    <main className="future-page">
      <header className="future-nav">
        <button className="future-brand" onClick={() => goTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
        <nav aria-label="Primary navigation"><button onClick={() => goTo("#modes")}>Use cases</button><button onClick={() => goTo("#system")}>System</button><button onClick={() => goTo("#contact")}>Contact</button></nav>
        <button className="future-nav-cta" onClick={requestDemo}>Book a demo <ArrowUpRight aria-hidden="true" /></button>
      </header>

      <section className="future-hero" id="top">
        <div className="hero-matrix" aria-hidden="true" /><div className="hero-glow hero-glow-a" aria-hidden="true" /><div className="hero-glow hero-glow-b" aria-hidden="true" />
        <div className="hero-copy-future">
          <p className="eyebrow"><i /> IDENTITY, IN MOTION</p>
          <h1>One signal.<br /><em>Everywhere you move.</em></h1>
          <p className="hero-lead">Smart Lanyard unifies identity, access, live updates and care into one wearable system for the real world.</p>
          <div className="hero-actions"><button className="future-primary" onClick={requestDemo}>Explore the system <ArrowUpRight aria-hidden="true" /></button><button className="future-text-button" onClick={() => goTo("#modes")}>See use cases <ChevronDown aria-hidden="true" /></button></div>
          <div className="hero-metrics"><span><b>01</b> LIVE IDENTITY</span><span><b>02</b> SMART ACCESS</span><span><b>03</b> REAL-TIME CARE</span></div>
        </div>
        <motion.figure className="hero-product-focus" initial={{ opacity: 0, y: 48, rotate: 6 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}>
          <div className="product-orbit orbit-one" aria-hidden="true" /><div className="product-orbit orbit-two" aria-hidden="true" /><div className="product-halo" aria-hidden="true" />
          <img src={productImage} alt="Smart Lanyard digital identity card" />
          <figcaption><span><i /> CARD ONLINE</span><span>V.01 / 2026</span></figcaption>
          <div className="product-callout callout-a"><i /> E-PAPER DISPLAY</div><div className="product-callout callout-b"><i /> NFC / BLE</div>
        </motion.figure>
      </section>

      <section className="future-transition" aria-label="Smart Lanyard signal transition">
        <div className="transition-sticky">
          <div className="signal-horizon" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div className="signal-grid" aria-hidden="true" />
          <div className="transition-copy transition-left"><p>FROM STATIC TO LIVE</p><h2>Identity starts<br />to <em>respond.</em></h2></div>
          <motion.div className="abstract-core" initial={{ scale: 0.84, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} aria-hidden="true"><span /><span /><span /><b><CircleDot /></b></motion.div>
          <div className="transition-copy transition-right"><p>SYSTEM SIGNALS</p><span><b>01</b> Verify</span><span><b>02</b> Inform</span><span><b>03</b> Protect</span></div>
          <div className="transition-scroll">SCROLL TO ENTER <ChevronDown aria-hidden="true" /></div>
        </div>
      </section>

      <section className="future-modes" id="modes">
        <div className="modes-heading"><div><p className="eyebrow dark"><i /> BUILT FOR THE PEOPLE IN MOTION</p><h2>One platform.<br /><em>Two powerful contexts.</em></h2></div><p>Choose a world to see how a live credential can simplify the moments people move through every day.</p></div>
        <div className="mode-switch" role="tablist"><button className={audience === "students" ? "active" : ""} onClick={() => setAudience("students")} role="tab" aria-selected={audience === "students"}><GraduationCap /> Students</button><button className={audience === "teams" ? "active" : ""} onClick={() => setAudience("teams")} role="tab" aria-selected={audience === "teams"}><Building2 /> Companies</button></div>
        <AnimatePresence mode="wait">
          <motion.div className="mode-stage" key={audience} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.36, ease: [0.23, 1, 0.32, 1] }}>
            <aside className="mode-intro"><div className="mode-icon"><ActiveIcon /></div><p>{active.label}</p><h3>{active.name}</h3><span>{active.detail}</span><button onClick={requestDemo}>Plan this experience <ArrowUpRight /></button></aside>
            <div className="mode-cards">{active.cards.map((card, index) => { const Icon = card.icon; return <motion.article key={card.title} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06 + index * 0.07, duration: 0.32 }}><span className="mode-number">0{index + 1}</span><div className="mode-card-icon"><Icon /></div><h4>{card.title}</h4><p>{card.note}</p><div>{card.tags.map((tag) => <span key={tag}><Check />{tag}</span>)}</div></motion.article>; })}</div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="future-system" id="system">
        <div className="system-backdrop" aria-hidden="true"><span /><span /><span /></div>
        <div className="system-heading"><p className="eyebrow"><i /> THE OPERATING LAYER</p><h2>Technology that<br />feels <em>human.</em></h2><p>Everything is designed to reduce friction around the everyday, while making important moments clearer and easier to act on.</p></div>
        <div className="principle-list">{principles.map((principle, index) => { const Icon = principle.icon; return <motion.article key={principle.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08, duration: 0.4 }}><span>{principle.index}</span><Icon /><h3>{principle.title}</h3><p>{principle.body}</p></motion.article>; })}</div>
      </section>

      <section className="future-final" id="contact"><div className="final-grid" aria-hidden="true" /><div className="final-satellite satellite-one" aria-hidden="true" /><div className="final-satellite satellite-two" aria-hidden="true" /><div><p className="eyebrow"><i /> READY WHEN YOU ARE</p><h2>Give identity<br />a <em>better signal.</em></h2><p>Let’s design the first Smart Lanyard experience for your campus, workplace or community.</p><button className="future-primary" onClick={requestDemo}>Request a demo <ArrowUpRight /></button></div></section>

      <footer className="future-footer"><div className="future-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>IDENTITY / ACCESS / AWARENESS</span><b>© 2026</b></footer>
    </main>
  );
}
