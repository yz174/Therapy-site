'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Heart, Stethoscope } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-black/20 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo with Stethoscope */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className={`bg-gradient-to-r from-blue-500 to-emerald-500 p-2 rounded-lg mr-3 transition-all duration-300 ${
                isScrolled ? 'shadow-lg' : 'shadow-xl border border-white/20'
              }`}>
                <div className="relative">
                  <Stethoscope className="text-white" size={20} />
                  <Heart className="absolute -top-1 -right-1 text-emerald-200" size={12} />
                </div>
              </div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-white drop-shadow-lg'
              }`}>
                Dr. Serena Blake, PsyD
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-all duration-300 hover:text-blue-600 font-medium ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
              } hover:scale-105`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-all duration-300 hover:text-blue-600 font-medium ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
              } hover:scale-105`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`transition-all duration-300 hover:text-blue-600 font-medium ${
                isScrolled ? 'text-slate-700' : 'text-white drop-shadow-md'
              } hover:scale-105`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-500/30"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 p-2 rounded-lg ${
                isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10 drop-shadow-md'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 mx-4 mb-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left rounded-xl transition-all duration-200 font-medium"
              >
                About Dr. Blake
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left rounded-xl transition-all duration-200 font-medium"
              >
                Services & Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left rounded-xl transition-all duration-200 font-medium"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 w-full text-left rounded-xl transition-all duration-200 font-medium"
              >
                Get in Touch
              </button>
              
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="flex flex-col space-y-3 px-4">
                  <a href="tel:3235550192" className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200 p-2 hover:bg-blue-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      <Phone size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold">(323) 555-0192</div>
                      <div className="text-xs text-slate-500">Call for immediate assistance</div>
                    </div>
                  </a>
                  <a href="mailto:serena@blakepsychology.com" className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-200 p-2 hover:bg-emerald-50 rounded-lg">
                    <div className="bg-emerald-100 p-2 rounded-lg mr-3">
                      <Mail size={16} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Send Email</div>
                      <div className="text-xs text-slate-500">Response within 24 hours</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}