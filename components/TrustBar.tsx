import { CheckCircle2 } from "lucide-react";

export default function TrustBar({ items }: { items: string[] }) {
  return (
    <section className="bg-white">
      <div className="section-shell grid gap-3 py-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-2xl bg-aurora-cream px-4 py-3 text-sm font-semibold text-aurora-ink">
            <CheckCircle2 className="shrink-0 text-aurora-olive" size={20} />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
