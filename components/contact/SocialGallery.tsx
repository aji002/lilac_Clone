import Image from "next/image";

const images = [
  "/about1.jpg",
  "/intro1.webp",
  "/spe3.jpg",
  "/faq.jpg",
];

export default function SocialGallery() {
  return (
    <section className="section border-b border-[var(--color-border)]">
      <div className="container-main">

        <h2 className="h2 mb-12">Find me on social.</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div key={i} className="relative w-full h-[220px]">
              <Image src={src} alt="Social" fill className="object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
