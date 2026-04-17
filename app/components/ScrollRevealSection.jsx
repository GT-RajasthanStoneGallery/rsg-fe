"use client";

import { useRef, useState, useEffect } from "react";

function getInitialTransform(direction, prefersReduced) {
  if (prefersReduced) return "none";
  switch (direction) {
    case "up":
      return "translateY(40px)";
    case "left":
      return "translateX(-40px)";
    case "right":
      return "translateX(40px)";
    case "fade":
    default:
      return "none";
  }
}

export default function ScrollRevealSection({
  delay = 0,
  direction = "fade",
  children,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setPrefersReduced(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [isMounted]);

  // Server and initial client render: show content immediately to avoid hydration mismatch
  if (!isMounted) {
    return <div ref={ref}>{children}</div>;
  }

  const hiddenStyle = {
    opacity: 0,
    visibility: "hidden",
    transform: getInitialTransform(direction, prefersReduced),
    transition: prefersReduced
      ? "none"
      : `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms, visibility 0ms ${delay}ms`,
  };

  const visibleStyle = {
    opacity: 1,
    visibility: "visible",
    transform: "none",
    transition: prefersReduced
      ? "none"
      : `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`,
  };

  return (
    <div ref={ref} style={isVisible ? visibleStyle : hiddenStyle}>
      {children}
    </div>
  );
}
