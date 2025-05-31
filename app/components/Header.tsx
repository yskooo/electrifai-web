/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react"; 
import Link from "next/link";
import { useDarkMode } from "../context/DarkModeContext"; 
import { span } from "framer-motion/client";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hideDelay, setHideDelay] = useState(false);

  const { isDarkMode, toggleDarkMode } = useDarkMode(); 

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle scroll behavior with delay
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
  
    if (currentScrollY === 0) {
      // If at the top, ensure the navbar is visible
      setIsVisible(true);
      setHideDelay(false);
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up, show the navbar
      setIsVisible(true);
      setHideDelay(false);
    } else {
      // Scrolling down, hide the navbar after a delay
      setHideDelay(true);
    }
  
    setLastScrollY(currentScrollY);
  };
  // Effect to apply delay for header hiding
  useEffect(() => {
    if (hideDelay) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [hideDelay]);

  // Listen to scroll events and handle visibility
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Smooth scrolling with offset to account for fixed header height
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transform transition-transform duration-500 ease-in-out fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-[#000] text-white" : "bg-white text-[#0A0A0B]"
      } shadow-sm flex items-center justify-between px-6 py-6 h-20`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center mr-auto">
        <img 
          src="/svgs/elec_logo.svg" 
          alt="logo" 
          className="w-20 h-20 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" 
        />
        <span
          className={`text-xl font-bold ${
            isDarkMode ? "text-white" : "text-[#0A0A0B]"
          } hover:text-[#2F4BE5]`}
        >
        </span>
      </Link>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:ml-auto lg:gap-6 absolute lg:static top-16 left-0 right-0 ${
          isDarkMode ? "bg-[#00060F]" : "bg-white"
        } lg:bg-transparent lg:p-0 p-4 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
      >
        {["Solutions", "AboutUs", "OurTeam", "Awards", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`text-sm lg:text-lg font-medium ${
              isDarkMode ? "text-white" : "text-[#0A0A0B]"
            } hover:underline underline-offset-4 transition-colors p-4 lg:py-0`}
            onClick={(e) => handleSmoothScroll(e, item)}
          >
            {item.replace(/([A-Z])/g, " $1").trim()}
          </a>
        ))}
      </nav>

      {/* Dark Mode Toggle Icon */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className={`ml-4 p-2 rounded-md transition-[color] duration-300 ease-in-out ${
          isDarkMode ? "bg-[#00000]" : "bg-white"
        }`}
      >
        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </button>

      {/* Mobile Menu Toggle */}
      <button
        className={`ml-4 lg:hidden transition-all duration-300 ease-in-out ${
          isDarkMode ? "text-white" : "text-[#0A0A0B]"
        } focus:outline-none`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </header>
  );
}
