import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getTableTopById, TABLE_TOPS_DATA } from "../../data/tableTops";
import Footer from "../../components/Footer";

export async function generateStaticParams() {
  return TABLE_TOPS_DATA.map((item) => ({ id: String(item.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const item = getTableTopById(id);
  if (!item) return { title: "Export | Rajasthan Stone Gallery" };
  return {
    title: `${item.name} | Export | Rajasthan Stone Gallery`,
    description: item.description?.slice(0, 160),
  };
}

export default async function TableTopDetailPage({ params }) {
  const { id } = await params;
  const item = getTableTopById(id);
  if (!item) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <main className="flex-1 py-12 md:py-16 px-4 md:px-8 bg-[#faf8f6]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/export"
            className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8962E] font-medium text-sm mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Export
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Export</p>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[#333] mb-1">{item.name}</h1>
          <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

          {item.features && item.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-[#333] mb-3">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {item.image && (
            <div className="rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 mb-8">
              <div className="relative aspect-[4/3] bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 800px"
                  unoptimized
                />
              </div>
            </div>
          )}

          {item.productDetails && (
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
              <h2 className="text-center text-lg font-bold text-[#c41e3a] mb-4">Product Details</h2>
              <dl className="space-y-3 text-sm">
                {Object.entries(item.productDetails).map(([key, value]) =>
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
