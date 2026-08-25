import { ArrowLeft, ArrowRight, BookOpenCheck, Compass } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import SiteFooter from "@/components/SiteFooter";
import "../demo.css";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

export default function Demo() {
  return <main className="demo-page">
    <header className="demo-nav">
      <a className="demo-brand" href="/" aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
      <nav aria-label="Primary navigation"><a href="/#product">The product</a><a href="/#solutions">Who it helps</a><a href="/#platform">Why it helps</a><a href="/faq">FAQ</a></nav>
      <ThemeToggle />
    </header>

    <section className="demo-hero">
      <div className="demo-orb demo-orb-one" aria-hidden="true" /><div className="demo-orb demo-orb-two" aria-hidden="true" />
      <div className="demo-intro"><p className="demo-eyebrow"><i /> SMART LANYARD</p><h1>Explore a better<br /><em>everyday ID.</em></h1><p>Smart Lanyard brings identity, approved entry, useful updates and safety signals together in one familiar card.</p><a href="/" className="demo-back"><ArrowLeft /> Back to the website</a><div className="demo-points"><span><i>1</i> Identity that stays easy to recognise</span><span><i>2</i> Entry and attendance in one place</span><span><i>3</i> Updates and safety support when they matter</span></div></div>
      <div className="demo-form-wrap"><div className="demo-static-card"><Compass aria-hidden="true" /><p className="demo-eyebrow"><i /> START EXPLORING</p><h2>See what fits<br /><em>your everyday.</em></h2><p>This static site is ready for easy hosting. Explore the school and workplace views to see how the card can be configured for different needs.</p><div className="demo-static-actions"><a className="demo-static-primary" href="/#solutions">Explore solutions <ArrowRight /></a><a className="demo-static-secondary" href="/faq"><BookOpenCheck /> Read the FAQ</a></div><p className="demo-static-note">Online demo requests are not collected in this version.</p></div></div>
    </section>

    <SiteFooter />
  </main>;
}
