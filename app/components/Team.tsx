'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDarkMode } from '../context/DarkModeContext'; 

const defaultProfile = '/members/default-image.jpg';

const Team = () => {
  const { isDarkMode } = useDarkMode(); 

  const teamMembers = [
    {
      name: 'Daniel Caparro',
      role: 'CEO, AI Developer',
      description: 'Leads project management and AI development, bringing technical expertise and strategic planning to ensure successful delivery of AI-based solutions.',
      imgSrc: '',
    },
    {
      name: 'Harold Patacsil',
      role: 'CTO, Developer',
      description: 'Leads the development of the app infrastructure, ensuring that the platform is secure, scalable, and efficient.',
      imgSrc: '',
    },
    {
      name: 'Raeselyn Macorol',
      role: 'Researcher',
      description: 'Conducts research and provides insights that drive innovation and informed decision-making across various projects.',
      imgSrc: '',
    },
    {
      name: 'Justine Rey Daquis',
      role: 'Lead UI/UX, Frontend Developer',
      description: 'Designs intuitive interfaces and crafts seamless user experiences, making sure that users interact effortlessly with the product.',
      imgSrc: '/members/justine.jpg',
    },
    {
      name: 'Clarence Jay Fetalino',
      role: 'Researcher, IoT Device Developer',
      description: 'Specializes in IoT devices and research, ensuring that the hardware components are robust, efficient, and well-integrated with the software.',
      imgSrc: '',
    },
    {
      name: 'Mcallen Fradejas',
      role: 'Layout Artist, 3D Model Designer',
      description: 'Creates engaging 3D models and layouts, visualizing complex concepts with clarity and creativity.',
      imgSrc: '',
    },
    {
      name: 'Sieg',
      role: '',
      description: 'Conducts research on IoT devices and contributes to the development of hardware components that power the platform.',
      imgSrc: '',
    },
    {
      name: 'Gaeus',
      role: '',
      description: 'Conducts research on IoT devices and contributes to the development of hardware components that power the platform.',
      imgSrc: '',
    },
    {
      name: 'David Bato-bato',
      role: '',
      description: 'Conducts research on IoT devices and contributes to the development of hardware components that power the platform.',
      imgSrc: '',
    },
    {
      name: 'Engr. Hard',
      role: '',
      description: 'Conducts research on IoT devices and contributes to the development of hardware components that power the platform.',
      imgSrc: '',
    },
  ];

  return (
    <section
      id="OurTeam"
      className={`w-full py-12 md:py-20 lg:py-10 ${
        isDarkMode ? 'bg-gradient-to-b from-[#000000] to-[#001027]' : 'bg-gradient-to-b from-[#eef2f3] to-[#ffffff]'
      } flex items-center justify-center overflow-hidden`}
    >
      <div className="container px-4 md:px-6 max-w-[1300px]">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter ${
            isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
          } mb-4`}>
            Meet Our Team
          </h2>
          <p className={`text-sm md:text-md lg:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            The company is spearheaded by a team of passionate students from the Polytechnic University of the Philippines Manila, under the team of PENTATRONICS.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 md:px-0">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className={`p-4 md:p-6 lg:p-4 rounded-xl md:rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
              } hover:shadow-2xl transition-shadow duration-300 transform text-center flex flex-col items-center`}
            >
              {/* Profile Image with Decorative Elements */}
              <div className="relative mb-4">
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 md:border-4 ${
                  isDarkMode ? 'border-[#2F4BE5]' : 'border-[#004aad]'
                } relative bg-[#eef2f3]`}>
                  <Image
                    src={member.imgSrc || defaultProfile}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>

                {/* Decorative Elements around the Image */}
                <div className={`absolute -bottom-2 -right-2 h-4 w-4 ${
                  isDarkMode ? 'bg-[#2F4BE5]' : 'bg-[#004aad]'
                } rounded-full`}></div>
                <div className={`absolute -bottom-2 -left-2 h-4 w-4 ${
                  isDarkMode ? 'bg-[#2F4BE5]' : 'bg-[#004aad]'
                } rounded-full`}></div>
              </div>

              {/* Member Info */}
              <h3 className={`text-sm md:text-lg lg:text-md font-bold ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              } mb-1`}>
                {member.name}
              </h3>
              <h4 className={`text-xs md:text-sm lg:text-xs font-medium ${
                isDarkMode ? 'text-[#2F4BE5]' : 'text-[#004aad]'
              } mb-2`}>
                {member.role}
              </h4>
              <p className={`text-xs md:text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
