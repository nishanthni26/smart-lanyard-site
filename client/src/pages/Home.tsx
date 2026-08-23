/**
 * Orbit Interface redesign: a motion-led premium UI for Smart Lanyard.
 * The physical credential appears once as the hero artifact; every other system moment is abstract data motion.
 */
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Bell,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  Compass,
  Fingerprint,
  GraduationCap,
  Menu,
  MoveUpRight,
  Orbit,
  Radio,
  Shield,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../ux-pro.css";

type Context = "students" | "companies";

const productImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const contextData = {
  students: {
    eyebrow: "FOR EDUCATION",
    title: "A calmer, more connected day.",
    body: "Give students a familiar wearable layer for the places, schedules and people that matter around campus.",
    highlights: [
      { icon: Compass, name: "Arrivals that make sense", text: "A clear arrival signal keeps attendance and pick-up moments in step." },
      { icon: Bell, name: "Updates in the right place", text: "Schedules, reminders and notices move from the system to the card." },
      { icon: Shield, name: "Care on standby", text: "Live identity and one-touch response support confident movement." },
    ],
  },
  companies: {
    eyebrow: "FOR COMPANIES",
    title: "One credential. Less workday friction.",
    body: "Unify access, identity and live workday information in a format people already understand.",
    highlights: [
      { icon: Fingerprint, name: "Access without the shuffle", text: "Move through entry points and shared spaces with one dynamic credential." },
      { icon: Radio, name: "Signals that stay current", text: "Shifts, meetings and workplace notices can update when they change." },
      { icon: CircleCheck, name: "Control when it matters", text: "Protect people and spaces with live state changes and immediate actions." },
    ],
  },
} as const;

