import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Specialties from "@/components/Specialties";
import Support from "@/components/Support";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Background from "@/components/Background";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Connect from "@/components/Connect";
import OurOffice from "@/components/OurOffice";

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Specialties />
      <Support />
      <About />
      <FAQ />
      <Background />
      <OurOffice/>
      <CTA />
      <Connect/>
      <Footer />
    </>
  );
}
