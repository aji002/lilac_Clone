import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";


export default function Hero() {
  return (
    <ScrollReveal>

      <section className="bg-[#fcdcfc] min-h-screen pt-28 pb-16 px-6">
        <div className="container-main grid lg:grid-cols-2 items-center gap-12">

         
          <div className="flex justify-center lg:justify-start">
            <div
              className="relative
              w-[260px] h-[340px]
              sm:w-[320px] sm:h-[420px]
              md:w-[380px] md:h-[480px]
              lg:w-[420px] lg:h-[520px]
              rounded-t-full overflow-hidden"
            >
              <Image
                src="/hero.webp"
                alt="Flowers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          
          <div className="text-center lg:text-left">
            <h1 className="mt-10 lg:mt-0 text-4xl sm:text-5xl md:text-6xl font-semibold text-green-900 leading-tight">
              Therapy for Anxiety, Trauma, and
              <br />
              Burnout in Santa Monica, California
            </h1>

            <p className="mt-6 text-lg md:text-xl text-green-900">
              Helping thoughtful, high-achieving adults move beyond constant worry, emotional exhaustion, and the lasting impact of past experiences—so life can feel calmer, clearer, and more grounded.          </p>

            <Link
              href="/contact"
              className="inline-block mt-8 border border-green-900 px-7 py-3 text-green-900"
            >
              CONNECT WITH ME →
            </Link>

          </div>
        </div>
      </section>
    </ScrollReveal>

  );
}
