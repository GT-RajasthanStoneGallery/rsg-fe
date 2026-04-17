import { InfrastructureSection } from "../../components/AboutSections";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Infrastructure | About Us | Rajasthan Stone Gallery",
  description: "Our state-of-the-art infrastructure, quarries and facilities.",
};

export default function InfrastructurePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <InfrastructureSection />
      <Footer />
    </div>
  );
}
