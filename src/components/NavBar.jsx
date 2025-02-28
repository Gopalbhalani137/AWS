import React, { useEffect, useState } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Identify the height of the Hero section
      const heroHeight = 700;

      // Show navbar after scrolling past hero section
      if (window.scrollY >= heroHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to section function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About Us', id: 'section-2' },
    { name: 'Events', id: 'events-section' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-500 ease-in-out
        ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        backdrop-blur-md bg-black/40
        border-b border-white/10
        px-4 md:px-6
      `}
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-xl">
            <span className="text-blue-400">Tech</span>Club
          </div>
          
          {/* Nav Items - Desktop */}
          <div className="flex items-center">
            <ul className="flex items-center gap-1 lg:gap-4 text-white mr-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="px-2 lg:px-3 py-2 inline-block text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Join Button */}
            <button className="
              relative 
              px-5 py-2 
              text-white text-sm font-medium
              rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500
              shadow-lg shadow-blue-700/20
              transition-all duration-300
              border border-white/20
              overflow-hidden
              group
            ">
              <span className="relative z-10">Join Club</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-white font-bold text-lg">
            <span className="text-blue-400">Tech</span>Club
          </div>
          
          {/* Hamburger Menu */}
          <button 
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 relative ${isMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''} transition-all duration-300 h-0.5 bg-white rounded-full`}></div>
            <div className={`w-6 mt-1.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 h-0.5 bg-white rounded-full`}></div>
            <div className={`w-6 mt-1.5 ${isMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''} transition-all duration-300 h-0.5 bg-white rounded-full`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`
          md:hidden 
          overflow-hidden 
          transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'max-h-screen py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}
        `}>
          <ul className="flex flex-col space-y-4 text-white pb-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <button 
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left pl-2 py-2 text-sm border-l-2 border-transparent hover:border-blue-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Join Button - Mobile */}
          <button className="
            w-full mt-2
            px-5 py-3 
            text-white text-sm font-medium
            rounded-md
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:from-blue-500 hover:to-purple-500
            transition-all duration-300
            border border-white/20
            relative
          ">
            Join Club
            <span className="absolute bottom-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;