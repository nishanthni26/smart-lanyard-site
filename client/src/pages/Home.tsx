/**
 * Friendly Daylight content direction: explain the connected card first, then show exactly
 * where each feature appears—on the card, in the companion app, or in the admin dashboard. */
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, BadgeCheck, BellRing, Bluetooth, BookOpenCheck, Building2, CalendarCheck2, Check, Cloud, Contact, DoorOpen, GraduationCap, HeartPulse, KeyRound, LayoutDashboard, MapPin, Nfc, QrCode, ShieldCheck, ShieldPlus, Smartphone, UserRoundCheck, UsersRound, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../friendly.css";

type Audience = "education" | "enterprise";
type Surface = "On Card" | "In App" | "Dashboard";
type Capability = { name: string; surfaces: Surface[]; note?: string };
type SolutionModule = { title: string; copy: string; items: Capability[]; icon: typeof GraduationCap };

const heroImage = "/manus-storage/smart-lanyard-friendly-hero-replacement_a1a3c0c8.jpg";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const productJobs = [
  { icon: BadgeCheck, title: "Live E-Paper display", text: "Show up-to-date identity and short alerts on the card." },
  { icon: Nfc, title: "Tap-to-access NFC", text: "Use one tap for attendance, access and approved services." },
  { icon: Smartphone, title: "Companion app", text: "Keep students, parents and employees in the loop." },
  { icon: ShieldPlus, title: "Safety support", text: "Use SOS, emergency information and alerts when needed." },
];

