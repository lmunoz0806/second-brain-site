import { Nav } from "@/components/Nav";
import { Ask } from "@/components/sections/Ask";
import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Install } from "@/components/sections/Install";
import { LocalFirst } from "@/components/sections/LocalFirst";
import { OpenSource } from "@/components/sections/OpenSource";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <LocalFirst />
        <Features />
        <Ask />
        <Install />
        <OpenSource />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
