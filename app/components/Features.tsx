'use client';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Activity, ShieldCheck } from 'lucide-react';
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';

const Features = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const { isDarkMode } = useDarkMode(); 

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.9 });
    }
  }, [inView, controls]);

  return (
    <section
      id="Features"
      ref={sectionRef}
      className={`relative w-full py-16 md:py-16 lg:py-24 ${
        isDarkMode ? 'bg-gradient-to-b from-[#000000] to-[#001027]' : 'bg-gradient-to-b from-[#eef2f3] to-[#ffffff]'
      } flex items-center justify-center overflow-hidden`}
    >
      {/* Decorative Elements */}
      <div className={`absolute top-1/3 left-0 w-[250px] h-[250px] ${
        isDarkMode ? 'bg-[#001027] opacity-40' : 'bg-[#004aad] opacity-30'
      } rounded-full blur-lg animate-pulse`}></div>
      <div className={`absolute bottom-1/4 right-0 w-[350px] h-[350px] ${
        isDarkMode ? 'bg-[#000000] opacity-40' : 'bg-[#2F4BE5] opacity-30'
      } rounded-full blur-2xl animate-pulse`}></div>

      <div className="container flex flex-col gap-0 px-4 md:px-6 max-w-6xl z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-0"
        >
          <h2 className={`text-lg font-semibold ${
            isDarkMode ? 'text-[#2F4BE5]' : 'text-[#004aad]'
          } tracking-wider uppercase mb-2`}>
            How We&apos;re Different
          </h2>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tighter ${
            isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
          } mb-4`}>
            Innovative Solutions for Real-time Energy Management
          </h2>
          <p className={`text-base md:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-3xl mx-auto`}>
            Our platform offers real-time monitoring of power consumption, AI-based anomaly detection to prevent energy theft, and intelligent insights for optimal energy management.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-full mx-auto px-4 md:px-0">
          {/* Card 1: Real-time Power Consumption Tracking */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg ${
              isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
            } hover:shadow-2xl transition-shadow duration-300 transform text-center`}
          >
            <img
              src="/iot-device.png"
              alt="Real-time Monitoring"
              className="mx-auto w-32 h-32 md:w-28 md:h-28 mb-2 object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col items-center">
              <Activity className={`h-12 w-12 md:h-16 md:w-16 ${
                isDarkMode ? 'text-[#2F4BE5]' : 'text-[#2F4BE5]'
              } shadow-md p-2 rounded-full bg-gray-50`} />
              <h3 className={`text-xl md:text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              } mt-4 mb-2`}>
                Real-time Power Consumption
              </h3>
              <p className={`text-sm md:text-base max-w-xs ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Monitor your power consumption in real-time using our IoT-enabled devices and gain visibility into your energy usage patterns at any moment.
              </p>
            </div>
          </motion.div>

          {/* Card 2: AI Anomaly Detection */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg ${
              isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
            } hover:shadow-2xl transition-shadow duration-300 transform text-center`}
          >
            <img
              src="app-electrifai.png"
              alt="AI Anomaly Detection"
              className="mx-auto w-32 h-32 md:w-28 md:h-28 mb-2 object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col items-center">
              <ShieldCheck className={`h-12 w-12 md:h-16 md:w-16 ${
                isDarkMode ? 'text-[#2F4BE5]' : 'text-[#2F4BE5]'
              } shadow-md p-2 rounded-full bg-gray-50`} />
              <h3 className={`text-xl md:text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              } mt-4 mb-2`}>
                AI Anomaly Detection
              </h3>
              <p className={`text-sm md:text-base max-w-xs ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Leverage our AI algorithms to detect anomalies in power consumption, identify potential power theft, and ensure your energy resources are secure.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Energy Insights & Optimization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
            className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg ${
              isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
            } hover:shadow-2xl transition-shadow duration-300 transform text-center`}
          >
            <img
              src="app-electrifai2.png"
              alt="Energy Optimization"
              className="mx-auto w-32 h-32 md:w-28 md:h-28 mb-2 object-contain rounded-full shadow-sm"
            />
            <div className="flex flex-col items-center">
              <BarChart className={`h-12 w-12 md:h-16 md:w-16 ${
                isDarkMode ? 'text-[#2F4BE5]' : 'text-[#2F4BE5]'
              } shadow-md p-2 rounded-full bg-gray-50`} />
              <h3 className={`text-xl md:text-2xl font-bold ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              } mt-4 mb-2`}>
                Energy Insights & Optimization
              </h3>
              <p className={`text-sm md:text-base max-w-xs ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Utilize predictive analytics to gain insights into your energy consumption and optimize usage patterns to reduce costs and increase efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
