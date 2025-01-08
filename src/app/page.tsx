import ThreeScene from "@/components/ThreeScene";

const TitleSection = () => (
  <div className="absolute top-10 left-10 px-4 sm:px-8 md:px-12">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-tight drop-shadow-md">
      Ayin
      <br />
      Eyes
    </h1>
    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-300 tracking-wide">
      The Eye of Eternity
    </p>
  </div>
);

const FooterSection = () => (
  <div className="absolute bottom-10 left-10 sm:left-10 md:bottom-10 md:right-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
    <a
      href="https://github.com/DannielLima"
      className="px-6 py-3 text-xl sm:text-2xl font-bold text-black bg-yellow-400 border-4 border-black transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore more on GitHub"
    >
      Explore More
    </a>
    <div className="text-gray-600 text-sm font-mono tracking-wide">
      © 2025 Danniel Lima Vision Inc.
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <TitleSection />
      <FooterSection />
      <ThreeScene />
    </main>
  );
}
