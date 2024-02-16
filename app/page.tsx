import Camp from "@/components/Camp";
import Developer from "@/components/Developer";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Developer />
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
