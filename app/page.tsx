import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import PartnersSection from "./components/PartnersSection";
import RoadmapSection from "./components/RoadmapSection";
import BusinessPlanSection from "./components/BusinessPlanSection";
import CallToActionSection from "./components/CallToActionSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <TeamSection />
        <PartnersSection />
        <RoadmapSection />
        {/* <BusinessPlanSection /> */}
        {/* <CallToActionSection /> */}
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

