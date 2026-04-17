import AboutSections from "../components/AboutSections";
import Footer from "../components/Footer";

export const metadata = {
  title: "About Us | Rajasthan Stone Gallery",
  description: "Learn about Rajasthan Stone Gallery - our company overview, team, infrastructure, packaging, achievements and more.",
};

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <AboutSections />
      <Footer />
    </div>
  );
}
