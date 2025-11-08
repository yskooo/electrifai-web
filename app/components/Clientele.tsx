'use client';

import { motion } from 'framer-motion';
import { Users, Building2, Landmark } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext';

const Clientele = () => {
  const { isDarkMode } = useDarkMode();

  // Styles based on dark mode state
  const styles = {
    bg: isDarkMode
      ? 'bg-gradient-to-r from-[#000000] to-[#001027]'
      : 'bg-gradient-to-r from-[#eef2f3] to-[#ffffff]',
    text: isDarkMode ? 'text-white' : 'text-[#0A0A0B]',
    description: isDarkMode ? 'text-gray-300' : 'text-gray-700',
  };

  const clienteleData = [
    {
      title: 'Consumers',
      subtitle: 'B2C',
      description: 'Empowering individual households with smart energy management tools for personal consumption optimization and cost savings.',
      icon: Users,
      color: '#00A5FF',
      highlight: 'High Volume, Personal Impact',
    },
    {
      title: 'Enterprises',
      subtitle: 'B2B',
      description: 'Helping businesses scale energy efficiency across their operations with advanced monitoring, predictive maintenance, and real-time optimization.',
      icon: Building2,
      color: '#00A5FF',
      highlight: 'Profit & Loss, Automated ESG',
    },
    {
      title: 'Government',
      subtitle: 'B2G',
      description: 'Transforming the nation\'s energy infrastructure through strategic partnerships that drive sustainable development and nation-building initiatives.',
      icon: Landmark,
      color: '#00A5FF',
      highlight: 'Nation Building, Strategic Impact',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={`py-20 px-4 sm:px-8 md:px-12 lg:px-16 transition-colors duration-300 ${styles.bg}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-snug">
            <span className={styles.text}>Our </span>
            <span className="text-[#00A5FF]">Clientele</span>
              
          </h2>
          <p className={`mt-4 text-lg md:text-xl max-w-2xl mx-auto ${styles.description}`}>
            Serving diverse markets with tailored energy solutions across three strategic segments
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {clienteleData.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative group overflow-hidden rounded-2xl p-8 transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-[#1B1B1D] hover:bg-[#252527] border border-gray-800 hover:border-gray-700'
                    : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                } hover:shadow-2xl`}
              >
                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${segment.color}, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 inline-flex p-3 rounded-xl"
                    style={{
                      backgroundColor: `${segment.color}20`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon
                      size={32}
                      style={{ color: segment.color }}
                      className="transition-transform duration-300"
                    />
                  </motion.div>

                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${styles.text}`}>
                      {segment.title}
                    </h3>
                    <div
                      className="text-sm font-semibold px-3 py-1 rounded-full inline-block"
                      style={{
                        color: segment.color,
                        backgroundColor: `${segment.color}15`,
                      }}
                    >
                      {segment.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 leading-relaxed text-sm md:text-base ${styles.description}`}>
                    {segment.description}
                  </p>

                  {/* Highlight */}
                  <div
                    className="text-xs md:text-sm font-semibold py-2 px-4 rounded-lg inline-block"
                    style={{
                      color: segment.color,
                      backgroundColor: `${segment.color}10`,
                    }}
                  >
                    {segment.highlight}
                  </div>

                  {/* Decorative Border Bottom */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${segment.color}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Clientele;
