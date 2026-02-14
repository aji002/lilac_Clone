import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";


export default function Support() {
  return (
    <ScrollReveal>

      <section>
        
        <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] lg:hidden">
          <Image
            src="/suppo.jpg" 
            alt="Calm woman breathing"
            fill
            className="object-cover"
            priority
          />
        </div>

        
        <div className="grid lg:grid-cols-2">
          
          <div className="relative hidden lg:block min-h-[700px]">
            <Image
              src="/suppo.jpg"
              alt="Calm woman breathing"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="bg-[#c6f6f7] px-6 sm:px-12 md:px-20 py-16 md:py-24 flex flex-col justify-between">
            <div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 leading-tight">
                You might <em>notice…</em>
              </h2>

             
              <p className="mt-8 text-lg md:text-xl text-green-900">
                If you are facing any of these, there’s hope:
              </p>

              
              <ul className="mt-10 space-y-4 text-lg md:text-xl text-green-900 list-disc pl-6">
                <li>Constant worry or overthinking</li>
                <li>Difficulty relaxing or sleeping</li>
                <li>Feeling emotionally on edge or bracing for something to go wrong</li>
                <li>Disconnection from yourself, work, or relationships</li>
                <li>Ongoing exhaustion despite continuing to function</li>
              </ul>

              
              <p className="mt-10 text-lg md:text-xl text-green-900">
                If this feels familiar, therapy can help you move toward steadiness, insight, and relief.
              </p>
            </div>

            
            <div className="mt-16 pt-8 border-t border-green-900/40 flex justify-center">
              <Link
                href="/contact"
                className="inline-block text-green-900 tracking-wide border-b border-green-900 pb-1"
              >
                WORK WITH ME →
              </Link>

            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

  );
}
