/* eslint-disable react/no-unescaped-entities */
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="Contact" className="w-full py-12 md:py-24 lg:py-32 bg-black">
      <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
          width="100%" height="480" style={{ border: '0' }} loading="lazy"
        ></iframe>
      </div>
      <div className="w-full flex justify-center">
        <div className="container px-4 md:px-6 lg:px-12">
          <div className="relative rounded bg-gradient-to-r from-[#0A0A0B] to-[#001F3F] px-6 py-12 shadow-lg md:py-16 md:px-12 -mt-[100px] backdrop-blur-md">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 lg:px-6">
                <h2 className="text-4xl font-bold mb-4 text-white">Ready to take your electricity to the next level?</h2>
                <p className="text-gray-700 mb-6">
                  Schedule a free consulation with us to discuss your needs and how we can help.
                </p>
                <div className="flex justify-start mb-6">
                  <a 
                    href="https://calendly.com/your-calendly-link" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-[#2F4BE5] text-white px-10 py-4  shadow-md hover:bg-[#1e3a8a] transition duration-300"
                  >
                    Book a Call
                  </a>
                </div>
              
              </div>
              <div className="w-full lg:w-6/12 lg:px-6 mt-12 lg:mt-0">
                <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Phone className="text-[#2F4BE5] mr-2" />
                    <span>(123) 456-7890</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Mail className="text-[#2F4BE5] mr-2" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="text-[#2F4BE5] mr-2" />
                    <span>123 Main Street, City, Country</span>
                  </div>
                </div>              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
