"use client";
import { motion } from "framer-motion";
import React from "react";
import { useDarkMode } from "../context/DarkModeContext"; // Import Dark Mode Context

export default function AboutUs() {
  const { isDarkMode } = useDarkMode(); // Get dark mode state

  return (
    <section
      id="AboutUs"
      className={`w-full py-16 md:py-24 lg:py-32 ${
        isDarkMode ? "bg-gradient-to-b from-[#000000] to-[#001027]" : "bg-gradient-to-b from-[#eef2f3] to-[#ffffff]"
      } flex items-center justify-center relative overflow-hidden`}
    >
      {/* Decorative Elements */}
      <div
        className={`absolute top-1/4 left-0 w-[250px] h-[250px] ${
          isDarkMode ? "bg-[#001027] opacity-40" : "bg-[#004aad] opacity-20"
        } rounded-full blur-lg animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-0 w-[350px] h-[350px] ${
          isDarkMode ? "bg-[#000000] opacity-40" : "bg-[#2F4BE5] opacity-30"
        } rounded-full blur-2xl animate-pulse`}
      ></div>

      <div className="container px-4 md:px-6 max-w-7xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 lg:mb-24"
        >
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tighter ${
            isDarkMode ? "text-white" : "text-[#0A0A0B]"
          } mb-4`}>
            About Us
          </h2>
          <p className={`text-base md:text-lg ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          } max-w-3xl mx-auto`}>
            We are committed to providing innovative solutions that make energy management efficient, secure, and sustainable for a better future.
          </p>
        </motion.div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 px-4 md:px-0">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg ${
              isDarkMode ? "bg-[#1B1B1D] text-gray-300" : "bg-white text-[#0A0A0B]"
            } hover:shadow-2xl transition-shadow duration-300 transform`}
          >
            <h3 className={`text-xl md:text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-[#0A0A0B]"
            } mb-4`}>
              Our Mission
            </h3>
            <p className={`text-sm md:text-base leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              To leverage cutting-edge AI and IoT technologies to enable precise, real-time energy consumption monitoring and foster a culture of sustainable energy use across communities and industries.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg ${
              isDarkMode ? "bg-[#1B1B1D] text-gray-300" : "bg-white text-[#0A0A0B]"
            } hover:shadow-2xl transition-shadow duration-300 transform`}
          >
            <h3 className={`text-xl md:text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-[#0A0A0B]"
            } mb-4`}>
              Our Vision
            </h3>
            <p className={`text-sm md:text-base leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}>
              To be at the forefront of energy innovation, creating intelligent systems that revolutionize the way energy is managed and consumed, while promoting environmental stewardship and economic growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
