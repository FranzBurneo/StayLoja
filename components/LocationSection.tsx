import { MapPin, Navigation } from "lucide-react";
import type { Property } from "@/types/property";

const mapEmbedUrl =
  "https://www.google.com/maps?q=-4.005722,-79.200833&z=17&output=embed";

export default function LocationSection({ property }: { property: Property }) {
  return (
    <section id="ubicacion" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-aurora-terracotta">
            Ubicación
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-aurora-ink sm:text-4xl">
            Ubicación céntrica frente al Parque Infantil
          </h2>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            El departamento está ubicado en una zona estratégica de Loja, frente al Parque Infantil y cerca del centro, cafeterías, restaurantes y puntos de interés de la ciudad.
          </p>
          <p className="mt-4 rounded-3xl bg-aurora-cream p-5 text-base font-semibold leading-7 text-aurora-ink">
            Puedes revisar la ubicación en Google Maps antes de reservar.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Frente al Parque Infantil", "Cerca del centro", "Cafeterías y restaurantes", "Puntos de interés de Loja"].map((place) => (
              <div key={place} className="flex items-center gap-3 rounded-2xl bg-aurora-cream px-4 py-3 text-sm font-semibold text-stone-700">
                <MapPin className="text-aurora-terracotta" size={18} />
                {place}
              </div>
            ))}
          </div>
          <a
            href={property.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-aurora-ink px-6 py-4 text-base font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-aurora-terracotta"
          >
            <Navigation size={19} />
            Ver ubicación en Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-stone-100 bg-aurora-cream p-3 shadow-soft sm:p-4">
          <div className="overflow-hidden rounded-[1.5rem] bg-white">
            <iframe
              title="Mapa de referencia del sector Parque Infantil en Loja"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full border-0 sm:h-[430px] lg:h-[500px]"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-3 bg-white px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-aurora-ink">{property.name}</p>
              <p className="mt-1 text-sm text-stone-600">{property.location}</p>
            </div>
            <a
              href={property.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-4 py-2.5 text-sm font-bold text-aurora-ink transition hover:border-aurora-terracotta hover:text-aurora-terracotta"
            >
              Abrir mapa
              <Navigation size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
