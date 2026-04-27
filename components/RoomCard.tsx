import { CheckCircle2 } from "lucide-react";
import type { Room } from "@/types/property";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className="rounded-3xl border border-white bg-white p-6 shadow-soft">
      <h3 className="text-xl font-bold text-aurora-ink">{room.title}</h3>
      <p className="mt-3 leading-7 text-stone-600">{room.description}</p>
      <ul className="mt-5 grid gap-3">
        {room.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm font-semibold text-stone-700">
            <CheckCircle2 className="shrink-0 text-aurora-olive" size={18} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  );
}
