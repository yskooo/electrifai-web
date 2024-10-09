'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext';

const Awards = () => {
  const { isDarkMode } = useDarkMode()

  return (
    <section
      id="Awards"
      className={`w-full py-16 md:py-32 lg:py-40 ${
        isDarkMode ? 'bg-gradient-to-b from-[#000000] to-[#001027]' : 'bg-gradient-to-b from-[#eef2f3] to-[#ffffff]'
      } text-${isDarkMode ? 'white' : '#0A0A0B'} relative overflow-hidden`}
    >
      {/* Decorative Background Elements */}
      <div
        className={`absolute top-1/4 left-0 w-[200px] h-[200px] ${
          isDarkMode ? 'bg-[#001027] opacity-40' : 'bg-[#00A5FF] opacity-20'
        } rounded-full blur-2xl animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-0 w-[350px] h-[350px] ${
          isDarkMode ? 'bg-[#000000] opacity-40' : 'bg-[#00A5FF] opacity-20'
        } rounded-full blur-[100px]`}
      ></div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0">
        {/* Left Column: Text Content */}
        <div className="lg:w-2/3">
          <h3
            className={`text-center lg:text-left ${
              isDarkMode ? 'text-[#00A5FF]' : 'text-[#00A5FF]'
            } text-md uppercase tracking-wider mb-4`}
          >
            Continued Pursuit of Growth
          </h3>
          <h2
            className={`text-4xl font-bold tracking-tight sm:text-5xl text-center lg:text-left mb-6 ${
              isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
            }`}
          >
            Partnerships &amp; Awards
          </h2>
          <p
            className={`text-center lg:text-left text-lg sm:text-xl mb-8 lg:mb-12 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Looking to partner with over 120 electric cooperatives across the Philippines
            <br />
            <span className={isDarkMode ? 'text-[#00A5FF]' : 'text-[#00A5FF]'}>
              to target rural and semi-urban areas, to reach even more people.
            </span>
          </p>

          {/* Awards List */}
          <div
            className={`p-6 rounded-lg border shadow-lg lg:max-w-lg mx-auto lg:mx-0 transition-all hover:shadow-2xl ${
              isDarkMode ? 'bg-[#1B1B1D] border-[#00A5FF]' : 'bg-white border-gray-300'
            }`}
          >
            <ul className="space-y-6">
              <li className="text-lg">
                <span
                  className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
                  }`}
                >
                  1st Runner Up &amp; People&apos;s Choice Award - Meralco Idol Hackathon 2023
                </span>
                <br />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Secured recognition for outstanding innovation and audience appeal.
                </span>
              </li>
              <li className="text-lg">
                <span
                  className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
                  }`}
                >
                  Silver Awardee - StartupQC Student Competition
                </span>
                <br />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Earned distinction for exceptional startup ideas and execution.
                </span>
              </li>
              <li className="text-lg">
                <span
                  className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
                  }`}
                >
                  1st Runner Up - PUP Undergraduate Research Competition
                </span>
                <br />
                <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Achievement for pioneering research and scholarly contribution.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Images */}
        <div className="lg:w-1/3 flex flex-col items-center space-y-8">
          {/* Placeholder Images with increased width */}
          <div
            className={`w-80 h-52 rounded-lg overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-[#00A5FF] border-[#00A5FF]' : 'bg-gray-100 border-gray-200'
            } border flex items-center justify-center`}
          >
            <img src="awards-1.png" alt="Award Image 1" />
          </div>
          <div
            className={`w-80 h-52 rounded-lg overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-[#00A5FF] border-[#00A5FF]' : 'bg-gray-100 border-gray-200'
            } border flex items-center justify-center`}
          >
            <img src="awards-2.png" alt="Award Image 2" />
          </div>
          <div
            className={`w-80 h-52 rounded-lg overflow-hidden shadow-lg ${
              isDarkMode ? 'bg-[#00A5FF] border-[#00A5FFA]' : 'bg-gray-100 border-gray-200'
            } border flex items-center justify-center`}
          >
            <img src="awards-3.png" alt="Award Image 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
