import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="absolute top-10 left-10 text-left">
        <h1 className="text-7xl font-black text-white uppercase leading-tight">
          Ayin
          <br />
          Eyes
        </h1>
        <p className="mt-4 text-2xl font-medium text-gray-300 tracking-wide">
          The Eye of Eternity
        </p>
      </div>

      <a
        href="https://github.com/DannielLima"
        className="absolute bottom-10 left-10 px-6 py-3 text-2xl font-bold text-black bg-yellow-400 border-4 border-black transform hover:scale-105 transition-transform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore More
      </a>

      <ThreeScene />

      <div className="absolute bottom-10 right-10 text-gray-600 text-sm font-mono tracking-wide">
        © 2025 Danniel Lima Vision Inc.
      </div>
    </main>
  );
}
