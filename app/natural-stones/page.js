import NaturalStonesGrid from "../components/NaturalStonesGrid";

export const metadata = {
  title: "Natural Stone Finishes | Rajasthan Stone Gallery",
  description: "Choose your natural stone. Explore our premium marble and granite finishes.",
};

export default function NaturalStonesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans">
      <NaturalStonesGrid />
    </div>
  );
}
