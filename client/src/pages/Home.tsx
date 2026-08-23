/**
 * Signal Noir: dark cinematic product story. The wearer owns the hero; the credential takes over on scroll.
 * Motion is purposeful—hero fades, ID card reveals, and audience features switch in place. */
import { AnimatePresence, MotionConfig, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BellRing, Building2, CalendarDays, Check, ChevronRight, Clock3, Contact, GraduationCap, KeyRound, LockKeyhole, MapPin, Radio, ScanLine, ShieldAlert, UserRoundCheck, UsersRound } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import "../dark-lanyard.css";

type Audience = "students" | "companies";

const wearerImage = "/manus-storage/smart-lanyard-wearer-hero_d0824279.jpg";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const audienceContent: Record<Audience, { label: string; title: string; description: string; features: { title: string; icon: typeof MapPin }[] }> = {
  students: {
    label: "STUDENT EXPERIENCE",
    title: "A more connected school day.",
    description: "One credential helps students, families and staff stay aligned from first arrival through safe departure.",
    features: [
      { title: "Real-time location tracking", icon: MapPin },
      { title: "Instant attendance alerts to parents", icon: BellRing },
      { title: "SOS emergency button", icon: ShieldAlert },
      { title: "Classroom engagement tracking", icon: UsersRound },
      { title: "Digital timetable", icon: CalendarDays },
      { title: "Safe arrival & departure notifications", icon: Clock3 },
    ],
  },
  companies: {
    label: "WORKPLACE EXPERIENCE",
    title: "One credential for a responsive workplace.",
    description: "Give people a simpler way to move through the workday while operations teams retain the visibility they need.",
    features: [
      { title: "Unified access control", icon: KeyRound },
      { title: "Employee real-time location", icon: MapPin },
      { title: "SOS and safety alerts", icon: ShieldAlert },
      { title: "Automated attendance", icon: UserRoundCheck },
      { title: "Remote card deactivation", icon: LockKeyhole },
      { title: "Work notifications via Slack/Teams", icon: BellRing },
    ],
  },
};

const howItWorks = [
  { number: "01", title: "Issue", text: "Assign a secure credential to each person in seconds.", icon: Contact },
  { number: "02", title: "Connect", text: "Link identity with access points, schedules and safety rules.", icon: Radio },
  { number: "03", title: "See", text: "Turn live status into practical visibility for the right team.", icon: ScanLine },
  { number: "04", title: "Respond", text: "Act quickly when routine shifts or urgent moments arise.", icon: ShieldAlert },
];

