import AboutSection from "@/components/AboutSection";
import AwarenessSection from "@/components/AwarenessSection";
import BlockchainSection from "@/components/BlockchainSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactSection from "@/components/ImpactSection";
import Navbar from "@/components/Navbar";
import PillarsSection from "@/components/PillarSection";
import SoursopSection from "@/components/SourSoupSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <PillarsSection />
    <SoursopSection />
    <AwarenessSection />
    <BlockchainSection />
    <ImpactSection />
    <CTASection />
    <Footer />
    </div>
  );
}
