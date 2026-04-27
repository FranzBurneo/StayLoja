import { ExternalLink, ShieldCheck, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { Property } from "@/types/property";

export default function TestimonialsSection({ property }: { property: Property }) {
  return (
    <section className="bg-aurora-cream py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Confianza"
          title="Confianza respaldada por Airbnb"
          description="Puedes revisar nuestro anuncio, calificación y reseñas directamente en Airbnb antes de reservar."
          align="center"
        />
        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex gap-1 text-aurora-gold" aria-label="Calificación disponible en Airbnb">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={19} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-lg font-bold text-aurora-ink">Reseñas disponibles en Airbnb</p>
              <p className="mt-2 leading-7 text-stone-600">
                También puedes revisar nuestro anuncio, calificación y reseñas en Airbnb.
              </p>
            </div>
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-aurora-ink px-6 py-4 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-aurora-terracotta"
            >
              <ShieldCheck size={19} />
              Revisar reseñas en Airbnb
              <ExternalLink size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
