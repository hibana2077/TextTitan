'use client';

import React, { useState } from 'react';
import { Home, BookOpen, BarChart, User, Settings, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, text: 'Home', href: '/' },
    { icon: BookOpen, text: 'Quiz', href: '/quiz' },
    { icon: BarChart, text: 'Results', href: '/results' },
    { icon: User, text: 'Profile', href: '/profile' },
    { icon: Settings, text: 'Settings', href: '/settings' }
  ];

  return (
    <nav className="bg-dodger-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg p-4 mb-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-dodger-blue-100">Text Titan</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="text-dodger-blue-200 hover:text-dodger-blue-100 transition-colors">
              <item.icon className="inline-block mr-1" size={20} />
              {item.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-dodger-blue-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href}
              className="block py-2 text-dodger-blue-200 hover:text-dodger-blue-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="inline-block mr-2" size={20} />
              {item.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;