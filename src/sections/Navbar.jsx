import React, { useState } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const BASE = import.meta.env.BASE_URL; // <-- important

  function Navigation() {
    return (
      <ul className="nav-ul">
        <li className="nav-li">
          <a href="#home" className="nav-link">Home</a>
        </li>
        <li className="nav-li">
          <a href="#aboutus" className="nav-link">About Us</a>
        </li>
        <li className="nav-li">
          <a href="#services" className="nav-link">Services</a>
        </li>
        <li className="nav-li">
          <a href="#contact" className="nav-link">Contact Us</a>
        </li>
      </ul>
    );
  }

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex items-center justify-between py-2 sm:py-0">
          {/* Logo + Brand */}
          <a
            href="#home"   // ✅ don’t use "/" on GitHub Pages
            className="flex items-center gap-2 text-xl font-bold text-neutral-400 hover:text-white transition-colors"
          >
            <motion.img
              src={`${BASE}assets/logo.png`}   // ✅
              alt="SIAT Logo"
              className="h-8 w-auto"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? `${BASE}assets/close.svg` : `${BASE}assets/menu.svg`}  // ✅
              className="h-6 w-6"
              alt="menu toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ maxHeight: "100vh" }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
