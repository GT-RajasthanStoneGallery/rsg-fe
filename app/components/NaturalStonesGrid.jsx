"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { NATURAL_STONES_DATA } from "../data/naturalStones";
import Footer from "./Footer";

export default function NaturalStonesGrid() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Title only – match reference */}
        <section className="py-12 md:py-16 px-4 md:px-8 border-b border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#8B4513] uppercase tracking-widest text-sm font-semibold mb-2">Choose your natural stone</p>
            <div className="w-16 h-0.5 bg-[#8B4513] mx-auto mb-3" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#333]">Natural Stone Finishes</h1>
          </div>
        </section>

        {/* Grid: images + names only, no content or price */}
        <section ref={ref} className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {NATURAL_STONES_DATA.filter((stone) => stone.image.startsWith("/images/")).map((stone) => (
                <Link
                  key={stone.id}
                  href={`/natural-stones/${stone.id}`}
                  className="group flex flex-col w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={stone.image}
                      alt={stone.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      unoptimized
                    />
                  </div>
                  <div className="w-full p-3 text-center border-t border-gray-100">
                    <span className="font-semibold text-[#333] text-sm sm:text-base">{stone.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
