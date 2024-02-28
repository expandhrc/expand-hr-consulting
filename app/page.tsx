import AboutUs from "@/components/AboutUs";
import Approach from "@/components/Approach";
import ContactUs from "@/components/ContactUs";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import SocialMedia from "@/components/SocialMedia";
import Team from "@/components/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Industries />
      <Approach />
      <Team />
      <ContactUs />
      <SocialMedia />
      <Faq />
    </>
  );
}
