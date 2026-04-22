import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
} from "lucide-react";

import ProfilePic from "../assets/icons/profile-pic.jpg";

export default function Home() {
  // Typing text (active developer tone)
  const text =
    "I am building JobBoard apps, scalable systems, and modern web experiences.";

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  // typing animation
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 45); // smooth professional speed

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white px-6 pt-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_55%)]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I’m{" "}
            <span className="text-amber-400 drop-shadow-lg">
              Pt Gatluak Bol
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-white/80 font-medium">
            Full-Stack Web Developer
          </h2>

          {/* Typing animation */}
          <p className="text-white/60 max-w-xl leading-relaxed min-h-[60px]">
            {displayText}
            <span className="animate-pulse text-amber-400">|</span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-amber-400 text-black font-semibold
                         hover:scale-105 active:scale-95 transition-transform shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-xl border border-amber-400 text-amber-400
                         hover:bg-amber-400 hover:text-black transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 pt-6 text-white/60">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Mail />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Facebook />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Instagram />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-[420px] md:h-[420px]">

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-amber-400/20 blur-2xl scale-110" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={ProfilePic}
                alt="Pt Gatluak Bol"
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-amber-400/10" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-400"
      >
        <ArrowDown />
      </motion.div>
    </section>
  );
}