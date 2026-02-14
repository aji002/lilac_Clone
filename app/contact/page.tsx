import Header from "@/components/Header";
import Footer from "@/components/Footer";

import ConnectIntro from "@/components/contact/ConnectIntro";
import AppointmentBox from "@/components/contact/AppointmentBox";
import OfficeMap from "@/components/contact/OfficeMap";
import SocialGallery from "@/components/contact/SocialGallery";
import Connect from "@/components/Connect";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ConnectIntro />
        <AppointmentBox />
        <OfficeMap />
        <SocialGallery />
      </main>
      <Connect/>
      <Footer />
    </>
  );
}
