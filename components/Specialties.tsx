import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";


const items = [
  {
    title: "Anxiety, Panic, and Chronic Stress",
    text: "Learn practical ways to calm racing thoughts, ease physical tension, and feel more present in daily life. Our work focuses on helping you respond to stress with clarity instead of constant alertness.",
    img: "/spe1.webp",
  },
  {
    title: "Trauma and Emotional Healing",
    text: "Process past experiences—whether single events or long-standing patterns—in a careful, stabilizing, and compassionate way. The goal is helping you feel safer, more regulated, and less defined by what you’ve been through.",
    img: "/spe2.avif",
  },
  {
    title: "Burnout, Perfectionism, and High Pressure",
    text: "Reconnect with yourself after years of pushing through stress and expectations. Therapy becomes a space to slow down, restore balance, and build more sustainable ways of living and working",
    img: "/spe3.jpg",
  },
];

export default function Specialties() {
  return (
    <ScrollReveal>

    <section className="bg-[#eef7c6] py-24 px-6 md:px-10">
     
      <h2 className="text-4xl md:text-5xl font-semibold text-center text-green-900 mb-20">
        My Specialties
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              border border-green-900/40
              bg-[#e3dfd7]   /* slightly darker than section bg */
              p-10 flex flex-col justify-between
              min-h-[520px]
            "
          >
           
            <div>
              <h3 className="text-2xl font-semibold text-green-900">
                {item.title}
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-green-900">
                {item.text}
              </p>
            </div>

          
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden mx-auto mt-12">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>

  );
}
