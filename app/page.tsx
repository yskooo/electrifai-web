// import { Zap, Brain, Cpu, BarChart, Users, Briefcase, PieChart } from "lucide-react"
// import Link from "next/link"

// export default function Home() {
//   return (
// Header
//     <div className="flex flex-col min-h-screen">
//       <header className="px-4 lg:px-6 h-14 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <Zap className="h-6 w-6 text-primary" />
//           <span className="ml-2 text-2xl font-bold text-primary">ElectricAI</span>
//         </Link>
//         <nav className="ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Features
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Team
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Roadmap
//           </Link>
//           <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
//             Contact
//           </Link>
//         </nav>
//       </header>
// HeroSection
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
//                   Powering the Future with Electric AI
//                 </h1>
//                 <p className="mx-auto max-w-[700px] text-white md:text-xl">
//                   Revolutionizing industries with our cutting-edge AI solutions. Harness the power of artificial intelligence to electrify your business.
//                 </p>
//               </div>
//               <div className="space-x-4">
//                 <button className="bg-white text-primary hover:bg-gray-100">Get Started</button>
//                 <button className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>
// FeaturesSection
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Innovative Features</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               <div className="flex flex-col items-center text-center">
//                 <Brain className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Advanced Machine Learning</h3>
//                 <p className="text-gray-600">Leverage state-of-the-art algorithms to solve complex problems.</p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <Cpu className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
//                 <p className="text-gray-600">Process and analyze data at lightning-fast speeds for instant insights.</p>
//               </div>
//               <div className="flex flex-col items-center text-center">
//                 <BarChart className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-bold mb-2">Predictive Analytics</h3>
//                 <p className="text-gray-600">Forecast trends and make data-driven decisions with our AI models.</p>
//               </div>
//             </div>
//           </div>
//         </section>
// TeamSection
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Team</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[
//                 { name: "Dr. Ava Chen", role: "Chief AI Scientist" },
//                 { name: "Michael Rodriguez", role: "CEO" },
//                 { name: "Sarah Johnson", role: "CTO" },
//                 { name: "David Kim", role: "Head of Product" }
//               ].map((member, index) => (
//                 <div key={index}>
//                   <div className="p-4 flex flex-col items-center">
//                     <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
//                     <h3 className="font-bold">{member.name}</h3>
//                     <p className="text-sm text-gray-600">{member.role}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
// PartnersSection
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Partners</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
//               {[1, 2, 3, 4].map((partner) => (
//                 <div key={partner} className="flex justify-center">
//                   <div className="w-40 h-20 bg-gray-200 rounded flex items-center justify-center">
//                     <span className="text-gray-400">Partner Logo</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
// RoadmapSection
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Product Roadmap</h2>
//             <div className="space-y-8">
//               {[
//                 { quarter: "Q3 2024", milestone: "Launch of ElectricAI Platform 1.0" },
//                 { quarter: "Q4 2024", milestone: "Integration with major cloud providers" },
//                 { quarter: "Q1 2025", milestone: "Release of industry-specific AI models" },
//                 { quarter: "Q2 2025", milestone: "Global expansion and localization" }
//               ].map((item, index) => (
//                 <div key={index} className="flex items-center space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h3 className="font-bold">{item.quarter}</h3>
//                     <p>{item.milestone}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
// Business Section
//         <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
//           <div className="container px-4 md:px-6">
//             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Business Plan</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4 flex items-center">
//                     <Users className="mr-2" /> Target Market
//                   </h3>
//                   <p>Enterprise businesses across finance, healthcare, and manufacturing sectors seeking to leverage AI for process optimization and decision-making.</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4 flex items-center">
//                     <Briefcase className="mr-2" /> Revenue Model
//                   </h3>
//                   <p>Subscription-based SaaS model with tiered pricing based on usage and features. Additional revenue from consulting and custom AI model development.</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4 flex items-center">
//                     {/* <RocketLaunch className="mr-2" />  */}
//                     Growth Strategy
//                   </h3>
//                   <p>Focused on product-led growth, strategic partnerships with industry leaders, and aggressive marketing in key verticals.</p>
//                 </div>
//               </div>
//               <div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4 flex items-center">
//                     <PieChart className="mr-2" /> Financial Projections
//                   </h3>
//                   <p>Targeting $10M ARR by end of year 2, with a projected 70% year-over-year growth rate for the following three years.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
// CallToActionSection
//         <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
//                   Ready to Electrify Your AI Journey?
//                 </h2>
//                 <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Join thousands of businesses already leveraging the power of ElectricAI. Sign up for our newsletter to stay updated on the latest AI advancements.
//                 </p>
//               </div>
//               <div className="w-full max-w-sm space-y-2">
//                 <form className="flex space-x-2">
//                   <input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
//                   <button type="submit">Subscribe</button>
//                 </form>
//                 <p className="text-xs text-gray-500">
//                   By subscribing, you agree to our Terms of Service and Privacy Policy.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
//         <p className="text-xs text-gray-500">© 2024 ElectricAI. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TeamSection from "./components/TeamSection";
import PartnersSection from "./components/PartnersSection";
import RoadmapSection from "./components/RoadmapSection";
import BusinessPlanSection from "./components/BusinessPlanSection";
import CallToActionSection from "./components/CallToActionSection";
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
        <BusinessPlanSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

