"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CLIENTS_DATA } from "../data/clients";

export default function OurPrestigiousClients() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-10 md:py-16 lg:py-24 px-4 md:px-8 bg-[#faf8f6]">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-12 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">Trusted Worldwide</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333]">Our Prestigious Clients</h2>
          <div className="w-24 h-0.5 bg-gray-300 mt-4" />
        </div>
        <div className={`overflow-hidden w-full transition-all duration-700 delay-200 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center animate-clients-marquee w-max gap-6 sm:gap-10 md:gap-16 py-2">
            {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, index) => (
              <a
                key={`${client.id}-${index}`}
                href={client.url}
                className="shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <div className="relative w-20 h-10 sm:w-28 sm:h-14 md:w-40 md:h-20">
                  <Image src={client.logo} alt={client.name} fill className="object-contain" sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 160px" unoptimized />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
