import Image from "next/image";
import {
  ArrowDown,
  Bath,
  BedDouble,
  CalendarCheck,
  Car,
  ExternalLink,
  Users,
  Wifi
} from "lucide-react";
import type { Property } from "@/types/property";
import { createWhatsAppLink } from "@/lib/whatsapp";

const statIcons = [Users, BedDouble, BedDouble, Bath, Wifi, Car];

export default function HeroSection({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppLink(property.whatsapp, property.bookingMessage);

  return (
    <section className="relative overflow-hidden bg-aurora-cream pt-10 sm:pt-14 lg:pt-20">
      <div className="section-shell grid gap-10 pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-aurora-gold/30 bg-white px-4 py-2 text-sm font-semibold text-aurora-olive shadow-sm">
            <CalendarCheck size={17} />
            Alojamiento entero en Loja
          </span>
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] text-aurora-ink sm:text-6xl lg:text-7xl">
            Departamento familiar cerca del centro de Loja
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">
            Disfruta una estadía cómoda y privada en el sector Parque Infantil, cerca del centro de Loja, cafeterías y restaurantes. Ideal para familias, parejas o viajes de trabajo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-aurora-terracotta px-6 py-4 text-base font-bold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              Consultar disponibilidad
            </a>
            <a
              href={property.airbnbUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-aurora-terracotta/30 bg-white px-6 py-4 text-base font-bold text-aurora-terracotta shadow-sm transition hover:-translate-y-0.5 hover:border-aurora-terracotta"
            >
              Ver anuncio en Airbnb
              <ExternalLink size={18} />
            </a>
            <a
              href="#galeria"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-4 text-base font-bold text-aurora-ink shadow-sm transition hover:-translate-y-0.5 hover:border-aurora-gold"
            >
              Ver fotos
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-2.5">
            {property.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? CalendarCheck;

              return (
                <div
                  key={stat.label}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-stone-200/80 bg-white/88 px-4 py-2.5 text-sm font-semibold text-aurora-ink shadow-[0_8px_22px_rgba(72,50,33,0.06)] backdrop-blur"
                >
                  <Icon className="shrink-0 text-aurora-terracotta" size={17} aria-hidden="true" />
                  <span className="whitespace-nowrap">
                    {stat.value} {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-aurora-gold/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-soft">
            <Image
              src={property.heroImage}
              alt="Sala principal del departamento Stay Loja Centro"
              width={1400}
              height={1000}
              priority
              className="h-[420px] w-full rounded-[1.55rem] object-cover sm:h-[520px] lg:h-[640px]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-4 shadow-soft backdrop-blur">
              <p className="text-sm font-semibold text-aurora-terracotta">{property.shortLocation}</p>
              <p className="mt-1 text-sm text-stone-600">{property.locationNote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
