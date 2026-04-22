import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-black/70 backdrop-blur-lg border-b border-white/10 shadow-lg">

      {/* 🔥 subtle separator line (NEW) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-amber-400 hover:scale-105 transition-transform cursor-pointer">
          Pt Gatluak
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-2 py-1 transition-all duration-300
                  hover:text-amber-400
                  ${
                    activeSection === link.href
                      ? "text-amber-400"
                      : "text-white/80"
                  }`}
              >
                {link.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-amber-400 transition-all duration-300
                    ${activeSection === link.href ? "w-full" : "w-0"}`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black/90 backdrop-blur-lg border-t border-white/10
        ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-white font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors
                  ${
                    activeSection === link.href
                      ? "text-amber-400"
                      : "text-white/80"
                  }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}