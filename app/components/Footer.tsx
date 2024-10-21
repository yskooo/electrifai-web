"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Facebook, Mail, MapPin } from "lucide-react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { useDarkMode } from "../context/DarkModeContext"; 

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer
      className={`gap-4 p-4 lg:p-8 w-full text-white transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-gradient-to-r from-[#000000] to-[#001027]" : "bg-gray-800"
      }`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="mb-2 lg:mb-0 text-center lg:text-left">
          <p className="text-sm font-semibold">&copy; 2024 ElectricAI Sol&#39;n PH. All rights reserved.</p>
          <p className="text-xs text-white/60">Empowering energy solutions for a brighter tomorrow.</p>
        </div>

        <div className="flex text-center gap-2 sm:text-left text-white/70">
          <a 
            className="mt-2 flex justify-center items-center rounded-full transition-all duration-300 p-4"
            href="https://www.facebook.com/profile.php?id=61567550636505"
            target="__blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a 
            className="mt-2 flex justify-center items-center rounded-full transition-all duration-300 p-4"
            href="https://www.linkedin.com/company/electrifai-techsolutionsph/"
            target="__blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
