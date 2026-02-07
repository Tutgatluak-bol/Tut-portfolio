import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Policies */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-amber-400 transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/cookies" className="hover:text-amber-400 transition">Cookie Policy</a>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-amber-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-amber-400 transition">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-amber-400 transition">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Location</h3>
          <p className="text-gray-400">
            PT Gatluak - TechCare<br />
            Juba, South Sudan<br />
            Email: <a href="mailto:ptgatluakb@gmail.com" className="hover:text-amber-400 transition">ptgatluak@example.com</a><br />
            Phone: <a href="tel:+211900000000" className="hover:text-amber-400 transition">+211 900 000 000</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold text-amber-400 mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-2xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-2xl">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition text-2xl">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800 text-center text-gray-200 text-sm py-4">
        © {new Date().getFullYear()} _PT Gatluak - TechCare
      </div>
    </footer>
  );
}
