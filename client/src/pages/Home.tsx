/**
 * Signal Noir design system: cinematic techno-minimalism with near-black fields,
 * controlled Signal Cyan, editorial asymmetry, and a suspended credential motif.
 */
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BellRing,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  ContactRound,
  Fingerprint,
  GraduationCap,
  MapPin,
  MessageSquareText,
  Radio,
  ScanLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

type Audience = "students" | "companies";

const audienceData = {
  students: {
    eyebrow: "STUDENT SAFETY SYSTEM",
    title: "More confidence in every school day.",
    copy: "A connected credential that keeps students present, protected and in sync with the day ahead.",
    icon: GraduationCap,
    features: [
      { title: "Real-time location tracking", icon: MapPin },
      { title: "Instant attendance alerts to parents", icon: BellRing },
      { title: "SOS emergency button", icon: CircleAlert },
      { title: "Classroom engagement tracking", icon: ScanLine },
      { title: "Digital timetable", icon: CalendarDays },
      { title: "Safe arrival & departure notifications", icon: UserRoundCheck },
    ],
  },
  companies: {
    eyebrow: "WORKPLACE OPERATIONS",
    title: "One credential. A clearer workplace.",
    copy: "Connect secure access, workforce visibility and safety response in one physical identity layer.",
    icon: Building2,
    features: [
      { title: "Unified access control", icon: Fingerprint },
      { title: "Employee real-time location", icon: MapPin },
      { title: "SOS and safety alerts", icon: CircleAlert },
      { title: "Automated attendance", icon: Clock3 },
      { title: "Remote card deactivation", icon: ShieldCheck },
      { title: "Work notifications via Slack/Teams", icon: MessageSquareText },
    ],
  },
} as const;

const steps = [
  {
    number: "01",
    icon: ContactRound,
    title: "Issue identities",
    copy: "Assign each person a durable, connected credential in seconds.",
  },
  {
    number: "02",
    icon: Radio,
    title: "Connect the day",
    copy: "Link access, presence, notifications and safety into one signal.",
  },
  {
    number: "03",
    icon: ScanLine,
    title: "See in real time",
    copy: "Turn everyday movement into a clear, privacy-aware operational view.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Respond with clarity",
    copy: "Make every arrival, alert and exception easier to act on.",
  },
];

const displayModes = [
  { label: "STUDENT MODE", primary: "Period 03", secondary: "Physics · Room 204", signal: "ON CAMPUS" },
  { label: "CORPORATE MODE", primary: "08:45", secondary: "Design review · Level 5", signal: "ACCESS ACTIVE" },
  { label: "HOSPITAL MODE", primary: "Ward 7", secondary: "Shift begins · 09:00", signal: "CARE TEAM" },
  { label: "FACTORY MODE", primary: "Line A3", secondary: "Safety zone cleared", signal: "SITE READY" },
];

const credentialMoments = [
  { code: "01", eyebrow: "VERIFIED IDENTITY", title: "Know who is present.", copy: "A live, readable profile makes every identity easy to verify at a glance.", icon: ContactRound },
  { code: "02", eyebrow: "SECURE ACCESS", title: "Open the right doors.", copy: "Permissions travel with the card, so access stays simple and controlled.", icon: Fingerprint },
  { code: "03", eyebrow: "LIVE VISIBILITY", title: "See movement with context.", copy: "Clear presence signals help teams respond to arrivals, transitions and exceptions.", icon: MapPin },
  { code: "04", eyebrow: "SAFETY READY", title: "Send a signal when it matters.", copy: "An immediate SOS connection brings the right people into the moment faster.", icon: CircleAlert },
];

const heroImage = "/manus-storage/smart-lanyard-hero_60ef3c57.jpg";
const lanyardImage = "/manus-storage/smart-lanyard-product_fdf29ba0.png";
const detailImage = "/manus-storage/smart-lanyard-detail_f550f9ff.jpg";
const brandMark = "/manus-storage/smart-lanyard-mark_37d205d9.png";

