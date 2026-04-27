import type { Property } from "@/types/property";
import { createWhatsAppLink } from "@/lib/whatsapp";

const footerLinks = [
  { label: "Fotos", href: "#galeria" },
  { label: "Espacios", href: "#espacios" },
  { label: "Comodidades", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas", href: "#preguntas" }
];

export default function Footer({ property }: { property: Property }) {
  const whatsappUrl = createWhatsAppLink(property.whatsapp, property.bookingMessage);

  return (
    <footer className="border-t border-stone-200 bg-aurora-cream py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
        <div>
          <p className="text-xl font-bold text-aurora-ink">{property.name}</p>
          <p className="mt-3 max-w-md leading-7 text-stone-600">
            Departamento privado en el sector Parque Infantil, cerca del centro de Loja, Ecuador.
          </p>
          <p className="mt-4 text-sm text-stone-600">
            Esta página es una landing promocional independiente. La disponibilidad y tarifas finales se confirman directamente por WhatsApp o Airbnb.
          </p>
          <p className="mt-5 text-sm font-semibold text-stone-500">Sitio desarrollado por Franz Burneo.</p>
        </div>
        <div>
          <p className="font-bold text-aurora-ink">Links rápidos</p>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="focus-ring rounded-full text-sm font-medium text-stone-600 hover:text-aurora-terracotta">
                {link.label}
              </a>
            ))}
            <a href={property.airbnbUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full text-sm font-semibold text-aurora-terracotta">
              Airbnb
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold text-aurora-ink">Contacto</p>
          <div className="mt-4 grid gap-3 text-sm text-stone-600">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full font-semibold text-aurora-terracotta">
              WhatsApp: {property.phoneDisplay}
            </a>
            <a href={`mailto:${property.email}`} className="focus-ring rounded-full hover:text-aurora-terracotta">
              Correo: {property.email}
            </a>
            <p>{property.location}</p>
            <p>{property.locationNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
