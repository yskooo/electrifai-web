/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useDarkMode } from '../context/DarkModeContext';
import { Briefcase, Users, Zap, Heart, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const CareersPage = () => {
  const { isDarkMode } = useDarkMode();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const positions = [
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      level: 'All Levels',
      description: 'Develop and optimize machine learning algorithms for energy prediction and anomaly detection.',
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      level: 'Mid-Senior',
      description: 'Build scalable web applications and IoT integration platforms for our energy management system.',
    },
    {
      title: 'IoT Systems Specialist',
      department: 'Engineering',
      level: 'All Levels',
      description: 'Design and maintain IoT device networks for real-time energy monitoring across power grids.',
    },
    {
      title: 'Data Scientist',
      department: 'Data & Analytics',
      level: 'Mid-Senior',
      description: 'Analyze energy consumption patterns and create predictive models for optimization.',
    },
    {
      title: 'Product Manager',
      department: 'Product',
      level: 'Senior',
      description: 'Lead product vision and strategy for our energy management solutions.',
    },
    {
      title: 'Business Development Executive',
      department: 'Sales & Partnerships',
      level: 'All Levels',
      description: 'Identify market opportunities and build strategic partnerships in the energy sector.',
    },
  ];

  const whyJoin = [
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with AI, IoT, and blockchain technologies shaping the future of energy.',
    },
    {
      icon: Heart,
      title: 'Impact-Driven Mission',
      description: 'Contribute to sustainable energy solutions aligned with UN Sustainable Development Goals.',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a diverse team of innovators passionate about solving real-world problems.',
    },
    {
      icon: Award,
      title: 'Growth & Learning',
      description: 'Access to professional development, training, and mentorship opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Clear career paths and opportunities to grow with a rapidly expanding company.',
    },
    {
      icon: Briefcase,
      title: 'Competitive Benefits',
      description: 'Competitive salary, flexible work arrangements, and comprehensive benefits.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <main
      className={`min-h-screen pt-20 ${
        isDarkMode
          ? 'bg-gradient-to-r from-[#000000] to-[#001027] text-white'
          : 'bg-gradient-to-r from-[#eef2f3] to-[#ffffff] text-[#0A0A0B]'
      }`}
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1
            className={`text-4xl md:text-6xl font-bold mb-6 ${
              isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
            }`}
          >
            Build the Future of Energy
          </h1>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Join ElectrifAI and help revolutionize energy management through innovative AI and IoT solutions. We're building a team of talented individuals passionate about sustainable energy.
          </p>
          <Link
            href="#talent-pool"
            className="inline-block px-8 py-4 bg-[#00A5FF] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Join Our Talent Pool
          </Link>
        </motion.div>


        {/* Open Positions */}
        <div className="mb-20">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-12 text-center ${
              isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
            }`}
          >
            Open Positions
          </h2>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {positions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl ${
                  isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'
                } shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
                      }`}
                    >
                      {position.title}
                    </h3>
                    <p className="text-[#00A5FF] font-medium text-sm">
                      {position.department}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#00A5FF]/20 text-[#00A5FF] rounded-full text-sm font-medium">
                    {position.level}
                  </span>
                </div>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  } mb-4`}
                >
                  {position.description}
                </p>
                <button className="text-[#00A5FF] font-medium hover:underline transition-all">
                  Learn More →
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Talent Pool Section */}
        <motion.div
          id="talent-pool"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className={`p-12 rounded-xl ${
            isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'
          } shadow-lg mb-20`}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
            }`}
          >
            Join Our Talent Pool
          </h2>
          <p
            className={`text-lg max-w-3xl mx-auto text-center mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Don't see a position that matches your skills? Join our talent pool and be notified when new opportunities that align with your profile become available. We're always looking for exceptional talent to join our team.
          </p>
          <div className="flex justify-center text-center">
            <a
              href="https://tally.so/r/1AP2Gg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#00A5FF] text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Apply to Talent Pool
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default CareersPage;