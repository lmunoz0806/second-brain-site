import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-ink px-6 py-32 text-white">
          <h1 className="eyebrow mx-auto max-w-[1100px]">Second Brain</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
