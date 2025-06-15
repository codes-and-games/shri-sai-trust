import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/#gallery' },
  { name: 'Contact', path: '/#contact' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollDirection, scrolledToTop } = useScrollDirection();
  const [isVisible, setIsVisible] = useState(true);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (scrollDirection === 'down' && !scrolledToTop && !isOpen) {
      setIsVisible(false);
    } else if (scrollDirection === 'up' || scrolledToTop) {
      setIsVisible(true);
    }
  }, [scrollDirection, scrolledToTop, isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only apply special handling for hash links on the home page
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <motion.header
      className={`fixed w-full z-50 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
        >
          <Heart className="h-8 w-8 text-primary-500" />
          <span className="font-montserrat font-bold text-xl text-navy-600">
            Shree Sai Education Trust
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={(e) => handleHashLinkClick(e, link.path)}
              className="font-lato text-base font-medium text-navy-600 hover:text-primary-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-navy-600" />
          ) : (
            <Menu className="h-6 w-6 text-navy-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      handleLinkClick();
                      handleHashLinkClick(e, link.path);
                    }}
                    className="font-lato text-navy-600 text-lg py-2 hover:text-primary-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;