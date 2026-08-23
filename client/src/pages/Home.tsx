/**
 * Modern solutions redesign: neutral surfaces, ink-blue foundation, electric indigo states,
 * high-clarity information architecture, and restrained motion for an enterprise product story.
 */
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  BookOpenCheck,
  BrainCircuit,
  Building2,
  CalendarClock,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  FileText,
  Fingerprint,
  GraduationCap,
  HeartPulse,
  IdCard,
  KeyRound,
  Library,
  LockKeyhole,
  MapPinned,
  MessageSquareText,
  QrCode,
  RadioTower,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Wifi,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import "../professional-motion.css";

type Solution = "education" | "enterprise";

const productImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-mark_37d205d9.png";

const solutionData = {
  education: {
    tab: "Education",
    title: "A student pass that keeps the whole campus connected.",
    description: "A familiar wearable that brings learning, access, safety and family communication into a single daily experience.",
    icon: GraduationCap,
    groups: [
      { icon: IdCard, title: "Smart student identity", features: ["Digital E-Paper ID Card", "Student profile", "Dynamic QR Code", "NFC attendance"] },
      { icon: CalendarClock, title: "Academic rhythm", features: ["Live timetable", "Homework & assignments", "Exam schedule", "Class change alerts"] },
      { icon: BellRing, title: "Parent connection", features: ["Entry & exit notifications", "Attendance alerts", "Exam notifications", "Emergency broadcasts"] },
      { icon: Library, title: "Campus experience", features: ["Library and lab access", "School bus integration", "Cafeteria and event pass", "Sports access"] },
      { icon: ShieldAlert, title: "Student safety", features: ["One-touch SOS", "Medical information", "Lost student alerts", "Secure campus access"] },
      { icon: BrainCircuit, title: "AI guidance", features: ["Study reminders", "Homework planner", "Attendance insights", "Daily learning summary"] },
    ],
  },
  enterprise: {
    tab: "Enterprise",
    title: "One intelligent identity for a workplace in motion.",
    description: "Give people what they need to enter, navigate, stay informed and respond—without another card, app or manual step.",
    icon: Building2,
    groups: [
      { icon: CreditCard, title: "Employee identity", features: ["Digital employee ID", "Dynamic E-Paper display", "QR authentication", "NFC access"] },
      { icon: Clock3, title: "Workday flow", features: ["Meeting reminders", "Shift schedule", "Desk information", "Company announcements"] },
      { icon: UsersRound, title: "Employee services", features: ["Leave status", "Payroll notifications", "Training reminders", "Recognition updates"] },
      { icon: KeyRound, title: "Smart access", features: ["Building and parking access", "Locker and cafeteria access", "Meeting room entry", "Restricted area control"] },
      { icon: ShieldCheck, title: "Workplace safety", features: ["One-touch SOS", "Evacuation alerts", "Lost card mode", "Instant card disable"] },
      { icon: Sparkles, title: "AI assistance", features: ["Meeting assistant", "Daily agenda", "Productivity insights", "Knowledge assistant"] },
    ],
  },
} as const;

const valuePoints = [
  { icon: RadioTower, label: "Live on-card information" },
  { icon: Wifi, label: "Secure NFC & Bluetooth" },
  { icon: Smartphone, label: "Companion mobile apps" },
  { icon: ScanLine, label: "Over-the-air updates" },
  { icon: LockKeyhole, label: "Enterprise-grade security" },
  { icon: Sparkles, label: "AI-powered insights" },
];

const painPoints = [
  { audience: "Education", icon: BookOpenCheck, title: "Less paper. More reassurance.", items: ["No more static plastic ID cards", "Faster attendance with NFC", "Real-time family updates", "Safer everyday campus movement"] },
  { audience: "Enterprise", icon: Building2, title: "Fewer cards. Clearer operations.", items: ["Replace fragmented employee credentials", "Simplify facility access", "Reduce HR and IT administration", "Improve emergency communication"] },
];

function goTo(id: string) { document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }

