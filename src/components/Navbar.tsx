import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/Moiwoh Jr..png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#process', label: 'Process' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-gray-900">
            <img src={logo} alt="" />
            {/* Emmanuel<span className="text-yellow-400">.dev</span> */}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-200 hover:text-yellow-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-yellow-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full text-center transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;