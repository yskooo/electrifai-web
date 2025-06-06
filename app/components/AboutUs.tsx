"use client";
import { motion } from "framer-motion";
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
import {
  Target,
  Eye,
  Lightbulb,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";

const cardVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const values = [
  {
    title: "Innovation",
    description:
      "We continuously push boundaries using AI and IoT to redefine energy solutions.",
  },
  {
    title: "Sustainability",
    description:
      "Our solutions are designed with environmental impact and long-term scalability in mind.",
  },
  {
    title: "Integrity",
    description:
      "We uphold transparency, ethics, and trust in every partnership and product we build.",
  },
  {
    title: "Excellence",
    description:
      "We strive for world-class quality and performance in all our systems and services.",
  },
];

export default function AboutUs() {
  const { isDarkMode } = useDarkMode();

  const bgGradient = isDarkMode
    ? "bg-gradient-to-b from-[#000000] to-[#001027]"
    : "bg-gradient-to-b from-[#eef2f3] to-[#ffffff]";

  const cardStyle = isDarkMode
    ? "bg-[#1B1B1D] text-gray-300"
    : "bg-white text-[#0A0A0B]";

  const textColor = isDarkMode ? "text-white" : "text-[#0A0A0B]";
  const subText = isDarkMode ? "text-gray-300" : "text-gray-600";

  return (
    <section
      id="AboutUs"
      className={`relative w-full py-20 md:py-28 ${bgGradient} overflow-hidden flex justify-center`}
    >
      {/* Blurred Circles */}
      <div
        className={`absolute top-1/4 left-[-80px] w-[250px] h-[250px] rounded-full blur-3xl animate-pulse ${
          isDarkMode ? "bg-[#001027]/40" : "bg-[#00A5FF]/20"
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-[-80px] w-[350px] h-[350px] rounded-full blur-2xl animate-pulse ${
          isDarkMode ? "bg-[#000000]/40" : "bg-[#00A5FF]/30"
        }`}
      />

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-extrabold ${textColor} mb-4`}>
            About Us
          </h2>
          <p className={`max-w-2xl mx-auto ${subText} text-lg`}>
            At Electrifai PH Solutions Corp, we power the future with precision. We deliver smart, sustainable energy solutions using AI and IoT for communities and industries.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[
            {
              title: "Our Mission",
              description:
                "To leverage cutting-edge AI and IoT technologies for real-time energy monitoring, fostering sustainable energy use across all sectors.",
              direction: -1,
              icon: <Target className="w-6 h-6 text-[#00A5FF]" />,
            },
            {
              title: "Our Vision",
              description:
                "To lead energy innovation by creating intelligent systems that revolutionize energy management while promoting environmental and economic progress.",
              direction: 1,
              icon: <Eye className="w-6 h-6 text-[#00A5FF]" />,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              custom={item.direction}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ${cardStyle}`}
            >
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`${subText} text-base leading-relaxed`}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className={`text-3xl font-bold ${textColor} mb-6`}>
            Our Core Values
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, index) => {
            const Icon =
              val.title === "Innovation"
                ? Lightbulb
                : val.title === "Sustainability"
                ? Leaf
                : val.title === "Integrity"
                ? ShieldCheck
                : Star;

            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-xl p-6 shadow-md hover:shadow-xl transition ${cardStyle}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-[#00A5FF]" />
                  <h4 className={`text-lg font-semibold ${textColor}`}>
                    {val.title}
                  </h4>
                </div>
                <p className={`text-sm ${subText}`}>{val.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
