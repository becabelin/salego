import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Testimonials3 from "@/components/Testimonials3";
import FeaturesListicle from "@/components/FeaturesListicle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturesListicle />
      <About />
      <Pricing />
      <Testimonials3 />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
