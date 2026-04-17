"use client";

const ALLOWED_IFRAME_HOSTS = [
  "www.google.com",
  "maps.google.com",
  "www.google.co.in",
  "maps.googleapis.com",
  "www.openstreetmap.org",
];

function isValidIframeSrc(src) {
  if (typeof src !== "string") return false;
  try {
    const url = new URL(src);
    if (url.protocol !== "https:") return false;
    return ALLOWED_IFRAME_HOSTS.some(
      (host) => url.hostname === host || url.hostname.endsWith("." + host)
    );
  } catch {
    return false;
  }
}

/**
 * Renders a responsive Google Maps (or other) iframe embed for a location.
 * Use for "Our Locations" and any page that needs an embedded map.
 */
export default function LocationMap({ src, title = "Map", className = "" }) {
  if (!src || !isValidIframeSrc(src)) {
    return (
      <div
        className={`flex items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-500 text-sm ${className}`}
        style={{ minHeight: 240 }}
      >
        <span>Map not available</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100 ${className}`}
      style={{ aspectRatio: "4/3" }}
    >
      <iframe
        src={src}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
