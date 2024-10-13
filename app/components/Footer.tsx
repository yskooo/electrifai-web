"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react"; 
import { useDarkMode } from "../context/DarkModeContext"; 

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer
      className={`flex flex-col lg:flex-row items-center justify-between gap-4 p-4 lg:p-8 w-full text-white transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-gradient-to-r from-[#000000] to-[#001027]" : "bg-gray-800"
      }`}
    >
      <div className="mb-2 lg:mb-0 text-center lg:text-left">
        <p className="text-sm font-semibold">&copy; 2024 ElectricAI Sol&#39;n PH. All rights reserved.</p>
        <p className="text-xs text-white/60">Empowering energy solutions for a brighter tomorrow.</p>
      </div>

      <div className="flex flex-col text-center gap-2 sm:text-left text-white/70">
        <a href="mailto:contactelectrifai@gmail.com" className="flex justify-center lg:justify-start items-center">
          <Mail className="mr-4 w-4 h-4 hidden lg:block" />
          <span className="text-sm lg:text-base">contactelectrifai@gmail.com</span>
        </a>
        <div className="flex justify-center lg:justify-start items-center">
          <MapPin className="mr-4 w-4 h-4 hidden lg:block" />
          <span className="text-sm lg:text-base">Polytechnic University of the Philippines, Sta. Mesa, Philippines</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
