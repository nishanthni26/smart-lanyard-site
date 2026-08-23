/**
 * ID Journey direction: a clear product story with a teal + amber system, one animating credential artifact,
 * structured use cases, and motion that improves information hierarchy rather than adding decoration. */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BellRing, Building2, Check, ChevronRight, CircleCheck, Clock3, GraduationCap, MapPin, ShieldAlert, UsersRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../id-journey.css";

type CredentialState = "identity" | "access" | "care";
type Context = "students" | "companies";

const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const credentialStates: Record<CredentialState, { number: string; title: string; copy: string; status: string; Icon: typeof BadgeCheck }> = {
  identity: { number: "01", title: "Verified identity", copy: "A live credential confirms the right person, in the right place, at the right moment.", status: "IDENTITY VERIFIED", Icon: BadgeCheck },
  access: { number: "02", title: "Responsive access", copy: "Access adjusts as permissions, timings and locations change throughout the day.", status: "ACCESS ACTIVE", Icon: CircleCheck },
  care: { number: "03", title: "Visible care", copy: "A clearer response layer keeps people informed when routine moments need attention.", status: "CARE CHANNEL OPEN", Icon: BellRing },
};

const contexts: Record<Context, { eyebrow: string; title: string; copy: string; outcomes: { icon: typeof MapPin; title: string; text: string }[] }> = {
  students: {
    eyebrow: "FOR EDUCATION",
    title: "A calmer campus day, from arrival to home time.",
    copy: "Students carry one familiar credential. Families, teachers and operations teams gain the context they need without another system to monitor.",
    outcomes: [
      { icon: Clock3, title: "Arrival and attendance", text: "A more reliable record of presence at the moments that matter." },
      { icon: MapPin, title: "Safe movement", text: "Clearer context when a student arrives, departs or needs support." },
      { icon: BellRing, title: "Timely updates", text: "Schedule and care notifications reach the right people at the right time." },
    ],
  },
  companies: {
    eyebrow: "FOR WORKPLACES",
    title: "A better workday signal for people and operations.",
    copy: "From doors to shifts to safety, Smart Lanyard makes credential management feel more responsive and less administrative.",
    outcomes: [
      { icon: Building2, title: "Secure access", text: "Manage changing permissions across teams, spaces and schedules." },
      { icon: UsersRound, title: "Workplace awareness", text: "Understand presence and movement without creating extra friction." },
      { icon: ShieldAlert, title: "Safety response", text: "Give teams a clearer way to receive and act on urgent information." },
    ],
  },
};

const steps = [
  ["01", "Issue", "Assign a living credential to a person, a purpose and a set of permissions."],
  ["02", "Connect", "Link it to the places, timings and operational systems that shape a day."],
  ["03", "Respond", "Keep identity, access and important messages current as circumstances change."],
];

