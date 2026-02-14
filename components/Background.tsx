"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";


export default function Background() {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      title: "Education",
      content:
      "Doctor of Psychology (PsyD) in Clinical Psychology with advanced training in trauma-informed and evidence-based therapies."
    },
    {
      title: "Licensure",
      content:
      "Licensed Clinical Psychologist in California, providing therapy for adults through in-person and secure telehealth sessions."
    },
    {
      title: "Certifications",
      content:
      "Training in CBT, EMDR, mindfulness-based approaches, and body-oriented therapeutic techniques."
    },
  ];

  return (
    <ScrollReveal>

    <section className="bg-[#eebfff] px-6 md:px-10 py-24 text-[var(--color-green)]">
    
      <h2 className="h2 text-center mb-16">
        My Professional Background
      </h2>

     
      <div className="max-w-4xl mx-auto border-t border-[var(--color-green)]/40 mb-6" />

     
      <div className="max-w-4xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="border-b border-[var(--color-green)]/40">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center py-6 text-left"
            >
              <span className="text-2xl md:text-3xl font-medium">
                {item.title}
              </span>

              <span className="text-3xl leading-none">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {open === index && (
              <p className="pb-6 text-lg leading-relaxed text-[var(--color-green)]/80">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>

  );
}
