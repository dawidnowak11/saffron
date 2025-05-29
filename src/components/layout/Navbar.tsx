import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Utensils, Menu as MenuIcon, X } from 'lucide-react';
import clsx from 'clsx';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicked outside
  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = () => {
        setIsMenuOpen(false);
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen]);

  return (
    <header 
      className={clsx(
        'fixed w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Utensils 
            className={clsx(
              'transition-colors duration-300',
              isScrolled ? 'text-primary' : 'text-white'
            )} 
            size={28} 
          />
          <span 
            className={clsx(
              'font-display text-xl md:text-2xl font-bold transition-colors duration-300',
              isScrolled ? 'text-neutral-900' : 'text-white'
            )}
          >
            Saffron & Thyme
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Menu', path: '/menu' },
            { name: 'About', path: '/about' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Reservations', path: '/reservations' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                clsx(
                  'nav-item-hover text-base font-medium transition-colors duration-300',
                  isActive 
                    ? 'text-primary' 
                    : isScrolled
                      ? 'text-neutral-800 hover:text-primary'
                      : 'text-white hover:text-primary-100'
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/reservations" className="btn btn-primary">
            Book a Table
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X 
              className={isScrolled ? 'text-neutral-800' : 'text-white'} 
              size={24} 
            />
          ) : (
            <MenuIcon 
              className={isScrolled ? 'text-neutral-800' : 'text-white'} 
              size={24} 
            />
          )}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={clsx(
            'fixed top-[60px] right-0 h-screen w-64 bg-white shadow-menu transition-transform duration-300 transform md:hidden',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col p-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'Menu', path: '/menu' },
              { name: 'About', path: '/about' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Reservations', path: '/reservations' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  clsx(
                    'py-3 px-4 text-base font-medium border-b border-neutral-100',
                    isActive ? 'text-primary' : 'text-neutral-800 hover:text-primary'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <Link 
              to="/reservations" 
              className="btn btn-primary mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};