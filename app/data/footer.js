import { CONTACT_INFO } from "./contact";

// API-ready: can be moved to API later
const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsappPhone}&text=Hi%2C+I%E2%80%99m+interested+in+your+marble%C2%A0collection%21`;
const INSTAGRAM_LINK = CONTACT_INFO.socialLinks.instagram;

export const POPULAR_SEARCHES = [
  "Marine Beige",
  "Apple Green",
  "Copa Fantasy",
  "Marine Black",
  "Ocean Green",
  "Opal White",
  "Lady Purple",
  "Ash Grey",
  "Sienna Black",
];

// Dynamic: add more countries here; use 2-letter ISO code for flagcdn.com
export const GLOBAL_PRESENCE_COUNTRIES = [
  { code: "cn", name: "China", description: "Raw granite blocks for local processing and infrastructure projects" },
  { code: "us", name: "United States", description: "A major importer of processed and finished products, such as kitchen countertops, flooring, and memorials" },
  // { code: "bd", name: "Bangladesh", description: "A high-volume but lower-price-per-ton market for construction-grade granite" },
  { code: "mv", name: "Maldives", description: "Noted as one of the top destinations by value in recent years" },
  { code: "ae", name: "United Arab Emirates", description: "A major importer of processed and finished products, such as kitchen countertops, flooring, and memorials" },
];

export const FOOTER_MENU = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Natural Stones", href: "/natural-stones" },
  { label: "Export", href: "/export" },
  // { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

// Marble Collections: now dynamic from naturalStones (getMarbleCollectionsForFooter)

// Re-export contact info for backward compatibility
export const FOOTER_CONTACT = CONTACT_INFO;

export const SOCIAL_LINKS = [
  // { name: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { name: "Instagram", href: INSTAGRAM_LINK, icon: "instagram" },
  // { name: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  // { name: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
];

export { WHATSAPP_LINK, INSTAGRAM_LINK };