const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [credentialState, setCredentialState] = useState<CredentialState>("identity");
  const [context, setContext] = useState<Context>("students");
  const currentState = credentialStates[credentialState];
  const currentContext = contexts[context];
  const StateIcon = currentState.Icon;
  const requestDemo = () => toast("Demo request started", { description: "We’ll help you plan a focused Smart Lanyard rollout." });

  return (
    <MotionConfig reducedMotion="user">
      <main className="journey-page">
        <header className="journey-nav">
          <button className="journey-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
          <nav aria-label="Primary navigation"><button onClick={() => scrollTo("#journey")}>The credential</button><button onClick={() => scrollTo("#contexts")}>Use cases</button><button onClick={() => scrollTo("#how")}>How it works</button></nav>
          <button className="nav-cta" onClick={requestDemo}>Request a demo <ArrowRight /></button>
        </header>

        <section className="journey-hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <motion.div className="hero-copy-journey" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, ease: [0.23, 1, 0.32, 1] }}>
            <p className="eyebrow"><i /> THE CONNECTED CREDENTIAL</p>
            <h1>One card.<br /><em>More context.</em></h1>
            <p>Smart Lanyard brings identity, access, safety and useful information together in a credential people already understand.</p>
            <div className="hero-actions"><button className="primary-action" onClick={requestDemo}>Map your first rollout <ArrowRight /></button><button className="quiet-action" onClick={() => scrollTo("#journey")}>See how it works <ChevronRight /></button></div>
          </motion.div>
          <motion.figure className="hero-card-preview" initial={{ opacity: 0, y: 26, rotate: -5 }} animate={{ opacity: 1, y: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 180, damping: 19 }}>
            <motion.img src={cardImage} alt="Smart Lanyard connected identity credential" animate={{ y: [0, -9, 0], rotate: [0, 1, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }} />
            <figcaption><span><i /> ACTIVE CREDENTIAL</span><b>IDENTITY · ACCESS · CARE</b></figcaption>
          </motion.figure>
          <motion.div className="hero-ledger" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25, duration: .45 }}><span>LIVE IDENTITY LAYER</span><i /><span>01 / 03</span></motion.div>
        </section>

        <section className="credential-journey" id="journey">
          <div className="journey-intro"><p className="eyebrow dark"><i /> A CREDENTIAL THAT RESPONDS</p><h2>It begins with<br />a <em>simple card.</em></h2><p>Then it becomes a useful presence across the day: a reliable signal for the person carrying it and the teams supporting them.</p></div>
          <div className="credential-theatre">
            <div className="state-controls" role="tablist" aria-label="Credential states">
              {(Object.keys(credentialStates) as CredentialState[]).map((key) => <button key={key} className={credentialState === key ? "active" : ""} onClick={() => setCredentialState(key)} role="tab" aria-selected={credentialState === key}><span>{credentialStates[key].number}</span>{credentialStates[key].title}</button>)}
            </div>
            <div className="id-stage">
              <div className="stage-orbit orbit-one" aria-hidden="true" /><div className="stage-orbit orbit-two" aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.div key={credentialState} className="id-schematic" initial={{ opacity: 0, y: 24, rotate: -4 }} animate={{ opacity: 1, y: 0, rotate: 0 }} exit={{ opacity: 0, y: -16, rotate: 3 }} transition={{ type: "spring", stiffness: 210, damping: 20 }}>
                  <span className="schematic-strap"><i /></span><div className="schematic-card"><span>{currentState.number}</span><b>{currentState.status}</b><i /><small>RESPONSIVE CREDENTIAL</small></div><em>DISPLAY · NFC · BLE</em>
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait"><motion.aside key={credentialState} className="state-copy" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: .28 }}><div><StateIcon /><span>{currentState.number}</span></div><h3>{currentState.title}</h3><p>{currentState.copy}</p></motion.aside></AnimatePresence>
            </div>
          </div>
        </section>

        <section className="context-section" id="contexts">
          <div className="context-head"><p className="eyebrow"><i /> DESIGNED FOR THE REAL ROUTINE</p><h2>Different days.<br /><em>One clear system.</em></h2></div>
          <div className="context-tabs" role="tablist"><button className={context === "students" ? "active" : ""} onClick={() => setContext("students")} role="tab" aria-selected={context === "students"}><GraduationCap /> Students</button><button className={context === "companies" ? "active" : ""} onClick={() => setContext("companies")} role="tab" aria-selected={context === "companies"}><Building2 /> Companies</button></div>
          <AnimatePresence mode="wait"><motion.article className="context-content" key={context} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .32 }}><div className="context-summary"><p>{currentContext.eyebrow}</p><h3>{currentContext.title}</h3><span>{currentContext.copy}</span><button onClick={requestDemo}>Explore this use case <ArrowRight /></button></div><div className="context-outcomes">{currentContext.outcomes.map((outcome, index) => { const Icon = outcome.icon; return <motion.article key={outcome.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .08 }}><span>0{index + 1}</span><Icon /><h4>{outcome.title}</h4><p>{outcome.text}</p></motion.article>; })}</div></motion.article></AnimatePresence>
        </section>

        <section className="how-section" id="how"><div className="how-head"><p className="eyebrow dark"><i /> THE OPERATING MODEL</p><h2>Easy to carry.<br /><em>Ready to adapt.</em></h2></div><div className="how-steps">{steps.map(([number, title, copy], index) => <motion.article key={number} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ delay: index * .08, duration: .34 }}><span>{number}</span><div className="step-node" aria-hidden="true"><i /></div><h3>{title}</h3><p>{copy}</p></motion.article>)}</div></section>

        <section className="journey-close"><div><p className="eyebrow"><i /> START WITH ONE MOMENT</p><h2>Make the everyday<br /><em>more connected.</em></h2></div><div><p>Begin with the context where clarity matters most. We’ll help you shape a credential that feels natural to carry and useful to rely on.</p><button className="primary-action amber" onClick={requestDemo}>Start a credential plan <ArrowRight /></button></div></section>

        <footer className="journey-footer"><div className="journey-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>IDENTITY · ACCESS · AWARENESS</span><b>© 2026</b></footer>
      </main>
    </MotionConfig>
  );
}
