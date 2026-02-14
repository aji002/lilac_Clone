import Image from "next/image";

export default function OfficeMap() {
    return (
        <section className="bg-[var(--color-sage)] text-white py-24">
            <div className="container-main grid md:grid-cols-2 gap-16 items-center">

                
                <div>
                    <h2 className="h2 text-white">My Office</h2>

                    <p className="mt-6">
                        123 Example Street<br />
                        Minneapolis, MN
                    </p>

                    <h3 className="text-2xl mt-10">Hours</h3>

                    <p className="mt-4">
                        Monday – Friday<br />
                        10am – 6pm
                    </p>
                </div>

                <div className="relative w-full h-[320px]">
                    <iframe
                        src="https://www.google.com/maps?q=Santa+Monica,+CA&output=embed"
                        className="w-full h-[320px] border-0 rounded-xl"
                        loading="lazy"
                    />

                </div>

            </div>
        </section>
    );
}
