import { Nav } from "@/components/Nav";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { LocalFirst } from "@/components/sections/LocalFirst";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <LocalFirst />
        <Features />
      </main>
      <Footer />
    </>
  );
}
