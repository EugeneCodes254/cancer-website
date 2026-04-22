import AboutSection from "@/components/AboutSection";
import AwarenessSection from "@/components/AwarenessSection";
import BlockchainSection from "@/components/BlockchainSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Navbar from "@/components/Navbar";
import PillarsSection from "@/components/PillarSection";
import SoursopSection from "@/components/SourSoupSection";

export default function Home() {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PillarsSection />
    <SoursopSection />
    <AwarenessSection />
    <BlockchainSection />
    <ImpactSection />
    <Founders/>
    <CTASection />
    <Footer />
    </div>
  );
}
