"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

// Replace with your quarry video URL or /videos/quarry.mp4 when you add it
const QUARRY_VIDEO_URL = "https://cdn.pixabay.com/video/2022/03/10/112459-668058017_large.mp4";

export default function OurQuarry() {
  const { ref, hasAnimated } = useScrollAnimation(0.1);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("ended", onEnded);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("ended", onEnded);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`mb-8 transition-all duration-700 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-12 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">Unveiling Earth&apos;s Finest Treasures</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#333]">Our Quarry</h2>
        </div>
        <div className={`relative aspect-video rounded-lg overflow-hidden bg-black transition-all duration-700 delay-200 ${hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <video ref={videoRef} className="w-full h-full object-cover" muted loop playsInline poster="">
            <source src={QUARRY_VIDEO_URL} type="video/mp4" />
          </video>
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 group"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-[#333] border-y-[12px] border-y-transparent ml-1" />
              </div>
            </button>
          )}
          {isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              aria-label="Pause video"
            >
              <span className="text-2xl">⏸</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
