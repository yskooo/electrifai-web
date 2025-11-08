'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart, Activity, ShieldCheck, Zap, TrendingDown, Lock } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const featuresData = [
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'IoT-enabled power consumption tracking',
  },
  {
    icon: ShieldCheck,
    title: 'AI Anomaly Detection',
    description: 'Detect power theft & anomalies instantly',
  },
  {
    icon: BarChart,
    title: 'Energy Optimization',
    description: 'Optimize usage patterns & reduce costs',
  },
  {
    icon: Zap,
    title: 'PnL & ESG Analytics',
    description: 'Financial & sustainability insights',
  },
  {
    icon: TrendingDown,
    title: 'Small Language Model',
    description: 'AI-powered energy intelligence',
  },
  {
    icon: Lock,
    title: 'Security & Safety',
    description: 'Enterprise-grade protection',
  },
];

const FeatureCard = ({ Icon, title, description, delay, isDarkMode }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
    whileHover={{ scale: 1.05, y: -10 }}
    className={`p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform text-center ${
      isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
    }`}
  >
    <div className="flex flex-col items-center gap-4">
      <Icon
        className={`h-14 w-14 md:h-20 md:w-20 text-[#00A5FF] shadow-md p-3 rounded-full ${
          isDarkMode ? 'bg-[#00A5FF]/10' : 'bg-[#00A5FF]/10'
        }`}
      />
      <h3 className={`text-lg md:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
        {title}
      </h3>
      <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  </motion.div>
);

const Features = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    controls.start({ opacity: 1, scale: 1 });
  }, [inView, controls]);

  return (
    <section
      id="Features"
      ref={sectionRef}
      className={`relative w-full py-16 lg:py-24 flex items-center justify-center overflow-hidden ${
        isDarkMode ? 'bg-gradient-to-b from-[#000000] to-[#001027]' : 'bg-gradient-to-b from-[#eef2f3] to-[#ffffff]'
      }`}
    >
      {/* Decorative Circles */}
      <div
        className={`absolute top-1/3 left-0 w-[250px] h-[250px] rounded-full blur-lg animate-pulse ${
          isDarkMode ? 'bg-[#001027] opacity-40' : 'bg-[#00A5FF] opacity-30'
        }`}
      />
      <div
        className={`absolute bottom-1/4 right-0 w-[350px] h-[350px] rounded-full blur-2xl animate-pulse ${
          isDarkMode ? 'bg-[#000000] opacity-40' : 'bg-[#00A5FF] opacity-30'
        }`}
      />

      <div className="container flex flex-col px-4 md:px-6 max-w-6xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <h2 className="text-lg font-semibold text-[#00A5FF] tracking-wider uppercase mb-2">
            How We&apos;re Different
          </h2>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tighter mb-4 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
            Smart Energy Management
          </h2>
          <p className={`text-base md:text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Our platform offers real-time monitoring of power consumption, AI-based anomaly detection to prevent energy theft, and intelligent insights for optimal energy management.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.3 + index * 0.1}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
