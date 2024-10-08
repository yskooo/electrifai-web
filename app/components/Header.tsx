"use client";
import { useState, useEffect, MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); 
  const [isVisible, setIsVisible] = useState(true); 
  const [hideDelay, setHideDelay] = useState(false); 

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle scroll behavior with delay
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // If scrolling up, show the header
    if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      setHideDelay(false);
    } else {
      // Start delay timer before hiding the header
      setHideDelay(true);
    }

    // Update last scroll position
    setLastScrollY(currentScrollY);
  };

  // Effect to apply delay for header hiding
  useEffect(() => {
    if (hideDelay) {
      const timeout = setTimeout(() => {
        setIsVisible(false); // Hide the header after delay
      }, 300); // 300ms delay

      return () => clearTimeout(timeout); // Clean up timeout on unmount or re-render
    }
  }, [hideDelay]);

  // Listen to scroll events and handle visibility
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Smooth scrolling with offset to account for fixed header height
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); // Prevent default anchor link behavior

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      // Scroll to the calculated position with smooth behavior
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the mobile menu if open
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transform transition-transform duration-500 ease-in-out fixed top-0 left-0 right-0 z-50 bg-white shadow-lg flex items-center justify-between px-6 py-6 h-20`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <span className="text-xl font-bold text-[#0A0A0B] hover:text-[#2F4BE5]">
          Electrif<span className="italic">AI</span>
        </span>
      </Link>

      {/* Mobile Menu Toggle */}
      <button
        className="ml-auto lg:hidden text-[#0A0A0B] focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col lg:flex lg:flex-row lg:ml-auto lg:gap-12 absolute lg:static top-16 left-0 right-0 bg-white lg:bg-transparent lg:p-0 p-4 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out`}
      >
        {["Features", "AboutUs", "OurTeam", "Awards", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-lg font-medium text-[#0A0A0B] hover:underline underline-offset-4 transition-colors p-4 lg:py-0"
            onClick={(e) => handleSmoothScroll(e, item)} // Use smooth scroll function
          >
            {item.replace(/([A-Z])/g, ' $1').trim()} {/* Adds space between camel case letters */}
          </a>
        ))}
      </nav>
    </header>
  );
}
