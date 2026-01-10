import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[88px] glass-nav flex items-center">
      {/* Gradient Bottom Border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, #7a57db, #a855f7)" }}
      ></div>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center">
            <img
              src={logo}
              alt="SIAT Logo"
              className="w-20 h-20 object-contain"
            />
            {/* Decorative Glow */}
            <div className="absolute inset-0 bg-lavender/40 blur-lg rounded-lg -z-10 group-hover:bg-lavender/60 transition-all"></div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-white/70 hover:text-white text-base font-medium transition-colors nav-underline ${index === 0 ? "nav-link-active" : ""
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <button className="hidden lg:flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-lavender to-purple-500 text-white text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(122,87,219,0.4)] transition-all">
            Start a Project
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-[88px] left-0 right-0 glass-nav md:hidden border-t border-white/10">
          <nav className="flex flex-col items-center py-6 gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white text-base font-medium transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 flex items-center justify-center h-12 px-8 rounded-full bg-gradient-to-r from-lavender to-purple-500 text-white text-sm font-bold tracking-wide">
              Start a Project
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
