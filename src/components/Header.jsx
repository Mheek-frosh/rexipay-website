// src/components/Header.jsx, i need towork on this file
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home", section: "home" },
    { id: "banking", label: "Banking", section: "banking" },
    { id: "crypto", label: "Crypto", section: "crypto" },
    { id: "card", label: "Card", section: "card" },
    { id: "about", label: "About Us", hasDropdown: true },
  ];

  // ✅ Detect active nav based on route
  useEffect(() => {
    if (
      location.pathname === "/careers" ||
      location.pathname === "/team" ||
      location.pathname === "/company"
    ) {
      setActiveNav("about");
    } else {
      setActiveNav("home");
    }
  }, [location.pathname]);

  // 🕒 Keep dropdown open slightly longer
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  // 🧭 Scroll to section handler
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 500);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-[#090D20]/80 backdrop-blur-md z-50 px-6 md:px-24 py-4 border-b border-white/10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* 🪪 Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Rexipay" className="w-6 h-8" />
          <span className="text-xl md:text-2xl font-normal">Rexipay</span>
        </Link>

        {/* 🌐 Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center"
              onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
              onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
            >
              {item.hasDropdown ? (
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`text-sm transition-colors ${
                    activeNav === item.id
                      ? "text-[#7450A9]"
                      : "hover:text-[#7450A9]"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setActiveNav(item.id);
                    scrollToSection(item.section);
                  }}
                  className={`text-sm transition-colors ${
                    activeNav === item.id
                      ? "text-[#7450A9]"
                      : "hover:text-[#7450A9]"
                  }`}
                >
                  {item.label}
                </button>
              )}

              {/* Active underline */}
              {activeNav === item.id && (
                <span className="absolute -bottom-1 w-4/5 h-[2px] bg-[#7450A9] rounded-full"></span>
              )}

              {/* 🟣 Dropdown */}
              {item.hasDropdown && dropdownOpen && (
                <div
                  className="absolute top-6 flex flex-col bg-white text-black rounded-lg shadow-lg mt-4 py-2 w-44 z-20 border border-gray-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/company"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Company
                  </Link>
                  <Link
                    to="/team"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Team
                  </Link>
                  <Link
                    to="/careers"
                    className="px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setActiveNav("about");
                      setDropdownOpen(false);
                    }}
                  >
                    Careers
                  </Link>
                </div>
              )}
            </div>
          ))}

          {/* 🧭 Support Button */}
          <button className="px-5 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-100 active:bg-gray-200 transition-colors">
            Support
          </button>
        </nav>

        {/* 📱 Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <div key={item.id} className="flex flex-col">
                {!item.hasDropdown ? (
                  <button
                    onClick={() => {
                      setActiveNav(item.id);
                      scrollToSection(item.section);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-sm transition-colors ${
                      activeNav === item.id
                        ? "text-[#7450A9]"
                        : "hover:text-[#7450A9]"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    <Link
                      to="/company"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Company
                    </Link>
                    <Link
                      to="/team"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Team
                    </Link>
                    <Link
                      to="/careers"
                      className="text-sm hover:text-[#7450A9]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Careers
                    </Link>
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