const audienceData: Record<Audience, { label: string; intro: string; title: string; copy: string; modules: SolutionModule[]; aiCopy: string; aiFeatures: Capability[]; painPoints: string[] }> = {
  education: {
    label: "FOR SCHOOLS",
    intro: "One card for identity, attendance, campus access and parent updates—so nothing falls through the cracks between school and home.",
    title: "The card that replaces the plastic ID—and does more than sit in a lanyard.",
    copy: "Smart Lanyard gives students one connected ID for the school day, while families and staff receive the information that is relevant to them.",
    modules: [
      { title: "Smart Student Identity", copy: "A live student credential that works at a glance and on tap.", icon: UserRoundCheck, items: [
        { name: "Digital e-paper ID card", surfaces: ["On Card"] }, { name: "Student profile", surfaces: ["In App"] }, { name: "Dynamic QR code", surfaces: ["On Card"] }, { name: "NFC attendance", surfaces: ["On Card"] }, { name: "Digital student pass", surfaces: ["On Card"] },
      ] },
      { title: "Academic Management", copy: "Timetables and assignments stay current, without a printed handout.", icon: BookOpenCheck, items: [
        { name: "Live timetable", surfaces: ["In App"] }, { name: "Homework & assignments", surfaces: ["In App"] }, { name: "Exam schedule", surfaces: ["In App"] }, { name: "Class change alerts", surfaces: ["On Card", "In App"], note: "Short alert on card, full detail in app" }, { name: "School calendar", surfaces: ["In App"] }, { name: "Teacher announcements", surfaces: ["In App"] },
      ] },
      { title: "Parent Connectivity", copy: "Real-time visibility into a child’s day, without calling the school office.", icon: UsersRound, items: [
        { name: "Entry & exit notifications", surfaces: ["Dashboard", "In App"], note: "Triggered from dashboard, delivered in app" }, { name: "Homework updates", surfaces: ["In App"] }, { name: "Attendance alerts", surfaces: ["In App"] }, { name: "Exam notifications", surfaces: ["In App"] }, { name: "Fee reminders", surfaces: ["In App"] }, { name: "Parent-teacher meeting alerts", surfaces: ["In App"] }, { name: "Emergency notifications", surfaces: ["In App"] },
      ] },
      { title: "Campus Experience", copy: "One tap for every checkpoint on campus—library, bus, lab and beyond.", icon: DoorOpen, items: [
        { name: "Library access", surfaces: ["On Card"] }, { name: "Hostel access", surfaces: ["On Card"] }, { name: "School bus integration", surfaces: ["On Card"] }, { name: "Cafeteria access", surfaces: ["On Card"] }, { name: "Event pass", surfaces: ["On Card"] }, { name: "Lab access", surfaces: ["On Card"] }, { name: "Sports facility access", surfaces: ["On Card"] },
      ] },
      { title: "Student Safety", copy: "Help is one touch away—for students and everyone who needs to know.", icon: HeartPulse, items: [
        { name: "One-touch SOS", surfaces: ["On Card", "Dashboard"], note: "Card trigger sends dashboard alert" }, { name: "Emergency broadcast", surfaces: ["Dashboard", "In App"] }, { name: "Medical information", surfaces: ["Dashboard"], note: "Staff-accessible" }, { name: "Lost student alerts", surfaces: ["Dashboard"] }, { name: "Secure campus access", surfaces: ["On Card"] },
      ] },
    ],
    aiCopy: "Pattern-based nudges and summaries—not a replacement for teachers or parents.",
    aiFeatures: [{ name: "AI study reminders", surfaces: ["In App"] }, { name: "AI homework planner", surfaces: ["In App"] }, { name: "AI attendance insights", surfaces: ["Dashboard"] }, { name: "AI learning recommendations", surfaces: ["In App"] }, { name: "AI daily summary", surfaces: ["In App"] }],
    painPoints: ["Static plastic ID cards → a card that updates itself", "Parents left out of the loop → real-time updates when something happens", "Missed homework or timetable changes → alerts before the change catches anyone off guard", "Slow, manual attendance → tap-and-go attendance with NFC", "Safety gaps on campus → one-touch SOS built into every card", "Piles of paperwork and printing → a dashboard replaces the paper trail", "Disconnected schools and families → one shared channel between school and home"],
  },
  enterprise: {
    label: "FOR WORKPLACES",
    intro: "One card for identity, building access and HR alerts—so employees always know what’s next and IT manages one system instead of five.",
    title: "One card that replaces the badge, the business card and the building fob.",
    copy: "Smart Lanyard connects employee identity, workplace access, services and safety updates in one everyday card.",
    modules: [
      { title: "Smart Employee Identity", copy: "A secure, current employee identity that is ready to tap or share.", icon: UserRoundCheck, items: [
        { name: "Digital employee ID", surfaces: ["On Card"] }, { name: "Dynamic e-paper display", surfaces: ["On Card"] }, { name: "QR authentication", surfaces: ["On Card"] }, { name: "NFC access", surfaces: ["On Card"] }, { name: "Digital business card", surfaces: ["On Card"], note: "Tap to share" },
      ] },
      { title: "Workplace Productivity", copy: "The day’s schedule on the card—the detail in the app.", icon: CalendarCheck2, items: [
        { name: "Meeting reminders", surfaces: ["On Card", "In App"], note: "Short alert on card, full detail in app" }, { name: "Shift schedule", surfaces: ["In App"] }, { name: "Desk information", surfaces: ["In App"] }, { name: "Visitor pass", surfaces: ["On Card"] }, { name: "Company announcements", surfaces: ["In App"] }, { name: "Task reminders", surfaces: ["In App"] },
      ] },
      { title: "HR & Employee Services", copy: "Fewer emails to HR and fewer status-check messages to managers.", icon: UsersRound, items: [
        { name: "Leave status", surfaces: ["In App"] }, { name: "Leave approval notifications", surfaces: ["In App"] }, { name: "Payroll notifications", surfaces: ["In App"] }, { name: "Training reminders", surfaces: ["In App"] }, { name: "Policy updates", surfaces: ["In App"] }, { name: "Employee recognition", surfaces: ["In App"] }, { name: "Birthday & work anniversary alerts", surfaces: ["In App"] },
      ] },
      { title: "Smart Workplace Access", copy: "One card, every door—building, parking and everything in between.", icon: KeyRound, items: [
        { name: "Building access", surfaces: ["On Card"] }, { name: "Parking access", surfaces: ["On Card"] }, { name: "Cafeteria access", surfaces: ["On Card"] }, { name: "Locker access", surfaces: ["On Card"] }, { name: "Meeting room access", surfaces: ["On Card"] }, { name: "Printer authentication", surfaces: ["On Card"] }, { name: "Restricted area access", surfaces: ["On Card"] },
      ] },
      { title: "Workplace Safety", copy: "Emergency response that does not depend on finding a phone first.", icon: ShieldCheck, items: [
        { name: "One-touch SOS", surfaces: ["On Card", "Dashboard"], note: "Card trigger sends dashboard alert" }, { name: "Emergency evacuation alerts", surfaces: ["On Card", "In App"], note: "Short alert on card, full detail in app" }, { name: "Medical information", surfaces: ["Dashboard"], note: "Admin-accessible" }, { name: "Lost card mode", surfaces: ["Dashboard"] }, { name: "Instant card disable", surfaces: ["Dashboard"] }, { name: "Emergency contacts", surfaces: ["In App"] },
      ] },
    ],
    aiCopy: "Reminders and insights that save time—not an autonomous agent.",
    aiFeatures: [{ name: "AI meeting assistant", surfaces: ["In App"], note: "Preparation and reminders" }, { name: "AI daily agenda", surfaces: ["In App"] }, { name: "AI productivity insights", surfaces: ["Dashboard"] }, { name: "AI smart notifications", surfaces: ["In App"] }, { name: "AI knowledge assistant", surfaces: ["In App"] }, { name: "AI training recommendations", surfaces: ["In App"] }],
    painPoints: ["A wallet full of separate cards → one smart ID for everything", "Announcements people miss → delivered to the card and app", "Access control spread across systems → one card, every door", "HR and IT buried in admin work → automated leave, payroll and training alerts", "Slow emergency response → instant evacuation alerts and one-touch SOS", "Manual, paper-based workflows → digital workflows with lower operating cost"],
  },
};

