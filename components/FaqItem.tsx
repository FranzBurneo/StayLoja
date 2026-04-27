"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { Faq } from "@/types/property";

export default function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-3xl border border-stone-100 bg-white shadow-sm">
      <button
        type="button"
        className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-5 text-left"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-bold text-aurora-ink">{faq.question}</span>
        <ChevronDown className={`shrink-0 text-aurora-terracotta transition ${open ? "rotate-180" : ""}`} size={20} />
      </button>
      {open ? <p className="px-5 pb-5 leading-7 text-stone-600">{faq.answer}</p> : null}
    </div>
  );
}
