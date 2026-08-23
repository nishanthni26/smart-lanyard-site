/**
 * Friendly Daylight direction: product information is grouped into plain buyer questions.
 * Content is user-supplied; interaction only changes the Education/Enterprise information state. */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BellRing, Bluetooth, BookOpenCheck, Building2, CalendarCheck2, Check, Cloud, Contact, DoorOpen, GraduationCap, HeartPulse, KeyRound, LayoutDashboard, MapPin, Nfc, QrCode, ShieldCheck, ShieldPlus, Smartphone, UserRoundCheck, UsersRound, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../friendly.css";

type Audience = "education" | "enterprise";
type SolutionModule = { title: string; copy: string; items: string[]; icon: typeof GraduationCap };

const heroImage = "/manus-storage/smart-lanyard-friendly-hero_cff05b80.jpg";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const productJobs = [
  { icon: BadgeCheck, title: "Digital E-Paper ID", text: "Show live identity information on the card." },
  { icon: Nfc, title: "NFC & QR", text: "Tap or scan for attendance and secure access." },
  { icon: BellRing, title: "Smart alerts", text: "Share important notices at the right time." },
  { icon: ShieldPlus, title: "Safety support", text: "Use SOS and emergency information when needed." },
];

const audienceData: Record<Audience, { label: string; title: string; copy: string; modules: SolutionModule[]; aiFeatures: string[]; painPoints: string[] }> = {
  education: {
    label: "SMART LANYARD FOR EDUCATION",
    title: "One connected student card for the whole school day.",
    copy: "A digital student ID that combines identity, school communication, campus access, safety tools and AI assistance in one familiar lanyard.",
    modules: [
      { title: "Smart Student Identity", copy: "A living student credential instead of a static plastic ID.", items: ["Digital E-Paper ID Card", "Student Profile", "Dynamic QR Code", "NFC Attendance", "Digital Student Pass"], icon: UserRoundCheck },
      { title: "Academic Management", copy: "Keep daily learning information easy to find.", items: ["Live Timetable", "Homework & Assignments", "Exam Schedule", "Class Change Alerts", "School Calendar", "Teacher Announcements"], icon: BookOpenCheck },
      { title: "Parent Connectivity", copy: "Send the updates families need without extra paperwork.", items: ["Entry & Exit Notifications", "Homework Updates", "Attendance Alerts", "Exam Notifications", "Fee Reminders", "Parent-Teacher Meeting Alerts", "Emergency Notifications"], icon: UsersRound },
      { title: "Campus Experience", copy: "Use one card throughout the campus.", items: ["Library Access", "Hostel Access", "School Bus Integration", "Cafeteria Access", "Event Pass", "Lab Access", "Sports Access"], icon: DoorOpen },
      { title: "Student Safety", copy: "Give students and staff a direct way to respond when support is needed.", items: ["One-Touch SOS", "Emergency Broadcast", "Medical Information", "Lost Student Alerts", "Secure Campus Access"], icon: HeartPulse },
    ],
    aiFeatures: ["AI Study Reminders", "AI Homework Planner", "AI Attendance Insights", "AI Learning Recommendations", "AI Daily Summary"],
    painPoints: ["Replace static plastic ID cards", "Send parents real-time updates", "Keep students informed about homework and timetable changes", "Speed up attendance with NFC", "Improve student safety with SOS", "Reduce paperwork and printing costs", "Strengthen communication between schools and families"],
  },
  enterprise: {
    label: "SMART LANYARD FOR ENTERPRISE",
    title: "One employee card for a more connected workplace.",
    copy: "A digital employee ID that brings access, workplace reminders, HR services, safety alerts and AI productivity tools into one card.",
    modules: [
      { title: "Smart Employee Identity", copy: "A secure, always-current identity card for every employee.", items: ["Digital Employee ID", "Dynamic E-Paper Display", "QR Authentication", "NFC Access", "Digital Business Card"], icon: UserRoundCheck },
      { title: "Workplace Productivity", copy: "Surface useful information during the workday.", items: ["Meeting Reminders", "Shift Schedule", "Desk Information", "Visitor Pass", "Company Announcements", "Task Reminders"], icon: CalendarCheck2 },
      { title: "HR & Employee Services", copy: "Give people timely updates about the services that affect them.", items: ["Leave Status", "Leave Approval Notifications", "Payroll Notifications", "Training Reminders", "Policy Updates", "Employee Recognition", "Birthday & Work Anniversary Notifications"], icon: UsersRound },
      { title: "Smart Workplace Access", copy: "Use a single card across the spaces and services people need.", items: ["Building Access", "Parking Access", "Cafeteria Access", "Locker Access", "Meeting Room Access", "Printer Authentication", "Restricted Area Access"], icon: KeyRound },
      { title: "Workplace Safety", copy: "Make emergency communication and card protection easier to manage.", items: ["One-Touch SOS", "Emergency Evacuation Alerts", "Medical Information", "Lost Card Mode", "Instant Card Disable", "Emergency Contacts"], icon: ShieldCheck },
    ],
    aiFeatures: ["AI Meeting Assistant", "AI Daily Agenda", "AI Productivity Insights", "AI Smart Notifications", "AI Knowledge Assistant", "AI Training Recommendations"],
    painPoints: ["Replace multiple employee cards with one smart ID", "Keep employees informed about important announcements", "Simplify access control across facilities", "Reduce administrative work for HR and IT", "Improve emergency communication", "Increase workplace efficiency with smart reminders", "Lower operational costs through digital workflows"],
  },
};

