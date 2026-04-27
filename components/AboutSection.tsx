import { Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { Property } from "@/types/property";

export default function AboutSection({ property }: { property: Property }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Alojamiento privado"
          title="Comodidad, ubicación y privacidad en Loja"
          description={property.description}
        />
        <div className="grid gap-4">
          {property.benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-stone-100 bg-aurora-cream p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-aurora-olive text-white">
                <Check size={20} />
              </div>
              <h3 className="text-xl font-bold text-aurora-ink">{benefit.title}</h3>
              <p className="mt-2 leading-7 text-stone-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
