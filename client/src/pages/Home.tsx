/**
 * Friendly Daylight content-clarity direction: explain one product story at a time.
 * Keep language plain, group details by outcome, and use low-intensity transitions. */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, BellRing, Building2, CalendarCheck2, Check, Contact, DoorOpen, GraduationCap, HeartPulse, KeyRound, MapPin, ShieldCheck, ShieldPlus, UserRoundCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../friendly.css";

type Audience = "students" | "companies";

const heroImage = "/manus-storage/smart-lanyard-friendly-hero_cff05b80.jpg";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const coreJobs = [
  { icon: UserRoundCheck, title: "Identity", text: "Know who is wearing it." },
  { icon: DoorOpen, title: "Access", text: "Open the right door or space." },
  { icon: CalendarCheck2, title: "Attendance", text: "Record arrivals automatically." },
  { icon: ShieldPlus, title: "Safety", text: "Ask for help when it is needed." },
];

const audienceData: Record<Audience, { label: string; title: string; copy: string; benefits: { title: string; description: string; tags: string[]; icon: typeof MapPin }[] }> = {
  students: {
    label: "FOR SCHOOLS",
    title: "Help students arrive, learn and leave safely.",
    copy: "The lanyard gives schools three clear ways to make the school day easier to follow.",
    benefits: [
      { title: "Know who has arrived", description: "See attendance and arrival moments without chasing paper records.", tags: ["Attendance alerts", "Safe arrival & departure"], icon: CalendarCheck2 },
      { title: "Respond when help is needed", description: "Give students a straightforward way to share their location or use SOS support.", tags: ["Real-time location", "SOS emergency button"], icon: HeartPulse },
      { title: "Keep the day on track", description: "Put the next lesson and useful classroom context in one place.", tags: ["Digital timetable", "Classroom engagement"], icon: GraduationCap },
    ],
  },
  companies: {
    label: "FOR COMPANIES",
    title: "Make access and workplace safety easier to manage.",
    copy: "The lanyard gives teams three clear ways to stay secure, informed and ready to respond.",
    benefits: [
      { title: "Manage access simply", description: "Use one credential for secure entry—and switch it off remotely if it is lost.", tags: ["Unified access control", "Remote card deactivation"], icon: KeyRound },
      { title: "Know who is on site", description: "Keep a live view of attendance and workplace presence when it matters.", tags: ["Automated attendance", "Employee real-time location"], icon: MapPin },
      { title: "Keep people safe and informed", description: "Give staff a clear SOS option and send timely updates where they already work.", tags: ["SOS & safety alerts", "Slack / Teams notifications"], icon: BellRing },
    ],
  },
};

const steps = [
  { icon: Contact, title: "Set up", text: "Connect the lanyard to your school or workplace." },
  { icon: UserRoundCheck, title: "Wear", text: "Give one secure lanyard to each person." },
  { icon: DoorOpen, title: "Use", text: "Tap in, check in and move through the day." },
  { icon: BellRing, title: "Stay informed", text: "Receive the updates that need your attention." },
];

