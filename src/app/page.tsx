import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="absolute top-10 text-center animate-pulse">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
          Ayin Eyes
        </h1>
        <p className="text-xl text-gray-300 mt-4">The Eye of Eternity</p>
      </div>
      <ThreeScene />
    </main>
  );
}
