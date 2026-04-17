import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getStoneById, NATURAL_STONES_DATA } from "../../data/naturalStones";
import Footer from "../../components/Footer";

export async function generateStaticParams() {
  return NATURAL_STONES_DATA.map((stone) => ({ id: String(stone.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const stone = getStoneById(id);
  if (!stone) return { title: "Natural Stone | Rajasthan Stone Gallery" };
  return {
    title: `${stone.name} | Natural Stone | Rajasthan Stone Gallery`,
    description: stone.shortDescription || stone.description?.slice(0, 160),
  };
}

export default async function NaturalStoneDetailPage({ params }) {
  const { id } = await params;
  const stone = getStoneById(id);
  if (!stone) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="flex-1 py-12 md:py-16 px-4 md:px-8 bg-[#faf8f6]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/natural-stones"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8962E] font-medium text-sm mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Natural Stones
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Natural Stone</p>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-1">{stone.name}</h1>
          {stone.subtitle && (
            <p className="text-[#333] font-semibold text-sm md:text-base mb-2">{stone.subtitle}</p>
          )}
          <p className="text-gray-600 leading-relaxed mb-6">{stone.description}</p>

          {stone.features && stone.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#333] mb-3">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {stone.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {!stone.gallery?.length && (
            <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 mb-8">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={stone.image}
                  alt={stone.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 800px"
                  unoptimized
                />
              </div>
            </div>
          )}
          {stone.gallery && stone.gallery.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {stone.gallery.map((item, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image
                      src={item.src}
                      alt={item.caption || stone.name}
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

          {stone.productDetails && (
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
              <h2 className="text-center text-lg font-bold text-[#c41e3a] mb-4">Product Details</h2>
              <dl className="space-y-3 text-sm">
                {Object.entries(stone.productDetails).map(([key, value]) =>
                  value ? (
                    <div key={key} className="flex flex-wrap justify-between gap-x-4 border-b border-gray-100 pb-2 last:border-0">
                      <dt className="font-semibold text-[#333] capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </dt>
                      <dd className="text-gray-600 text-right sm:text-left">{value}</dd>
                    </div>
                  ) : null
                )}
              </dl>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
