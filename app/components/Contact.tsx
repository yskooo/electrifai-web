'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';
import { useDarkMode } from '../context/DarkModeContext'; 

const Contact = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();
  const { isDarkMode } = useDarkMode(); 

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className={`relative w-full py-12 md:py-24 lg:py-32 ${
        isDarkMode ? 'bg-gradient-to-b from-[#000000] to-[#001027]' : 'bg-gradient-to-b from-[#f7fafd] to-[#eaf1f8]'
      } overflow-hidden`}
    >
      {/* Decorative Elements */}
      <div
        className={`absolute top-1/3 left-0 w-[300px] h-[300px] ${
          isDarkMode ? 'bg-[#001027] opacity-40' : 'bg-[#00A5FF] opacity-20'
        } rounded-full blur-[150px] animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-1/4 right-0 w-[400px] h-[400px] ${
          isDarkMode ? 'bg-[#000000] opacity-40' : 'bg-[#00A5FF] opacity-20'
        } rounded-full blur-[200px]`}
      ></div>

      {/* Google Maps Integration */}
      <div
        id="map"
        className={`relative h-[300px] md:h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat ${
          isDarkMode ? 'filter brightness-75' : ''
        }`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123551.41006922725!2d120.95316517505074!3d14.600126045944801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd976ededf%3A0xbaaa357c5585b8c2!2sPolytechnic%20University%20of%20the%20Philippines!5e0!3m2!1sen!2sph!4v1725697351119!5m2!1sen!2sph"
          width="100%"
          height="480"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information Section */}
      <div className="w-full flex justify-center mt-[-150px] lg:mt-[-200px]">
        <div className="container px-4 md:px-6 lg:px-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`relative rounded-xl ${
              isDarkMode ? 'bg-gradient-to-r from-[#2A2A2E] to-[#1B1B1D]' : 'bg-gradient-to-r from-[#2F4BE5] to-[#00A5FF]'
            } px-6 py-12 shadow-lg md:py-16 md:px-12 backdrop-blur-md text-white`}
          >
            <div className="flex flex-wrap lg:flex-nowrap lg:space-x-12 items-start">
              {/* Left Column: Call to Action */}
              <div className="w-full lg:w-6/12 mb-12 lg:mb-0">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="text-4xl font-extrabold mb-6 leading-tight"
                >
                  Ready to take your electricity savings to the next level?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  className="text-lg text-white/90 mb-6"
                >
                  Schedule a free consultation with us to discuss your needs and how we can help.
                </motion.p>
                <div className="flex justify-start mb-6">
                  <a
                    href="https://calendly.com/your-calendly-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      isDarkMode ? 'bg-[#3b82f6] hover:bg-[#2563eb]' : 'bg-[#1e3a8a] hover:bg-[#0d266d]'
                    } text-white px-10 py-4 rounded-lg shadow-md transition duration-300`}
                  >
                    Book a Call
                  </a>
                </div>
              </div>

              {/* Right Column: Contact Information */}
              <div className="w-full lg:w-6/12">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col space-y-6 text-white/80">
                    <div className="flex items-center text-lg">
                      <Phone className="text-white mr-4 h-6 w-6" />
                      <span>+639164137271</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <Mail className="text-white mr-4 h-6 w-6" />
                      <span>contactelectrifai@gmail.com</span>
                    </div>
                    <div className="flex items-center text-lg">
                      <MapPin className="text-white mr-4 h-6 w-6" />
                      <span>Polytechnic University of the Philippines, Sta. Mesa, Philippines</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
