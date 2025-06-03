'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../context/DarkModeContext';

const AboutPage = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Continuously pushing boundaries in energy technology.'
    },
    {
      title: 'Sustainability',
      description: 'Committed to environmental responsibility and sustainable practices.'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in all our solutions.'
    },
    {
      title: 'Integrity',
      description: 'Maintaining honest and ethical business practices.'
    }
  ];

  return (
    <main className={`min-h-screen pt-20 ${
      isDarkMode ? 'bg-gradient-to-r from-[#000000] to-[#001027] text-white' : 'bg-gradient-to-r from-[#eef2f3] to-[#ffffff] text-[#0A0A0B]'
    }`}>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
            About ElectrifAI
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Pioneering the future of energy management through innovation and sustainability
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'} shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>Our Mission</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              To revolutionize energy management through innovative AI solutions, making power systems more efficient, secure, and sustainable for future generations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'} shadow-lg`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>Our Vision</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              To be the global leader in AI-powered energy management solutions, setting new standards for efficiency and security in the power industry.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div ref={ref} className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'} shadow-lg text-center`}
              >
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                  {value.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`p-8 rounded-xl ${isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'} shadow-lg`}
        >
          <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>Our Story</h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
            Founded with a vision to revolutionize energy management, ElectrifAI emerged from a group of passionate innovators determined to make a difference in the power industry.
          </p>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Today, we continue to push the boundaries of what&apos;s possible in energy optimization, combining cutting-edge AI technology with sustainable practices to create a brighter, more efficient future.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default AboutPage;
