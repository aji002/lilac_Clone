import ScrollReveal from "@/components/ScrollReveal";


export default function Connect() {
  return (
    <ScrollReveal>

    <section className="bg-[#ddc6f7] px-6 py-20 md:py-24 text-green-900">
      
      <div
        className="
          max-w-6xl mx-auto
          space-y-12
          text-center
          md:text-left
          md:space-y-0
          md:grid md:grid-cols-3 md:gap-16
        "
      >

        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Lilac Template
          </h2>

          <div className="space-y-1 text-lg">
            <p>123 Example Road</p>
            <p>Minneapolis, MN</p>
          </div>

          <div className="space-y-2 text-lg">
            <p className="underline">email@example.com</p>
            <p className="underline">(555) 555-5555</p>
          </div>
        </div>

        
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Hours</h3>
          <p className="text-lg">Monday – Friday</p>
          <p className="text-lg">10am – 6pm</p>
        </div>

        
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold">Find</h3>

          <nav className="flex flex-col gap-2 text-lg underline">
            <a href="#">Home</a>
            <a href="/contact">Contact</a>
            <a href="/blog">Blog</a>
          </nav>
        </div>
      </div>
    </section>
    </ScrollReveal>

  );
}
