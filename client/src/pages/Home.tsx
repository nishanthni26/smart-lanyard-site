import { MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BellRing,
  Building2,
  CalendarCheck2,
  Check,
  DoorOpen,
  GraduationCap,
  HeartPulse,
  KeyRound,
  MapPin,
  Nfc,
  QrCode,
  ShieldCheck,
  Smartphone,
  UsersRound,
  Zap,
} from "lucide-react";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import ThemeToggle from "@/components/ThemeToggle";
import "../home-redesign.css";

type Audience = "education" | "workplace";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";
const liveCard = "/manus-storage/smart-lanyard-status-card-cutout_40516fd3.png";

const visualStories = [
  { image: "/manus-storage/smart-lanyard-social-post-with-logo-v2_f9cc45c6.webp", label: "THE EVERYDAY CARD", title: "Your identity, ready when you are.", alt: "Smart Lanyard identity card with QR, NFC, updates and safety features" },
  { image: "/manus-storage/smart-lanyard-sos-safety_fbb1403f.webp", label: "SAFETY", title: "A clearer way to ask for help.", alt: "Smart Lanyard safety card with SOS status and location update" },
  { image: "/manus-storage/smart-lanyard-qr-digital-pass_9a0c7488.webp", label: "DIGITAL PASS", title: "Show it or scan it.", alt: "Smart Lanyard digital pass with QR code and phone scanner" },
  { image: "/manus-storage/smart-lanyard-campus-access_04227dc0.webp", label: "ACCESS", title: "Entry that feels familiar.", alt: "Smart Lanyard near campus access readers" },
  { image: "/manus-storage/smart-lanyard-live-timetable_35080935.webp", label: "UPDATES", title: "The day at a glance.", alt: "Smart Lanyard displaying a live timetable and class update" },
  { image: "/manus-storage/smart-lanyard-nfc-access_2369e57d.webp", label: "NFC", title: "A simple tap can do more.", alt: "Smart Lanyard connecting with an NFC access reader" },
  { image: "/manus-storage/smart-lanyard-parent-connectivity_7ae1b2d9.webp", label: "COMPANION APP", title: "Keep the right people in the loop.", alt: "Smart Lanyard connected to a companion app showing entry and attendance updates" },
  { image: "/manus-storage/smart-lanyard-dynamic-id_c934f7da.webp", label: "DYNAMIC ID", title: "Information that can stay current.", alt: "Smart Lanyard showing a dynamic digital identity display" },
];

const audienceContent = {
  education: {
    eyebrow: "FOR SCHOOLS",
    title: "A calmer school day,\nstarting at the gate.",
    intro: "One wearable card for the moments students, families and staff need to coordinate.",
    groups: [
      { icon: GraduationCap, number: "01", title: "Arrive with confidence", text: "A familiar student ID that can help with entry, attendance and the school day ahead.", tags: ["Student ID", "NFC check-in", "Campus entry"] },
      { icon: CalendarCheck2, number: "02", title: "Keep the day on track", text: "Timetable changes and practical reminders can stay close to the student.", tags: ["Live timetable", "Class updates", "Reminders"] },
      { icon: UsersRound, number: "03", title: "Share the right update", text: "Parents and staff can receive relevant attendance and arrival information.", tags: ["Entry alerts", "Attendance", "Parent app"] },
    ],
  },
  workplace: {
    eyebrow: "FOR WORKPLACES",
    title: "A better everyday\nwork credential.",
    intro: "Give employees one card that can support identity, approved access and practical workplace updates.",
    groups: [
      { icon: Building2, number: "01", title: "Make entry simpler", text: "A single employee credential can be ready for approved workspaces and shared areas.", tags: ["Employee ID", "Building access", "NFC tap"] },
      { icon: BellRing, number: "02", title: "Keep work moving", text: "Timely reminders and changes can reach people without another inbox to check.", tags: ["Schedule", "Updates", "Companion app"] },
      { icon: ShieldCheck, number: "03", title: "Support safer spaces", text: "A clear safety signal can help teams respond with the right context.", tags: ["SOS", "Safety status", "Admin view"] },
    ],
  },
} as const;

