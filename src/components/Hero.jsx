import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

// Import your profile picture
import ProfilePic from "../assets/icons/profile-pic.jpg";

export default function Home() {
  return (
    <section id="Home" className="relative bg-black text-white min-h-screen flex items-center px-6 pt-30">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-amber-400">Pt Gatluak <br /> Bol</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300">
            Full‑Stack Web Developer
          </h2>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            I build modern, scalable, and user‑focused web applications using
            React, JavaScript, Node.js, Express, and MySQL. I turn ideas into
            reliable digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-2xl hover:scale-105 transition-transform"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-amber-400 rounded-2xl hover:bg-amber-400 hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-6 text-gray-400">
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Github />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              <Mail />
            </a>
          </div>
        </motion.div>

        {/* Right Visual: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative w-full flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl shadow-2xl border border-amber-400/30 overflow-hidden">
            <img
              src={ProfilePic}
              alt="Pt Gatluak Bol"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-3xl pointer-events-none" />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-400"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}
