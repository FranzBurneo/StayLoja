import { BadgeDollarSign } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import type { Property } from "@/types/property";

export default function PricingSection({ property }: { property: Property }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Tarifas"
          title="Tarifas referenciales"
          description="Valores orientativos para ayudarte a planificar tu estadía. La tarifa final se confirma por WhatsApp o Airbnb."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {property.pricing.map((item) => (
            <article key={item.label} className="rounded-3xl border border-stone-100 bg-aurora-cream p-6 text-center shadow-sm">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-aurora-terracotta shadow-sm">
                <BadgeDollarSign size={23} />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-aurora-olive">{item.label}</p>
              <p className="mt-2 text-2xl font-bold text-aurora-ink">{item.value}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl rounded-3xl bg-white p-5 text-center leading-7 text-stone-600 shadow-sm">
          {property.pricingNote}
        </p>
      </div>
    </section>
  );
}
