import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and brief description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Utensils className="text-primary" size={24} />
              <span className="font-display text-xl font-bold">Saffron & Thyme</span>
            </Link>
            <p className="text-neutral-300 mt-4 max-w-xs">
              Experience the essence of Mediterranean cuisine with our carefully crafted dishes, made from locally sourced ingredients.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-neutral-300">123 Mediterranean Blvd, Coastal City, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span className="text-neutral-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-neutral-300">info@saffronandthyme.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">Monday - Thursday</p>
                  <p className="text-neutral-400">12:00 PM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">Friday - Saturday</p>
                  <p className="text-neutral-400">12:00 PM - 11:30 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <div>
                  <p className="text-neutral-300">Sunday</p>
                  <p className="text-neutral-400">11:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Menu', path: '/menu' },
                { name: 'About Us', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Reservations', path: '/reservations' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-neutral-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>© {new Date().getFullYear()} Saffron & Thyme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};