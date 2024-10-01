import React, { useState, useEffect } from 'react'
import { Github } from 'lucide-react'
import DarkModeToggle from './DarkModeToggle'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 flex justify-end items-center p-4 text-white transition-shadow ${
        isScrolled ? 'bg-white dark:bg-gray-900 dark:border-gray-700' : 'bg-transparent'
      }`}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full py-2 px-4 text-black dark:text-white dark:bg-gray-800 bg-gray-200"
      />
      <DarkModeToggle />
      <a
        href=""
        className="p-2 rounded-full dark:hover:bg-gray-700 hover:bg-gray-200"
      >
        <Github size={24} className="text-black dark:text-white" />
      </a>
    </nav>
  );
}

export default Navbar;
