"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { useDarkMode } from "../context/DarkModeContext";

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
  ];

  return (
    <footer
      className={`w-full px-4 py-6 lg:px-8 lg:py-8 transition-all duration-500 ease-in-out ${bgColor} ${textColor}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-medium">
            &copy; 2025 ElectrifAI Philippines Solutions Corps. All rights reserved.
          </p>
          <p className={`text-xs ${mutedText}`}>
            Empowering energy solutions for a brighter tomorrow.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socialLinks.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              className="group transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-white/20">
                <FontAwesomeIcon icon={icon} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
