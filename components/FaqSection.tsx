import FaqItem from "@/components/FaqItem";
import SectionHeader from "@/components/SectionHeader";
import type { Faq } from "@/types/property";

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="preguntas" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Preguntas"
          title="Preguntas frecuentes"
          description="Respuestas claras para ayudarte a decidir rápido y consultar disponibilidad con confianza."
        />
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
