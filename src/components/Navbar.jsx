import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-24 py-4 backdrop-blur-md bg-transparent">
      <NavLink to="/" className="text-3xl sm:text-4xl font-serif tracking-wide text-black">
        Deepika
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10 text-gray-700 font-sans">
        <NavLink to="/" className="hover:underline underline-offset-7">Home</NavLink>
        <NavLink to="/about" className="hover:underline underline-offset-7">About me</NavLink>
        <NavLink to="/qualification" className="hover:underline underline-offset-7">Qualification</NavLink>
        <NavLink to="/projects" className="hover:underline underline-offset-7">Projects</NavLink>
        <NavLink to="/contact" className="flex items-center gap-2 hover:underline underline-offset-7">
          Contact <ArrowUpRight size={18} />
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-700"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-sm shadow-lg px-6 py-6 z-50"
        >
          <div className="flex flex-col gap-4 font-sans">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About me</NavLink>
            <NavLink to="/qualification" onClick={closeMenu}>Qualification</NavLink>
            <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
            <NavLink to="/contact" onClick={closeMenu} className="flex items-center gap-1">
              Contact <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