const scrollTo = (target: string) => document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [audience, setAudience] = useState<Audience>("students");
  const data = audienceData[audience];
  const requestDemo = () => toast("Demo request", { description: "Thanks. A Smart Lanyard specialist will help you plan the right starting point." });

  return (
    <MotionConfig reducedMotion="user">
      <main className="friendly-site">
        <header className="friendly-nav">
          <button className="friendly-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
          <nav aria-label="Primary navigation"><button onClick={() => scrollTo("#what-it-does")}>What it does</button><button onClick={() => scrollTo("#who-it-helps")}>Who it helps</button><button onClick={() => scrollTo("#how-it-works")}>How it works</button></nav>
          <button className="friendly-nav-cta" onClick={requestDemo}>Request a demo <ArrowRight /></button>
        </header>

        <section className="friendly-hero" id="top">
          <div className="friendly-sun sun-one" aria-hidden="true" /><div className="friendly-sun sun-two" aria-hidden="true" />
          <motion.div className="friendly-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [0.23, 1, 0.32, 1] }}>
            <p className="friendly-eyebrow"><i /> SMART IDENTITY FOR EVERYDAY PEOPLE</p>
            <h1>Smart<br /><em>Lanyard</em></h1>
            <h2>One lanyard for<br />identity, access and safety.</h2>
            <p>Wear it like a normal ID card. It helps your school or workplace know who is present, open the right spaces, and respond quickly when support is needed.</p>
            <div className="friendly-actions"><button className="friendly-primary" onClick={requestDemo}>Request a Demo <ArrowRight /></button><button className="friendly-quiet" onClick={() => scrollTo("#what-it-does")}>See what it does</button></div>
          </motion.div>
          <motion.div className="friendly-person" initial={{ opacity: 0, x: 22, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 110, damping: 18 }}><img src={heroImage} alt="Student wearing a Smart Lanyard" /><span className="friendly-photo-tag"><i /> Wear it every day</span></motion.div>
        </section>

        <section className="friendly-intro" id="what-it-does">
          <motion.div className="friendly-product-summary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}>
            <p className="friendly-eyebrow"><i /> WHAT IT DOES</p><h2>One card.<br /><em>Four useful jobs.</em></h2><p>Smart Lanyard replaces scattered cards, lists and check-ins with one familiar thing people already know how to wear.</p>
            <div className="friendly-product-list">{coreJobs.map((job) => { const Icon = job.icon; return <article key={job.title}><Icon /><div><strong>{job.title}</strong><span>{job.text}</span></div></article>; })}</div>
          </motion.div>
          <motion.figure initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ type: "spring", stiffness: 150, damping: 18 }}><div className="friendly-card-glow" /><motion.img src={cardImage} alt="Smart Lanyard ID card" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} /><figcaption><span><i /> ONE SIMPLE CARD</span><b>IDENTITY · ACCESS · SAFETY</b></figcaption></motion.figure>
        </section>

        <section className="friendly-audience" id="who-it-helps">
          <div className="friendly-section-title"><p className="friendly-eyebrow"><i /> WHO IT HELPS</p><h2>Choose the place<br /><em>you want to support.</em></h2><p className="friendly-section-copy">The same lanyard can be set up differently for schools and workplaces.</p></div>
          <div className="friendly-tabs" role="tablist" aria-label="Smart Lanyard audiences"><button className={audience === "students" ? "active" : ""} onClick={() => setAudience("students")} role="tab" aria-selected={audience === "students"}><GraduationCap /> Schools</button><button className={audience === "companies" ? "active" : ""} onClick={() => setAudience("companies")} role="tab" aria-selected={audience === "companies"}><Building2 /> Companies</button></div>
          <AnimatePresence mode="wait"><motion.div className="friendly-audience-content" key={audience} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .28 }}><div className="friendly-audience-copy"><p>{data.label}</p><h3>{data.title}</h3><span>{data.copy}</span><button onClick={requestDemo}>Talk about this use case <ArrowRight /></button></div><div className="friendly-feature-grid friendly-benefit-grid">{data.benefits.map((benefit, index) => { const Icon = benefit.icon; return <motion.article key={benefit.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .06 }}><div><Icon /><span>0{index + 1}</span></div><h4>{benefit.title}</h4><p>{benefit.description}</p><ul>{benefit.tags.map(tag => <li key={tag}><Check />{tag}</li>)}</ul></motion.article>; })}</div></motion.div></AnimatePresence>
        </section>

        <section className="friendly-how" id="how-it-works"><div className="friendly-section-title centered"><p className="friendly-eyebrow"><i /> HOW IT WORKS</p><h2>Four simple steps.<br /><em>That’s all.</em></h2><p className="friendly-section-copy">Start with the lanyard. Then let it fit naturally into the day.</p></div><div className="friendly-steps">{steps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .07 }}><span>STEP 0{index + 1}</span><div><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div></section>

        <section className="friendly-cta" id="contact"><div className="friendly-cta-bubble bubble-a" aria-hidden="true" /><div className="friendly-cta-bubble bubble-b" aria-hidden="true" /><div><p className="friendly-eyebrow"><i /> READY TO EXPLORE IT?</p><h2>See how one lanyard<br /><em>can simplify the day.</em></h2></div><div><p>Tell us whether you are supporting a school or a workplace. We will show you the most useful place to begin.</p><button className="friendly-primary" onClick={requestDemo}>Request a Demo <ArrowRight /></button><button className="friendly-contact" onClick={requestDemo}>Talk to our team <Contact /></button></div></section>

        <footer className="friendly-footer"><div className="friendly-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Simple identity, access and safety.</span><b>© 2026 Smart Lanyard</b></footer>
      </main>
    </MotionConfig>
  );
}
