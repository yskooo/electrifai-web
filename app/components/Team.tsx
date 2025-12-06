'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { X } from 'lucide-react';
import { useDarkMode } from '../context/DarkModeContext'; 

const defaultProfile = '/members/default-image.jpg';

const Team = () => {
  const { isDarkMode } = useDarkMode();
  const [selectedMember, setSelectedMember] = useState<any>(null); 

  const teamMembers = [
    {
      name: 'Engr. Gerhard P. Tan',
      role: 'Chairman',
      description: 'Strategic leader guiding ElectrifAI\'s vision and ensuring operational excellence.',
      imgSrc: '/members/hard.png',
      contacts: {
        linkedIn: "gerhard-tan-1a5160104",
        facebook: "gerhardian19",
      },
      bio: {
        highlights: [
          'Over 20 years of experience in energy management and automation',
          'Led multiple infrastructure projects across Southeast Asia',
          'Strategic advisor for renewable energy initiatives',
        ],
        accomplishments: [
          'Pioneered IoT integration in Philippine power systems',
          'Established key partnerships with major energy corporations',
          'Mentored over 50 technology leaders in the industry',
        ],
      },
    },
    {
      name: 'Daniel Caparro',
      role: 'Chief Executive Officer',
      description: 'Drives innovation and growth, scaling the platform while building strategic partnerships.',
      imgSrc: '/members/daniel.png',
      contacts: {
        linkedIn: "daniel-caparro-805682224",
        facebook: "nam.joo.7399",
      },
      bio: {
        highlights: [
          '15+ years in tech startups and enterprise software',
          'Successfully scaled two SaaS companies to market leadership',
          'Expert in energy tech market dynamics',
        ],
        accomplishments: [
          'Grew previous venture from 10 to 150+ team members',
          'Closed partnerships with Fortune 500 energy companies',
          'Recognized as top innovator in cleantech sector',
        ],
      },
    },
    {
      name: 'Harold Patacsil',
      role: 'Chief Technology Officer',
      description: 'Leads technical architecture, ensuring security, scalability, and performance.',
      imgSrc: '/members/harold.png',
      contacts: {
        linkedIn: "haroldmartinpatacsil",
        facebook: "harold.martinpatacsil.3",
      },
      bio: {
        highlights: [
          'PhD in Computer Science with focus on distributed systems',
          '12+ years building high-scale infrastructure',
          'Published researcher in IoT and edge computing',
        ],
        accomplishments: [
          'Architected systems serving 50M+ daily transactions',
          'Reduced infrastructure costs by 60% through optimization',
          'Led team of 30+ engineers across multiple continents',
        ],
      },
    },
    {
      name: 'Engr. Raeselyn Macorol',
      role: 'Chief Human Resource Officer',
      description: 'Builds our team and culture, fostering excellence and innovation across the organization.',
      imgSrc: '/members/raeselyn.png',
      contacts: {
        linkedIn: "raeselynmacorol",
        facebook: "raeselynmacorol",
      },
      bio: {
        highlights: [
          '10+ years in talent development and organizational strategy',
          'Expertise in scaling teams from startup to enterprise',
          'Certified executive coach and change management specialist',
        ],
        accomplishments: [
          'Built high-performance teams with 95%+ retention rate',
          'Implemented culture programs recognized by industry awards',
          'Developed leadership pipeline for emerging markets',
        ],
      },
    },
    {
      name: 'Arjay Rosel',
      role: 'Chief Marketing Officer',
      description: 'Shapes brand narrative and market strategy to establish ElectrifAI as the energy intelligence leader.',
      imgSrc: '/members/arjay.png',
      contacts: {
        linkedIn: "arjay-rosel-5b4a0b252",
        facebook: "roselarjayyy",
      },
      bio: {
        highlights: [
          '8+ years in B2B tech marketing and brand strategy',
          'Led go-to-market strategies for emerging energy solutions',
          'Thought leader in sustainability communications',
        ],
        accomplishments: [
          'Generated 300%+ growth in brand awareness',
          'Established ElectrifAI as category leader in market',
          'Built community of 50K+ engaged energy tech enthusiasts',
        ],
      },
    },
    {
      name: 'Christian Joel Lazo',
      role: 'Chief Operations Officer',
      description: 'Optimizes operations and delivery, ensuring seamless execution of our mission.',
      imgSrc: '/members/christian.png',
      contacts: {
        linkedIn: "laxseuss",
        facebook: "",
      },
      bio: {
        highlights: [
          '9+ years in operations management and process optimization',
          'Expertise in supply chain and logistics automation',
          'Certified Six Sigma Black Belt',
        ],
        accomplishments: [
          'Improved operational efficiency by 45% across functions',
          'Implemented ERP systems for multi-location operations',
          'Led successful scaling from 50 to 300+ employees',
        ],
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
      <div className="container px-4 md:px-6 max-w-screen-2xl">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tighter ${
            isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
          } mb-4`}>
            Our Team
          </h2>
          <p className={`text-sm md:text-md lg:text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            {/* The company is spearheaded by a team of passionate students from the Polytechnic University of the Philippines Manila. */}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="px-4 flex flex-wrap justify-center gap-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}
              onClick={() => setSelectedMember(member)}
              className={`p-4 md:p-6 lg:p-4 md:w-1/3 w-full lg:w-1/5 rounded-xl md:rounded-2xl shadow-sm cursor-pointer ${
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
                  <FontAwesomeIcon icon={faLinkedinIn} />
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

        {/* Bio Dialog Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-3xl w-full rounded-3xl max-h-[90vh] overflow-y-auto shadow-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-br from-[#1B1B1D] to-[#0A0A0B]'
                  : 'bg-gradient-to-br from-white to-gray-50'
              }`}
            >
              {/* Header with Background */}
              <div className={`relative h-32 ${isDarkMode ? 'bg-gradient-to-r from-[#00A5FF]/20 to-[#00A5FF]/10' : 'bg-gradient-to-r from-[#00A5FF]/15 to-[#00A5FF]/5'}`}>
                <button
                  onClick={() => setSelectedMember(null)}
                  className={`absolute top-4 right-4 p-2 rounded-full transition-all ${
                    isDarkMode
                      ? 'hover:bg-white/10 text-gray-400 hover:text-white'
                      : 'hover:bg-black/10 text-gray-600 hover:text-black'
                  }`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Main Content */}
              <div className="px-8 pb-8">
                {/* Profile Section */}
                <div className="flex flex-col sm:flex-row gap-6 -mt-16 mb-8 relative z-10">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-2xl overflow-hidden border-4 ${isDarkMode ? 'border-[#1B1B1D]' : 'border-white'} shadow-lg`}>
                      <Image
                        src={selectedMember.imgSrc || defaultProfile}
                        alt={selectedMember.name}
                        width={128}
                        height={128}
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Name & Role */}
                  <div className="flex flex-col justify-end pb-2">
                    <h2 className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                      {selectedMember.name}
                    </h2>
                    <p className="text-[#00A5FF] font-semibold text-lg mb-1">{selectedMember.role}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {selectedMember.description}
                    </p>
                  </div>
                </div>

                {/* Professional Highlights */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-[#00A5FF] rounded-full mr-3"></div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                      Professional Highlights
                    </h3>
                  </div>
                  <ul className={`space-y-3 ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedMember.bio.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00A5FF] font-bold text-lg mt-0.5">→</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider */}
                <div className={`my-8 h-px ${isDarkMode ? 'bg-white/10' : 'bg-gray-200'}`}></div>

                {/* Key Accomplishments */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 bg-[#00A5FF] rounded-full mr-3"></div>
                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#0A0A0B]'}`}>
                      Key Accomplishments
                    </h3>
                  </div>
                  <ul className={`space-y-3 ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedMember.bio.accomplishments.map((accomplishment: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#00A5FF] font-bold text-lg mt-0.5">✓</span>
                        <span className="leading-relaxed">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={`https://linkedin.com/in/${selectedMember.contacts.linkedIn}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#00A5FF] text-white rounded-lg font-semibold hover:bg-[#00A5FF]/90 transition-all text-center shadow-lg"
                  >
                    Connect on LinkedIn
                  </a>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      isDarkMode
                        ? 'text-[#00A5FF] hover:bg-white/5 border border-[#00A5FF]/30'
                        : 'text-[#00A5FF] hover:bg-black/5 border border-[#00A5FF]/30'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Team;
