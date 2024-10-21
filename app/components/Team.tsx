'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
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
        linkedIn: "daniel-caparro-805682224",
        facebook: "nam.joo.7399",
      },
    },
    {
      name: 'Engr. Hard',
      role: 'COO, Co-founder, Consultant',
      description: ' Oversees daily operations, streamlines processes, and advises on strategic decisions for growth.',
      imgSrc: '/members/hard.jpg',
      contacts: {
        linkedIn: "gerhard-tan-1a5160104",
        facebook: "gerhardian19",
      },
    },
    {
      name: 'Harold Patacsil',
      role: 'CTO, Lead Developer',
      description: 'Leads the development of the app infrastructure, ensuring that the platform is secure, scalable, and efficient.',
      imgSrc: '/members/harold.jpg',
      contacts: {
        linkedIn: "haroldmartinpatacsil",
        facebook: "harold.martinpatacsil.3",
      },
    },
    {
      name: 'Raeselyn Macorol',
      role: 'Marketing & Operations Manager',
      description: 'Drives marketing strategies and manages daily operations to ensure business growth and efficiency.',
      imgSrc: '/members/raeselyn.png',
      contacts: {
        linkedIn: "raeselynmacorol",
        facebook: "raeselynmacorol",
      },
    },
    {
      name: 'Justine Rey Daquis',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/justine.jpg',
      contacts: {
        linkedIn: "justine-rey-daquis-855b07297",
        facebook: "Justinedaquis28",
      },
    },
    {
      name: 'Clarence Jay Fetalino',
      role: 'IoT Device Developer',
      description: 'Specializes in IoT devices and research, ensuring that the hardware components are robust, efficient, and well-integrated with the software.',
      imgSrc: '/members/clarence.png',
      contacts: {
        linkedIn: "clarence-fetalino-45b313223",
        facebook: "clarencejay.fetalino",
      },
    },
    {
      name: 'Mcallen Fradejas',
      role: 'Layout Artist, 3D Model Designer',
      description: 'Creates engaging 3D models and layouts, visualizing complex concepts with clarity and creativity.',
      imgSrc: '/members/Mcallen.png',
      contacts: {
        linkedIn: "mcallen-fradejas",
        facebook: "macalien.fradejas",
      },
    },
    {
      name: 'Siegfred Lorelle Mina',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/sieg.jpg',
      contacts: {
        linkedIn: "siegfred-lorelle-mina",
        facebook: "profile.php?id=1718881634",
      },
    },
    {
      name: 'Gaeus Caskie Fabro',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/gaeus.jpg',
      contacts: {
        linkedIn: "gaeus-caskie-fabro-319981234",
        facebook: "caskieee",
      },
    },
    {
      name: 'David Bato-bato',
      role: 'Software Developer',
      description: 'Designs, builds, and maintains software solutions to meet user and business needs.',
      imgSrc: '/members/david.jpg',
      contacts: {
        linkedIn: "david-bato-bato-1b6a8b288",
        facebook: "dream.achiever46",
      },
    },
    {
      name: 'Dennesse Condat',
      role: 'Market Research Analyst',
      description: 'Conducts research and analyzes market trends to provide insights that drive business strategy and decision-making.',
      imgSrc: '/members/dennesse.jpg',
      contacts: {
        linkedIn: "dennesse-loura-condat-2747a1299",
        facebook: "profile.php?id=100021986423905",
      },
    },
    {
      name: 'Arjay Rosel',
      role: 'Market Research Analyst',
      description: 'Conducts research and analyzes market trends to provide insights that drive business strategy and decision-making.',
      imgSrc: '/members/arjay.jpg',
      contacts: {
        linkedIn: "arjay-rosel-5b4a0b252",
        facebook: "roselarjayyy",
      },
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
              className={`p-4 md:p-6 lg:p-4 md:w-1/3 w-full lg:w-1/5 rounded-xl md:rounded-2xl shadow-lg ${
                isDarkMode ? 'bg-[#1B1B1D] text-gray-300' : 'bg-white text-[#0A0A0B]'
              } hover:shadow-2xl transition-shadow duration-300 transform text-center flex flex-row max-[320px]:flex-col md:flex-col gap-5 md:gap-0 items-center`}
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
              <div className="w-full md:ms-0">
                <h3 className={`text-start max-[320px]:text-center md:text-center w-text-sm md:text-lg lg:text-md font-bold ${
                  isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
                } mb-1`}>
                  {member.name}
                </h3>
                <h4 className={`text-start max-[320px]:text-center md:text-center text-xs md:text-sm lg:text-xs font-medium ${
                  isDarkMode ? 'text-[#00A5FF]' : 'text-[#00A5FFAd]'
                } mb-2`}>
                  {member.role}
                </h4>
              </div>
              {/* <p className={`text-xs md:text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {member.description}
              </p> */}
              <div className="mt-auto flex justify-end gap-1 w-1/12 max-[320px]:w-full md:w-full">
                <a 
                  className={`mt-2 flex justify-center items-center rounded-full transition-all duration-300 w-3 h-3 p-4 ${
                    isDarkMode ? " hover:bg-[#2e2e2e]": "hover:bg-[#eef2f3]"}`}
                  href={`https://linkedin.com/in/${member.contacts.linkedIn}`}
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="d-solid" icon={faLinkedinIn} />
                </a>
                {/* <a 
                  className={`mt-2 flex justify-center items-center rounded-full transition-all duration-300 w-3 h-3 p-4 ${
                    isDarkMode ? " hover:bg-[#2e2e2e]": "hover:bg-[#eef2f3]"}`}
                  href={`https://www.facebook.com/${member.contacts.facebook}`}
                  target="__blank"
                  rel="noopener noreferrer"
                > 
                <FontAwesomeIcon icon={faFacebookF} size='sm'/>
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