export default function Home() {
  const [solution, setSolution] = useState<Solution>("education");
  const transitionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: transitionRef, offset: ["start end", "end start"] });
  const credentialY = useTransform(scrollYProgress, [0, 0.5, 1], [90, 0, -70]);
  const credentialScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.78, 1, 0.84]);
  const credentialRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 7]);
  const active = solutionData[solution];
  const ActiveIcon = active.icon;
  const requestDemo = () => toast("Demo request started", { description: "We’ll help you select the right first deployment." });

  return (
    <main className="modern-page">
      <header className="modern-nav">
        <button className="modern-brand" onClick={() => goTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
        <nav><button onClick={() => goTo("#solutions")}>Solutions</button><button onClick={() => goTo("#platform")}>Platform</button><button onClick={() => goTo("#why")}>Why us</button></nav>
        <button className="modern-nav-cta" onClick={requestDemo}>Book a demo <ArrowUpRight aria-hidden="true" /></button>
      </header>

      <section className="modern-hero" id="top">
        <div className="hero-grid-quiet" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-a" aria-hidden="true" /><div className="hero-orbit hero-orbit-b" aria-hidden="true" />
        <div className="modern-hero-copy">
          <p className="hero-overline"><i /> SMART LANYARD PLATFORM</p>
          <h1>One smart card.<br /><em>Unlimited possibilities.</em></h1>
          <p className="hero-copy-text">A secure digital identity layer for education, enterprise and every environment where people need to move with confidence.</p>
          <div className="hero-buttons"><button className="button-primary" onClick={requestDemo}>Explore Smart Lanyard <ArrowUpRight aria-hidden="true" /></button><button className="button-link" onClick={() => goTo("#solutions")}>See solutions <ChevronRight aria-hidden="true" /></button></div>
          <div className="hero-sectors"><span>EDUCATION</span><i /><span>ENTERPRISE</span><i /><span>HEALTHCARE</span><i /><span>MORE</span></div>
        </div>
        <motion.div className="modern-hero-product" aria-hidden="true" initial={{ opacity: 0, y: 36, rotate: 3 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ duration: .72, delay: .14, ease: [0.23, 1, .32, 1] }}><div className="product-backplate" /><div className="product-status"><i />Connected</div><img src={productImage} alt="" /><div className="product-marker marker-a">e-paper display</div><div className="product-marker marker-b">NFC / BLE</div></motion.div>
      </section>

      <section className="credential-pass" ref={transitionRef} aria-label="Smart Lanyard product transition">
        <div className="credential-pass-sticky">
          <div className="pass-grid" aria-hidden="true"><i /><i /><i /><i /><i /></div><div className="pass-ring pass-ring-a" aria-hidden="true" /><div className="pass-ring pass-ring-b" aria-hidden="true" />
          <div className="pass-copy pass-copy-left"><p>ONE WEARABLE LAYER</p><h2>Identity that<br />stays current.</h2><span>New access, updates and alerts can arrive without issuing another card.</span></div>
          <motion.div className="pass-card" style={{ y: credentialY, scale: credentialScale, rotate: credentialRotate }}><div className="pass-card-glow" /><img src={productImage} alt="Smart Lanyard digital identity card" /><i className="pass-light" /></motion.div>
          <div className="pass-copy pass-copy-right"><p>LIVE WHEN NEEDED</p><div><span>01</span><b>Identity</b></div><div><span>02</span><b>Access</b></div><div><span>03</span><b>Care</b></div></div>
          <div className="pass-scroll-note">SCROLL TO FOLLOW THE SIGNAL <ChevronRight aria-hidden="true" /></div>
        </div>
      </section>

      <section className="modern-strip"><span>THE SMART LANYARD ADVANTAGE</span><div><b>01</b> IDENTITY <b>02</b> ACCESS <b>03</b> UPDATES <b>04</b> INSIGHTS</div></section>

      <section className="solutions-section" id="solutions">
        <div className="solutions-heading"><div><p>SMART LANYARD SOLUTIONS</p><h2>Built around<br /><em>real routines.</em></h2></div><span>Choose an environment to see the specific experiences the system can bring together.</span></div>
        <div className="solution-switch" role="tablist"><button className={solution === "education" ? "active" : ""} onClick={() => setSolution("education")} role="tab" aria-selected={solution === "education"}><GraduationCap aria-hidden="true" />For Education</button><button className={solution === "enterprise" ? "active" : ""} onClick={() => setSolution("enterprise")} role="tab" aria-selected={solution === "enterprise"}><Building2 aria-hidden="true" />For Enterprise</button></div>
        <AnimatePresence mode="wait">
          <motion.div className="solution-stage" key={solution} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .32, ease: [0.23, 1, .32, 1] }}>
            <aside className="solution-intro"><div className="solution-icon"><ActiveIcon aria-hidden="true" /></div><p>{active.tab.toUpperCase()} SOLUTION</p><h3>{active.title}</h3><span>{active.description}</span><button onClick={requestDemo}>Plan this deployment <ArrowUpRight aria-hidden="true" /></button></aside>
            <div className="solution-groups">{active.groups.map((group, index) => { const Icon = group.icon; return <motion.article key={group.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .05 + index * .04, duration: .25 }}><div className="group-icon"><Icon aria-hidden="true" /></div><div><p><b>0{index + 1}</b> {group.title}</p><ul>{group.features.map((feature, featureIndex) => <li key={feature} className="solution-feature"><span>0{featureIndex + 1}</span><Check aria-hidden="true" />{feature}</li>)}</ul></div></motion.article>; })}</div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="platform-section" id="platform">
        <div className="platform-product" aria-hidden="true"><div className="platform-card-halo" /><img src={productImage} alt="" /></div>
        <div className="platform-copy"><p>WHY IT FEELS DIFFERENT</p><h2>Information<br />that can move.</h2><span>A low-power E-Paper card turns useful information into a visible part of the day—then stays updated when the day changes.</span><div className="platform-pulse"><i /><b>Always ready for the next update</b></div></div>
        <div className="value-grid">{valuePoints.map((item, index) => { const Icon = item.icon; return <motion.div key={item.label} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .05, duration: .25 }}><Icon aria-hidden="true" /><span>{item.label}</span><b>0{index + 1}</b></motion.div>; })}</div>
      </section>

      <section className="pain-section" id="why"><div className="pain-heading"><p>PAIN POINTS WE SOLVE</p><h2>Less friction.<br /><em>More certainty.</em></h2></div><div className="pain-grid">{painPoints.map((pain) => { const Icon = pain.icon; return <article key={pain.audience}><div className="pain-card-head"><Icon aria-hidden="true" /><span>{pain.audience}</span></div><h3>{pain.title}</h3><ul>{pain.items.map((item) => <li key={item}><i />{item}</li>)}</ul></article>; })}</div></section>

      <section className="modern-final"><div className="final-backdrop" aria-hidden="true"><img src={productImage} alt="" /></div><div className="final-copy"><p><Sparkles aria-hidden="true" /> THE NEXT GENERATION OF IDENTITY</p><h2>Make every<br /><em>credential count.</em></h2><span>Start with one smart card—and a clearer way to connect the people, spaces and updates that keep your organisation moving.</span><button className="button-primary final-button" onClick={requestDemo}>Request a demo <ArrowUpRight aria-hidden="true" /></button></div></section>

      <footer className="modern-footer"><div className="modern-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Education · Enterprise · Healthcare · Manufacturing · Government · Hospitality</span><b>© 2026 SMART LANYARD</b></footer>
    </main>
  );
}
