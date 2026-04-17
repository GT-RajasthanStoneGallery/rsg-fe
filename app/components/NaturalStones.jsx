"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { NATURAL_STONES_DATA } from "../data/naturalStones";

export default function NaturalStones() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);
  const [selectedStone, setSelectedStone] = useState(null);

  const closeModal = useCallback(() => setSelectedStone(null), []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedStone) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [selectedStone, closeModal]);

  return (
    <>
      <section id="stones" ref={ref} className="py-10 md:py-16 lg:py-24 px-4 md:px-8 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-[#8B4513] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">Choose your natural stone</p>
            <div className="w-16 h-0.5 bg-[#8B4513] mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#333]">Natural Stone Finishes</h2>
            <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">Click on any stone to view details, gallery, and product specifications.</p>
          </div>

          {/* Grid */}
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transition-all duration-700 delay-200 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {NATURAL_STONES_DATA.filter((stone) => stone.image.startsWith("/images/")).map((stone) => (
              <button
                key={stone.id}
                type="button"
                onClick={() => setSelectedStone(stone)}
                className="group flex flex-col items-center w-full bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-200/50 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={stone.image}
                    alt={stone.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                    unoptimized
                  />
                </div>
                <div className="w-full p-3 text-center border-t border-gray-100">
                  <h3 className="font-semibold text-[#333] text-sm sm:text-base">{stone.name}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detail modal – theme-aligned: NATURAL STONE, subtitle, description, gallery, Product Details */}
      {selectedStone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="stone-modal-title"
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#faf8f6] rounded-xl shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/90 text-[#333] hover:bg-[#D4AF37] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Close"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-0.5 bg-[#D4AF37]" />
                <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Natural Stone</p>
              </div>
              <h2 id="stone-modal-title" className="text-xl sm:text-2xl md:text-4xl font-bold text-[#333] mb-1">
                {selectedStone.name}
              </h2>
              {selectedStone.subtitle && (
                <p className="text-[#333] font-semibold text-sm md:text-base mb-3">{selectedStone.subtitle}</p>
              )}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">{selectedStone.description}</p>

              {/* Gallery – slab + application (or single image) */}
              {selectedStone.gallery && selectedStone.gallery.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {selectedStone.gallery.map((item, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
                      <div className="relative aspect-[4/3] bg-gray-100">
                        <Image
                          src={item.src}
                          alt={item.caption || selectedStone.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                      {item.caption && (
                        <p className="text-center text-sm text-gray-600 py-2 font-medium">{item.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Product Details – red heading, two-column table */}
              {selectedStone.productDetails && (
                <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                  <h3 className="text-center text-lg font-bold text-[#c41e3a] mb-4">Product Details</h3>
                  <dl className="space-y-3 text-sm">
                    {Object.entries(selectedStone.productDetails).map(([key, value]) =>
                      value ? (
                        <div key={key} className="flex flex-wrap justify-between gap-x-4 border-b border-gray-100 pb-2 last:border-0">
                          <dt className="font-semibold text-[#333] capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</dt>
                          <dd className="text-gray-600 text-right sm:text-left">{value}</dd>
                        </div>
                      ) : null
                    )}
                  </dl>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