const scrollTo = (selector: string) => document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [audience, setAudience] = useState<Audience>("students");
  const transitionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const wearerOpacity = useTransform(scrollY, [0, 460], [1, 0]);
  const wearerScale = useTransform(scrollY, [0, 460], [1, 1.08]);
  const { scrollYProgress } = useScroll({ target: transitionRef, offset: ["start end", "end start"] });
  const cardScale = useTransform(scrollYProgress, [0, 0.38, 0.74, 1], [0.66, 1, 1.06, 0.9]);
  const cardY = useTransform(scrollYProgress, [0, 0.42, 1], [80, 0, -28]);
  const currentAudience = audienceContent[audience];

  const notify = (message: string, description: string) => toast(message, { description });

  return (
    <MotionConfig reducedMotion="user">
      <main className="sl-site">
        <header className="sl-nav">
          <button className="sl-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
          <nav aria-label="Primary navigation"><button onClick={() => scrollTo("#audience")}>Use cases</button><button onClick={() => scrollTo("#how-it-works")}>How it works</button><button onClick={() => scrollTo("#contact")}>Contact</button></nav>
          <button className="sl-nav-cta" onClick={() => notify("Request a demo", "Tell us where Smart Lanyard should make the biggest difference.")}>Request a demo <ArrowRight /></button>
        </header>

        <section className="sl-hero" id="top">
          <motion.div className="sl-hero-person" style={{ opacity: wearerOpacity, scale: wearerScale }} aria-hidden="true"><img src={wearerImage} alt="" /></motion.div>
          <div className="sl-hero-grid" aria-hidden="true" />
          <motion.div className="sl-hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }}>
            <p className="sl-eyebrow"><i /> CONNECTED CREDENTIAL SYSTEM</p>
            <h1>Smart<br /><span>Lanyard</span></h1>
            <h2>Smart Identity.<br />Real-Time Visibility.</h2>
            <p>One smart lanyard for identity, access, safety and real-time visibility.</p>
            <div className="sl-hero-actions"><button className="sl-primary" onClick={() => notify("Request a demo", "We’ll help you plan a focused Smart Lanyard rollout.")}>Request a Demo <ArrowRight /></button><button className="sl-text-button" onClick={() => scrollTo("#credential-transition")}>Follow the credential <ChevronRight /></button></div>
          </motion.div>
          <div className="sl-hero-status"><i /> IDENTITY ACTIVE <span>SCROLL TO DISCOVER</span></div>
        </section>

        <section className="sl-credential-transition" ref={transitionRef} id="credential-transition">
          <div className="sl-transition-sticky">
            <div className="sl-transition-grid" aria-hidden="true" />
            <motion.div className="sl-float-card" style={{ scale: cardScale, y: cardY }}>
              <div className="sl-card-halo" aria-hidden="true" />
              <motion.img src={cardImage} alt="Smart Lanyard credential" animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }} />
              <div className="sl-card-readout left"><span>LIVE</span><i /><b>VERIFIED</b></div>
              <div className="sl-card-readout right"><span>DISPLAY</span><b>NFC / BLE</b></div>
            </motion.div>
            <div className="sl-transition-copy"><p className="sl-eyebrow"><i /> ONE OBJECT. MANY SIGNALS.</p><h2>The person fades.<br /><em>The credential remains.</em></h2><p>A familiar lanyard becomes a living connection between people, places and timely information.</p></div>
            <div className="sl-scroll-meter" aria-hidden="true"><span>IDENTITY</span><i /><span>ACCESS</span><i /><span>SAFETY</span></div>
          </div>
        </section>

        <section className="sl-audience" id="audience">
          <div className="sl-section-head"><p className="sl-eyebrow"><i /> BUILT FOR PEOPLE IN MOTION</p><h2>Two worlds.<br /><em>One clear signal.</em></h2></div>
          <div className="sl-audience-tabs" role="tablist" aria-label="Smart Lanyard audience">
            <button className={audience === "students" ? "active" : ""} onClick={() => setAudience("students")} role="tab" aria-selected={audience === "students"}><GraduationCap /> For Students</button>
            <button className={audience === "companies" ? "active" : ""} onClick={() => setAudience("companies")} role="tab" aria-selected={audience === "companies"}><Building2 /> For Companies</button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div className="sl-audience-content" key={audience} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}>
              <div className="sl-audience-intro"><p>{currentAudience.label}</p><h3>{currentAudience.title}</h3><span>{currentAudience.description}</span><button className="sl-link" onClick={() => notify("Use case selected", `You’re exploring Smart Lanyard for ${audience}.`)}>See the full use case <ArrowRight /></button></div>
              <div className="sl-feature-list">{currentAudience.features.map((feature, index) => { const Icon = feature.icon; return <motion.article key={feature.title} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.055 }}><span>0{index + 1}</span><Icon /><h4>{feature.title}</h4><Check /></motion.article>; })}</div>
            </motion.div>
          </AnimatePresence>
        </section>

        <section className="sl-how" id="how-it-works">
          <div className="sl-section-head centered"><p className="sl-eyebrow"><i /> HOW IT WORKS</p><h2>Simple to carry.<br /><em>Powerful to know.</em></h2></div>
          <div className="sl-how-grid">{howItWorks.map((step, index) => { const Icon = step.icon; return <motion.article key={step.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ delay: index * 0.07, duration: 0.4 }}><span>{step.number}</span><div className="sl-step-icon"><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div>
        </section>

        <section className="sl-cta" id="contact">
          <div className="sl-cta-orbit orb-a" aria-hidden="true" /><div className="sl-cta-orbit orb-b" aria-hidden="true" />
          <div><p className="sl-eyebrow"><i /> MAKE EVERYDAY MOMENTS CLEARER</p><h2>Ready for a<br /><em>smarter signal?</em></h2></div>
          <div className="sl-cta-actions"><p>See how Smart Lanyard can make identity, access and safety feel simpler in the places people move every day.</p><button className="sl-primary" onClick={() => notify("Request a demo", "Your demonstration request has been started.")}>Request a Demo <ArrowRight /></button><button className="sl-secondary" onClick={() => notify("Contact Smart Lanyard", "A member of the team will be in touch shortly.")}>Contact <Contact /></button></div>
        </section>

        <footer className="sl-footer"><div className="sl-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>IDENTITY · ACCESS · SAFETY</span><b>© 2026 SMART LANYARD</b></footer>
      </main>
    </MotionConfig>
  );
}
