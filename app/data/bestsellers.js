// API-ready: Replace with fetch('/api/bestsellers') or useSWR/React Query
// Future: const { data } = useSWR('/api/bestsellers', fetcher);
// Expected shape: { id, name, image, slug? }[]
export const BESTSELLERS_DATA = [
  { id: 1, name: "Marine Beige", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop", slug: "marine-beige" },
  { id: 2, name: "Marine Black", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=200&h=200&fit=crop", slug: "marine-black" },
  { id: 3, name: "Cherry Gold", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=200&fit=crop", slug: "cherry-gold" },
  { id: 4, name: "Ash Grey", image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=200&h=200&fit=crop", slug: "ash-grey" },
  { id: 5, name: "Sienna Black", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=200&h=200&fit=crop", slug: "sienna-black" },
  { id: 6, name: "Apple Green", image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=200&h=200&fit=crop", slug: "apple-green" },
];
