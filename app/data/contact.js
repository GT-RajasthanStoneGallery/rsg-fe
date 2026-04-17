// Single source of truth for all contact information.
// Import from here in Header, Footer, ContactUsSection, etc.

export const CONTACT_INFO = {
  phones: ["+91-9111-9977-54", "+91-9983-3911-37"],
  emails: ["rajasthanstone13@gmail.com", "Businesswithluckymarble@gmail.com"],
  whatsappPhone: "9983391137",
  address: "Rajasthan Stone Gallery Pvt. Ltd. G-286, RIICO Area, Rajsamand, Nogama, Rajasthan 313342",
  address2: "Rajasthan Stone Gallery Pvt. Ltd. Pharara, Rajasthan 313324",
  locationLinks: [
    { url: "https://maps.app.goo.gl/3D2sbkD7ERpX7Rk69", label: "Location 1" },
    { url: "https://maps.app.goo.gl/UDaiqfp2RD8Tow5YA", label: "Location 2" },
  ],
  locationEmbeds: [
    {
      label: "Location 1",
      address: "G-286, RIICO Area, Rajsamand, Nogama, Rajasthan 313342",
      url: "https://maps.app.goo.gl/3D2sbkD7ERpX7Rk69",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0676035039132!2d73.88615217610607!3d25.03177973837955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686d2c72019833%3A0x9b6697af8ded085e!2sLucky%20Marble%20and%20Granite!5e0!3m2!1sen!2sin!4v1773605987635!5m2!1sen!2sin",
    },
    {
      label: "Location 2",
      address: "Rajasthan Stone Gallery Pvt. Ltd. Pharara, Rajasthan 313324",
      url: "https://maps.app.goo.gl/UDaiqfp2RD8Tow5YA",
      embedSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6442988727244!2d73.88822247610567!3d25.01219983916778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39686d00219a1d79%3A0x73548747d125dbd6!2sSupyar%20Marble%20%26%20Gainite!5e0!3m2!1sen!2sin!4v1773606130892!5m2!1sen!2sin",
    },
  ],
  partners: ["Sumer Singh Shekhawat", "Lakshman Singh Rathore"],
  socialLinks: {
    instagram: "https://www.instagram.com/rajasthanstone13?igsh=M2t4bzllbmkwb2p4",
  },
};
