import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";



export default function CTA() {
  return (
    <ScrollReveal>

      <section className="bg-[#384559] text-white px-6 py-24 md:py-32">
        <div className="max-w-3xl mx-auto text-center">

          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Lasting change begins with one step.
          </h2>

          
          <p className="mt-8 text-lg md:text-xl leading-relaxed">
            Whether you’re feeling overwhelmed by anxiety, carrying the weight of past experiences, or exhausted from constant pressure, therapy can help you find clarity, steadiness, and relief.
            When you’re ready, support is here.
          </p>

         
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-block border border-white px-10 py-4 tracking-wide text-white"
            >
              GET IN TOUCH →
            </Link>

          </div>
        </div>
      </section>
    </ScrollReveal>

  );
}
