import AmenityCard from "@/components/AmenityCard";
import SectionHeader from "@/components/SectionHeader";
import type { Amenity } from "@/types/property";

export default function AmenitiesSection({ amenities }: { amenities: Amenity[] }) {
  const groupedAmenities = amenities.reduce<Record<string, Amenity[]>>((groups, amenity) => {
    groups[amenity.category] = [...(groups[amenity.category] ?? []), amenity];
    return groups;
  }, {});

  return (
    <section id="servicios" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Comodidades"
          title="Comodidades incluidas"
          description="Servicios reales del departamento, organizados para que puedas revisar rápidamente lo que tendrás durante tu estadía."
          align="center"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          {Object.entries(groupedAmenities).map(([category, items]) => (
            <div key={category}>
              <h3 className="pb-4 text-lg font-bold text-aurora-ink">{category}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {items.map((amenity) => (
                  <AmenityCard key={`${category}-${amenity.title}`} amenity={amenity} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
