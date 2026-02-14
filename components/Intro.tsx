import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";


export default function Intro() {
    return (
        <ScrollReveal>

            <section className="bg-[#d0d2d6] lg:grid lg:grid-cols-2">

                
                <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:hidden">
                    <Image
                        src="/intro1.webp"
                        alt="Lifestyle objects"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

               
                <div className="container-main px-6 py-16 lg:py-24 flex flex-col justify-between">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900">
                            You don’t have to keep carrying this alone.
                        </h2>

                        <p className="mt-6 text-lg md:text-xl text-green-900">
                            From the outside, you may appear capable, responsible, and successful.
                            Inside, you might feel stuck in overthinking, tension, exhaustion, or a quiet sense that something isn’t right.
                        </p>

                        <p className="mt-5 text-lg md:text-xl text-green-900">
                            Therapy offers a space to slow down, understand what you’re experiencing, and begin creating meaningful, lasting change—at a pace that feels safe and supportive.
                        </p>
                    </div>

                    
                    <div className="mt-16 pt-6 border-t border-green-900/40 flex justify-center lg:justify-center">
                        <Link
                            href="/contact"
                            className="inline-block text-green-900 tracking-wide border-b border-green-900 pb-1"
                        >
                            GET IN TOUCH →
                        </Link>

                    </div>
                </div>

                
                <div className="relative hidden lg:block min-h-[700px]">
                    <Image
                        src="/intro1.webp"
                        alt="Lifestyle objects"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>
        </ScrollReveal>

    );
}
