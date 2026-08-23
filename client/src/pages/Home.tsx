/**
 * Friendly Daylight direction: uncomplicated, warm, and approachable.
 * Motion gently introduces content and switches use-case details without dramatic spectacle. */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, BellRing, Building2, CalendarDays, Check, Clock3, Contact, DoorOpen, GraduationCap, HeartPulse, KeyRound, MapPin, ShieldCheck, ShieldPlus, UserCheck, UsersRound } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../friendly.css";

type Audience = "students" | "companies";

const heroImage = "/manus-storage/smart-lanyard-friendly-hero_cff05b80.jpg";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const audienceData: Record<Audience, { title: string; copy: string; label: string; features: { title: string; description: string; icon: typeof MapPin }[] }> = {
  students: {
    label: "FOR STUDENTS",
    title: "A little more confidence in every school day.",
    copy: "One lanyard helps students feel supported while keeping parents and staff comfortably in the loop.",
    features: [
      { title: "Real-time location", description: "Helpful visibility when it matters most.", icon: MapPin },
      { title: "Attendance updates", description: "Share arrival alerts with parents instantly.", icon: BellRing },
      { title: "SOS support", description: "A simple way to ask for help quickly.", icon: ShieldPlus },
      { title: "Classroom engagement", description: "Understand participation with more context.", icon: UsersRound },
      { title: "Digital timetable", description: "Keep the next class or activity close at hand.", icon: CalendarDays },
      { title: "Safe arrivals", description: "Know when the journey begins and ends safely.", icon: Clock3 },
    ],
  },
  companies: {
    label: "FOR COMPANIES",
    title: "A smoother way to move through the workday.",
    copy: "One familiar card brings access, awareness and timely communication into one easy experience.",
    features: [
      { title: "Unified access", description: "Open the right spaces with one secure credential.", icon: KeyRound },
      { title: "Live location", description: "Helpful workplace awareness, without extra fuss.", icon: MapPin },
      { title: "Safety alerts", description: "Give people a clear way to call for support.", icon: HeartPulse },
      { title: "Automated attendance", description: "Keep everyday records up to date quietly.", icon: UserCheck },
      { title: "Remote deactivation", description: "Protect access as soon as a card is missing.", icon: ShieldCheck },
      { title: "Work notifications", description: "Share helpful messages through Slack or Teams.", icon: BellRing },
    ],
  },
};

const steps = [
  { icon: Contact, title: "Give out", text: "Assign each person a friendly, secure smart lanyard." },
  { icon: DoorOpen, title: "Connect", text: "Link it with your spaces, schedules and daily routines." },
  { icon: BellRing, title: "Keep in touch", text: "Share updates and helpful reminders at the right time." },
  { icon: ShieldCheck, title: "Feel safer", text: "Make it easier to notice and respond when support is needed." },
];

