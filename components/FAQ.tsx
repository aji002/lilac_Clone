"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function FAQ() {
  const faqs = [
    "Do you offer in-person or virtual therapy?",
    "What concerns do you commonly treat?",
    "What is your therapy style like?",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ScrollReveal>
      <section className="bg-[#f2ceb6] px-6 md:px-10 py-20 md:py-24">
        <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">

          
          <div className="flex justify-center mb-16 lg:mb-0 lg:justify-start">
            <div className="relative w-[200px] h-[260px] sm:w-[240px] sm:h-[320px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[420px] rounded-t-full overflow-hidden">
              <Image
                src="/faq.jpg"
                alt="Decorative flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 mb-10">
              FAQs
            </h2>

            <div className="border-t border-green-900/40 mb-6" />

            {faqs.map((q, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="border-b border-green-900/40">
                  
                  
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full flex items-center gap-6 py-6 text-left text-xl md:text-2xl text-green-900"
                  >
                    <span className="text-3xl leading-none min-w-[24px]">
                      {isOpen ? "−" : "+"}
                    </span>

                    <span>{q}</span>
                  </button>

                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-base md:text-lg text-green-900/80 pr-8">
                      Answer goes here.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
