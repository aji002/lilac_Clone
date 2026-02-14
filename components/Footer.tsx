import ScrollReveal from "@/components/ScrollReveal";


export default function Footer() {
  return (
    <ScrollReveal>

    <footer className="bg-[#e9e4dd] px-6 py-16 text-center text-green-900">
      <div className="max-w-3xl mx-auto space-y-6">

        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm underline">
          <a href="#">Privacy & Cookies Policy</a>
          <a href="#">Good Faith Estimate</a>
          <a href="#">Website Terms & Conditions</a>
          <a href="#" className="w-full">Disclaimer</a>
        </div>

        
        <p className="text-sm">
          Website Template Credits:{" "}
          <a href="#" className="underline">
            Go Bloom Creative
          </a>
        </p>

        
        <p className="text-sm">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>
      </div>
    </footer>
    </ScrollReveal>

  );
}
