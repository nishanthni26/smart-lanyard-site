import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import SiteFooter from "@/components/SiteFooter";
import { trpc } from "@/lib/trpc";
import "../demo.css";

const brandMark = "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png";

type DemoForm = {
  fullName: string;
  workEmail: string;
  organisation: string;
  organisationType: "School or university" | "Workplace" | "Other";
  teamSize: "1-50" | "51-250" | "251-1000" | "1000+";
  phone: string;
  message: string;
};

const initialForm: DemoForm = {
  fullName: "",
  workEmail: "",
  organisation: "",
  organisationType: "School or university",
  teamSize: "1-50",
  phone: "",
  message: "",
};

export default function Demo() {
  const [form, setForm] = useState<DemoForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const submitDemoRequest = trpc.demoRequest.submit.useMutation({
    onSuccess: () => setSubmitted(true),
    onError: requestError => setError(requestError.message || "We could not send your request. Please try again."),
  });

  const update = <K extends keyof DemoForm>(key: K, value: DemoForm[K]) => setForm(current => ({ ...current, [key]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    submitDemoRequest.mutate({ ...form, phone: form.phone.trim() || undefined, message: form.message.trim() || undefined });
  };

  return <main className="demo-page">
    <header className="demo-nav">
      <a className="demo-brand" href="/" aria-label="Smart Lanyard home"><img src={brandMark} alt="" /><span>SMART<br />LANYARD</span></a>
      <nav aria-label="Primary navigation"><a href="/#product">The product</a><a href="/#solutions">Who it helps</a><a href="/#platform">Why it helps</a><a href="/faq">FAQ</a></nav>
      <ThemeToggle />
    </header>

    <section className="demo-hero">
      <div className="demo-orb demo-orb-one" aria-hidden="true" /><div className="demo-orb demo-orb-two" aria-hidden="true" />
      <div className="demo-intro"><p className="demo-eyebrow"><i /> REQUEST A DEMO</p><h1>See Smart Lanyard<br /><em>in your everyday world.</em></h1><p>Tell us a little about your school or workplace. We will use your details only to arrange a conversation about a Smart Lanyard demo.</p><a href="/" className="demo-back"><ArrowLeft /> Back to the website</a><div className="demo-points"><span><i>1</i> A card for ID, entry and updates</span><span><i>2</i> A setup shaped around your organisation</span><span><i>3</i> A conversation with the right starting point</span></div></div>

      <div className="demo-form-wrap">
        {submitted ? <div className="demo-success" role="status"><CheckCircle2 /><p className="demo-eyebrow"><i /> REQUEST RECEIVED</p><h2>Thank you,<br /><em>we have your details.</em></h2><p>Our team can now review your request and contact you about the best next step.</p><a href="/">Return to Smart Lanyard <ArrowLeft /></a></div> : <form className="demo-form" onSubmit={submit} noValidate><div className="demo-form-heading"><p className="demo-eyebrow"><i /> YOUR DETAILS</p><h2>Start with<br /><em>the basics.</em></h2><p>Fields marked with * are required.</p></div><div className="demo-fields"><label>Full name *<input required value={form.fullName} onChange={event => update("fullName", event.target.value)} autoComplete="name" /></label><label>Work email *<input required type="email" value={form.workEmail} onChange={event => update("workEmail", event.target.value)} autoComplete="email" /></label><label>Organisation *<input required value={form.organisation} onChange={event => update("organisation", event.target.value)} autoComplete="organization" /></label><label>Organisation type *<select value={form.organisationType} onChange={event => update("organisationType", event.target.value as DemoForm["organisationType"])}><option>School or university</option><option>Workplace</option><option>Other</option></select></label><label>Organisation size *<select value={form.teamSize} onChange={event => update("teamSize", event.target.value as DemoForm["teamSize"])}><option>1-50</option><option>51-250</option><option>251-1000</option><option>1000+</option></select></label><label>Phone number <input type="tel" value={form.phone} onChange={event => update("phone", event.target.value)} autoComplete="tel" /></label><label className="demo-message">What would you like to discuss? <textarea rows={4} value={form.message} onChange={event => update("message", event.target.value)} placeholder="For example: access, attendance, safety or parent updates." /></label></div>{error && <p className="demo-error" role="alert">{error}</p>}<button className="demo-submit" type="submit" disabled={submitDemoRequest.isPending}>{submitDemoRequest.isPending ? <><Loader2 className="animate-spin" /> Sending request</> : <>Send demo request <Send /></>}</button><p className="demo-privacy">By sending this form, you allow Smart Lanyard to use these details to respond to your demo request.</p></form>}
      </div>
    </section>

    <SiteFooter />
  </main>;
}
