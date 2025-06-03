'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../context/DarkModeContext';

const ProductsPage = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      title: 'ELI',
      description: 'Comprehensive energy monitoring system with real-time analytics and reporting.',
      features: ['Real-time Dashboard', 'Mobile App Integration', 'Custom Reports'],
      status: 'Available'
    },
    {
      title: 'EduGAIte',
      description: 'Advanced security system for detecting and preventing energy theft.',
      features: ['AI Detection', 'Instant Alerts', 'Tamper Protection'],
      status: 'Available'
    },
    {
      title: 'Serbisyow AI',
      description: 'Central management system for intelligent power distribution.',
      features: ['Grid Management', 'Load Balancing', 'Remote Control'],
      status: 'Available'
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
            Our Products
          </h1>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Industry-leading solutions for modern energy management
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${
                isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'
              } rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                    {product.title}
                  </h3>
                  <span className="text-[#00A5FF] text-sm font-medium px-2 py-1 bg-[#00A5FF]/10 rounded">
                    {product.status}
                  </span>
                </div>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
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

export default ProductsPage;
