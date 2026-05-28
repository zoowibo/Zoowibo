import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Layered background effects */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>
      <div className="noise" aria-hidden="true" />

      {/* Page content */}
      <div className="page">
        <Navbar />
        <main>
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}