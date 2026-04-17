"use client";

import Image from "next/image";
import {
  COMPANY_OVERVIEW_PARAS,
  INFRASTRUCTURE_TEXT,
  INFRASTRUCTURE_IMAGES,
  INFRASTRUCTURE_VIDEOS,
  PACKAGING_SUBTITLE,
  PACKAGING_PARAS,
  PACKAGING_IMAGES,
  CSR_ITEMS,
  ACHIEVEMENTS_ITEMS,
  TEAM_MEMBERS,
} from "../data/about";

const SECTION_STYLE = "scroll-mt-24 py-14 md:py-20 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto";

function SectionHeading({ subtitle, title }) {
  return (
    <div className="mb-8">
      {subtitle && (
        <div className="flex items-center gap-3 mb-2">
          <span className="w-12 h-0.5 bg-[#D4AF37]" />
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold">{subtitle}</p>
        </div>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-[#333]">{title}</h2>
    </div>
  );
}

export function CompanyOverview() {
  return (
    <section id="company-overview" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— ABOUT US" title="Company Overview" />
      <div className="prose prose-gray max-w-none text-[#333] space-y-4">
        {COMPANY_OVERVIEW_PARAS.map((p, i) => (
          <p key={i} className="text-justify leading-relaxed">{p}</p>
        ))}
      </div>
    </section>
  );
}

export function InfrastructureSection() {
  return (
    <section id="infrastructure" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— OUR FACILITIES" title="Infrastructure" />
      <p className="text-[#333] leading-relaxed mb-10 max-w-4xl">{INFRASTRUCTURE_TEXT}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {INFRASTRUCTURE_IMAGES.map((img) => (
          <div key={img.id} className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
      {INFRASTRUCTURE_VIDEOS.length > 0 && (
        <>
          <h3 className="text-lg md:text-xl font-semibold text-[#333] mb-4">Factory Operations</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INFRASTRUCTURE_VIDEOS.map((vid) => (
              <div key={vid.id} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-black">
                <video
                  src={vid.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export function PackagingSection() {
  return (
    <section id="packaging" className={`bg-[#faf8f6] ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— DELIVERY EXCELLENCE" title="Packaging" />
      <p className="text-[#D4AF37] font-semibold text-sm md:text-base mb-6">{PACKAGING_SUBTITLE}</p>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4 text-[#333] leading-relaxed">
          {PACKAGING_PARAS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {PACKAGING_IMAGES.length > 0 && (
          <div className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
            <Image
              src={PACKAGING_IMAGES[0].src}
              alt={PACKAGING_IMAGES[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
      </div>
      {PACKAGING_IMAGES.length > 1 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {PACKAGING_IMAGES.slice(1).map((img) => (
            <div key={img.id} className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width:768px) 50vw, 33vw" />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

// export function AchievementsSection() {
//   return (
//     <section id="achievements" className={`bg-white ${SECTION_STYLE}`}>
//       <SectionHeading subtitle="— MILESTONES" title="Achievements" />
//       <div className="grid md:grid-cols-3 gap-8">
//         {ACHIEVEMENTS_ITEMS.map((item) => (
//           <div key={item.year} className="text-center p-6 border border-gray-200 rounded-lg hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300">
//             <p className="text-[#D4AF37] font-bold text-3xl mb-2">{item.year}</p>
//             <h3 className="text-xl font-semibold text-[#333] mb-2">{item.title}</h3>
//             <p className="text-gray-600 text-sm">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export function CSRSection() {
  return (
    <section id="csr" className={`bg-[#faf8f6] mt-10 md:mt-16 ${SECTION_STYLE}`}>
      <SectionHeading subtitle="— OUR VALUES" title="Corporate Social Responsibility" />
      <ul className="space-y-6 max-w-4xl">
        {CSR_ITEMS.map((item, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D4AF37] text-white flex items-center justify-center text-sm font-semibold">{i + 1}</span>
            <div>
              <h3 className="font-semibold text-[#333] mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className={`bg-white ${SECTION_STYLE}`}>
      <SectionHeading title="Our Team" />
      <p className="text-[#333] leading-relaxed mb-12 max-w-3xl">
        At Rajasthan Stone Gallery, our success is a reflection of the vision, dedication, and expertise of our leadership. Our team is built on a foundation of experience, innovation, and a shared commitment to excellence.
      </p>
      <div className="space-y-16">
        {TEAM_MEMBERS.map((member) => (
          <div
            key={member.id}
            className={`grid md:grid-cols-2 gap-8 items-center ${member.imageLeft ? "" : "md:direction-rtl"}`}
            style={member.imageLeft ? {} : { direction: "ltr" }}
          >
            <div className={member.imageLeft ? "order-1" : "order-2"}>
              <div className="relative aspect-square max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image src={member.image} alt={member.name} fill className="object-cover object-top" sizes="400px" />
              </div>
            </div>
            <div className={member.imageLeft ? "order-2" : "order-1"}>
              <p className="text-[#D4AF37] uppercase tracking-wider text-xs font-semibold mb-2">{member.tag}</p>
              <h3 className="text-2xl font-bold text-[#333] mb-1">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              {member.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-[#333] leading-relaxed mb-3 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function AboutSections() {
  return (
    <>
      <CompanyOverview />
      <InfrastructureSection />
      <PackagingSection />
      {/* <AchievementsSection /> */}
      <CSRSection />
      <TeamSection />
    </>
  );
}
