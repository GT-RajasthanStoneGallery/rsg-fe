"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TABLE_TOPS_DATA } from "../data/tableTops";

export default function UnveilingMasterpieces() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="py-10 md:py-16 lg:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-12 h-0.5 bg-[#D4AF37]" />
              <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">Our Creations</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333]">Unveiling Our Masterpieces</h2>
          </div>
          <Link href="/export" className="flex items-center gap-2 bg-[#D4AF37] text-white px-6 py-3 font-semibold self-start md:self-auto hover:bg-[#B8962E] transition-colors">
            View More <span>→</span>
          </Link>
        </div>
        <div className={`grid sm:grid-cols-2 md:grid-cols-${TABLE_TOPS_DATA.length >= 3 ? "3" : TABLE_TOPS_DATA.length} gap-4 md:gap-6 transition-all duration-700 delay-200 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {TABLE_TOPS_DATA.map((item) => (
            <Link key={item.id} href={`/export/${item.id}`} className="relative h-52 sm:h-60 md:h-80 rounded-lg overflow-hidden shadow-md group block">
              <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" unoptimized />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg">{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
