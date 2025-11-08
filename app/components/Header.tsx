/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"; 
import Link from "next/link";
import { useDarkMode } from "../context/DarkModeContext"; 
import { usePathname } from 'next/navigation';

type NavItem = {
  name: string;
  href?: string;
  isDropdown: boolean;
  items?: Array<{
    name: string;
    href: string;
  }>;
};

type Navigation = {
  mainLinks: NavItem[];
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hideDelay, setHideDelay] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navigation: Navigation = {
    mainLinks: [
      {
        name: 'Solutions',
        isDropdown: true,
        items: [
          { name: 'Solutions', href: '/solutions' },
          { name: 'Products', href: '/products' },
          { name: 'Research', href: '/research' },
        ],
      },
      {
        name: 'About',
        isDropdown: true,
        items: [
          { name: 'About Us', href: '/about' },
          { name: 'Meet Our Team', href: '/#OurTeam' },
        ],
      },
      { name: 'Awards', href: '/#Awards', isDropdown: false },
      { name: 'Contact', href: '/#Contact', isDropdown: false },
      { name: 'Careers', href: '/careers', isDropdown: false },
    ],
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Handle scroll behavior
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
  
    if (currentScrollY === 0) {
      setIsVisible(true);
      setHideDelay(false);
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true);
      setHideDelay(false);
    } else {
      setHideDelay(true);
    }
  
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (hideDelay) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [hideDelay]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } transform transition-transform duration-500 ease-in-out fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? "bg-[#000] text-white" : "bg-white text-[#0A0A0B]"
      } shadow-sm`}
    >
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => handleNavigation('/')}>
            <img 
              src="/svgs/elec_logo.svg" 
              alt="logo" 
              className="w-16 h-16 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" 
            />
          </Link>

          {/* Navigation */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 right-0 md:static md:block ${
              isDarkMode ? "bg-[#000]" : "bg-white"
            }`}
          >

            <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
              {navigation.mainLinks.map((item) => (
                <li key={item.name} className="relative group">
                  {item.isDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`flex items-center gap-1 px-5 py-3 md:py-2 w-full md:w-auto text-base ${
                          isDarkMode ? 'text-white hover:text-gray-300' : 'text-[#0A0A0B] hover:text-gray-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      <ul
                        className={`${
                          activeDropdown === item.name ? 'block' : 'hidden'
                        } md:hidden md:group-hover:block md:absolute md:top-full md:left-0 md:mt-1 md:min-w-[200px] ${
                          isDarkMode ? 'bg-[#1B1B1D]' : 'bg-white'
                        } md:shadow-lg md:rounded-lg overflow-hidden`}
                      >
                        {item.items?.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              onClick={() => handleNavigation(subItem.href)}
                              className={`block px-5 py-3 text-sm ${
                                isDarkMode
                                  ? 'hover:bg-gray-800'
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={() => handleNavigation(item.href || '#')}
                      className={`block px-5 py-3 md:py-2 text-base ${
                        isDarkMode ? 'text-white hover:text-gray-300' : 'text-[#0A0A0B] hover:text-gray-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#0A0A0B]'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
