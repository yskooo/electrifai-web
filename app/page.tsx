import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs"; 
import Team from "./components/Team";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
// import { BackedBySection } from "./components/BackedBy";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <BackedBySection/> */}
        <Features />
        <AboutUs /> 
        <Team />
        <Awards />
        <Contact />
      </main>
      {/* <Footesssr /> */}
    </div>
  );
}
