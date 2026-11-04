import { ArrowLeft, ArrowRight, BookOpenCheck, Compass, MessageCircle } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SiteFooter from "@/components/SiteFooter";
import { managedAsset, sitePath } from "@/lib/site-path";
import "../demo.css";

const brandMark = managedAsset("/manus-storage/smart-lanyard-loop-logo_e44db5b8.png");
const whatsappHref = "https://wa.me/917022004954?text=Hello%20Smart%20Lanyard%2C%20I%27d%20like%20to%20book%20a%2020-minute%20discovery%20call%20for%20our%20school%20or%20workplace.";

export default function Demo() {
  return <main className="demo-page">
    <header className="demo-nav">
      <a className="demo-brand" href={sitePath("/")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
      <nav aria-label="Primary navigation"><a href={sitePath("/#product")}>The product</a><a href={sitePath("/#solutions")}>Who it helps</a><a href={sitePath("/#platform")}>Why it helps</a><a href={sitePath("/faq")}>FAQ</a></nav>
      <ThemeToggle />
    </header>

    <section className="demo-hero">
      <div className="demo-orb demo-orb-one" aria-hidden="true" /><div className="demo-orb demo-orb-two" aria-hidden="true" />
      <div className="demo-intro"><p className="demo-eyebrow"><i /> SMART LANYARD</p><h1>Explore a better<br /><em>everyday ID.</em></h1><p>Smart Lanyard brings identity, approved entry, useful updates and safety signals together in one familiar card.</p><a href={sitePath("/")} className="demo-back"><ArrowLeft /> Back to the website</a><div className="demo-points"><span><i>1</i> Identity that stays easy to recognise</span><span><i>2</i> Entry and attendance in one place</span><span><i>3</i> Updates and safety support when they matter</span></div></div>
      <div className="demo-form-wrap"><div className="demo-static-card"><Compass aria-hidden="true" /><p className="demo-eyebrow"><i /> START WITH DISCOVERY</p><h2>See what fits<br /><em>your everyday.</em></h2><p>Start with a 20-minute conversation about identity, entry, attendance updates, and safety. We can then scope a focused proof of value for your school or workplace.</p><div className="demo-static-actions"><a className="demo-static-primary" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle /> Book on WhatsApp</a><a className="demo-static-secondary" href={sitePath("/#solutions")}><ArrowRight /> Explore solutions</a><a className="demo-static-secondary" href={sitePath("/faq")}><BookOpenCheck /> Read the FAQ</a></div><p className="demo-static-note">No payment or form submission is taken on this static site. Pricing is quoted after the workflow and proof-of-value scope are understood.</p></div></div>
    </section>

    <SiteFooter />
  </main>;
}
