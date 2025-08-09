/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useDarkMode } from '../context/DarkModeContext';

// const logos = [
//   // { src: "/logos/gcp.png", alt: "SIBOL Logo", height: "h-32 md:h-24" },
//   // { src: "/logos/aws.webp", alt: "UPLB TBI Logo", height: "h-24 md:h-24" },
//   { src: "/logos/fast.jpg", alt: "UPLB TTBDO Logo", height: "h-20 md:h-24" },
//   { src: "/logos/nexus.png", alt: "SS Logo", height: "h-20 md:h-24" },

//   { src: "/logos/tenconsg.png", alt: "IEEE TenCon SG Logo", height: "h-12 md:h-12" },
//   { src: "/logos/phstartupweek.png", alt: "PH Startup Week Logo", height: "h-12 md:h-16" },

//   { src: "/logos/leave-a-nest.webp", alt: " Logo", height: "h-18 md:h-32" },
//   { src: "/logos/pbw.png", alt: " Logo", height: "h-20 md:h-24" },
//   { src: "/logos/pupresearch.png", alt: " Logo", height: "h-18 md:h-32" },
// ];

const startups = [
  { src: "/logos/gcp.png", alt: "SIBOL Logo", height: "h-16" },
  { src: "/logos/aws.webp", alt: "UPLB TBI Logo", height: "h-20" },
]
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
  return (    
  <>
  <section
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
          Make Each <br /> kWh Count
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
            { href: 'https://tally.so/r/w5AolZ', text: 'Early Access', bg: 'border-2 border-[#00A5FF]', textColor: styles.learnMore }].map((btn, index) => (
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
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          {startups.map((startup, index) => (
            <div key={index} className="flex items-center">
              <img
                src={startup.src}
                alt={startup.alt}
                className={`block object-contain ${startup.height}`}
              />
            </div>
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

      <div className={`mx-auto w-full py-8 ${styles.bg}`}>
        <div className="flex flex-col w-full mb-4 text-center">
          {/* Optional Heading */}
        </div>
        <div className="relative overflow-hidden">
          {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:flex animate-logos gap-2">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`block object-contain ${logo.height}`}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
      {/* <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logos {
          display: flex;
          width: 250%;
          animation: scroll 20s linear infinite;
        }
      `}</style> */}
      </>
  );
};

export default Hero;
