import Footer from "../components/Footer";
import { CONTACT_INFO } from "../data/contact";

export const metadata = {
  title: "Privacy Policy | Rajasthan Stone Gallery",
  description:
    "Privacy Policy for Rajasthan Stone Gallery Pvt. Ltd. Learn how we collect, use, and protect your personal information.",
};

const SECTION_STYLE = "mb-8";
const HEADING_STYLE = "text-lg md:text-xl font-bold text-[#333] mb-3";
const TEXT_STYLE = "text-gray-700 leading-relaxed";
const LIST_STYLE = "list-disc list-inside space-y-1.5 text-gray-700 leading-relaxed ml-2";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20">
        {/* Page header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">
              — LEGAL
            </p>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-4">
            Privacy Policy
          </h1>
          <p className={TEXT_STYLE}>
            At Rajasthan Stone Gallery Pvt. Ltd., your privacy is a priority. We
            are committed to safeguarding your personal information and ensuring
            transparency in how we collect, use, and protect it. This Privacy
            Policy outlines how we handle your data when you interact with our
            business as a manufacturer and exporter of premium-quality marble and
            natural stones.
          </p>
        </div>

        {/* Information We Collect */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Information We Collect</h2>
          <p className={`${TEXT_STYLE} mb-3`}>
            We may collect the following types of personal information:
          </p>
          <ul className={LIST_STYLE}>
            <li>
              <span className="font-semibold text-[#333]">
                Contact Information:
              </span>{" "}
              Name, email address, phone number, and location.
            </li>
            <li>
              <span className="font-semibold text-[#333]">
                Business Details:
              </span>{" "}
              Company name, inquiry details, and project specifications.
            </li>
            <li>
              <span className="font-semibold text-[#333]">
                Website Usage Data:
              </span>{" "}
              Browsing history, IP address, and cookies for improving user
              experience.
            </li>
            <li>
              <span className="font-semibold text-[#333]">
                Payment Information:
              </span>{" "}
              For billing and transactional purposes (stored securely).
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>How We Use Your Information</h2>
          <p className={`${TEXT_STYLE} mb-3`}>
            The information collected is used for the following purposes:
          </p>
          <ul className={LIST_STYLE}>
            <li>
              To process your inquiries and provide personalized assistance.
            </li>
            <li>To improve our website, products, and services.</li>
            <li>
              To fulfill orders, send updates, and manage transactions.
            </li>
            <li>
              To share relevant marketing content, with your consent.
            </li>
          </ul>
        </section>

        {/* Sharing Your Information */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Sharing Your Information</h2>
          <p className={`${TEXT_STYLE} mb-3`}>
            We respect your privacy and do not sell your data. However, we may
            share your information with:
          </p>
          <ul className={LIST_STYLE}>
            <li>
              Trusted service providers assisting with logistics, payments, or
              communications.
            </li>
            <li>
              Legal authorities if required by law or to protect our rights.
            </li>
          </ul>
        </section>

        {/* Data Security */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Data Security</h2>
          <p className={TEXT_STYLE}>
            We implement strict security measures to protect your personal
            information from unauthorized access, alteration, or misuse. However,
            no method of transmission over the internet is completely secure.
          </p>
        </section>

        {/* Cookies */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Cookies</h2>
          <p className={TEXT_STYLE}>
            Our website uses cookies to enhance your browsing experience and
            analyze website performance. You can manage cookie preferences
            through your browser settings.
          </p>
        </section>

        {/* Your Rights */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Your Rights</h2>
          <p className={`${TEXT_STYLE} mb-3`}>You have the right to:</p>
          <ul className={LIST_STYLE}>
            <li>Access the personal information we hold about you.</li>
            <li>Request corrections or deletion of your data.</li>
            <li>Opt-out of receiving marketing communications.</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Contact Us</h2>
          <p className={`${TEXT_STYLE} mb-3`}>
            If you have questions about this Privacy Policy or your data, feel
            free to contact us:
          </p>
          <div className="bg-[#faf8f6] rounded-lg p-5 border border-gray-100 space-y-2">
            <p className="font-bold text-[#333]">
              Rajasthan Stone Gallery Pvt. Ltd.
            </p>
            <p className={TEXT_STYLE}>
              <span className="font-semibold text-[#333]">Locations:</span>{" "}
              {CONTACT_INFO.address}
            </p>
            <p className={TEXT_STYLE}>
              <span className="font-semibold text-[#333]">Email:</span>{" "}
              <a
                href={`mailto:${CONTACT_INFO.emails[0]}`}
                className="text-[#D4AF37] hover:underline"
              >
                {CONTACT_INFO.emails[0]}
              </a>
            </p>
            <p className={TEXT_STYLE}>
              <span className="font-semibold text-[#333]">Phone:</span>{" "}
              <a
                href={`tel:${CONTACT_INFO.phones[1].replace(/\D/g, "")}`}
                className="text-[#D4AF37] hover:underline"
              >
                {CONTACT_INFO.phones[1]}
              </a>
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className={SECTION_STYLE}>
          <h2 className={HEADING_STYLE}>Policy Updates</h2>
          <p className={TEXT_STYLE}>
            We may update this Privacy Policy periodically to reflect changes in
            our practices or legal requirements. Please review this page for the
            latest information.
          </p>
        </section>

        <div className="border-t border-gray-200 pt-6 mt-4">
          <p className="text-gray-500 text-sm leading-relaxed">
            By interacting with Rajasthan Stone Gallery Pvt. Ltd., you agree to
            the terms outlined in this Privacy Policy. Thank you for trusting us
            with your information.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
