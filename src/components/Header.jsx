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

  /** 🔍 Detect active nav from route **/
  useEffect(() => {
    const path = location.pathname;

    if (["/careers", "/team", "/company"].includes(path)) {
      setActiveNav("about");
    } else if (path === "/support") {
      setActiveNav("support");
    } else if (path === "/") {
      setActiveNav("home");
    }
  }, [location.pathname]);

  /** ⏳ Dropdown hover delay **/
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300);
  };

  /** 🧭 Scroll to section **/
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 600);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
 <header className="fixed top-0 w-full bg-[#090D20]/70 backdrop-blur-xl z-50 px-6 md:px-24 py-4 border-b border-white/10">
  <div className="flex items-center justify-between max-w-7xl mx-auto">

    {/* 🔷 Logo */}
    <Link to="/" className="flex items-center gap-3 group">
      <img
        src="/images/logo.png"
        alt="Rexipay"
        className="w-7 h-9 transition-transform duration-300 group-hover:scale-105"
      />

      <div className="flex flex-col leading-none">
        <span className="text-xl md:text-2xl font-semibold tracking-wide">
          Rexi<span className="text-[#7450A9]">Pay</span>
        </span>
        <span className="hidden md:block text-[11px] text-gray-400 tracking-wider">
          Powering Payments. Everywhere.
        </span>
      </div>
    </Link>

    {/* 🖥 Desktop Navigation */}
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
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                activeNav === item.id
                  ? "text-[#A88CFF]"
                  : "text-gray-300 hover:text-[#A88CFF]"
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
              className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                activeNav === item.id
                  ? "text-[#A88CFF]"
                  : "text-gray-300 hover:text-[#A88CFF]"
              }`}
            >
              {item.label}
            </button>
          )}

          {/* Active Underline */}
          {activeNav === item.id && (
            <span className="absolute -bottom-1 w-4/5 h-[2px] bg-gradient-to-r from-[#7450A9] to-[#A88CFF] rounded-full animate-fade-in"></span>
          )}

          {/* Dropdown */}
          {item.hasDropdown && dropdownOpen && (
            <div
              className="absolute top-7 flex flex-col bg-white text-black rounded-xl shadow-2xl mt-4 py-2 w-48 z-20 border border-gray-200 animate-slide-down"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {["Company", "Team", "Careers"].map((label) => (
                <Link
                  key={label}
                  to={`/${label.toLowerCase()}`}
                  className="px-4 py-2 text-sm font-medium hover:bg-gray-100 transition-colors"
                  onClick={() => {
                    setDropdownOpen(false);
                    setActiveNav("about");
                  }}
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Support Button */}
      <Link
        to="/support"
        onClick={() => setActiveNav("support")}
        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
          activeNav === "support"
            ? "bg-[#7450A9] text-white shadow-lg shadow-[#7450A9]/40"
            : "bg-white text-black hover:bg-gray-100 hover:shadow-md"
        }`}
      >
        Support
      </Link>
    </nav>

    {/* 📱 Mobile Menu Button */}
    <button
      className="md:hidden text-white"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</header>

  );
};

export default Header;
