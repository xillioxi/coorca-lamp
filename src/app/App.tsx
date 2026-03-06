import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import CoreFeaturesSection from "./components/sections/CoreFeaturesSection";
import MobileAppSection from "./components/sections/MobileAppSection";
import EmotionalBondingSection from "./components/sections/EmotionalBondingSection";
import NeedAHandSection from "./components/sections/NeedAHandSection";
import UseCasesSection from "./components/sections/UseCasesSection";
import TechSpecsSection from "./components/sections/TechSpecsSection";
import TimelineSection from "./components/sections/TimelineSection";
import CurrentDemoSection from "./components/sections/CurrentDemoSection";
import FollowSection from "./components/sections/FollowSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CoreFeaturesSection />
      <MobileAppSection />
      <EmotionalBondingSection />
      <NeedAHandSection />
      <UseCasesSection />
      <TechSpecsSection />
      <TimelineSection />
      <CurrentDemoSection />
      <FollowSection />
      <Footer />
    </div>
  );
}
