/**
 * Editorial Hardware direction: warm-white paper, ink typography, cobalt only as a precise system signal,
 * and one credibly staged Smart Lanyard product artifact. */
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Building2, Check, ChevronRight, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../editorial.css";

type Audience = "education" | "enterprise";

const productImage = "/manus-storage/smart-lanyard-transparent_b686992c.png";
const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

const audiences = {
  education: {
    label: "EDUCATION",
    title: "A familiar object for a more considered campus.",
    body: "Students carry one responsive credential that makes arrivals, access, schedule changes and care easier to understand.",
    features: ["Live attendance at the point of entry", "Schedule and notice updates on the credential", "A visible, immediate channel for safety support", "Family notifications when routine moments change"],
    note: "THE OUTCOME  /  FEWER MANUAL MOMENTS. MORE CONTEXT.",
    icon: GraduationCap,
  },
  enterprise: {
    label: "ENTERPRISE",
    title: "A work credential that stays relevant all day.",
    body: "Identity, access and useful workday information come together in one object people can keep close without another app or card.",
    features: ["Secure, dynamic access across shared spaces", "Live shift, meeting and organisation updates", "Rapid card controls when a status changes", "A clearer safety layer for moments that matter"],
    note: "THE OUTCOME  /  ONE CREDENTIAL. A MORE FLUID DAY.",
    icon: Building2,
  },
} as const;

const details = [
  { index: "01", title: "One physical layer", copy: "A carefully considered credential that people can see, carry and trust." },
  { index: "02", title: "Information that changes", copy: "The display reflects the real-time details that matter in the present moment." },
  { index: "03", title: "Control without clutter", copy: "A calmer operational layer for the teams responsible for identity and access." },
];

function goTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [audience, setAudience] = useState<Audience>("education");
  const active = audiences[audience];
  const Icon = active.icon;
  const requestDemo = () => toast("Demo request started", { description: "We’ll help you plan a focused first deployment." });

  return (
    <main className="editorial-page">
      <header className="editorial-nav"><button className="editorial-brand" onClick={() => goTo("#top")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></button><nav aria-label="Primary navigation"><button onClick={() => goTo("#contexts")}>Contexts</button><button onClick={() => goTo("#principles")}>Principles</button><button onClick={() => goTo("#contact")}>Contact</button></nav><button className="nav-inquiry" onClick={requestDemo}>Make an enquiry <ArrowUpRight /></button></header>

      <section className="editorial-hero" id="top"><div className="hero-rule rule-a" aria-hidden="true" /><div className="hero-rule rule-b" aria-hidden="true" /><div className="hero-copy"><p className="overline"><i /> CONNECTED CREDENTIAL SYSTEM</p><h1>Identity,<br /><em>considered.</em></h1><p>Smart Lanyard makes one familiar object more useful: a responsive credential for access, awareness and the everyday moments between.</p><div><button className="dark-button" onClick={requestDemo}>Request a demonstration <ArrowUpRight /></button><button className="text-button" onClick={() => goTo("#contexts")}>See the system <ArrowDownRight /></button></div></div><motion.figure className="hero-artifact" initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, ease: [0.23, 1, 0.32, 1] }}><div className="artifact-ground" aria-hidden="true" /><div className="artifact-frame" aria-hidden="true" /><img src={productImage} alt="Smart Lanyard connected identity credential" /><figcaption><span><i /> ACTIVE CREDENTIAL</span><span>DISPLAY / NFC / BLE</span></figcaption></motion.figure><div className="hero-caption"><span>DESIGNED FOR THE REAL WORLD</span><span>01 — 04</span></div></section>

      <section className="editorial-intro"><p>THE SAME OBJECT CAN HOLD IDENTITY, OPEN A DOOR, REFLECT A CHANGE OR REASSURE A FAMILY.</p><span>SMART LANYARD<br />IS A QUIETLY CAPABLE<br />LAYER FOR DAILY LIFE.</span></section>

      <section className="contexts" id="contexts"><div className="contexts-top"><p className="overline inverse"><i /> CONTEXT IS EVERYTHING</p><h2>Built for what<br />actually <em>happens.</em></h2><p>Start with the environment. Then shape the credential around its natural patterns of movement, access and communication.</p></div><div className="context-control" role="tablist"><button className={audience === "education" ? "active" : ""} onClick={() => setAudience("education")} role="tab" aria-selected={audience === "education"}><span>01</span> Education</button><button className={audience === "enterprise" ? "active" : ""} onClick={() => setAudience("enterprise")} role="tab" aria-selected={audience === "enterprise"}><span>02</span> Enterprise</button></div><AnimatePresence mode="wait"><motion.article className="context-sheet" key={audience} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .32, ease: [0.23, 1, 0.32, 1] }}><div className="context-rail" aria-hidden="true"><i /><span>VERIFIED / LIVE</span></div><header><div className="context-symbol"><Icon /></div><p>{active.label}</p></header><div className="context-title"><h3>{active.title}</h3><p>{active.body}</p><button onClick={requestDemo}>Discuss this context <ArrowUpRight /></button></div><ul>{active.features.map((feature, index) => <li key={feature}><span>0{index + 1}</span><Check />{feature}</li>)}</ul><footer>{active.note}</footer></motion.article></AnimatePresence></section>

      <section className="principles" id="principles"><div className="principles-head"><p className="overline"><i /> WHY THE OBJECT MATTERS</p><h2>Technology that<br />knows its <em>place.</em></h2></div><div className="principles-list">{details.map((detail, index) => <motion.article key={detail.index} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ delay: index * .08, duration: .36 }}><span>{detail.index}</span><h3>{detail.title}</h3><p>{detail.copy}</p><ChevronRight /></motion.article>)}</div></section>

      <section className="editorial-proof"><div className="proof-statement"><p className="overline inverse"><i /> A CLEARER OPERATING LAYER</p><h2>Designed for<br />people first.<br /><em>Built for control.</em></h2></div><div className="proof-facts"><article><ShieldCheck /><div><b>Secure by design</b><span>Dynamic identity and managed access remain under your control.</span></div></article><article><Sparkles /><div><b>Simple in use</b><span>The experience is visible, familiar and easy to carry through a day.</span></div></article></div></section>

      <section className="editorial-final" id="contact"><p className="overline"><i /> LET’S START WITH ONE CONTEXT</p><h2>Make the everyday<br /><em>work more intelligently.</em></h2><p>We’ll help you identify the first moment Smart Lanyard can improve—and build the right credential experience around it.</p><button className="dark-button" onClick={requestDemo}>Talk to our team <ArrowUpRight /></button></section>

      <footer className="editorial-footer"><div className="editorial-brand"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></div><span>IDENTITY / ACCESS / AWARENESS</span><b>© 2026</b></footer>
    </main>
  );
}
