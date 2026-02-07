import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Frequently Asked Questions", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // Offset for navbar height

      for (let link of links) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(link.name.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-black bg-opacity-90 backdrop-blur-md z-50 shadow-lg py-4 border-b border-green-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div id="Hero" className="text-2xl font-bold text-amber-400">Pt Gatluak</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition-colors hover:text-amber-400 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-amber-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black bg-opacity-95 px-6 py-4 flex flex-col space-y-4 text-white font-semibold">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-colors hover:text-amber-400 ${
                  activeSection === link.name.toLowerCase()
                    ? "text-amber-400"
                    : "text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
