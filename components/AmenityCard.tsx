import type { Amenity } from "@/types/property";

export default function AmenityCard({ amenity }: { amenity: Amenity }) {
  const Icon = amenity.icon;

  return (
    <article className="rounded-3xl border border-stone-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-aurora-linen text-aurora-terracotta">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-aurora-ink">{amenity.title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{amenity.description}</p>
    </article>
  );
}