const platformFeatures = [
  { icon: Zap, title: "It updates itself.", text: "No reprinting a card when a schedule or role changes." }, { icon: BadgeCheck, title: "Weeks of battery, not hours.", text: "The e-paper display sips power, so it is rarely dead when it matters." }, { icon: Bluetooth, title: "One tap, everywhere.", text: "NFC and Bluetooth cover access, attendance and payments without separate systems." }, { icon: BellRing, title: "Everyone stays informed.", text: "Students, parents and employees receive the updates relevant to them." }, { icon: LayoutDashboard, title: "One view for IT and admin.", text: "A single dashboard replaces a patchwork of access systems." }, { icon: Cloud, title: "Built to change.", text: "Over-the-air updates roll out new features without replacing the card." }, { icon: QrCode, title: "Made for your brand.", text: "The card design, app and dashboard are customizable to your organisation." }, { icon: ShieldCheck, title: "Security built in.", text: "Access and identity data are encrypted end to end." },
];

const steps = [
  { icon: Contact, title: "Choose your setup", text: "Select the identity, access, communication and safety tools you need." }, { icon: UserRoundCheck, title: "Issue each card", text: "Give every student or employee their connected Smart Lanyard." }, { icon: DoorOpen, title: "Use it every day", text: "Tap, scan and move through the day using one familiar credential." }, { icon: LayoutDashboard, title: "Manage from one platform", text: "Use the dashboard and companion app to manage updates and settings." },
];

function SurfacePills({ surfaces }: { surfaces: Surface[] }) { return <div className="friendly-surface-pills">{surfaces.map(surface => <span key={surface}>{surface}</span>)}</div>; }
const scrollTo = (target: string) => document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

