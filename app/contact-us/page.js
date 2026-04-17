import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact Us | Rajasthan Stone Gallery",
  description: "Get in touch with us. Call, email, visit, or send a message.",
};

export default function ContactUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <ContactUsSection />
      <Footer />
    </div>
  );
}
