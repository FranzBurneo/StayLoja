import { ExternalLink, MessageCircle } from "lucide-react";
import type { Property } from "@/types/property";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function BookingCtaSection({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppLink(property.whatsapp, property.bookingMessage);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-aurora-ink px-6 py-12 text-white shadow-soft sm:px-10 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-aurora-gold">
                Reserva directa
              </p>
              <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
                ¿Listo para consultar disponibilidad?
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/78">
                Escríbenos por WhatsApp y te ayudamos a confirmar fechas, tarifa y detalles de tu estadía.
              </p>
              <p className="mt-4 max-w-2xl text-sm font-semibold leading-6 text-white/70">
                También puedes revisar nuestro anuncio, calificación y reseñas en Airbnb.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-aurora-terracotta px-6 py-4 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                <MessageCircle size={20} />
                Reservar por WhatsApp
              </a>
              <a
                href={property.airbnbUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Reservar por Airbnb
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
