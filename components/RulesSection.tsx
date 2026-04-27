import { ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function RulesSection({ rules }: { rules: string[] }) {
  return (
    <section id="reglas" className="bg-aurora-cream py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Reglas"
          title="Reglas del alojamiento"
          description="Estas reglas nos ayudan a mantener el departamento cómodo, limpio y seguro para todos nuestros huéspedes."
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule) => (
            <div key={rule} className="flex gap-4 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-aurora-linen text-aurora-olive">
                <ShieldCheck size={20} />
              </div>
              <p className="self-center text-sm font-semibold leading-6 text-stone-700">{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
