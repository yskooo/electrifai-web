"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useDarkMode } from "../context/DarkModeContext";
import Image from "next/image";

const Footer = () => {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode
    ? "bg-gradient-to-r from-[#000000] to-[#001027]"
    : "bg-gray-900";
  const textColor = "text-white";
  const mutedText = "text-white/60";

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61567550636505",
      icon: faFacebookF,
      label: "Facebook",
    },
    {
      href: "https://www.linkedin.com/company/electrifai-techsolutionsph/",
      icon: faLinkedinIn,
      label: "LinkedIn",
    },
    {
      href: "https://www.crunchbase.com/organization/electrifai-5112",
      icon: null,
      label: "Crunchbase",
      isSvg: true,
    },
  ];

  
  const featuredLogos = [
    { name: "Partner 1", src: "/logos/businessworld.webp" },
    { name: "Partner 2", src: "/logos/leave-a-nest.webp" },
    { name: "Partner 3", src: "/logos/nexus.webp" },
    { name: "Backer 1", src: "/logos/pbw.webp" },
    { name: "Backer 2", src: "/logos/phstartupweek.webp" },
    { name: "Backer 2", src: "/logos/tenconsg.webp" },
  ];

  return (
    <footer
      className={`w-full px-4 py-8 lg:px-8 lg:py-10 transition-all duration-500 ease-in-out ${bgColor} ${textColor}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Logos Section */}
        <div className="mb-12 pb-12 border-b border-white/20">
          <h3 className="text-center text-sm font-semibold mb-8 text-white/80 uppercase tracking-wider">
            Trusted by
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {featuredLogos.map((logo, idx) => (
              <div
                key={idx}
                className="h-12 w-24 md:w-32 relative opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  objectFit="contain"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Text */}
        <div className="text-center lg:text-left space-y-1">
          <p className="text-sm font-medium">
            &copy; 2025 ElectrifAI Philippines Solutions Corps. All rights reserved.
          </p>
          <p className={`text-xs ${mutedText}`}>
            Make each kilowatt count!
          </p>
        </div>

        {/* Middle: Interest Form Button */}
        {/* <div className="flex justify-center">
          <a
            href="https://tally.so/r/w5AolZ"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/10 text-sm font-medium transition-all duration-300 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Apply for Early Access
          </a>
        </div> */}

        {/* Right: Social Icons */}
        <div className="flex gap-3">
          {socialLinks.map(({ href, icon, label, isSvg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit us on ${label}`}
              className="group transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20">
                {isSvg ? (
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.437 15.979a3.195 3.195 0 11.039-2.632h2.463a5.549 5.549 0 10-.021 2.632zM18.454 9.075c-.137 0-.273.008-.408.018a5.5 5.5 0 00-2.726.962V3.831h-2.26v15.956h2.275V19.2a5.545 5.545 0 103.117-10.13zm3.166 5.972c0 .033-.01.067-.015.1a3.359 3.359 0 01-.088.391v.012a3.305 3.305 0 01-.155.4l-.026.05a3.212 3.212 0 01-1.553 1.526 3.15 3.15 0 01-.631.215h-.009c-.1.022-.2.038-.3.051-.014 0-.028 0-.043.006a3.017 3.017 0 01-.345.019 3.226 3.226 0 01-.431-.032l-.1-.015a3.214 3.214 0 01-.811-.251l-.06-.029a3.2 3.2 0 01-.716-.481l-.025-.022a3.222 3.222 0 01-.566-.676l-.013-.022a3.278 3.278 0 01-.207-.394 3.177 3.177 0 01.039-2.631 3.2 3.2 0 012.561-1.817 3.264 3.264 0 01.33-.024 3.2 3.2 0 013.2 3.2 3.152 3.152 0 01-.036.424z" />
                  </svg>
                ) : (
                  <FontAwesomeIcon icon={icon!} className="text-white" />
                )}
              </div>
            </a>
          ))}
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
