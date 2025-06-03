'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useDarkMode();

  // Styles based on dark mode state
  const styles = {
    bg: isDarkMode
      ? 'bg-gradient-to-r from-[#000000] to-[#001027]'
      : 'bg-gradient-to-r from-[#eef2f3] to-[#ffffff]',
    text: isDarkMode ? 'text-white' : 'text-[#0A0A0B]',
    description: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    button: isDarkMode ? 'bg-[#004aad]' : 'bg-[#00A5FF]',
    learnMore: isDarkMode ? 'text-white' : 'text-[#00A5FF]'
  };
  return (    <section
      className={`mx-auto mt-16 relative w-full min-h-[90vh] md:min-h-screen flex flex-col lg:flex-row items-center ${styles.bg} px-4 sm:px-8 md:px-16 py-12 md:py-20 lg:py-32 overflow-hidden gap-8 lg:gap-0`}
    >
      {/* Text Section */}
      <div className="flex-1 text-left z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold ${styles.text} leading-tight md:leading-tighter max-w-[600px] lg:max-w-none`}
        >
          The Smart Choice for Energy Optimization
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className={`mt-3 md:mt-4 text-base sm:text-lg md:text-xl ${styles.description} max-w-xl lg:max-w-2xl leading-relaxed`}
        >
          <span className="text-[#00A5FF]">ElectrifAI</span> utilizes AI algorithms for predictive maintenance, energy optimization, and anomaly detection, while IoT devices enable real-time monitoring and data collection across the grid.
        </motion.p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          {[{ href: '#Contact', text: 'Get Started', bg: styles.button, textColor: 'text-white' },
            { href: '#Solutions', text: 'Learn More', bg: 'border-2 border-[#00A5FF]', textColor: styles.learnMore }].map((btn, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={btn.href}
                className={`block px-6 py-3 sm:px-8 sm:py-4 ${btn.bg} ${btn.textColor} font-medium text-base md:text-lg shadow-md hover:opacity-80 transition-all duration-300 text-center`}
              >
                {btn.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Section */}      
      <div className="w-full lg:w-1/2 z-10 px-4 sm:px-0 order-last">
        <motion.img
          src="/eli.png"
          alt="Energy Optimization Illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="object-contain w-full h-auto max-h-[250px] md:max-h-[400px] lg:max-h-[600px] mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
