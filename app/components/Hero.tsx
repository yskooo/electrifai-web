'use client'
import { motion } from 'framer-motion';
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-full lg:h-screen flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#eef2f3] to-[#ffffff] px-6 sm:px-12 md:px-16 py-20 lg:pb-10 overflow-hidden lg:pt-0">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Large Circle */}
        <div className="absolute top-1/4 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] bg-[#2F4BE5] opacity-20 rounded-full mix-blend-multiply blur-3xl"></div>
        {/* Small Circle */}
        <div className="absolute bottom-1/4 right-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] bg-[#004aad] opacity-20 rounded-full mix-blend-multiply blur-2xl"></div>
        {/* Floating Rectangles */}
        <div className="absolute top-1/3 right-1/4 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#2F4BE5] opacity-10 rounded-lg rotate-45 mix-blend-multiply blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[75px] h-[75px] sm:w-[125px] sm:h-[125px] lg:w-[150px] lg:h-[150px] bg-[#004aad] opacity-10 rounded-lg -rotate-45 mix-blend-multiply blur-lg"></div>
      </div>

      {/* Text Section */}
      <div className="flex-1 text-left z-10 mt-10 md:mt-0 lg:mt-10 ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0B] leading-tight"
        >
          The <span className="text-[#004aad] underline">ElectrifAI</span>, The Smart Choice for Energy Optimization
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-4 text-md sm:text-xl md:text-2xl lg:text-xl text-gray-700 max-w-xl lg:max-w-2xl leading-relaxed"
        >
          Empowering households with intelligent energy management solutions. Our cutting-edge IoT devices and advanced AI algorithms enable real-time monitoring, anomaly detection, and predictive analytics to optimize power consumption, reduce costs, and ensure energy efficiency
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 lg:gap-0 space-y-4 sm:space-y-0 sm:space-x-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="#Contact" className="px-8 py-4 sm:px-10 sm:py-4 bg-[#004aad] text-white font-medium text-base sm:text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
          >
            <Link href="#Features" className="px-8 py-4 sm:px-10 sm:py-4 border-2 border-[#2F4BE5] text-[#2F4BE5] font-medium text-base sm:text-lg shadow-lg hover:bg-[#2F4BE5] hover:text-white transition-all duration-300 transform hover:scale-105">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 z-10">
        <motion.img
          src="/app-electrifai.png"
          alt="Team collaborating"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="object-contain rounded-lg w-full h-auto max-h-[700px] mt-10"
        />
      </div>
    </section>
  );
};

export default Hero;