const teams = ["Nishanth", "Priya", "Srikanth"];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [audience, setAudience] = useState<Audience>("education");
  const current = audienceContent[audience];

  return (
    <MotionConfig reducedMotion="user">
      <main className="sl-home">
        <header className="sl-nav">
          <button className="sl-brand" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home">
            <img src={brandMark} alt="" />
            <span>SMART<br />LANYARD</span>
          </button>
          <nav aria-label="Primary navigation">
            <button onClick={() => scrollTo("#what-it-is")}>What it is</button>
            <button onClick={() => scrollTo("#who-it-helps")}>Who it helps</button>
            <button onClick={() => scrollTo("#in-action")}>In action</button>
            <a href="/faq">FAQ</a>
          </nav>
          <a className="sl-nav-demo" href="/demo">Request a demo <ArrowRight aria-hidden="true" /></a>
          <ThemeToggle />
        </header>

        <section className="sl-hero" id="top">
          <div className="sl-hero-orb sl-orb-a" aria-hidden="true" />
          <div className="sl-hero-orb sl-orb-b" aria-hidden="true" />
          <div className="sl-hero-orb sl-orb-c" aria-hidden="true" />
          <motion.div className="sl-hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
            <p className="sl-eyebrow"><i /> ONE LANYARD. EVERYDAY HELP.</p>
            <h1>Identity, entry<br /><em>and safety.</em></h1>
            <p className="sl-lede">Smart Lanyard is a familiar ID card that helps people show who they are, enter approved places and receive useful updates.</p>
            <div className="sl-hero-actions">
              <a className="sl-button sl-button-primary" href="/demo">Request a demo <ArrowRight aria-hidden="true" /></a>
              <button className="sl-text-link" onClick={() => scrollTo("#what-it-is")}>See how it works <ArrowRight aria-hidden="true" /></button>
            </div>
            <div className="sl-hero-proof" aria-label="Core benefits">
              <span><BadgeCheck aria-hidden="true" /> Identity</span>
              <span><DoorOpen aria-hidden="true" /> Access</span>
              <span><CalendarCheck2 aria-hidden="true" /> Attendance</span>
              <span><HeartPulse aria-hidden="true" /> Safety</span>
            </div>
          </motion.div>

          <motion.div className="sl-hero-product" initial={{ opacity: 0, scale: 0.94, rotate: 3 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 120, damping: 18 }}>
            <div className="sl-hero-card-shadow" aria-hidden="true" />
            <motion.img src={liveCard} alt="Smart Lanyard showing identity and live status" animate={{ y: [0, -8, 0], rotate: [0, 1.25, 0, -1.1, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }} />
            <div className="sl-callout sl-callout-top"><MapPin aria-hidden="true" /><span>Live status<br /><b>Ready</b></span></div>
            <div className="sl-callout sl-callout-bottom"><Nfc aria-hidden="true" /><span>Tap to enter<br /><b>Approved</b></span></div>
          </motion.div>
        </section>

        <section className="sl-essentials" id="what-it-is" aria-labelledby="essentials-title">
          <div className="sl-section-heading">
            <p className="sl-eyebrow"><i /> WHAT THE CARD HELPS WITH</p>
            <h2 id="essentials-title">One simple card.<br /><em>Four everyday jobs.</em></h2>
          </div>
          <div className="sl-essential-grid">
            <article><span>01</span><UserIcon /><h3>Show who you are</h3><p>A clear, current ID that is easy to recognise at a glance.</p></article>
            <article><span>02</span><KeyRound aria-hidden="true" /><h3>Enter the right places</h3><p>One ready-to-tap credential for approved doors, rooms and check-ins.</p></article>
            <article><span>03</span><CalendarCheck2 aria-hidden="true" /><h3>Check in with ease</h3><p>A tap can help make attendance and arrivals simpler to record.</p></article>
            <article><span>04</span><HeartPulse aria-hidden="true" /><h3>Get help quickly</h3><p>A clear safety signal can help the right people respond sooner.</p></article>
          </div>
        </section>

        <section className="sl-audience" id="who-it-helps" aria-labelledby="audience-title">
          <div className="sl-audience-top">
            <div>
              <p className="sl-eyebrow"><i /> MADE FOR PEOPLE ON THE MOVE</p>
              <h2 id="audience-title">The same card.<br /><em>The right context.</em></h2>
            </div>
            <div className="sl-tabs" role="tablist" aria-label="Choose audience">
              <button className={audience === "education" ? "is-active" : ""} onClick={() => setAudience("education")} role="tab" aria-selected={audience === "education"}><GraduationCap aria-hidden="true" /> Schools</button>
              <button className={audience === "workplace" ? "is-active" : ""} onClick={() => setAudience("workplace")} role="tab" aria-selected={audience === "workplace"}><Building2 aria-hidden="true" /> Workplaces</button>
            </div>
          </div>
          <motion.div className="sl-audience-copy" key={audience} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
            <p>{current.eyebrow}</p>
            <h3>{current.title.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h3>
            <span>{current.intro}</span>
          </motion.div>
          <motion.div className="sl-outcome-grid" key={`${audience}-outcomes`} initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
            {current.groups.map(group => {
              const Icon = group.icon;
              return <motion.article key={group.title} variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -5 }}><div className="sl-outcome-top"><span>{group.number}</span><Icon aria-hidden="true" /></div><h4>{group.title}</h4><p>{group.text}</p><div>{group.tags.map(tag => <b key={tag}>{tag}</b>)}</div></motion.article>;
            })}
          </motion.div>
        </section>

        <section className="sl-visuals" id="in-action" aria-labelledby="visuals-title">
          <div className="sl-visuals-heading">
            <p className="sl-eyebrow"><i /> SEE IT IN THE EVERYDAY</p>
            <h2 id="visuals-title">Small moments.<br /><em>Better connected.</em></h2>
            <p>From a quick tap to an important update, the card can support the moments that keep a day moving.</p>
          </div>
          <div className="sl-visual-rail" aria-label="Smart Lanyard use cases">
            {visualStories.map((story, index) => <motion.article key={story.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: Math.min(index * 0.05, 0.25), duration: 0.26 }} whileHover={{ y: -6 }}><img src={story.image} alt={story.alt} /><div><p>{story.label}</p><h3>{story.title}</h3></div></motion.article>)}
          </div>
        </section>

        <section className="sl-system" aria-labelledby="system-title">
          <div className="sl-system-art"><div className="sl-system-line" aria-hidden="true" /><div className="sl-system-node sl-node-card"><BadgeCheck aria-hidden="true" /><span>Card</span></div><div className="sl-system-node sl-node-app"><Smartphone aria-hidden="true" /><span>App</span></div><div className="sl-system-node sl-node-admin"><UsersRound aria-hidden="true" /><span>Admin</span></div></div>
          <div className="sl-system-copy"><p className="sl-eyebrow"><i /> SIMPLE ON THE OUTSIDE</p><h2 id="system-title">A card for people.<br /><em>A clear view for teams.</em></h2><p>The card is what people wear. The companion app shares helpful detail. The admin view helps the right people keep things moving.</p><ul><li><Check aria-hidden="true" /> Current identity and approved access</li><li><Check aria-hidden="true" /> Timely updates for the people who need them</li><li><Check aria-hidden="true" /> Safety information that is easier to act on</li></ul></div>
        </section>

        <section className="sl-roadmap" aria-labelledby="roadmap-title">
          <div><p className="sl-eyebrow"><i /> READY TODAY</p><h2 id="roadmap-title">Built for the<br /><em>everyday.</em></h2><p>Identity, access, timely updates and safety signals, in one wearable credential.</p></div>
          <div className="sl-roadmap-list"><article><BadgeCheck aria-hidden="true" /><div><strong>Now</strong><span>Identity, entry, attendance and helpful alerts.</span></div></article><article><Zap aria-hidden="true" /><div><strong>Next</strong><span>Deeper insights and selected everyday integrations.</span></div></article></div>
        </section>

        <section className="sl-team" aria-labelledby="team-title"><p className="sl-eyebrow"><i /> OUR TEAM</p><h2 id="team-title">The people building<br /><em>Smart Lanyard.</em></h2><div>{teams.map((name, index) => <motion.article key={name} whileHover={{ y: -5 }}><span>{name.charAt(0)}</span><p>SMART LANYARD TEAM</p><h3>{name}</h3><small>0{index + 1}</small></motion.article>)}</div></section>

        <section className="sl-closing"><div><p className="sl-eyebrow"><i /> READY TO TALK?</p><h2>See the card in<br /><em>your everyday.</em></h2></div><div><p>Tell us about your school or workplace. We will start with the parts of the day you want to make simpler.</p><a className="sl-button sl-button-warm" href="/demo">Request a demo <ArrowRight aria-hidden="true" /></a></div></section>
        <SiteFooter />
      </main>
    </MotionConfig>
  );
}

function UserIcon() {
  return <BadgeCheck aria-hidden="true" />;
}
