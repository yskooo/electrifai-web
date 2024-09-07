'use client'
import { motion } from 'framer-motion';
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-start bg-gradient-to-r from-[#0A0A0B] to-[#001F3F]">
      <div className="absolute inset-0 w-1/2 bg-gradient-custom p-6 opacity-20 blur-sm" />
      <div className="relative text-left text-white px-4 md:px-8 lg:px-12 xl:px-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="xl:w-2/3 w-full text-4xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
        >
          The Smart Choice for Energy Optimization
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 max-w-3xl leading-relaxed"
        >
          Discover the ultimate tool for energy management—track usage, optimize savings, and secure your resources against theft. 
          Our cutting-edge technology offers you control and efficiency like never before.
        </motion.p>
        <div className="mt-8 flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 gap-y-8 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 }}
          >
            <Link href="#Contact" className="px-10 py-4 bg-[#2F4BE5] text-white font-medium text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.6 }}
          >
            <Link href="#Features" className="px-10 py-4 border-2 border-white text-white font-medium text-lg shadow-lg hover:bg-white hover:text-[#0A0A0B] transition-all duration-300 transform hover:scale-105">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
