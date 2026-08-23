/**
 * Paper and Cobalt redesign: warm mineral paper, ink-black hardware, cobalt system states,
 * and a calm editorial product story with only purposeful motion.
 */
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Building2,
  CalendarClock,
  ChevronRight,
  Clock3,
  Fingerprint,
  GraduationCap,
  MapPinned,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

type Audience = "education" | "workplace";

const productImage = "/manus-storage/smart-lanyard-card-reference_3f3554cd.png";
const brandMark = "/manus-storage/smart-lanyard-mark_37d205d9.png";

const audienceContent = {
  education: {
    tab: "Education",
    short: "Campus rhythm, made clearer.",
    summary: "Know when students arrive, engage and leave—without turning their day into a surveillance experience.",
    label: "EDUCATION FLOW",
    icon: GraduationCap,
    events: [
      { time: "08:04", title: "Arrival recorded", caption: "Parent notification sent", icon: MapPinned },
      { time: "09:15", title: "Classroom check-in", caption: "Attendance updated", icon: BadgeCheck },
      { time: "13:42", title: "Support signal", caption: "SOS route ready", icon: ShieldAlert },
      { time: "15:21", title: "Safe departure", caption: "Gate exit confirmed", icon: Bell },
    ],
  },
  workplace: {
    tab: "Workplaces",
    short: "The workplace, in sync.",
    summary: "Bring access, presence and the operational signals your teams rely on into one simple wearable layer.",
    label: "WORKPLACE FLOW",
    icon: Building2,
    events: [
      { time: "08:32", title: "Entry approved", caption: "North lobby access", icon: Fingerprint },
      { time: "10:00", title: "Team present", caption: "Zone occupancy updated", icon: UsersRound },
      { time: "12:46", title: "Safety route open", caption: "Response team notified", icon: ShieldCheck },
      { time: "17:18", title: "Shift complete", caption: "Secure exit logged", icon: Clock3 },
    ],
  },
} as const;

