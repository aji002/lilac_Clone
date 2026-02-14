import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="section-hero">
      <div className="container-main grid md:grid-cols-2 gap-main items-center">

        
        <div className="
          relative
          w-[300px] h-[380px]           /* mobile */
          md:w-[300px] md:h-[400px]     /* FIXED medium size */
          lg:w-[520px] lg:h-[620px]     /* large stays original */
          overflow-hidden
          mx-auto
          rounded-t-[300px]
        ">
          <Image
            src="/blog/Bhero.webp"
            alt="Reading moment"
            fill
            className="object-cover"
          />
        </div>

        
        <div className="container-narrow">
          <h1 className="h1">The Lilac Blog</h1>

          <p className="body-lg mt-6">
            My tiny corner of the internet where I talk about all things
            healing, heart, and wholeness.
          </p>

          <p className="body mt-4 font-medium">Glad you’re here.</p>
        </div>

      </div>
    </section>
  );
}
