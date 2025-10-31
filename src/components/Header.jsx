import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-[#090D20]/80 backdrop-blur-sm z-50 px-6 md:px-24 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {<img src="/images/logo.png" alt="Rexipay" className="w-6 h-8" />}
          <span className="text-xl md:text-2xl font-normal">Rexipay</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-sm hover:text-gray-300 transition-colors">Home</a>
          <a href="#banking" className="text-sm hover:text-gray-300 transition-colors">Banking</a>
          <a href="#crypto" className="text-sm hover:text-gray-300 transition-colors">Crypto</a>
          <a href="#security" className="text-sm hover:text-gray-300 transition-colors">Security</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
            About us
          </button>
          <button className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition-colors">
            Support
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col gap-4 mt-4">
            <a 
              href="#home" 
              className="text-sm hover:text-[#F7931A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#banking" 
              className="text-sm hover:text-[#F7931A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Banking
            </a>
            <a 
              href="#crypto" 
              className="text-sm hover:text-[#F7931A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Crypto
            </a>
            <a 
              href="#security" 
              className="text-sm hover:text-[#F7931A] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Security
            </a>
            <button className="px-5 py-2 rounded-full text-sm bg-white/10 text-left hover:bg-white/20 transition-colors">
              About us
            </button>
            <button className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 transition-colors">
              Support
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;