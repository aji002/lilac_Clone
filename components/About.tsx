import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";



export default function About() {
    return (
        <ScrollReveal>

            <section className="bg-[#f5e3b8] px-6 md:px-10 py-20 md:py-24">
                <div className="max-w-6xl mx-auto">

                    
                    <div className="flex justify-center lg:hidden mb-14">
                        <div className="relative inline-block">
                            
                            <div className="relative
                            w-[260px] h-[340px]
                            sm:w-[320px] sm:h-[420px]
                            md:w-[380px] md:h-[480px]
                            rounded-t-full overflow-hidden">
                                <Image src="/dr.maya.png" alt="Lilac portrait" fill className="object-cover" priority />
                            </div>

                            
                            <div className="absolute right-[-20px] bottom-[-20px]
                            w-[120px] h-[120px]
                            sm:w-[150px] sm:h-[150px]
                            md:w-[180px] md:h-[180px]
                            rounded-full overflow-hidden border-4 border-[#e9e4dd]">
                                <Image src="/about.jpg" alt="Flowers" fill className="object-cover" />
                            </div>
                        </div>
                    </div>

                    
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        
                        <div className="text-left order-2 lg:order-1">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900">
                                Hi, I’m Dr. Maya Reynolds, PsyD.
                            </h2>

                            <p className="mt-8 text-lg md:text-xl leading-relaxed text-green-900 max-w-2xl">
                                I’m a licensed clinical psychologist based in Santa Monica, California, specializing in therapy for adults experiencing anxiety, trauma, burnout, and high internal pressure.
                                My approach is warm, collaborative, and grounded in evidence-based care. I integrate cognitive-behavioral therapy (CBT), EMDR, mindfulness practices, and body-oriented techniques to support both the emotional and physiological sides of healing.
                                Together, we focus not only on reducing symptoms, but on building insight, resilience, and a stronger, more compassionate relationship with yourself over time.
                            </p>

                            <div className="mt-12 flex justify-center lg:justify-start">
                                <Link
                                    href="/contact"
                                    className="inline-block border border-green-900 px-8 py-3 text-green-900 tracking-wide"
                                >
                                    LET’S CHAT →
                                </Link>

                            </div>
                        </div>

                        
                        <div className="hidden lg:flex justify-end order-1 lg:order-2">
                            <div className="relative inline-block">

                                
                                <div className="relative w-[420px] h-[520px] rounded-t-full overflow-hidden">
                                    <Image src="/dr.maya.png" alt="Lilac portrait" fill className="object-cover" />
                                </div>

                                
                                <div className="absolute right-[-60px] bottom-[-40px]
                              w-[200px] h-[200px]
                              rounded-full overflow-hidden border-4 border-[#e9e4dd]">
                                    <Image src="/about.webp" alt="Flowers" fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollReveal>

    );
}
