import { ArrowRight } from "lucide-react";
import "../site-footer.css";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <div className="site-footer-intro">
        <a className="site-footer-brand" href="/" aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
        <p>One simple card for identity, entry, updates and safety.</p>
        <a className="site-footer-demo" href="/demo">Request a demo <ArrowRight /></a>
      </div>
      <nav className="site-footer-links" aria-label="Footer navigation">
        <div><span>EXPLORE</span><a href="/#product">The product</a><a href="/#platform">Why it helps</a><a href="/faq">FAQ</a></div>
        <div><span>SOLUTIONS</span><a href="/#solutions">For schools</a><a href="/#solutions">For workplaces</a><a href="/demo">Request a demo</a></div>
      </nav>
    </div>
    <div className="site-footer-bottom"><span>Education · Enterprise · Healthcare · Manufacturing · Government · Hospitality</span><b>© 2026 Smart Lanyard</b></div>
  </footer>;
}
