/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDarkMode } from "../context/DarkModeContext";
import { motion } from "framer-motion";

const awards = [
  {
    year: "2025",
    items: [
      {
        title: "Winner – Founders Arena Hackathon",
        subtitle: "Philippine Blockchain Week 2025",
        description: "Secured 1st Runner up in early-stage startup pitching ElectrifAI for their supply chain solution at PBW 2025 Grand Finals.",
        category: "Competition",
      },
      {
        title: "IEEE International Future Energy Electronics Conference 2025",
        subtitle: "Conference Participation",
        description: "Showcasing cutting-edge research in energy electronics and sustainable power systems.",
        category: "Conference",
      },
      {
        title: "Incubatee, Founders Institute",
        subtitle: "Ongoing Program",
        description: "Participating in the world's largest pre-seed startup accelerator program.",
        category: "Incubation",
      },
      {
        title: "Cohort 1, SCALE NCR",
        subtitle: "Ongoing Program",
        description: "Selected for the SCALE NCR acceleration program to scale business operations.",
        category: "Incubation",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        title: "Exhibitor - NCR TBI Summit 2024",
        subtitle: "Technology Business Incubator Summit",
        description: "Connected with industry leaders, investors, and innovators to drive sustainable and scalable impact in the energy sector.",
        category: "Exhibition",
      },
      {
        title: "1st Runner Up - ExoAsia Innovation Challenge",
        subtitle: "International Recognition",
        description: "Recognized for groundbreaking advancements in AI-powered energy solutions showcasing potential to revolutionize the energy sector in emerging markets.",
        category: "Competition",
      },
      {
        title: "IEEE TENCON Singapore 2024",
        subtitle: "International Conference",
        description: "Showcased AI-driven energy innovations, fostering global collaboration on sustainable technology.",
        category: "Conference",
      },
      {
        title: "Finalist – Tech Planter PH by Leave a Nest",
        subtitle: "Sustainable Smart Systems Category",
        description: "Finalist in the Sustainable Smart Systems category. Presented at the demo day in UST.",
        category: "Competition",
      },
      {
        title: "Cohort 6 – NEXStep Incubation",
        subtitle: "New Energy Nexus",
        description: "One of five startups selected for a 3-month clean energy and climate tech incubation program.",
        category: "Incubation",
      },
      {
        title: "Exited - REVV-EVODINE Venture Studio",
        subtitle: "Fast Logistics Group",
        description: "Completed enterprise incubation program at REVV-EVODINE Venture Studio powered by Fast Logistics Group.",
        category: "Incubation",
      },
      {
        title: "SEC Roadshow Participant",
        subtitle: "Capital Formation for MSME's and Startups",
        description: "Explored investment opportunities and funding strategies to scale ElectrifAI's impact in the energy sector.",
        category: "Program",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        title: "1st Runner Up & People's Choice Award",
        subtitle: "Meralco Idol Hackathon 2023",
        description: "Secured dual recognition for outstanding innovation and overwhelming audience appeal.",
        category: "Competition",
      },
      {
        title: "Silver Awardee",
        subtitle: "StartupQC Student Competition",
        description: "Earned distinction for exceptional startup ideas and execution in Quezon City's premier student startup competition.",
        category: "Competition",
      },
      {
        title: "1st Runner Up",
        subtitle: "PUP Undergraduate Research Competition",
        description: "Recognized for pioneering research and scholarly contribution in energy management systems.",
        category: "Competition",
      },
      {
        title: "Incubatee Cohort 1",
        subtitle: "DOST PUP TBI - PYLON Hub",
        description: "PYLON Hub fosters innovation and entrepreneurship by supporting technology-based startups and empowering students and faculty.",
        category: "Incubation",
      },
    ],
  },
];

const categoryColors = {
  Competition: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Conference: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Exhibition: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Incubation: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Program: "bg-blue-500/20 text-blue-400 border-blue-500/50",
};

export default function AwardsPage() {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode
    ? "bg-gradient-to-b from-[#000000] via-[#001027] to-[#000000]"
    : "bg-gradient-to-b from-gray-50 via-white to-gray-50";
  const textColor = isDarkMode ? "text-white" : "text-gray-900";
  const mutedText = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-900/50" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";

  return (
    <main className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-500`}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-20 mb-6 bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
              Partnerships & Awards
            </h1>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${mutedText}`}>
              A testament to our commitment to innovation, excellence, and sustainable impact in the energy sector
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`${cardBg} backdrop-blur-lg p-6 rounded-2xl border ${borderColor}`}
            >
              <div className="text-4xl font-bold text-blue-400">15+</div>
              <div className={`text-sm mt-2 ${mutedText}`}>Awards & Recognition</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className={`${cardBg} backdrop-blur-lg p-6 rounded-2xl border ${borderColor}`}
            >
              <div className="text-4xl font-bold text-blue-400">5+</div>
              <div className={`text-sm mt-2 ${mutedText}`}>Incubation Programs</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className={`${cardBg} backdrop-blur-lg p-6 rounded-2xl border ${borderColor}`}
            >
              <div className="text-4xl font-bold text-blue-400">120+</div>
              <div className={`text-sm mt-2 ${mutedText}`}>Target Partnerships</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className={`${cardBg} backdrop-blur-lg p-6 rounded-2xl border ${borderColor}`}
            >
              <div className="text-4xl font-bold text-blue-400">3</div>
              <div className={`text-sm mt-2 ${mutedText}`}>Years of Excellence</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {awards.map((yearGroup, yearIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: yearIndex * 0.1 }}
              className="mb-20"
            >
              {/* Year Header */}
              <div className="flex items-center mb-12">
                <div className="text-6xl md:text-8xl font-bold text-blue-400/20 mr-6">
                  {yearGroup.year}
                </div>
                <div className={`flex-1 h-px ${isDarkMode ? "bg-gray-800" : "bg-gray-300"}`}></div>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                {yearGroup.items.map((award, awardIndex) => (
                  <motion.div
                    key={awardIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: awardIndex * 0.05 }}
                    className={`${cardBg} backdrop-blur-lg p-6 md:p-8 rounded-2xl border ${borderColor} hover:border-blue-500/50 transition-all duration-300 group hover:scale-[1.02]`}
                  >
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          categoryColors[award.category as keyof typeof categoryColors]
                        }`}
                      >
                        {award.category}
                      </span>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {award.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-blue-400 font-medium mb-3">{award.subtitle}</p>

                    {/* Description */}
                    <p className={`text-sm md:text-base leading-relaxed ${mutedText}`}>
                      {award.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us on Our Journey
            </h2>
            <p className={`text-lg mb-8 ${mutedText}`}>
              Interested in partnering with ElectrifAI? Let's work together to revolutionize energy management.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