const principles = [
  { code: "01", title: "Presence", copy: "A quiet record of who is here, when it matters.", icon: RadioTower },
  { code: "02", title: "Permission", copy: "Access stays appropriate as people and places change.", icon: Fingerprint },
  { code: "03", title: "Response", copy: "The right alert reaches the right person with context.", icon: ShieldCheck },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [audience, setAudience] = useState<Audience>("education");
  const productRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: productRef, offset: ["start end", "end start"] });
  const cardY = useTransform(scrollYProgress, [0, 0.45, 1], [80, 0, -48]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.45, 1], [-5, 0, 5]);
  const cardScale = useTransform(scrollYProgress, [0, 0.45, 1], [0.88, 1.04, 0.95]);
  const active = audienceContent[audience];
  const ActiveIcon = active.icon;

  const demo = () => toast("Demo request started", { description: "Tell us about your environment and we’ll map the first use case." });

  return (
    <main className="v2-page">
      <header className="v2-nav">
        <button className="v2-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
        <div className="v2-nav-links"><button onClick={() => scrollTo("#journey")}>How it works</button><button onClick={() => scrollTo("#contexts")}>Use cases</button></div>
        <button className="v2-nav-action" onClick={demo}>Talk to us <ArrowUpRight aria-hidden="true" /></button>
      </header>

      <section className="v2-hero" id="top">
        <div className="v2-hero-label"><i />SMART IDENTITY SYSTEM <span>01 / 04</span></div>
        <div className="v2-hero-copy">
          <p className="v2-kicker">The everyday object<br />with a wider view.</p>
          <h1>Know who’s<br /><em>in the moment.</em></h1>
          <p className="v2-lede">Smart Lanyard brings identity, access and care into one considered system for the places people move through every day.</p>
          <div className="v2-hero-actions"><button className="v2-primary" onClick={demo}>Request a walkthrough <ArrowUpRight aria-hidden="true" /></button><button className="v2-secondary" onClick={() => scrollTo("#contexts")}>See the system <ChevronRight aria-hidden="true" /></button></div>
        </div>
        <div className="v2-hero-art" aria-hidden="true">
          <div className="v2-paper-arc" />
          <div className="v2-card-shadow" />
          <img src={productImage} alt="" className="v2-hero-card" />
          <div className="v2-live-chip"><i /><span>ACTIVE / 98.4%</span></div>
          <div className="v2-position-line"><span>PERSONAL IDENTITY</span><i /></div>
        </div>
        <div className="v2-hero-foot"><span>IDENTITY · ACCESS · SAFETY · PRESENCE</span><button onClick={() => scrollTo("#journey")}>SCROLL TO EXPLORE <ArrowDownRight aria-hidden="true" /></button></div>
      </section>

      <section className="v2-band" aria-label="Smart Lanyard capabilities"><span>IDENTITY</span><i /><span>ACCESS</span><i /><span>SAFETY</span><i /><span>CONTEXT</span><i /><span>CONTINUITY</span></section>

      <section className="v2-product-section" id="journey" ref={productRef}>
        <div className="v2-product-intro"><span>THE LAYER BENEATH THE DAY</span><p>Built to be worn. Designed to make the invisible parts of a day easier to understand.</p></div>
        <motion.div className="v2-product-object" style={{ y: cardY, rotate: cardRotate, scale: cardScale }}>
          <div className="v2-object-aura" />
          <img src={productImage} alt="Smart Lanyard credential" />
          <span className="v2-object-tag tag-one">SECURE MOUNT</span><span className="v2-object-tag tag-two">STATUS LIGHT</span><span className="v2-object-tag tag-three">PERSONAL CONTEXT</span>
        </motion.div>
        <div className="v2-product-copy"><h2>More than<br />a badge.</h2><p>It is a physical starting point for the information that helps a campus or workplace run with more awareness and less friction.</p><div><span>01</span><i /><span>ONE OBJECT / MANY USEFUL SIGNALS</span></div></div>
      </section>

      <section className="v2-context-section" id="contexts">
        <div className="v2-context-heading"><p>DESIGNED FOR REAL ENVIRONMENTS</p><h2>Same object.<br /><em>Different care.</em></h2><span>Choose a context to see a day unfold.</span></div>
        <div className="v2-context-tabs" role="tablist"><button className={audience === "education" ? "active" : ""} onClick={() => setAudience("education")} role="tab" aria-selected={audience === "education"}><GraduationCap aria-hidden="true" />Education</button><button className={audience === "workplace" ? "active" : ""} onClick={() => setAudience("workplace")} role="tab" aria-selected={audience === "workplace"}><Building2 aria-hidden="true" />Workplaces</button></div>
        <AnimatePresence mode="wait">
          <motion.div className="v2-context-stage" key={audience} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .34, ease: [0.23, 1, .32, 1] }}>
            <div className="v2-context-overview"><div className="v2-context-icon"><ActiveIcon aria-hidden="true" /></div><p>{active.label}</p><h3>{active.short}</h3><span>{active.summary}</span><button onClick={demo}>Discuss this use case <ArrowUpRight aria-hidden="true" /></button></div>
            <div className="v2-dayline"><div className="v2-dayline-head"><span>LIVE DAY LINE</span><i /> <b>LOCAL TIME</b></div>{active.events.map((event, index) => { const EventIcon = event.icon; return <motion.article key={event.title} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .08 + index * .07, duration: .28 }}><time>{event.time}</time><div className="v2-event-icon"><EventIcon aria-hidden="true" /></div><div><strong>{event.title}</strong><small>{event.caption}</small></div><i className="v2-event-dot" /></motion.article>; })}</div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="v2-principles">
        <div className="v2-principles-lead"><p>CALM BY DESIGN</p><h2>Signals that<br />earn their place.</h2></div>
        <div className="v2-principles-grid">{principles.map((principle, index) => { const Icon = principle.icon; return <motion.article key={principle.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .09, duration: .36 }}><span>{principle.code}</span><Icon aria-hidden="true" /><h3>{principle.title}</h3><p>{principle.copy}</p></motion.article>; })}</div>
      </section>

      <section className="v2-cta">
        <div className="v2-cta-art" aria-hidden="true"><img src={productImage} alt="" /><div /></div>
        <div className="v2-cta-copy"><p><Sparkles aria-hidden="true" /> START WITH ONE BETTER DAY</p><h2>See the day<br /><em>with more context.</em></h2><span>We’ll help you choose a first environment, map the signals that matter and keep the experience human.</span><button className="v2-primary v2-primary-light" onClick={demo}>Plan a demo <ArrowUpRight aria-hidden="true" /></button></div>
      </section>

      <footer className="v2-footer"><div className="v2-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Identity systems for places in motion.</span><b>© 2026</b></footer>
    </main>
  );
}
