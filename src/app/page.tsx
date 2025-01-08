import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="absolute top-10 left-10 text-left px-4 sm:px-8 md:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white uppercase leading-tight">
          Ayin
          <br />
          Eyes
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-300 tracking-wide">
          The Eye of Eternityy
        </p>
      </div>

      <div className="absolute bottom-10 left-10 sm:left-10 md:bottom-10 md:right-10">
        <a
          href="https://github.com/DannielLima"
          className="px-6 py-3 text-xl sm:text-2xl font-bold text-black bg-yellow-400 border-4 border-black transform hover:scale-105 transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore More
        </a>

        <div className="mt-4 text-gray-600 text-sm font-mono tracking-wide sm:mt-0 sm:text-left md:text-right">
          © 2025 Danniel Lima Vision Inc.
        </div>
      </div>

      <ThreeScene />
    </main>
  );
}
