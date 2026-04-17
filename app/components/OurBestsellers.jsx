"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { NATURAL_STONES_DATA } from "../data/naturalStones";

// Pick first 6 stones that have local images
const BESTSELLERS = NATURAL_STONES_DATA.filter((s) => s.image.startsWith("/images/")).slice(0, 6);

export default function OurBestsellers() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-10 md:py-16 lg:py-24 px-4 md:px-8 bg-[#faf8f6]">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">Choose Your Stone</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Our Bestsellers</h2>
          <div className="w-24 h-0.5 bg-gray-300 mb-12" />
        </div>
        <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 transition-all duration-700 delay-200 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {BESTSELLERS.map((stone) => (
            <Link key={stone.id} href={`/natural-stones/${stone.id}`} className="flex flex-col items-center group">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3 transition-transform duration-300 group-hover:scale-105">
                <Image src={stone.image} alt={stone.name} fill className="object-cover" sizes="(max-width:640px) 96px, (max-width:768px) 112px, 144px" unoptimized />
              </div>
              <p className="text-[#333] font-medium text-center text-xs sm:text-sm md:text-base">{stone.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
