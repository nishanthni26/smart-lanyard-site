/**
 * Friendly Daylight direction: plain-language product help, warm space, and calm compact answers.
 * The page prioritizes everyday questions from school and workplace decision-makers. */
import { ArrowLeft, ArrowRight, BadgeCheck, Building2, GraduationCap, HelpCircle, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ThemeToggle from "@/components/ThemeToggle";
import SiteFooter from "@/components/SiteFooter";
import "../faq.css";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";
const cardImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";

const questions = [
  { id: "what", group: "Getting started", question: "What is Smart Lanyard?", answer: "It is an ID card you can wear at school or work. It can show who you are, help you enter the right places and send useful updates." },
  { id: "who", group: "Getting started", question: "Who is Smart Lanyard for?", answer: "It is for schools and workplaces that want a simpler way to manage ID cards, entry, attendance, updates and safety." },
  { id: "card", group: "The card", question: "What can the card do?", answer: "It can show your ID, let you tap into approved places, help with attendance and display short alerts when needed." },
  { id: "app", group: "The card", question: "What are the app and dashboard for?", answer: "The app shows more detail, such as schedules and reminders. The dashboard helps staff manage cards, entry rules and updates." },
  { id: "school", group: "For schools", question: "How can schools use Smart Lanyard?", answer: "Schools can use it for student identity, tap-and-go attendance, campus access, timetable updates, homework notices, parent updates and one-touch SOS support." },
  { id: "parents", group: "For schools", question: "How do parents receive updates?", answer: "Schools can send relevant entry, exit, attendance, homework, exam and emergency notifications through the companion app, so families stay informed without extra paper notices." },
  { id: "work", group: "For workplaces", question: "How can workplaces use Smart Lanyard?", answer: "Workplaces can use it for employee identity, building and room access, visitor passes, HR notifications, meeting reminders, safety alerts and everyday workplace information." },
  { id: "security", group: "Safety and security", question: "What happens if a card is lost or someone needs help?", answer: "The setup can include lost-card mode, remote card disable, emergency contacts and a one-touch SOS trigger. Organisations control which safety tools are enabled for their users." },
  { id: "privacy", group: "Safety and security", question: "How is access and identity information protected?", answer: "Smart Lanyard is designed around secure identity and access management. The organisation controls card permissions and administrative access through its configured platform setup." },
  { id: "custom", group: "Setup", question: "Can the card be customised for our organisation?", answer: "Yes. The card design, enabled features, app experience and dashboard configuration can be tailored to your school, workplace or connected identity project." },
  { id: "ai", group: "Setup", question: "Are the AI features available now?", answer: "Smart Lanyard’s core identity, access, attendance and safety capabilities are available today. AI tools are a supporting layer for reminders and insights, with deeper features being introduced gradually." },
];

export default function Faq() {
  return <main className="faq-page">
    <header className="faq-nav">
      <a className="faq-brand" href="/" aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
      <nav aria-label="Primary navigation"><a href="/#product">The product</a><a href="/#solutions">Who it helps</a><a href="/#platform">Why it helps</a><a className="active" href="/faq">FAQ</a></nav>
      <ThemeToggle />
    </header>

    <section className="faq-hero">
      <div className="faq-orb faq-orb-one" aria-hidden="true" /><div className="faq-orb faq-orb-two" aria-hidden="true" />
      <p className="faq-eyebrow"><i /> FREQUENTLY ASKED QUESTIONS</p>
      <h1>Clear answers<br />for <em>everyday questions.</em></h1>
      <p>Simple answers about a card that helps people identify themselves, enter the right places and stay informed.</p>
      <a className="faq-back" href="/"><ArrowLeft /> Back to Smart Lanyard</a>
      <figure className="faq-card-study"><img src={cardImage} alt="Smart Lanyard connected ID card" /><figcaption>Wear it. Tap it. Stay informed.</figcaption></figure>
    </section>

    <section className="faq-guide" aria-label="FAQ overview">
      <div className="faq-guide-copy"><p className="faq-eyebrow"><i /> START HERE</p><h2>One card.<br /><em>Three simple parts.</em></h2><p>The card is what people wear. The app shows useful details. The dashboard helps staff keep everything in order.</p><span className="faq-use-line">Wear it for ID. Tap it to enter. Check the app for what’s next.</span></div>
      <div className="faq-guide-list"><article><BadgeCheck /><div><strong>The card</strong><span>Your ID, quick alerts and entry to approved places.</span></div></article><article><HelpCircle /><div><strong>The app</strong><span>Schedules, updates and reminders for each person.</span></div></article><article><ShieldCheck /><div><strong>The dashboard</strong><span>A simple place for staff to manage cards and updates.</span></div></article></div>
    </section>

    <section className="faq-content">
      <div className="faq-content-heading"><p className="faq-eyebrow"><i /> FIND YOUR ANSWER</p><h2>Questions people<br /><em>ask us most.</em></h2><p>Choose a question to read the answer. If you still need help, use the demo link in the footer to tell us about your school or workplace.</p></div>
      <Accordion type="single" collapsible className="faq-accordion" defaultValue="what">
        {questions.map((item) => <AccordionItem value={item.id} key={item.id} className="faq-item"><span className="faq-group">{item.group}</span><AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{item.answer}</p></AccordionContent></AccordionItem>)}
      </Accordion>
    </section>

    <section className="faq-audiences"><div><p className="faq-eyebrow"><i /> BUILT AROUND PEOPLE</p><h2>For schools.<br /><em>For workplaces.</em></h2></div><div className="faq-audience-cards"><article><GraduationCap /><h3>Questions from education teams</h3><p>Talk through student identity, attendance, family updates and campus access.</p><a href="/#solutions">Explore education solutions <ArrowRight /></a></article><article><Building2 /><h3>Questions from workplace teams</h3><p>Talk through employee identity, access, administration and safety workflows.</p><a href="/#solutions">Explore workplace solutions <ArrowRight /></a></article></div></section>

    <SiteFooter />
  </main>;
}
