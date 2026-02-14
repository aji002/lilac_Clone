import Image from "next/image";

export default function ConnectIntro() {
  return (
    <section
      className="section-hero"
      style={{ backgroundColor: "#C9C6CE" }}
    >
      <div className="container-main grid md:grid-cols-2 gap-main items-center">

        
        <div className="text-center md:text-center lg:text-left flex flex-col items-center lg:items-start">
          
          <h1 className="h1">Let’s Connect</h1>

          <p className="body-lg mt-6">
            Starting therapy is courageous.
          </p>

          <p className="body mt-4 max-w-md">
            Get in touch for questions, or to book a free 15-minute consultation.
          </p>

          
          <div className="relative mt-10 w-[260px] h-[320px] mx-auto lg:mx-0">
            <Image
              src="/about1.jpg"
              alt="Flowers"
              fill
              className="object-cover rounded-[160px]"
            />

            <div className="absolute -bottom-6 -right-10 w-[140px] h-[140px]">
              <Image
                src="/about.jpg"
                alt="White flowers"
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        
        <div className="bg-[var(--color-green)] text-white p-10 md:p-14">
          <p className="body-lg leading-relaxed">
            <strong>PLEASE NOTE:</strong> If you opt to use a “Form Block” on your
            contact page this is not HIPAA-compliant. Squarespace stores data that
            is input into forms in the Marketing tab under Profiles. Instead, you
            can embed a HIPAA-compliant form, a link to your client portal, or
            simply put your email address.
          </p>
        </div>

      </div>
    </section>
  );
}