const platformFeatures = [
  { icon: Zap, title: "Ultra-Low Power E-Paper Display" }, { icon: BadgeCheck, title: "Weeks of Battery Life" }, { icon: Bluetooth, title: "Secure NFC & Bluetooth Connectivity" }, { icon: Cloud, title: "Cloud-Based Platform" }, { icon: Smartphone, title: "Mobile Apps for Parents, Students & Employees" }, { icon: LayoutDashboard, title: "Enterprise Admin Dashboard" }, { icon: Zap, title: "AI-Powered Insights" }, { icon: BadgeCheck, title: "Custom Branding" }, { icon: BellRing, title: "Over-the-Air Updates" }, { icon: QrCode, title: "Fully Customizable Features" }, { icon: ShieldCheck, title: "Enterprise-Grade Security" },
];

const steps = [
  { icon: Contact, title: "Choose your setup", text: "Select the identity, access, communication and safety tools you need." },
  { icon: UserRoundCheck, title: "Issue each card", text: "Give every student or employee their own connected Smart Lanyard." },
  { icon: DoorOpen, title: "Use it every day", text: "Tap, scan and move through the day using one familiar credential." },
  { icon: LayoutDashboard, title: "Manage from one platform", text: "Use the cloud platform and mobile apps to manage updates and settings." },
];

