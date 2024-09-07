'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cpu, BarChart } from 'lucide-react';
import React from 'react';

const Features = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

  // Trigger animations when section is in view
  React.useEffect(() => {
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
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-[#000000] to-[#242424] flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-xl font-semibold text-gray-400 text-center mb-2"
        >
          How We&apos;re Different
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12 text-white"
        >
          Our Innovative Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center"
          >
            <div className="flex items-start space-x-4">
              <Brain className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Machine Learning</h3>
                <p className="text-gray-400">Leverage state-of-the-art algorithms to solve complex problems.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center"
          >
            <div className="flex items-start space-x-4">
              <Cpu className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Processing</h3>
                <p className="text-gray-400">Process and analyze data at lightning-fast speeds for instant insights.</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            className="p-6 rounded-lg border border-gray-700 bg-gradient-to-r from-[#1A1A1A] to-[#242424] h-56 flex items-center md:col-span-2"
          >
            <div className="flex items-start space-x-4">
              <BarChart className="h-12 w-12 text-white" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Predictive Analytics</h3>
                <p className="text-gray-400">Forecast trends and make data-driven decisions with our AI models.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
