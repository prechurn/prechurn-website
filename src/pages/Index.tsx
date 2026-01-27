import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PricingSection from "@/components/sections/PricingSection";
import ROICalculatorSection from "@/components/sections/ROICalculatorSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import AudienceSection from "@/components/sections/AudienceSection";
import TransparencySection from "@/components/sections/TransparencySection";
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <ROICalculatorSection />
      <ComparisonSection />
      <FAQSection />
      <AudienceSection />
      <TransparencySection />
      <DashboardPreviewSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
