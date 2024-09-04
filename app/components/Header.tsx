"use client"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="px-6 py-10 h-20 flex items-center bg-black sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center">
        <span className="text-lg text-white hover:text-[#2F4BE5]">Electrif<span className='italic'>AI</span></span>
      </Link>

      <button
        className="ml-auto lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col lg:flex lg:flex-row lg:ml-auto lg:gap-12 absolute lg:static top-16 left-0 right-0 bg-black lg:p-0 p-4 shadow-lg lg:shadow-none`}
      >
        {["Features", "Our Team", "Awards", "Contact"].map((item) => (
          <Link
            key={item}
            href={`#${item.replace(/\s+/g, "")}`}
            className=" hover:underline underline-offset-4 text-sm font-medium divide-y text-white transition-colors  p-6 lg:py-0"
          >
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}