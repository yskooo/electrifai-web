'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin } from 'lucide-react';
import React from 'react';

const Contact = () => {
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const controls = useAnimation();

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
      className="w-full py-12 md:py-24 lg:py-32 bg-black"
    >
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123551.41006922725!2d120.95316517505074!3d14.600126045944801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9dd976ededf%3A0xbaaa357c5585b8c2!2sPolytechnic%20University%20of%20the%20Philippines!5e0!3m2!1sen!2sph!4v1725697351119!5m2!1sen!2sph"
          width="100%" height="480" style={{ border: '0' }} loading="lazy"
        ></iframe>
      </div>
      <div className="w-full flex justify-center">
        <div className="container px-4 md:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative rounded bg-gradient-to-r from-[#0A0A0B] to-[#001F3F] px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-md"
          >
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 lg:px-6">
                <motion.h2
                  initial={{ opacity: 0, y: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                  className="text-4xl font-bold mb-4 text-white"
                >
                  Ready to take your electricity savings to the next level?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
                  className="text-gray-700 mb-6"
                >
                  Schedule a free consultation with us to discuss your needs and how we can help.
                </motion.p>
                <div className="flex justify-start mb-6">
                  <a 
                    href="https://calendly.com/your-calendly-link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#2F4BE5] text-white px-10 py-4 shadow-md hover:bg-[#1e3a8a] transition duration-300"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-6/12 lg:px-6 mt-12 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={controls}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center text-gray-700">
                      <Phone className="text-[#2F4BE5] mr-2" />
                      <span>+639164137271</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="text-[#2F4BE5] mr-2" />
                      <span>contactelectrifai@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="text-[#2F4BE5] mr-2" />
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