const scrollTo = (target: string) => document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [audience, setAudience] = useState<Audience>("education");
  const data = audienceData[audience];
  const requestDemo = () => toast("Request a product demo", { description: "Tell us about your school or workplace, and a Smart Lanyard specialist will be in touch." });
  const contactTeam = () => toast("Contact Smart Lanyard", { description: "Our product team can help you plan the right Smart Lanyard setup." });

  return (
    <MotionConfig reducedMotion="user">
      <main className="friendly-site">
        <header className="friendly-nav">
          <button className="friendly-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button>
          <nav aria-label="Primary navigation"><button onClick={() => scrollTo("#product")}>The product</button><button onClick={() => scrollTo("#solutions")}>Solutions</button><button onClick={() => scrollTo("#platform")}>Platform</button></nav>
          <button className="friendly-nav-cta" onClick={requestDemo}>Request a demo <ArrowRight /></button>
        </header>

        <section className="friendly-hero" id="top">
          <div className="friendly-sun sun-one" aria-hidden="true" /><div className="friendly-sun sun-two" aria-hidden="true" />
          <motion.div className="friendly-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [0.23, 1, 0.32, 1] }}>
            <p className="friendly-eyebrow"><i /> SMART LANYARD SOLUTIONS</p>
            <h1>Smart<br /><em>Lanyard</em></h1>
            <h2>One Smart Card.<br />Unlimited Possibilities.</h2>
            <p>A connected E-Paper ID card for education and enterprise. It combines digital identity, NFC access, real-time information, AI features and safety tools in one everyday lanyard.</p>
            <div className="friendly-actions"><button className="friendly-primary" onClick={requestDemo}>Request a Product Demo <ArrowRight /></button><button className="friendly-quiet" onClick={() => scrollTo("#product")}>Explore the product</button></div>
          </motion.div>
          <motion.div className="friendly-person" initial={{ opacity: 0, x: 22, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 110, damping: 18 }}><img src={heroImage} alt="Student wearing a Smart Lanyard" /><span className="friendly-photo-tag"><i /> A connected ID for every day</span></motion.div>
        </section>

        <section className="friendly-intro" id="product">
          <motion.div className="friendly-product-summary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}>
            <p className="friendly-eyebrow"><i /> THE SMART LANYARD PRODUCT</p><h2>A digital ID card<br /><em>that keeps up.</em></h2><p>Smart Lanyard replaces a static plastic card with a secure connected display. It shows useful information on the card and links your people to the services they use most.</p>
            <div className="friendly-product-list">{productJobs.map((job) => { const Icon = job.icon; return <article key={job.title}><Icon /><div><strong>{job.title}</strong><span>{job.text}</span></div></article>; })}</div>
          </motion.div>
          <motion.figure initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ type: "spring", stiffness: 150, damping: 18 }}><div className="friendly-card-glow" /><motion.img src={cardImage} alt="Smart Lanyard connected E-Paper ID card" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} /><figcaption><span><i /> CONNECTED E-PAPER ID</span><b>ID · NFC · QR · SAFETY</b></figcaption></motion.figure>
        </section>

        <section className="friendly-audience friendly-solutions" id="solutions">
          <div className="friendly-section-title"><p className="friendly-eyebrow"><i /> SOLUTIONS</p><h2>Built for education.<br /><em>Ready for enterprise.</em></h2><p className="friendly-section-copy">Choose an environment to see the exact Smart Lanyard capabilities available for it.</p></div>
          <div className="friendly-tabs" role="tablist" aria-label="Smart Lanyard solutions"><button className={audience === "education" ? "active" : ""} onClick={() => setAudience("education")} role="tab" aria-selected={audience === "education"}><GraduationCap /> Education</button><button className={audience === "enterprise" ? "active" : ""} onClick={() => setAudience("enterprise")} role="tab" aria-selected={audience === "enterprise"}><Building2 /> Enterprise</button></div>
          <AnimatePresence mode="wait"><motion.div className="friendly-audience-content friendly-solution-content" key={audience} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .28 }}><div className="friendly-audience-copy"><p>{data.label}</p><h3>{data.title}</h3><span>{data.copy}</span><button onClick={requestDemo}>Request a {audience === "education" ? "school" : "workplace"} demo <ArrowRight /></button></div><div className="friendly-feature-grid friendly-solution-grid">{data.modules.map((module, index) => { const Icon = module.icon; return <motion.article key={module.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .045 }}><div><Icon /><span>0{index + 1}</span></div><h4>{module.title}</h4><p>{module.copy}</p><ul>{module.items.map(item => <li key={item}><Check />{item}</li>)}</ul></motion.article>; })}</div></motion.div></AnimatePresence>
        </section>

        <section className="friendly-ai" aria-labelledby="ai-title"><div><p className="friendly-eyebrow"><i /> OPTIONAL AI SUPPORT</p><h2 id="ai-title">Helpful prompts.<br /><em>Clearer next steps.</em></h2><p>AI is a supporting layer for the lanyard—not the product itself. Add the reminders, summaries and insights that are useful for your selected environment.</p></div><AnimatePresence mode="wait"><motion.div key={audience} className="friendly-ai-list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>{data.aiFeatures.map((feature, index) => <span key={feature}><i>{String(index + 1).padStart(2, "0")}</i>{feature}</span>)}</motion.div></AnimatePresence></section>

        <section className="friendly-platform" id="platform"><div className="friendly-section-title"><p className="friendly-eyebrow"><i /> WHY CHOOSE SMART LANYARD?</p><h2>One card.<br /><em>A complete platform.</em></h2><p className="friendly-section-copy">The card, cloud platform, apps and admin tools work together—so each feature is easier to manage.</p></div><div className="friendly-platform-grid">{platformFeatures.map((feature, index) => { const Icon = feature.icon; return <motion.article key={feature.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .035 }}><Icon /><span>{feature.title}</span></motion.article>; })}</div></section>

        <section className="friendly-problems"><div className="friendly-problems-copy"><p className="friendly-eyebrow"><i /> PAIN POINTS WE SOLVE</p><h2>Less admin.<br /><em>More clarity.</em></h2><p>Smart Lanyard replaces disconnected cards, messages and paper processes with one digital identity experience.</p></div><AnimatePresence mode="wait"><motion.ul key={audience} className="friendly-problem-list" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>{data.painPoints.map(point => <li key={point}><Check />{point}</li>)}</motion.ul></AnimatePresence></section>

        <section className="friendly-how" id="how-it-works"><div className="friendly-section-title centered"><p className="friendly-eyebrow"><i /> HOW IT WORKS</p><h2>From connected card<br /><em>to everyday service.</em></h2><p className="friendly-section-copy">Start with the lanyard, then manage the experience through one platform.</p></div><div className="friendly-steps">{steps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .07 }}><span>STEP 0{index + 1}</span><div><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div></section>

        <section className="friendly-cta" id="contact"><div className="friendly-cta-bubble bubble-a" aria-hidden="true" /><div className="friendly-cta-bubble bubble-b" aria-hidden="true" /><div><p className="friendly-eyebrow"><i /> SEE IT IN ACTION</p><h2>Find the right<br /><em>Smart Lanyard setup.</em></h2></div><div><p>See how the product can support your school, workplace or next connected identity project.</p><button className="friendly-primary" onClick={requestDemo}>Request a Product Demo <ArrowRight /></button><button className="friendly-contact" onClick={contactTeam}>Contact the Product Team <Contact /></button></div></section>

        <footer className="friendly-footer"><div className="friendly-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Education · Enterprise · Healthcare · Manufacturing · Government · Hospitality</span><b>© 2026 Smart Lanyard</b></footer>
      </main>
    </MotionConfig>
  );
}
