import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 700;
      setShowNavbar(window.scrollY >= heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About Us', id: 'section-2' },
    { name: 'Events', id: 'events-section' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-500 ease-in-out
      ${showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      backdrop-blur-md bg-black/40 border-b border-white/10 px-4 md:px-6
    `}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between h-16">
          <div className="text-white font-bold text-xl">
            <span className="text-blue-400">Cloud</span>Club
          </div>

          <div className="flex items-center">
            <ul className="flex items-center gap-1 lg:gap-4 text-white mr-4">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <button 
                    onClick={() => scrollToSection(item.id)} 
                    className="px-2 lg:px-3 py-2 text-sm font-medium hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all"></span>
                  </button>
                </li>
              ))}
              <li>
                <Link 
                  to="/team" 
                  className="
                    px-5 py-2 text-sm font-medium rounded-full 
                    bg-gradient-to-r from-blue-600 to-purple-600 
                    hover:from-blue-500 hover:to-purple-500 transition-all
                    border border-white/20 shadow-lg text-white
                  "
                >
                  <span className="relative z-10 text-white">Our Teams</span>
                </Link>
              </li>
            </ul>

            <Link to="https://www.meetup.com/aws-cloud-club-at-adani-university" className="
              px-5 py-2 text-sm font-medium rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600 
              hover:from-blue-500 hover:to-purple-500 transition-all
              border border-white/20 shadow-lg text-white
            ">
              <span className="relative z-10 text-white">Join</span>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between h-16">
          <div className="text-white font-bold text-lg">
            <span className="text-blue-400">Cloud</span>Club
          </div>

          <button 
  className="text-white p-2" 
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
  <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
  <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
</button>

        </div>
        <div className={`md:hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 py-0 opacity-0'}`}>
  <ul className="flex flex-col space-y-4 text-white">
    {navItems.map((item, index) => (
      <li key={index}>
        <button 
          onClick={() => scrollToSection(item.id)}
          className="pl-2 py-2 text-sm hover:text-blue-400"
        >
          {item.name}
        </button>
      </li>
    ))}
    <li>
      <Link 
        to="/team" 
        className="pl-2 py-2 text-sm hover:text-blue-400"
      >
        Our Teams
      </Link>
    </li>
  </ul>

  <Link to="https://www.meetup.com/aws-cloud-club-at-adani-university" className="
    block mt-4 px-5 py-3 text-center text-white text-sm rounded-md 
    bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 
  ">
    Join Club
  </Link>
</div>

      </div>
    </nav>
  );
}

export default Navbar;