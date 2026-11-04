import { BellRing, CalendarCheck2, DoorOpen, HeartPulse, KeyRound, ShieldCheck } from "lucide-react";

export type AudienceMomentAudience = "education" | "enterprise";

export const getAudienceMoments = (audience: AudienceMomentAudience) => audience === "education" ? [
  { icon: DoorOpen, title: "Entry that stays clear.", text: "A simple tap can help record an arrival and unlock approved spaces.", badge: "Identity + attendance" },
  { icon: BellRing, title: "Parents get the right update.", text: "Entry, exit and schedule changes can reach the people who need to know.", badge: "Family updates" },
  { icon: HeartPulse, title: "Safety is close at hand.", text: "A clear SOS action can surface an alert faster when help is needed.", badge: "Safety ready" },
] : [
  { icon: KeyRound, title: "One tap for the workplace.", text: "Use the same card for identity and access across approved spaces.", badge: "Access control" },
  { icon: CalendarCheck2, title: "The day stays current.", text: "Shift and meeting cues can travel with the employee, not on a paper list.", badge: "Live schedule" },
  { icon: ShieldCheck, title: "Ready for the unexpected.", text: "SOS and evacuation messages can support a faster response when it matters.", badge: "Emergency alerts" },
];
