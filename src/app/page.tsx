import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import IndustrySolutions from "@/components/sections/IndustrySolutions";
import ProductShowcase from "@/components/sections/ProductShowcase";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ClientLogos from "@/components/sections/ClientLogos";
import SoftwarePartners from "@/components/sections/SoftwarePartners";
import Insights from "@/components/sections/Insights";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFFf]">
      <Header />
      <main>
        <HeroSection />
        <IndustrySolutions />
        <ProductShowcase />
        <Insights />
        <ClientLogos />
        <SolutionsSection />
        <SoftwarePartners />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
