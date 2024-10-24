'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';

const Hero = () => {
  const { isDarkMode } = useDarkMode();

  // Define styles based on dark mode state
  const bgClass = isDarkMode
    ? 'bg-gradient-to-r from-[#000000] to-[#001027]'
    : 'bg-gradient-to-r from-[#eef2f3] to-[#ffffff]';

  const textColor = isDarkMode ? 'text-white' : 'text-[#0A0A0B]';
  const descriptionColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
  const buttonColor = isDarkMode ? 'bg-[#004aad]' : 'bg-[#00A5FF]';
  const learnMoreTextColor = isDarkMode ? 'text-white' : 'text-[#00A5FF]';

  // Background circle styles
  const circles = [
    {
      className: `absolute top-1/4 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] ${isDarkMode ? 'bg-[#001027] opacity-40' : 'bg-[#00A5FF] opacity-20'}`,
      additionalClasses: 'rounded-full mix-blend-multiply blur-3xl'
    },
    {
      className: `absolute bottom-1/4 right-0 w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] ${isDarkMode ? 'bg-[#000000] opacity-30' : 'bg-[#00A5FF] opacity-20'}`,
      additionalClasses: 'rounded-full mix-blend-multiply blur-2xl'
    },
    {
      className: `absolute top-1/3 right-1/4 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] ${isDarkMode ? 'bg-[#000000] opacity-20' : 'bg-[#00A5FF] opacity-10'}`,
      additionalClasses: 'rounded-lg rotate-45 mix-blend-multiply blur-xl'
    },
    {
      className: `absolute bottom-1/3 left-1/4 w-[75px] h-[75px] sm:w-[125px] sm:h-[125px] lg:w-[150px] lg:h-[150px] ${isDarkMode ? 'bg-[#001027] opacity-20' : 'bg-[#00A5FFC] opacity-10'}`,
      additionalClasses: 'rounded-lg -rotate-45 mix-blend-multiply blur-lg'
    }
  ];

  return (
    <section
      className={`relative w-full h-full lg:h-screen flex flex-col lg:flex-row items-center justify-between ${bgClass} px-6 sm:px-12 md:px-16 md:py-32 py-20 lg:pb-10 overflow-hidden lg:pt-0`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {circles.map((circle, index) => (
          <div key={index} className={`${circle.className} ${circle.additionalClasses}`}></div>
        ))}
      </div>

      {/* Text Section */}
      <div className="flex-1 text-left z-10 mt-10 md:mt-0 lg:mt-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`text-2xl md:text-4xl lg:text-5xl font-bold ${textColor} leading-tight`}
        >
          {/* The <span className="text-[#00A5FF] underline">ElectrifAI</span>, */}
           The Smart Choice for Energy Optimization
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className={`mt-4 text-md  md:text-xl ${descriptionColor} max-w-xl lg:max-w-2xl leading-relaxed`}
        > 
        <span className="text-[#00A5FF] ">ElectrifAI </span>
          utilize AI algorithms for predictive maintenance, energy optimization, and theft detection, while IoT devices enable real-time monitoring and data collection across the grid.
          {/* Empowering households with intelligent energy management solutions. Our cutting-edge IoT devices and advanced AI algorithms enable real-time monitoring, anomaly detection, and predictive analytics to optimize power consumption, reduce costs, and ensure energy efficiency. */}
        </motion.p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 lg:gap-0 space-y-4 sm:space-y-0 sm:space-x-4">
          {[
            { href: '#Contact', text: 'Get Started', color: buttonColor },
            { href: '#Features', text: 'Learn More', color: 'border-2 border-[#00A5FF]' },
          ].map((button, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut', delay: 0.4 + index * 0.2 }}
            >
              <Link
                href={button.href}
                className={`px-8 py-4 sm:px-10 sm:py-4 ${button.color} ${index === 1 ? learnMoreTextColor : 'text-white'} font-medium text-base sm:text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105`}
              >
                {button.text}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block lg:w-1/2 z-10">
        <motion.img
          src="/svgs/hero.svg"
          alt="Team collaborating"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="object-contain rounded-lg w-full h-auto max-h-[600px] mt-20"
        />
      </div>
    </section>
  );
};

export default Hero;
