'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { Phone } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext'; 

const defaultProfile = '/members/default-image.jpg';

const Team = () => {
  const { isDarkMode } = useDarkMode(); 

  const teamMembers = [
    {
      name: 'Daniel Caparro',
      role: 'CEO, Co-founder',
      description: 'Leads strategic vision and growth, and drives innovation to scale the company while fostering partnerships and investor relations.',
      imgSrc: '/members/caparro.jpeg',
      contacts: {
        linkedIn: "https://linkedin.com/in/daniel-caparro-805682224",
        facebook: "https://www.facebook.com/nam.joo.7399?mibextid=LQQJ4d",
        number: "09361092653",
      }
    },
    {
      name: 'Engr. Hard',
      role: 'COO, Co-founder, Consultant',
      description: ' Oversees daily operations, streamlines processes, and advises on strategic decisions for growth.',
      imgSrc: '/members/hard.jpg',
    },
    {
      name: 'Harold Patacsil',
      role: 'CTO, Lead Developer',
      description: 'Leads the development of the app infrastructure, ensuring that the platform is secure, scalable, and efficient.',
      imgSrc: '/members/harold.jpg',
    },
    {
      name: 'Raeselyn Macorol',
      role: 'Marketing & Operations Manager',
      description: 'Drives marketing strategies and manages daily operations to ensure business growth and efficiency.',
      imgSrc: '/members/raeselyn.png',
    },
    {
      name: 'Justine Rey Daquis',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/justine.jpg',
    },
    {
      name: 'Clarence Jay Fetalino',
      role: 'IoT Device Developer',
      description: 'Specializes in IoT devices and research, ensuring that the hardware components are robust, efficient, and well-integrated with the software.',
      imgSrc: '/members/clarence.png',
    },
    {
      name: 'Mcallen Fradejas',
      role: 'Layout Artist, 3D Model Designer',
      description: 'Creates engaging 3D models and layouts, visualizing complex concepts with clarity and creativity.',
      imgSrc: '/members/Mcallen.png',
    },
    {
      name: 'Sieg Lorelle Mina',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/sieg.jpg',
    },
    {
      name: 'Gaeus Fabro',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/gaeus.jpg',
    },
    {
      name: 'David Bato-bato',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/david.jpg',
    },
    {
      name: 'Dennesse Condat',
      role: 'Market Research Analyst',
      description: 'Conducts research and analyzes market trends to provide insights that drive business strategy and decision-making.',
      imgSrc: '/members/dennesse.jpg',
    },
    {
      name: 'Arjay Rosel',
      role: 'Market Research Analyst',
      description: 'Conducts research and analyzes market trends to provide insights that drive business strategy and decision-making.',
      imgSrc: '/members/arjay.jpg',
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
            The company is spearheaded by a team of passionate students from the Polytechnic University of the Philippines Manila.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="px-4 flex flex-wrap justify-center gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              className={`p-4 md:p-6 lg:p-4 w-full lg:w-1/5 md:w-1/3 rounded-xl md:rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
              } hover:shadow-2xl transition-shadow duration-300 transform text-center flex flex-col items-center`}
            >
              {/* Profile Image with Decorative Elements */}
              <div className="relative mb-4">
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 md:border-4 ${
                  isDarkMode ? 'border-[#00A5FF]' : 'border-[#00A5FF]'
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
                  isDarkMode ? 'bg-[#00A5FF]' : 'bg-[#00A5FF]'
                } rounded-full`}></div>
                <div className={`absolute -bottom-2 -left-2 h-4 w-4 ${
                  isDarkMode ? 'bg-[#00A5FF]' : 'bg-[#00A5FF]'
                } rounded-full`}></div>
              </div>

              {/* Member Info */}
              <h3 className={`text-sm md:text-lg lg:text-md font-bold ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              } mb-1`}>
                {member.name}
              </h3>
              <h4 className={`text-xs md:text-sm lg:text-xs font-medium ${
                isDarkMode ? 'text-[#00A5FF]' : 'text-[#00A5FFAd]'
              } mb-2`}>
                {member.role}
              </h4>
              {/* <p className={`text-xs md:text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {member.description}
              </p> */}
              <div className="flex gap-1">
                <button className="flex justify-center items-center rounded-full bg-white w-3 h-3 p-4">
                  <FontAwesomeIcon className="d-solid" icon={faLinkedinIn} />
                </button>
                <button className="flex justify-center items-center rounded-full bg-white w-3 h-3 p-4">
                  <FontAwesomeIcon icon={faFacebookF} />
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
