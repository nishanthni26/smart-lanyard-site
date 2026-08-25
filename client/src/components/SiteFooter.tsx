import { ArrowRight } from "lucide-react";
import { managedAsset, sitePath } from "@/lib/site-path";
import "../site-footer.css";

const brandMark = managedAsset("/manus-storage/smart-lanyard-loop-logo_e44db5b8.png");

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="site-footer-main">
      <div className="site-footer-intro">
        <a className="site-footer-brand" href={sitePath("/")} aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
        <p>One simple card for identity, entry, updates and safety.</p>
        <a className="site-footer-demo" href={sitePath("/demo")}>Request a demo <ArrowRight /></a>
      </div>
      <nav className="site-footer-links" aria-label="Footer navigation">
        <div><span>EXPLORE</span><a href={sitePath("/#product")}>The product</a><a href={sitePath("/#platform")}>Why it helps</a><a href={sitePath("/faq")}>FAQ</a></div>
        <div><span>SOLUTIONS</span><a href={sitePath("/#solutions")}>For schools</a><a href={sitePath("/#solutions")}>For workplaces</a><a href={sitePath("/demo")}>Request a demo</a></div>
      </nav>
    </div>
    <div className="site-footer-bottom"><b>© 2026 Smart Lanyard</b></div>
  </footer>;
}