const scrollTo = (target: string) => document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [audience, setAudience] = useState<Audience>("students");
  const data = audienceData[audience];
  const showToast = (title: string, description: string) => toast(title, { description });

  return (
    <MotionConfig reducedMotion="user">
      <main className="friendly-site">
        <header className="friendly-nav">
          <button className="friendly-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
          <nav aria-label="Primary navigation"><button onClick={() => scrollTo("#students-companies")}>Who it helps</button><button onClick={() => scrollTo("#how-it-works")}>How it works</button></nav>
          <button className="friendly-nav-cta" onClick={() => showToast("Let’s talk", "We’ll help you start with the place where support matters most.")}>Request a demo <ArrowRight /></button>
        </header>

        <section className="friendly-hero" id="top">
          <div className="friendly-sun sun-one" aria-hidden="true" /><div className="friendly-sun sun-two" aria-hidden="true" />
          <motion.div className="friendly-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [0.23, 1, 0.32, 1] }}>
            <p className="friendly-eyebrow"><i /> ONE SMALL CARD. A WHOLE LOT OF HELP.</p>
            <h1>Smart<br /><em>Lanyard</em></h1>
            <h2>Smart Identity.<br />Real-Time Visibility.</h2>
            <p>One smart lanyard for identity, access, safety and real-time visibility.</p>
            <div className="friendly-actions"><button className="friendly-primary" onClick={() => showToast("Request a demo", "We’ll be in touch to plan your Smart Lanyard rollout.")}>Request a Demo <ArrowRight /></button><button className="friendly-quiet" onClick={() => scrollTo("#students-companies")}>See how it helps</button></div>
          </motion.div>
          <motion.div className="friendly-person" initial={{ opacity: 0, x: 22, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 110, damping: 18 }}><img src={heroImage} alt="Student wearing a Smart Lanyard" /><span className="friendly-photo-tag"><i /> Ready for the day</span></motion.div>
        </section>

        <section className="friendly-intro">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}><p className="friendly-eyebrow"><i /> DESIGNED FOR REAL LIFE</p><h2>It looks like a familiar lanyard.<br /><em>It feels like extra support.</em></h2><p>Smart Lanyard brings the useful things together, without making the day feel more complicated.</p></motion.div>
          <motion.figure initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ type: "spring", stiffness: 150, damping: 18 }}><div className="friendly-card-glow" /><motion.img src={cardImage} alt="Smart Lanyard ID card" animate={{ y: [0, -7, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }} /><figcaption><span><i /> ACTIVE</span><b>IDENTITY · ACCESS · SAFETY</b></figcaption></motion.figure>
        </section>

        <section className="friendly-audience" id="students-companies">
          <div className="friendly-section-title"><p className="friendly-eyebrow"><i /> MADE FOR YOUR DAY</p><h2>Helpful for the people<br /><em>you care about most.</em></h2></div>
          <div className="friendly-tabs" role="tablist" aria-label="Smart Lanyard audiences"><button className={audience === "students" ? "active" : ""} onClick={() => setAudience("students")} role="tab" aria-selected={audience === "students"}><GraduationCap /> For Students</button><button className={audience === "companies" ? "active" : ""} onClick={() => setAudience("companies")} role="tab" aria-selected={audience === "companies"}><Building2 /> For Companies</button></div>
          <AnimatePresence mode="wait"><motion.div className="friendly-audience-content" key={audience} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .28 }}><div className="friendly-audience-copy"><p>{data.label}</p><h3>{data.title}</h3><span>{data.copy}</span><button onClick={() => showToast("Tell us more", `You’re exploring Smart Lanyard for ${audience}.`)}>Explore this use case <ArrowRight /></button></div><div className="friendly-feature-grid">{data.features.map((feature, index) => { const Icon = feature.icon; return <motion.article key={feature.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .05 }}><div><Icon /><span>0{index + 1}</span></div><h4>{feature.title}</h4><p>{feature.description}</p><Check /></motion.article>; })}</div></motion.div></AnimatePresence>
        </section>

        <section className="friendly-how" id="how-it-works"><div className="friendly-section-title centered"><p className="friendly-eyebrow"><i /> HOW IT WORKS</p><h2>Easy to start.<br /><em>Lovely to use.</em></h2></div><div className="friendly-steps">{steps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .07 }}><span>0{index + 1}</span><div><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div></section>

        <section className="friendly-cta"><div className="friendly-cta-bubble bubble-a" aria-hidden="true" /><div className="friendly-cta-bubble bubble-b" aria-hidden="true" /><div><p className="friendly-eyebrow"><i /> READY WHEN YOU ARE</p><h2>Let’s make the day<br /><em>feel a little easier.</em></h2></div><div><p>We’ll help you find the right place to start—with a simple plan, a friendly team, and one smart lanyard.</p><button className="friendly-primary" onClick={() => showToast("Request a demo", "Thanks—your Smart Lanyard demo request is ready to begin.")}>Request a Demo <ArrowRight /></button><button className="friendly-contact" onClick={() => showToast("Contact us", "A member of the Smart Lanyard team will be happy to help.")}>Contact <Contact /></button></div></section>

        <footer className="friendly-footer"><div className="friendly-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Made for everyday confidence.</span><b>© 2026 Smart Lanyard</b></footer>
      </main>
    </MotionConfig>
  );
}
