"use client";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";
import Team from "../components/Team";

export default function AboutPage() {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode
    ? "bg-gradient-to-b from-[#000000] via-[#001027] to-[#000000]"
    : "bg-gradient-to-b from-gray-50 via-white to-gray-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-900/50" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";

  const coreValues = [
    {
      title: "Innovation",
      description: "Continuously pushing boundaries in energy technology to deliver cutting-edge solutions.",
    },
    {
      title: "Sustainability",
      description: "Committed to environmental responsibility and sustainable energy practices.",
    },
    {
      title: "Excellence",
      description: "Striving for the highest quality in all our products and services.",
    },
    {
      title: "Integrity",
      description: "Maintaining honest and ethical business practices in everything we do.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation & Recognition",
      description: "ElectrifAI was founded by a group of passionate innovators from Polytechnic University of the Philippines. Won 1st Runner Up & People's Choice Award at Meralco Idol Hackathon.",
    },
    {
      year: "2024",
      title: "Expansion & Growth",
      description: "Expanded operations through multiple incubation programs including DOST PUP TBI, REVV-EVODINE, and New Energy Nexus. Showcased innovations at IEEE TENCON Singapore 2024.",
    },
    {
      year: "2025",
      title: "Scaling Impact",
      description: "Accelerating growth through Founders Institute and SCALE NCR programs. Targeting partnerships with 120+ electric cooperatives across the Philippines.",
    },
  ];

  return (
    <main className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-20 mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              About ElectrifAI
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${mutedText}`}>
              Pioneering the future of energy management through innovation, AI technology, and sustainable practices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${cardBg} backdrop-blur-lg p-8 md:p-10 rounded-3xl border ${borderColor} hover:border-blue-500/50 transition-all duration-300`}
          >
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className={`text-lg leading-relaxed ${mutedText}`}>
              To revolutionize energy management through innovative AI solutions, making power systems more efficient, 
              secure, and sustainable for future generations. We empower utilities and consumers to make each kilowatt count.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`${cardBg} backdrop-blur-lg p-8 md:p-10 rounded-3xl border ${borderColor} hover:border-blue-500/50 transition-all duration-300`}
          >
            <div className="flex items-center mb-4">
              <div className="w-1 h-8 bg-blue-500 rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className={`text-lg leading-relaxed ${mutedText}`}>
              To be the global leader in AI-powered energy management solutions, setting new standards for efficiency 
              and security in the power industry. We envision a future where every energy system is intelligent and optimized.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              The principles that guide our work and define who we are
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${cardBg} backdrop-blur-lg p-6 rounded-2xl border ${borderColor} hover:border-blue-500/50 hover:scale-105 transition-all duration-300 text-center group`}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className={`text-sm ${mutedText}`}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story / Journey */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className={`text-lg ${mutedText} max-w-2xl mx-auto`}>
              From university startup to industry innovator
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${isDarkMode ? "bg-gray-800" : "bg-gray-300"} hidden md:block`}></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`${cardBg} backdrop-blur-lg p-6 md:p-8 rounded-2xl border ${borderColor} hover:border-blue-500/50 transition-all duration-300`}>
                      <div className="text-5xl font-bold text-blue-500/20 mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className={`${mutedText} leading-relaxed`}>{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-black"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${cardBg} backdrop-blur-lg p-8 md:p-12 rounded-3xl border ${borderColor}`}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className={`space-y-4 ${mutedText} text-lg leading-relaxed`}>
              <p>
                ElectrifAI emerged from the Polytechnic University of the Philippines, born from a group of passionate 
                innovators determined to make a difference in the power industry. What started as a student project 
                quickly evolved into a mission to revolutionize how energy is managed and consumed.
              </p>
              <p>
                Through multiple hackathons, research competitions, and incubation programs, we've grown from a small 
                team with big dreams into a recognized player in the energy tech space. Our journey has been marked by 
                recognition from industry leaders, partnerships with government institutions, and validation from prestigious 
                programs worldwide.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in energy optimization, combining cutting-edge 
                AI technology with sustainable practices. Our goal is ambitious but clear: partner with 120+ electric 
                cooperatives across the Philippines to bring intelligent energy management to rural and semi-urban areas, 
                making efficient power accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on Our Mission
            </h2>
            <p className={`text-lg mb-8 ${mutedText}`}>
              Whether you're a utility company, investor, or innovator, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="/careers"
                className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 border ${
                  isDarkMode
                    ? "border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
                    : "border-blue-500/50 text-blue-600 hover:bg-blue-500/10"
                }`}
              >
                Join Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