function Magnetic({ children }: { children: ReactNode }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="magnetic-wrap"
      animate={offset}
      transition={{ type: "spring", stiffness: 380, damping: 22, mass: 0.45 }}
      onPointerMove={(event) => {
        if (event.pointerType === "touch") return;
        const rect = event.currentTarget.getBoundingClientRect();
        setOffset({
          x: ((event.clientX - rect.left) / rect.width - 0.5) * 9,
          y: ((event.clientY - rect.top) / rect.height - 0.5) * 7,
        });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}

function CredentialCard({ variant = "hero" }: { variant?: "hero" | "zoom" }) {
  return (
    <div className={`credential-card credential-card-${variant}`}>
      <div className="credential-topline"><span>SMART LANYARD</span><i /></div>
      <div className="credential-profile"><div className="credential-avatar">JW</div><div><strong>James Walker</strong><small>Employee · SL-0114</small></div></div>
      <div className="credential-divider" />
      <div className="credential-meta"><span>ACCESS</span><b>ACTIVE</b></div>
      <div className="credential-meta"><span>LOCATION</span><b>HQ · Level 5</b></div>
      <div className="credential-bottom"><span>IDENTITY VERIFIED</span><i /></div>
    </div>
  );
}

export default function Home() {
  const [audience, setAudience] = useState<Audience>("students");
  const [scrolled, setScrolled] = useState(false);
  const [revealStage, setRevealStage] = useState(0);
  const revealRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const displayRotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-11, 11]), { stiffness: 180, damping: 19 });
  const displayRotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), { stiffness: 180, damping: 19 });
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start end", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0.08, 0.45, 0.82], [110, -15, 10]);
  const productScale = useTransform(scrollYProgress, [0.08, 0.4, 0.82], [0.58, 1.48, 1.12]);
  const productRotate = useTransform(scrollYProgress, [0.08, 0.45, 0.82], [-7, 1.5, -1]);
  const activeData = audienceData[audience];
  const AudienceIcon = activeData.icon;
  const activeMoment = credentialMoments[revealStage];
  const ActiveMomentIcon = activeMoment.icon;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setRevealStage(Math.min(3, Math.max(0, Math.floor(latest * 4.7))));
  });

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 28);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const requestDemo = () => {
    toast("Demo request noted", {
      description: "Our team will help you map Smart Lanyard to your environment.",
    });
  };

  return (
    <main className="signal-noir-page">
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <button className="brand-lockup" onClick={() => scrollTo("#top")} aria-label="Smart Lanyard home">
          <img src={brandMark} alt="" className="brand-mark" />
          <span>SMART LANYARD</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <button onClick={() => scrollTo("#features")}>Capabilities</button>
          <button onClick={() => scrollTo("#how-it-works")}>How it works</button>
        </nav>
        <Magnetic><Button className="header-cta" onClick={requestDemo}>Request a demo <ArrowUpRight aria-hidden="true" /></Button></Magnetic>
      </header>

      <section
        className="hero-section"
        id="top"
        aria-labelledby="hero-title"
        onPointerMove={(event) => {
          if (event.pointerType === "touch") return;
          const rect = event.currentTarget.getBoundingClientRect();
          pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
          pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
        }}
        onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
      >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <img src={brandMark} alt="" className="hero-symbol-watermark" aria-hidden="true" />
        <div className="hero-particles" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
        <div className="hero-copy reveal-in">
          <div className="eyebrow"><span className="status-dot" /> Connected identity layer</div>
          <h1 id="hero-title">Smart<br /><span>Lanyard</span></h1>
          <p className="hero-statement">Smart Identity. <em>Real-Time Visibility.</em></p>
          <p className="hero-description">One smart lanyard for identity, access, safety and real-time visibility.</p>
          <div className="hero-actions">
            <Magnetic><Button className="primary-cta" onClick={requestDemo}>Request a Demo <ArrowUpRight aria-hidden="true" /></Button></Magnetic>
            <button className="text-cta" onClick={() => scrollTo("#features")}>Explore the system <ChevronRight aria-hidden="true" /></button>
          </div>
        </div>
        <div className="hero-person-wrap" aria-hidden="true">
          <img src={heroImage} alt="" className="hero-person" />
          <div className="person-shadow" />
          <div className="person-scanline" />
        </div>
        <motion.div className="wearer-id-wrap" aria-label="James Walker, employee ID SL-0114, access active, HQ level 5" style={{ rotateX: displayRotateX, rotateY: displayRotateY, transformPerspective: 900 }} animate={{ y: [0, -5, 0] }} transition={{ y: { duration: 4.7, repeat: Infinity, ease: "easeInOut" } }}>
          <CredentialCard />
          <div className="wearer-id-label"><span>WEARER / LIVE</span><strong>JAMES WALKER</strong><small>ACCESS ACTIVE</small></div>
        </motion.div>
        <div className="hero-meta hero-meta-left"><span>LIVE IDENTITY</span><b>01 — 04</b></div>
        <div className="hero-meta hero-meta-right"><span>SCROLL TO REVEAL</span><ArrowDownRight aria-hidden="true" /></div>
      </section>

      <section className="product-reveal" ref={revealRef} aria-label="Smart lanyard product reveal">
        <div className="reveal-sticky">
          <svg className="cinematic-trace" viewBox="0 0 1280 720" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 472 H208 C276 472 282 424 345 424 H520 C572 424 580 458 637 458 H830 C902 458 895 395 968 395 H1280" />
            <circle cx="208" cy="472" r="3" /><circle cx="637" cy="458" r="3" /><circle cx="968" cy="395" r="3" />
          </svg>
          <div className="reveal-coordinates" aria-hidden="true"><span>AXIS / 49.12</span><span>LINK / SECURE</span><span>NODE / 03</span></div>
          <div className="reveal-technical reveal-technical-left"><span>CONNECTED</span><i /><span>SECURE</span></div>
          <div className="reveal-technical reveal-technical-right"><span>IDENTITY</span><i /><span>VISIBLE</span></div>
          <motion.div className="product-stage credential-zoom-stage" style={{ y: productY, scale: productScale, rotate: productRotate }}>
            <div className="signal-halo" />
            <div className="product-orbit product-orbit-one" />
            <div className="product-orbit product-orbit-two" />
            <div className="zoom-lanyard-loop" aria-hidden="true" />
            <CredentialCard variant="zoom" />
            <span className="product-cue product-cue-one"><i />JAMES WALKER / SL-0114</span>
            <span className="product-cue product-cue-two"><i />ACCESS ACTIVE</span>
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div className="zoom-feature-callout" key={activeMoment.code} initial={{ opacity: 0, x: 18, y: 8 }} animate={{ opacity: 1, x: 0, y: 0 }} exit={{ opacity: 0, x: -10, y: -8 }} transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}>
              <div className="zoom-feature-icon"><ActiveMomentIcon aria-hidden="true" /></div>
              <div><p>{activeMoment.eyebrow} <b>{activeMoment.code}/04</b></p><h3>{activeMoment.title}</h3><span>{activeMoment.copy}</span></div>
            </motion.div>
          </AnimatePresence>
          <div className="zoom-stage-progress" aria-hidden="true">{credentialMoments.map((moment, index) => <i key={moment.code} className={index <= revealStage ? "active" : ""} />)}</div>
          <div className="reveal-title-wrap">
            <p className="eyebrow centered-eyebrow">The credential, rethought</p>
            <h2>Meet the signal<br />that stays with you.</h2>
          </div>
        </div>
      </section>

      <motion.section className="audience-section" id="features" aria-labelledby="audience-title" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
        <div className="section-rail"><span>02</span><i /><span>WHO IT SERVES</span></div>
        <div className="audience-intro">
          <p className="eyebrow">One wearable system, tailored context</p>
          <h2 id="audience-title">A clearer signal for<br /><em>every movement.</em></h2>
        </div>
        <div className="audience-toggle" role="tablist" aria-label="Choose your audience">
          <button
            className={audience === "students" ? "active" : ""}
            onClick={() => setAudience("students")}
            role="tab"
            aria-selected={audience === "students"}
          >
            <GraduationCap aria-hidden="true" /> <span>For Students</span><b>01</b>
          </button>
          <button
            className={audience === "companies" ? "active" : ""}
            onClick={() => setAudience("companies")}
            role="tab"
            aria-selected={audience === "companies"}
          >
            <Building2 aria-hidden="true" /> <span>For Companies</span><b>02</b>
          </button>
        </div>

        <div className="audience-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={audience}
              className="audience-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
            >
              <div className="audience-copy">
                <div className="audience-icon"><AudienceIcon aria-hidden="true" /></div>
                <p className="eyebrow">{activeData.eyebrow}</p>
                <h3>{activeData.title}</h3>
                <p>{activeData.copy}</p>
                <button className="underlined-cta" onClick={requestDemo}>See your use case <ArrowUpRight aria-hidden="true" /></button>
              </div>
              <div className="feature-list" role="tabpanel">
                {activeData.features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      className="feature-row"
                      key={feature.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + index * 0.055, duration: 0.25 }}
                    >
                      <span className="feature-index">0{index + 1}</span>
                      <FeatureIcon aria-hidden="true" />
                      <span>{feature.title}</span>
                      <Check aria-hidden="true" className="feature-check" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      <motion.section className="process-section" id="how-it-works" aria-labelledby="process-title" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
        <div className="process-header">
          <div>
            <p className="eyebrow">From issue to insight</p>
            <h2 id="process-title">Every day,<br /><em>in clearer focus.</em></h2>
          </div>
          <p>Smart Lanyard turns a familiar item into a calm, connected operating layer for the spaces people share.</p>
        </div>
        <div className="steps-wrap">
          <div className="step-connector" aria-hidden="true"><span /></div>
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <motion.article className="step-card" key={step.number} initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.35, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon"><StepIcon aria-hidden="true" /></div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <span className="step-tail"><i />{index === steps.length - 1 ? "READY" : "NEXT"}</span>
              </motion.article>
            );
          })}
        </div>
      </motion.section>

      <motion.section className="cta-section" aria-labelledby="cta-title" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}>
        <img src={detailImage} alt="" className="cta-detail" />
        <div className="cta-overlay" />
        <div className="cta-content">
          <p className="eyebrow"><span className="status-dot" /> YOUR NEXT CLEAR SIGNAL</p>
          <h2 id="cta-title">Bring every<br /><em>moment into view.</em></h2>
          <p>See how Smart Lanyard can make identity, safety and visibility work as one.</p>
          <div className="cta-actions">
            <Magnetic><Button className="primary-cta" onClick={requestDemo}>Request a Demo <ArrowUpRight aria-hidden="true" /></Button></Magnetic>
            <a href="mailto:hello@smartlanyard.com" className="contact-link">Contact us <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="cta-corner" aria-hidden="true"><span>SL</span><i /></div>
      </motion.section>

      <footer className="site-footer">
        <div className="brand-lockup footer-brand"><img src={brandMark} alt="" className="brand-mark" /><span>SMART LANYARD</span></div>
        <p>Smart identity for the places people move through.</p>
        <span>© 2026 SMART LANYARD</span>
      </footer>
    </main>
  );
}
