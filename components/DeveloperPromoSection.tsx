import { MessageCircle } from "lucide-react";
import type { Property } from "@/types/property";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function DeveloperPromoSection({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppLink(property.whatsapp, property.developerMessage);

  return (
    <section className="bg-white pb-16">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-stone-200 bg-aurora-cream p-6 shadow-sm sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="font-display text-2xl font-semibold text-aurora-ink">
              ¿Tienes un alojamiento y necesitas una web como esta?
            </p>
            <p className="mt-3 leading-7 text-stone-600">
              También desarrollo páginas web para alojamientos, restaurantes, consultorios y negocios locales que quieren mostrar sus servicios de forma profesional y recibir clientes por WhatsApp.
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-aurora-terracotta/30 bg-white px-5 py-3 text-sm font-bold text-aurora-terracotta shadow-sm transition hover:-translate-y-0.5 lg:mt-0"
          >
            <MessageCircle size={18} />
            Solicitar una web similar
          </a>
        </div>
      </div>
    </section>
  );
}
