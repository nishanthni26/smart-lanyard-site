import { MessageCircleMore } from "lucide-react";
import "../whatsapp-contact.css";

const phoneNumber = "917022004954";
const enquiry = "Hello Smart Lanyard, I would like to know more about Smart Lanyard.";

export default function WhatsAppContact() {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(enquiry)}`;

  return <a className="whatsapp-contact" href={href} target="_blank" rel="noreferrer" aria-label="Contact Smart Lanyard on WhatsApp">
    <MessageCircleMore aria-hidden="true" />
    <span>WhatsApp us</span>
  </a>;
}
