"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { createWhatsAppLink } from "@/lib/whatsapp";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Fotos", href: "#galeria" },
  { label: "Espacios", href: "#espacios" },
  { label: "Comodidades", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Reglas", href: "#reglas" },
  { label: "Preguntas", href: "#preguntas" }
];

type NavbarProps = {
  name: string;
  whatsapp: string;
};

export default function Navbar({ name, whatsapp }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const whatsappUrl = createWhatsAppLink(
    whatsapp,
    "Hola, quiero consultar disponibilidad para el departamento en Loja."
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-aurora-cream/88 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-4" aria-label="Navegación principal">
        <a href="#inicio" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-aurora-terracotta text-sm font-bold text-white shadow-glow">
            SL
          </span>
          <span className="text-base font-bold text-aurora-ink sm:text-lg">{name}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full text-sm font-medium text-stone-700 transition hover:text-aurora-terracotta"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring hidden rounded-full bg-aurora-ink px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-aurora-terracotta lg:inline-flex"
        >
          Reservar
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-aurora-ink shadow-sm lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-stone-200 bg-aurora-cream px-4 pb-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 pt-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring mt-2 rounded-full bg-aurora-terracotta px-5 py-3 text-center text-sm font-bold text-white shadow-soft"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
