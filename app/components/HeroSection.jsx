"use client";

import Image from "next/image";
import Link from "next/link";

const HERO_BG_IMAGE = "/images/hero-bg.jpeg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HERO_BG_IMAGE}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-12 sm:py-16 max-w-4xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
          <span className="w-8 sm:w-12 h-0.5 bg-[#E6C76A] shrink-0" />
          <p className="text-[#D4AF37] uppercase tracking-widest text-xs sm:text-sm font-semibold">Welcome to Rajasthan Stone Gallery</p>
          <span className="w-8 sm:w-12 h-0.5 bg-[#E6C76A] shrink-0" />
        </div>
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2 sm:mb-4">
          Quarry Owner & Global Exporter,
        </h1>
        <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 sm:mb-10">
          Where Great Finishes Start Beyond Stone.
        </h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link href="/natural-stones" className="flex items-center justify-center gap-2 bg-[#D4AF37] text-white px-6 py-3 sm:px-8 sm:py-4 font-semibold uppercase text-sm sm:text-base hover:bg-[#B8962E] transition-colors">
            Our Natural Stones <span className="border-l border-white pl-2">→</span>
          </Link>
          <Link href="/contact-us#assist-form" className="flex items-center justify-center gap-2 bg-white text-[#333] px-6 py-3 sm:px-8 sm:py-4 font-semibold uppercase text-sm sm:text-base border-2 border-[#333] hover:bg-gray-100 transition-colors">
            Get In Touch <span className="border-l border-[#333] pl-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