export default function Home() {
  const [audience, setAudience] = useState<Audience>("education");
  const data = audienceData[audience];
  const requestPilot = () => toast("Book a Pilot", { description: "Tell us about your school or workplace, and a Smart Lanyard specialist will be in touch." });
  const contactTeam = () => toast("Contact Smart Lanyard", { description: "Our product team can help you plan the right Smart Lanyard setup." });

  return <MotionConfig reducedMotion="user"><main className="friendly-site">
    <header className="friendly-nav"><button className="friendly-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button><nav aria-label="Primary navigation"><button onClick={() => scrollTo("#product")}>The product</button><button onClick={() => scrollTo("#solutions")}>Solutions</button><button onClick={() => scrollTo("#platform")}>Platform</button></nav><button className="friendly-nav-cta" onClick={requestPilot}>Book a pilot <ArrowRight /></button></header>
    <section className="friendly-hero" id="top"><div className="friendly-sun sun-one" aria-hidden="true" /><div className="friendly-sun sun-two" aria-hidden="true" /><motion.div className="friendly-hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: [0.23, 1, 0.32, 1] }}><p className="friendly-eyebrow"><i /> SMART LANYARD SOLUTIONS</p><h1>Smart<br /><em>Lanyard</em></h1><h2>One Smart Card.<br />Unlimited Possibilities.</h2><p>A single ID card for schools and workplaces—with a live e-paper display, tap-to-access NFC, and a companion app that keeps everyone in the loop.</p><div className="friendly-actions"><button className="friendly-primary" onClick={requestPilot}>Book a Pilot <ArrowRight /></button><button className="friendly-quiet" onClick={() => scrollTo("#product")}>Explore the product</button></div></motion.div><motion.div className="friendly-person" initial={{ opacity: 0, x: 22, rotate: 1 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ type: "spring", stiffness: 110, damping: 18 }}><img src={heroImage} alt="Student wearing a Smart Lanyard" /><span className="friendly-photo-tag"><i /> A connected ID for every day</span></motion.div></section>
    <section className="friendly-intro" id="product"><motion.div className="friendly-product-summary" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }}><p className="friendly-eyebrow"><i /> THE SMART LANYARD PRODUCT</p><h2>A digital ID card<br /><em>that keeps up.</em></h2><p>Smart Lanyard replaces the static plastic ID with a secure connected display, plus the app and dashboard tools that keep the right people informed.</p><div className="friendly-product-list">{productJobs.map(job => { const Icon = job.icon; return <article key={job.title}><Icon /><div><strong>{job.title}</strong><span>{job.text}</span></div></article>; })}</div></motion.div><motion.figure initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .35 }} transition={{ type: "spring", stiffness: 150, damping: 18 }}><div className="friendly-card-glow" /><motion.img src={cardImage} alt="Smart Lanyard connected E-Paper ID card" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} /><figcaption><span><i /> CONNECTED E-PAPER ID</span></figcaption></motion.figure></section>
    <section className="friendly-audience friendly-solutions" id="solutions"><div className="friendly-section-title"><p className="friendly-eyebrow"><i /> SOLUTIONS</p><h2>One card.<br /><em>Two everyday worlds.</em></h2><p className="friendly-section-copy">Smart Lanyard is configured differently for schools and workplaces. Select one to see what works on the card, in the app and in the dashboard.</p></div><div className="friendly-tabs" role="tablist" aria-label="Smart Lanyard solutions"><button className={audience === "education" ? "active" : ""} onClick={() => setAudience("education")} role="tab" aria-selected={audience === "education"}><GraduationCap /> For Schools</button><button className={audience === "enterprise" ? "active" : ""} onClick={() => setAudience("enterprise")} role="tab" aria-selected={audience === "enterprise"}><Building2 /> For Workplaces</button></div><AnimatePresence mode="wait"><motion.div className="friendly-audience-content friendly-solution-content" key={audience} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .28 }}><div className="friendly-audience-copy"><p>{data.label}</p><h3>{data.title}</h3><span>{data.intro}</span><button onClick={requestPilot}>Book a {audience === "education" ? "school" : "workplace"} pilot <ArrowRight /></button></div><div className="friendly-feature-grid friendly-solution-grid">{data.modules.map((module, index) => { const Icon = module.icon; return <motion.article key={module.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .045 }}><div><Icon /><span>0{index + 1}</span></div><h4>{module.title}</h4><p>{module.copy}</p><ul>{module.items.map(item => <li key={item.name}><div><strong>{item.name}</strong>{item.note && <small>{item.note}</small>}</div><SurfacePills surfaces={item.surfaces} /></li>)}</ul></motion.article>; })}</div></motion.div></AnimatePresence></section>
    <section className="friendly-ai" aria-labelledby="ai-title"><div><p className="friendly-eyebrow"><i /> SUPPORTING AI FEATURES</p><h2 id="ai-title">Helpful prompts.<br /><em>Human decisions.</em></h2><p>{data.aiCopy}</p></div><AnimatePresence mode="wait"><motion.div key={audience} className="friendly-ai-list" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>{data.aiFeatures.map((feature, index) => <div key={feature.name}><span><i>{String(index + 1).padStart(2, "0")}</i>{feature.name}</span>{feature.note && <small>{feature.note}</small>}<SurfacePills surfaces={feature.surfaces} /></div>)}</motion.div></AnimatePresence></section>
    <section className="friendly-platform" id="platform"><div className="friendly-section-title"><p className="friendly-eyebrow"><i /> WHY CHOOSE SMART LANYARD?</p><h2>One card.<br /><em>A complete platform.</em></h2><p className="friendly-section-copy">The card, cloud platform, app and dashboard work together, so each feature is easier to use and manage.</p></div><div className="friendly-platform-grid">{platformFeatures.map((feature, index) => { const Icon = feature.icon; return <motion.article key={feature.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .035 }}><Icon /><div><strong>{feature.title}</strong><span>{feature.text}</span></div></motion.article>; })}</div></section>
    <section className="friendly-problems"><div className="friendly-problems-copy"><p className="friendly-eyebrow"><i /> PAIN POINTS WE SOLVE</p><h2>Less admin.<br /><em>More clarity.</em></h2><p>Smart Lanyard replaces disconnected cards, messages and paper processes with one digital identity experience.</p></div><AnimatePresence mode="wait"><motion.ul key={audience} className="friendly-problem-list" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>{data.painPoints.map(point => <li key={point}><Check />{point}</li>)}</motion.ul></AnimatePresence></section>
    <section className="friendly-roadmap"><div><p className="friendly-eyebrow"><i /> PRODUCT ROADMAP</p><h2>Clear about<br /><em>what is live today.</em></h2></div><div><p><strong>Live today:</strong> Smart Lanyard supports identity, access, attendance and safety alerts, alongside a fully functional companion app and admin dashboard.</p><p><strong>Rolling out next:</strong> deeper AI insights, richer recommendations and selected access integrations—including payments and third-party building systems—are being introduced to pilot partners first.</p><button onClick={requestPilot}>Talk about a pilot <ArrowRight /></button></div></section>
    <section className="friendly-how" id="how-it-works"><div className="friendly-section-title centered"><p className="friendly-eyebrow"><i /> HOW IT WORKS</p><h2>How Smart Lanyard<br /><em>works.</em></h2><p className="friendly-section-copy">Start with the lanyard, then manage the experience through one platform.</p></div><div className="friendly-steps">{steps.map((step, index) => { const Icon = step.icon; return <motion.article key={step.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .07 }}><span>STEP 0{index + 1}</span><div><Icon /></div><h3>{step.title}</h3><p>{step.text}</p></motion.article>; })}</div></section>
    <section className="friendly-cta" id="contact"><div className="friendly-cta-bubble bubble-a" aria-hidden="true" /><div className="friendly-cta-bubble bubble-b" aria-hidden="true" /><div><p className="friendly-eyebrow"><i /> READY TO BEGIN?</p><h2>One Smart Card.<br /><em>Unlimited Possibilities.</em></h2></div><div><p>See how Smart Lanyard can fit your school, workplace or next connected identity project.</p><button className="friendly-primary" onClick={requestPilot}>Book a Pilot <ArrowRight /></button><button className="friendly-contact" onClick={contactTeam}>Contact the Product Team <Contact /></button></div></section>
    <footer className="friendly-footer"><div className="friendly-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>Education · Enterprise · Healthcare · Manufacturing · Government · Hospitality</span><b>© 2026 Smart Lanyard</b></footer>
  </main></MotionConfig>;
}