const workflow = [
  { num: "01", label: "Provision", copy: "Issue identity from a secure admin layer." },
  { num: "02", label: "Activate", copy: "Set access, updates and the experiences that matter." },
  { num: "03", label: "Move", copy: "Let the card work quietly through the day." },
  { num: "04", label: "Adapt", copy: "Change what is live without replacing the credential." },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [context, setContext] = useState<Context>("students");
  const [menuOpen, setMenuOpen] = useState(false);
  const active = contextData[context];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-140, 140], [7, -7]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-140, 140], [-8, 8]), { stiffness: 140, damping: 18 });
  const requestDemo = () => toast("Demo request started", { description: "We’ll help you shape the right first rollout." });
  const navTo = (id: string) => { setMenuOpen(false); scrollTo(id); };

  return (
    <main className="orbit-page">
      <header className="orbit-nav">
        <button className="orbit-brand" onClick={() => navTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
        <nav className="desktop-nav" aria-label="Primary navigation"><button onClick={() => navTo("#contexts")}>Contexts</button><button onClick={() => navTo("#workflow")}>How it works</button><button onClick={() => navTo("#contact")}>Contact</button></nav>
        <button className="nav-demo" onClick={requestDemo}>Talk to us <MoveUpRight /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .2 }}><button onClick={() => navTo("#contexts")}>Contexts <ArrowRight /></button><button onClick={() => navTo("#workflow")}>How it works <ArrowRight /></button><button onClick={() => navTo("#contact")}>Contact <ArrowRight /></button></motion.div>}</AnimatePresence>

      <section className="orbit-hero" id="top">
        <div className="hero-noise" aria-hidden="true" /><div className="hero-beam hero-beam-one" aria-hidden="true" /><div className="hero-beam hero-beam-two" aria-hidden="true" />
        <div className="hero-copy-orbit"><motion.p className="status-line" initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .12 }}><i /> SMART IDENTITY LAYER <span>LIVE</span></motion.p><motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .62, delay: .16, ease: [0.23, 1, 0.32, 1] }}>The card that<br /><em>keeps up.</em></motion.h1><motion.p className="hero-statement" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .58, delay: .28 }}>A living identity layer for the people, places and moments that move your organisation forward.</motion.p><motion.div className="hero-actions-orbit" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, delay: .38 }}><button className="orbital-button" onClick={requestDemo}>Book a walkthrough <ArrowRight /></button><button className="ghost-action" onClick={() => navTo("#contexts")}>Explore contexts <ChevronDown /></button></motion.div></div>
        <motion.div className="hero-card-stage" initial={{ opacity: 0, scale: .92, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .72, delay: .18, ease: [0.23, 1, 0.32, 1] }} onPointerMove={(event) => { const box = event.currentTarget.getBoundingClientRect(); x.set(event.clientX - box.left - box.width / 2); y.set(event.clientY - box.top - box.height / 2); }} onPointerLeave={() => { x.set(0); y.set(0); }}>
          <div className="stage-ring ring-a" aria-hidden="true" /><div className="stage-ring ring-b" aria-hidden="true" /><div className="stage-axis axis-a" aria-hidden="true" /><div className="stage-axis axis-b" aria-hidden="true" />
          <motion.div className="card-tilt" style={{ rotateX, rotateY, transformPerspective: 1000 }}><img src={productImage} alt="Smart Lanyard connected digital identity card" /></motion.div>
          <span className="stage-label label-top"><i /> IDENTITY ACTIVE</span><span className="stage-label label-left">LIVE / NFC / BLE</span><span className="stage-label label-bottom">MOVE TO EXPLORE</span>
        </motion.div>
        <div className="hero-footnote"><span>SCROLL TO CONNECT</span><i /><span>01 / 04</span></div>
      </section>

      <section className="signal-bridge"><div className="bridge-inner"><p>FROM A STATIC PASS</p><div className="bridge-stream" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><p>TO A LIVE SYSTEM</p></div></section>

      <section className="contexts-section" id="contexts">
        <div className="contexts-intro"><p className="section-kicker"><Sparkles /> SELECT YOUR CONTEXT</p><h2>Designed around<br />the way people <em>move.</em></h2><p>Smart Lanyard adapts to different environments without asking people to adapt to another complex system.</p></div>
        <div className="context-layout"><div className="context-tabs" role="tablist"><button className={context === "students" ? "active" : ""} onClick={() => setContext("students")} role="tab" aria-selected={context === "students"}><span>01</span><GraduationCap /> Students</button><button className={context === "companies" ? "active" : ""} onClick={() => setContext("companies")} role="tab" aria-selected={context === "companies"}><span>02</span><Building2 /> Companies</button></div><AnimatePresence mode="wait"><motion.div className="context-display" key={context} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .32, ease: [0.23, 1, 0.32, 1] }}><aside><p>{active.eyebrow}</p><h3>{active.title}</h3><span>{active.body}</span><button onClick={requestDemo}>Plan a rollout <ArrowRight /></button></aside><div className="context-highlights">{active.highlights.map((item, index) => { const Icon = item.icon; return <motion.article key={item.name} initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .07 + index * .07 }}><div><span>0{index + 1}</span><Icon /></div><h4>{item.name}</h4><p>{item.text}</p><b>STATUS READY</b></motion.article>; })}</div></motion.div></AnimatePresence></div>
      </section>

      <section className="workflow-section" id="workflow"><div className="workflow-head"><p className="section-kicker inverse"><Orbit /> SIGNAL FLOW</p><h2>Set it once.<br /><em>Let it evolve.</em></h2></div><div className="workflow-grid">{workflow.map((step, index) => <motion.article key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .08, duration: .42 }}><span>{step.num}</span><div className="workflow-node"><i /><b /></div><h3>{step.label}</h3><p>{step.copy}</p></motion.article>)}</div><p className="workflow-caption">A single control layer. A clearer everyday experience.</p></section>

      <section className="proof-section"><div className="proof-copy"><p className="section-kicker"><Shield /> BUILT TO BE TRUSTED</p><h2>Visible when<br />it helps. Quiet<br />when it doesn’t.</h2><p>Every interaction is made to feel obvious to the person using it—and accountable to the organisation supporting it.</p><div><span><Check /> Dynamic display</span><span><Check /> Managed access</span><span><Check /> Live updates</span></div></div><div className="proof-orbit" aria-hidden="true"><div className="proof-center"><Fingerprint /></div><span className="proof-pin pin-one" /><span className="proof-pin pin-two" /><span className="proof-pin pin-three" /><i>CONTROLLED<br />CONNECTION</i></div></section>

      <section className="orbit-final" id="contact"><div className="final-radial" aria-hidden="true" /><p className="section-kicker inverse"><i /> THE NEXT MOVE</p><h2>Give every day<br />a <em>clearer signal.</em></h2><p>See how Smart Lanyard can bring your identity, access and communication layer into one connected experience.</p><button className="orbital-button" onClick={requestDemo}>Start a conversation <ArrowRight /></button></section>

      <footer className="orbit-footer"><div className="orbit-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>IDENTITY / ACCESS / AWARENESS</span><b>© 2026</b></footer>
    </main>
  );
}
