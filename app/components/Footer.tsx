"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react"; 
import { useDarkMode } from "../context/DarkModeContext"; 

const Footer = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <footer
      className={`flex flex-col sm:flex-row items-center justify-between py-8 px-8 sm:px-20 w-full text-white transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-gradient-to-r from-[#000000] to-[#001027]" : "bg-gray-800"
      }`}
    >
      <div className="mb-4 sm:mb-0 text-center sm:text-left">
        <p className="text-sm font-semibold">&copy; 2024 ElectricAI Sol&#39;n PH. All rights reserved.</p>
        <p className="text-xs text-white/60">Empowering energy solutions for a brighter tomorrow.</p>
      </div>
      <div className="flex flex-col gap-3 text-center sm:text-left text-white/70">

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>contactelectrifai@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Polytechnic University of the Philippines, Sta. Mesa, Philippines</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
