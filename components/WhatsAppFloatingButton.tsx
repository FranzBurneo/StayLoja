import { MessageCircle } from "lucide-react";
import type { Property } from "@/types/property";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppLink(property.whatsapp, property.bookingMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Reservar por WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#1f9d5a] px-5 py-4 text-sm font-bold text-white shadow-[0_18px_35px_rgba(31,157,90,0.32)] transition hover:-translate-y-0.5"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
