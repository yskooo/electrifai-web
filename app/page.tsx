import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Team from "./components/Team";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import About from "./components/About";
// import RoadmapSection from "./components/RoadmapSection";
// import BusinessPlanSection from "./components/BusinessPlanSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Team />
        <Awards />
        <Contact/>

        {/* These are test components */}
          {/* <About/> */}
          {/* <RoadmapSection /> */}
          {/* <BusinessPlanSection /> */}
      </main>
      <Footer />
    </div>
  );
}

