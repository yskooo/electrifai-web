'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../context/DarkModeContext';

const SolutionsPage = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const solutions = [
    {
      title: 'AI Engineering Services',
      description: 'End-to-end AI system development, from prototyping to scalable deployment across various industries.',
      features: ['System Design', 'Model Deployment', 'AI Infrastructure']
    },
    {
      title: 'Machine Learning',
      description: 'Custom machine learning solutions using statistical models to analyze and predict data trends.',
      features: ['Data Preprocessing', 'Model Training', 'Real-time Inference']
    },
    {
      title: 'Deep Learning',
      description: 'Advanced neural network solutions for image, audio, and language processing applications.',
      features: ['Computer Vision', 'Natural Language Processing', 'Speech Recognition']
    }
  ];

  return (
    <main className={`min-h-screen mt-28 ${
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
            Our Solutions
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Innovative artificial intelligence solutions to power your digital transformation
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${
                isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'
              } rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                  {solution.title}
                </h3>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-[#00A5FF] rounded-full mr-2"></span>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SolutionsPage;
