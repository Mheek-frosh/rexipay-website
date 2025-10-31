import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "banking", label: "Banking" },
    { id: "crypto", label: "Crypto" },
    { id: "card", label: "Card" },
    { id: "about", label: "About Us", hasDropdown: true },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    if (id !== "about") {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#090D20]/80 backdrop-blur-sm z-50 px-6 md:px-24 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Rexipay" className="w-6 h-8" />
          <span className="text-xl md:text-2xl font-normal">Rexipay</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
              onClick={() => handleNavClick(item.id)}
            >
              <a
                href={`#${item.id}`}
                className={`text-sm transition-colors focus:outline-none ${
                  activeNav === item.id
                    ? "text-[#7450A9]"
                    : "hover:text-[#7450A9]"
                }`}
              >
                {item.label}
              </a>

              {/* Active underline */}
              {activeNav === item.id && (
                <span className="absolute -bottom-1 w-4/5 h-[2px] bg-[#7450A9] rounded-full"></span>
              )}

              {/* About Us Dropdown */}
              {item.hasDropdown && dropdownOpen && (
                <div
                  className="absolute top-6 flex flex-col bg-white text-black rounded-lg shadow-lg mt-4 py-2 w-40 z-20"
                  onMouseLeave={() => setDropdownOpen(false)} // 👈 Closes when mouse leaves dropdown only
                >
                  <a
                    href="#company"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Company
                  </a>
                  <a
                    href="#team"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Team
                  </a>
                  <a
                    href="#careers"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Support Button */}
          <button className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 active:bg-gray-200 transition-colors">
            Support
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
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
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                <a
                  href={`#${item.id}`}
                  className={`text-sm transition-colors ${
                    activeNav === item.id
                      ? "text-[#7450A9]"
                      : "hover:text-[#7450A9]"
                  }`}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>

                {item.hasDropdown && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <a
                      href="#company"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Company
                    </a>
                    <a
                      href="#team"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Team
                    </a>
                    <a
                      href="#careers"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Careers
                    </a>
                  </div>
                )}
              </div>
            ))}

            <button className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 active:bg-gray-200 transition-colors">
              Support
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
