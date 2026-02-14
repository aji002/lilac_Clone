import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";


export default function OurOffice() {
  return (
    <ScrollReveal>

    <section className="section bg-[#f2b6d1]">
      <div className="container-main">

        
        <div className="container-narrow text-center">
          <h2 className="h2">A Calm, Private Space in Santa Monica</h2>

          <p className="body-lg mt-5">
            Therapy sessions take place in a quiet, comfortable office designed
            to feel grounding from the moment you arrive. Natural light, soft
            textures, and an uncluttered environment create a sense of privacy,
            safety, and ease—supporting deeper reflection and healing.
          </p>

          <p className="body mt-4">
            In-person sessions are available in Santa Monica, with secure
            telehealth offered across California for added flexibility.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-main mt-16">

          
          <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/office.jpg"
              alt="Therapy office seating area with natural light"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/office1.jpeg"
              alt="Comfortable counseling room interior"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="relative w-full h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/office2.jpeg"
              alt="Quiet therapy office environment"
              fill
              className="object-cover"
            />
          </div>

        </div>

     
        <div className="container-narrow text-center mt-16">
          <p className="body-lg font-medium">
            123th Street 45 W, Santa Monica, CA 90401
          </p>

          <p className="body mt-2 text-[var(--color-green)]/70">
            A private, welcoming setting for in-person therapy.
          </p>
        </div>

      </div>
    </section>
    </ScrollReveal>

  );
}
