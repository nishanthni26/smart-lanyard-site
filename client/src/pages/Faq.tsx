/**
 * Friendly Daylight direction: plain-language product help, warm space, and calm compact answers.
 * The page prioritizes everyday questions from school and workplace decision-makers. */
import { ArrowLeft, ArrowRight, BadgeCheck, Building2, GraduationCap, HelpCircle, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import "../faq.css";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";

const questions = [
  { id: "what", group: "Getting started", question: "What is Smart Lanyard?", answer: "Smart Lanyard is a connected ID card for schools and workplaces. It combines a live e-paper display, NFC access, QR authentication, a companion app and an admin dashboard in one familiar wearable card." },
  { id: "who", group: "Getting started", question: "Who is Smart Lanyard for?", answer: "It is designed for schools, colleges and workplaces that want to bring identity, attendance, access, alerts and daily updates into one easier-to-manage system." },
  { id: "card", group: "The card", question: "What information can appear on the card?", answer: "The e-paper card can show a live identity, dynamic QR code, NFC-enabled pass and short time-sensitive alerts. The exact setup is tailored to the organisation." },
  { id: "app", group: "The card", question: "What is handled in the app or dashboard?", answer: "The companion app provides deeper details such as timetables, reminders, announcements and notifications. The admin dashboard helps staff manage cards, access, alerts and organisation-wide settings." },
  { id: "school", group: "For schools", question: "How can schools use Smart Lanyard?", answer: "Schools can use it for student identity, tap-and-go attendance, campus access, timetable updates, homework notices, parent updates and one-touch SOS support." },
  { id: "parents", group: "For schools", question: "How do parents receive updates?", answer: "Schools can send relevant entry, exit, attendance, homework, exam and emergency notifications through the companion app, so families stay informed without extra paper notices." },
  { id: "work", group: "For workplaces", question: "How can workplaces use Smart Lanyard?", answer: "Workplaces can use it for employee identity, building and room access, visitor passes, HR notifications, meeting reminders, safety alerts and everyday workplace information." },
  { id: "security", group: "Safety and security", question: "What happens if a card is lost or someone needs help?", answer: "The setup can include lost-card mode, remote card disable, emergency contacts and a one-touch SOS trigger. Organisations control which safety tools are enabled for their users." },
  { id: "privacy", group: "Safety and security", question: "How is access and identity information protected?", answer: "Smart Lanyard is designed around secure identity and access management. The organisation controls card permissions and administrative access through its configured platform setup." },
  { id: "custom", group: "Setup", question: "Can the card be customised for our organisation?", answer: "Yes. The card design, enabled features, app experience and dashboard configuration can be tailored to your school, workplace or connected identity project." },
  { id: "ai", group: "Setup", question: "Are the AI features available now?", answer: "Smart Lanyard’s core identity, access, attendance and safety capabilities are available today. AI tools are a supporting layer for reminders and insights, with deeper features being rolled out to pilot partners." },
];

export default function Faq() {
  return <main className="faq-page">
    <header className="faq-nav">
      <a className="faq-brand" href="/" aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
      <nav aria-label="Primary navigation"><a href="/#product">The product</a><a href="/#solutions">Solutions</a><a href="/#platform">Platform</a><a className="active" href="/faq">FAQ</a></nav>
      <a className="faq-nav-cta" href="/#contact">Book a pilot <ArrowRight /></a>
    </header>

    <section className="faq-hero">
      <div className="faq-orb faq-orb-one" aria-hidden="true" /><div className="faq-orb faq-orb-two" aria-hidden="true" />
      <p className="faq-eyebrow"><i /> FREQUENTLY ASKED QUESTIONS</p>
      <h1>Clear answers<br />for <em>everyday questions.</em></h1>
      <p>Everything you need to know about bringing identity, access, updates and safety into one connected card.</p>
      <a className="faq-back" href="/"><ArrowLeft /> Back to Smart Lanyard</a>
      <figure className="faq-card-study"><img src={cardImage} alt="Smart Lanyard connected ID card" /><figcaption>Wear it. Tap it. Stay informed.</figcaption></figure>
    </section>

    <section className="faq-guide" aria-label="FAQ overview">
      <div className="faq-guide-copy"><p className="faq-eyebrow"><i /> START HERE</p><h2>One product.<br /><em>Three simple parts.</em></h2><p>Smart Lanyard works as a connected card, companion app and organisation dashboard. Each part shows the right information to the right person.</p><span className="faq-use-line">Wear it for identity. Tap it for access. Check the app for what’s next.</span></div>
      <div className="faq-guide-list"><article><BadgeCheck /><div><strong>The card</strong><span>Identity, short alerts, QR and NFC-enabled access.</span></div></article><article><HelpCircle /><div><strong>The app</strong><span>Updates, schedules, reminders and deeper information.</span></div></article><article><ShieldCheck /><div><strong>The dashboard</strong><span>Settings, access, notifications and organisation control.</span></div></article></div>
    </section>

    <section className="faq-content">
      <div className="faq-content-heading"><p className="faq-eyebrow"><i /> FIND YOUR ANSWER</p><h2>Questions people<br /><em>ask us most.</em></h2><p>Choose a question to read the answer. Still need help? Our product team can discuss your specific school or workplace setup.</p><a href="/#contact">Talk to the product team <ArrowRight /></a></div>
      <Accordion type="single" collapsible className="faq-accordion" defaultValue="what">
        {questions.map((item) => <AccordionItem value={item.id} key={item.id} className="faq-item"><span className="faq-group">{item.group}</span><AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{item.answer}</p></AccordionContent></AccordionItem>)}
      </Accordion>
    </section>

    <section className="faq-audiences"><div><p className="faq-eyebrow"><i /> BUILT AROUND PEOPLE</p><h2>For schools.<br /><em>For workplaces.</em></h2></div><div className="faq-audience-cards"><article><GraduationCap /><h3>Questions from education teams</h3><p>Talk through student identity, attendance, family updates and campus access.</p><a href="/#solutions">Explore education solutions <ArrowRight /></a></article><article><Building2 /><h3>Questions from workplace teams</h3><p>Talk through employee identity, access, administration and safety workflows.</p><a href="/#solutions">Explore workplace solutions <ArrowRight /></a></article></div></section>

    <section className="faq-cta"><div><p className="faq-eyebrow"><i /> STILL CURIOUS?</p><h2>Let’s talk about<br /><em>your setup.</em></h2></div><div><p>Tell us whether you are supporting a school or workplace. We will help you identify the most useful place to start.</p><a href="/#contact">Book a Pilot <ArrowRight /></a></div></section>
    <footer className="faq-footer"><a className="faq-brand" href="/"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a><span>Education · Enterprise · Healthcare · Manufacturing · Government · Hospitality</span><b>© 2026 Smart Lanyard</b></footer>
  </main>;
}
