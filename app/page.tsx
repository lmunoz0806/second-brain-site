import { Nav } from "@/components/Nav";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Install } from "@/components/sections/Install";
import { PoweredBy } from "@/components/sections/PoweredBy";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <PoweredBy />
        <Install />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
