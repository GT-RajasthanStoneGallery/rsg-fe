"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { TABLE_TOPS_DATA } from "../data/tableTops";
import Footer from "./Footer";

export default function TableTopGrid() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);

  return (
    <>
      <div className="bg-[#faf8f6] min-h-screen">
        {/* Title – left-aligned with red line (match reference) */}
        <section className="py-12 md:py-16 px-4 md:px-8 border-b border-gray-200/60">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-0.5 bg-[#c41e3a]" />
              <p className="text-[#8B4513] uppercase tracking-widest text-sm font-semibold">Premium natural stone for global markets</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold text-[#333]">Export Quality Stone Finishes</h1>
              <span className="flex-1 min-w-[80px] h-0.5 bg-gray-300" />
            </div>
          </div>
        </section>

        {/* Grid: images + names only */}
        <section ref={ref} className="py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {TABLE_TOPS_DATA.filter((item) => item.image.startsWith("/images/")).map((item) => (
                <Link
                  key={item.id}
                  href={`/export/${item.id}`}
                  className="group flex flex-col w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
                >
                  <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      unoptimized
                    />
                  </div>
                  <div className="w-full p-3 text-center border-t border-gray-100">
                    <span className="font-semibold text-[#333] text-sm sm:text-base">{item.name}</span>
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
