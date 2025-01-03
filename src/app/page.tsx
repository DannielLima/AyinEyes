import ThreeScene from "@/components/ThreeScene";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="absolute text-center">
        <h1 className="text-4xl font-extrabold tracking-wide text-gray-300">
          Ayin Eyes
        </h1>
        <p className="text-gray-400 text-lg mt-2">The Eye of Eternity</p>
      </div>
      <ThreeScene />
    </main>
  );
}
