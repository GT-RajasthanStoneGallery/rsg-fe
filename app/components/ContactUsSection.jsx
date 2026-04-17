"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { FOOTER_CONTACT, SOCIAL_LINKS } from "../data/footer";
import LocationMap from "./LocationMap";

function IconPhone() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

const socialIcons = {
  // facebook: (
  //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  // ),
  instagram: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  ),
  // linkedin: (
  //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  // ),
  // youtube: (
  //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  // ),
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactUsSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({});

  const emailValid = formData.email.trim() === "" || EMAIL_RE.test(formData.email.trim());
  const hasContact = formData.email.trim() !== "" || formData.phone.trim() !== "";
  const formValid = useMemo(() => {
    return (
      formData.name.trim() !== "" &&
      formData.message.trim() !== "" &&
      hasContact &&
      emailValid
    );
  }, [formData.name, formData.message, hasContact, emailValid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formValid || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", city: "", message: "" });
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const phone = FOOTER_CONTACT.phones?.[0] ?? "";
  const email = FOOTER_CONTACT.emails?.[0] ?? "";
  const locations = [
    { label: "Location 1", address: FOOTER_CONTACT.address, url: FOOTER_CONTACT.locationLinks?.[0]?.url },
    { label: "Location 2", address: FOOTER_CONTACT.address2, url: FOOTER_CONTACT.locationLinks?.[1]?.url },
  ].filter((l) => l.address || l.url);
  const locationEmbeds = FOOTER_CONTACT.locationEmbeds ?? [];

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden min-w-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 w-full box-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left column */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#333] mb-2">Get In Touch With Us</h1>
            <p className="text-gray-600 mb-8">Let&apos;s connect and bring your vision to life.</p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <span className="text-[#D4AF37] mt-0.5 shrink-0">
                  <IconPhone />
                </span>
                <div>
                  <p className="font-semibold text-[#333]">Call Us</p>
                  {phone ? (
                    <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-gray-600 hover:text-[#D4AF37]">
                      {phone}
                    </a>
                  ) : (
                    <span className="text-gray-600">—</span>
                  )}
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#D4AF37] mt-0.5 shrink-0">
                  <IconMail />
                </span>
                <div>
                  <p className="font-semibold text-[#333]">Email Us</p>
                  {email ? (
                    <a href={`mailto:${email}`} className="text-gray-600 hover:text-[#D4AF37]">
                      {email}
                    </a>
                  ) : (
                    <span className="text-gray-600">—</span>
                  )}
                </div>
              </div>
              {locations.map((loc, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[#D4AF37] mt-0.5 shrink-0">
                    <IconLocation />
                  </span>
                  <div>
                    <p className="font-semibold text-[#333]">Visit Us – {loc.label}</p>
                    <p className="text-gray-600 text-sm break-words">{loc.address}</p>
                    {loc.url && (
                      <a
                        href={loc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4AF37] hover:underline text-sm mt-1 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="font-semibold text-[#333] mb-3">Social Links</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded bg-[#D4AF37] text-white hover:bg-[#B8962E] transition-colors"
                    aria-label={s.name}
                  >
                    {socialIcons[s.icon] || null}
                  </a>
                ))}
              </div>
            </div>

            {/* <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                alt="Premium marble interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div> */}
          </div>

          {/* Right column: map locations + form */}
          <div>
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#333] mb-4">Our Locations</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {locationEmbeds.length > 0
                  ? locationEmbeds.map((loc, i) => (
                      <div key={i} className="space-y-3">
                        {/* <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                          <p className="font-semibold text-[#333] mb-1">{loc.label}</p>
                          <p className="text-gray-600 text-sm mb-2 break-words">{loc.address}</p>
                          {loc.url && (
                            <a
                              href={loc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#D4AF37] hover:underline font-medium"
                            >
                              View on Google Maps →
                            </a>
                          )}
                        </div> */}
                        <LocationMap
                          src={loc.embedSrc}
                          title={`${loc.label} – Map`}
                          className="min-h-[240px] sm:min-h-[280px]"
                        />
                      </div>
                    ))
                  : locations.map((loc, i) => (
                      <div key={i} className="space-y-3">
                        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
                          <p className="font-semibold text-[#333] mb-1">{loc.label}</p>
                          <p className="text-gray-600 text-sm mb-2 break-words">{loc.address}</p>
                          {loc.url && (
                            <a
                              href={loc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-[#D4AF37] hover:underline font-medium"
                            >
                              View on map →
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
              </div>
            </div>

            {/* Contact form */}
            <div id="assist-form" className="scroll-mt-24">
              <h2 className="text-lg font-bold text-[#333] mb-1">How Can We Assist You?</h2>
              <p className="text-gray-600 text-sm mb-6">
                We&apos;d love to hear from you! Please fill out the form below, and our team will get back to you as soon as possible.
              </p>
              {submitted ? (
                <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
                  Thank you! Your message has been sent. We&apos;ll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#333] mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.name && !formData.name.trim()}
                        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none ${touched.name && !formData.name.trim() ? "border-red-400" : "border-gray-300"}`}
                        placeholder="Your name"
                      />
                      {touched.name && !formData.name.trim() && (
                        <p className="text-red-500 text-xs mt-1">Name is required</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#333] mb-1">
                        Email <span className="text-gray-400 text-xs font-normal">(email or phone required)</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={touched.email && formData.email.trim() !== "" && !emailValid}
                        className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none ${touched.email && formData.email.trim() !== "" && !emailValid ? "border-red-400" : "border-gray-300"}`}
                        placeholder="your@email.com"
                      />
                      {touched.email && formData.email.trim() !== "" && !emailValid && (
                        <p className="text-red-500 text-xs mt-1">Please enter a valid email</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#333] mb-1">
                        Phone Number <span className="text-gray-400 text-xs font-normal">(email or phone required)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none"
                        placeholder="+91 "
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-[#333] mb-1">City</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none"
                        placeholder="Your city"
                      />
                    </div>
                  </div>
                  {touched.email && touched.phone && !hasContact && (
                    <p className="text-red-500 text-sm">Please provide at least an email or phone number</p>
                  )}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#333] mb-1">
                      Write Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={touched.message && !formData.message.trim()}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] outline-none resize-none ${touched.message && !formData.message.trim() ? "border-red-400" : "border-gray-300"}`}
                      placeholder="How can we help?"
                    />
                    {touched.message && !formData.message.trim() && (
                      <p className="text-red-500 text-xs mt-1">Message is required</p>
                    )}
                  </div>
                  {error && (
                    <div className="rounded-md bg-red-50 border border-red-200 p-3 text-red-700 text-sm">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={!formValid || submitting}
                    className={`w-full sm:w-auto px-8 py-3 font-semibold rounded-md transition-colors focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 ${
                      formValid && !submitting
                        ? "bg-[#D4AF37] text-white hover:bg-[#B8962E] cursor-pointer"
                        : "bg-[#D4AF37]/40 text-white/70 cursor-not-allowed"
                    }`}
                  >
                    {submitting ? "Sending..." : "Submit"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
