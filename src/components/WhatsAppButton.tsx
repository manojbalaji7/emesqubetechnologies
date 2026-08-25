import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const text = encodeURIComponent(`Hello ${site.name}, I would like to discuss an IT service requirement.`);
  return <a className="focus-ring fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-soft hover:bg-green-600" href={`https://wa.me/${site.whatsapp}?text=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with EMES Qube Technologies on WhatsApp"><MessageCircle size={18} /> WhatsApp</a>;
}
