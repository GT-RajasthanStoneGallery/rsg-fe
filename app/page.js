import HeroSection from "./components/HeroSection";
import OurBestsellers from "./components/OurBestsellers";
import UnveilingMasterpieces from "./components/UnveilingMasterpieces";
import OurQuarry from "./components/OurQuarry";
import OurPrestigiousClients from "./components/OurPrestigiousClients";
import Footer from "./components/Footer";
import ScrollRevealSection from "./components/ScrollRevealSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <HeroSection />
      <ScrollRevealSection delay={0} direction="up">
        <OurBestsellers />
      </ScrollRevealSection>
      <ScrollRevealSection delay={200} direction="up">
        <UnveilingMasterpieces />
      </ScrollRevealSection>
      {/* <ScrollRevealSection delay={200} direction="up">
        <OurQuarry />
      </ScrollRevealSection> */}
      <ScrollRevealSection delay={300} direction="up">
        <OurPrestigiousClients />
      </ScrollRevealSection>
      <Footer />
    </div>
  );
}
