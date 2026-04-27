import RoomCard from "@/components/RoomCard";
import SectionHeader from "@/components/SectionHeader";
import type { Property } from "@/types/property";

export default function RoomsSection({ property }: { property: Property }) {
  return (
    <section id="espacios" className="bg-aurora-cream py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Espacios"
          title="Habitaciones y espacios"
          description="Departamento privado con dos habitaciones, sala amplia, comedor para 6 personas, cocina equipada, dos baños y parqueadero."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {property.rooms.map((room) => (
            <RoomCard key={room.title} room={room} />
          ))}
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-aurora-terracotta">
              Acceso de huéspedes
            </p>
            <p className="mt-3 leading-7 text-stone-600">{property.accessText}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-aurora-terracotta">
              Parqueadero
            </p>
            <p className="mt-3 leading-7 text-stone-600">{property.parkingNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
