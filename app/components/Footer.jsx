"use client";

import Link from "next/link";
import Image from "next/image";
import {
  POPULAR_SEARCHES,
  GLOBAL_PRESENCE_COUNTRIES,
  FOOTER_MENU,
  FOOTER_CONTACT,
  SOCIAL_LINKS,
  WHATSAPP_LINK,
} from "../data/footer";
import { getMarbleCollectionsForFooter } from "../data/naturalStones";

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

function SocialIcon({ name, href }) {
  const icons = {
    // facebook: (
    //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    // ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
    ),
    // linkedin: (
    //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    // ),
    // youtube: (
    //   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    // ),
  };
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-[#E6C76A] transition-colors" aria-label={name}>
      {icons[name] || null}
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="w-full overflow-x-hidden min-w-0">
        {/* Popular Searches */}
        {/* <section className="px-4 py-8 md:py-10 w-full" style={{ maxWidth: 1510, marginLeft: "auto", marginRight: "auto" }}>
          <div className="w-full">
            <h3 className="text-red-600 text-center text-lg md:text-xl font-semibold mb-4">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-gray-500 text-sm">
              {POPULAR_SEARCHES.map((term, i) => (
                <span key={term} className="flex items-center gap-x-2">
                  {i > 0 && <span className="text-gray-300">|</span>}
                  <Link href="/natural-stones" className="hover:text-gray-700">{term}</Link>
                </span>
              ))}
            </div>
          </div>
        </section> */}

        {/* Red Banner - Get Price List */}
        {/* <section className="bg-red-600 w-full py-4 px-4 left-0">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4" style={{ maxWidth: 1510, marginLeft: "auto", marginRight: "auto" }}>
            <p className="text-white text-center sm:text-left text-sm md:text-base">
              PREMIUM MARBLE MANUFACTURER SINCE 1983 – Quarry Owner & Global Exporter
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded transition-colors"
            >
              Get Price List
            </a>
          </div>
        </section> */}

        {/* Our Global Presence - dynamic countries, left-to-right marquee */}
        <section className="py-10 md:py-14 bg-gray-50 w-full overflow-hidden">
          <div className="w-full px-4" style={{ maxWidth: 1510, marginLeft: "auto", marginRight: "auto" }}>
            <h3 className="text-center text-[#333] text-xl sm:text-2xl md:text-3xl font-bold mb-2">Our Global Presence</h3>
            <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">We supply premium marble to countries worldwide</p>
          </div>
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="flex items-stretch gap-4 sm:gap-6 animate-clients-marquee w-max py-2 px-4">
              {[...GLOBAL_PRESENCE_COUNTRIES, ...GLOBAL_PRESENCE_COUNTRIES].map((country, index) => (
                <div
                  key={`${country.code}-${index}`}
                  className="shrink-0 flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-lg shadow-sm border border-gray-100 w-[200px] sm:w-[240px] md:w-[280px] transition-all duration-300 ease-out hover:shadow-md hover:border-amber-200/60"
                >
                  <Image
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={country.name}
                    width={48}
                    height={32}
                    className="w-10 h-6 sm:w-12 sm:h-8 object-cover rounded mb-2 sm:mb-3"
                  />
                  <h4 className="font-semibold text-[#333] text-sm md:text-base mb-1 leading-tight">{country.name}</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-snug">{country.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dark Footer - 4 columns */}
        <section className="bg-[#2d2d2d] text-white w-full py-10 md:py-12 px-4 left-0">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8" style={{ maxWidth: 1510, marginLeft: "auto", marginRight: "auto" }}>
            {/* Column 1: Logo */}
            <div className="flex flex-col items-center -mt+10">
              <Link href="/" className="block">
                <Image src="/logo.jpg" alt="Rajasthan Stone Gallery" width={460} height={250} className="w-auto h-[120px] sm:h-[130px] md:h-[140px] lg:h-[150px] object-contain" />
              </Link>
              <p className="mt-3 text-lg md:text-xl font-bold text-white text-center">
                Rajasthan Stone Gallery
              </p>
            </div>

            {/* Column 2: Menu */}
            <div className="lg:pt-0">
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                {FOOTER_MENU.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Marble Collections */}
            <div>
              <h4 className="font-bold text-lg mb-4">Marble Collections</h4>
              <ul className="space-y-2">
                {getMarbleCollectionsForFooter().map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-4 text-gray-300 text-sm">
                <li className="flex gap-2">
                  <span className="shrink-0 text-[#D4AF37]"><IconPhone /></span>
                  <span>
                    <span className="block font-medium text-white">Call Us</span>
                    {FOOTER_CONTACT.phones.map((phone) => (
                      <a key={phone} href={`tel:${phone.replace(/\D/g, "")}`} className="block hover:text-white">
                        {phone}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-[#D4AF37]"><IconMail /></span>
                  <span>
                    <span className="block font-medium text-white">Email Us</span>
                    {FOOTER_CONTACT.emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} className="block hover:text-white break-all">
                        {email}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 text-[#D4AF37]"><IconLocation /></span>
                  <span>
                    <span className="block font-medium text-white">Visit Us</span>
                    <span className="block mb-2">{FOOTER_CONTACT.address}</span>
                    <span className="block">{FOOTER_CONTACT.address2}</span>
                    {/* {FOOTER_CONTACT.locationLinks.map((loc, i) => (
                      <a key={i} href={loc.url} target="_blank" rel="noopener noreferrer" className="block text-green-400 hover:underline mt-1">
                        View on Map {i + 1}
                      </a>
                    ))} */}
                    <span className="block mt-2 text-gray-400 text-xs">
                      Partners: {FOOTER_CONTACT.partners.join(", ")}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <section className="bg-[#252525] py-4 px-4 w-full">
          <div className="w-full" style={{ maxWidth: 1510, marginLeft: "auto", marginRight: "auto" }}>
            <p className="text-center text-gray-400 text-sm">
              © 2026 Rajasthan Stone Gallery. All Rights Reserved.
            </p>
          </div>
        </section>
      </footer>

      {/* Floating WhatsApp - Need Help? */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-1 group"
        aria-label="Need Help? Chat on WhatsApp"
      >
        <span className="bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          Need Help?
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
    </>
  );
}
