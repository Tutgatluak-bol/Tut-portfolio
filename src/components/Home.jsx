import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  Download,
} from "lucide-react"

import ProfilePic from "../assets/icons/profile-pic.jpg"

export default function Home() {
  // Typing text
  const text =
    "Building full-stack applications with React, Node.js, Express, and MySQL."

  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)

  // Typing animation
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index])
        setIndex(index + 1)
      }, 40)

      return () => clearTimeout(timeout)
    }
  }, [index])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-black text-white px-6 pt-24 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_55%)]" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >

          {/* Availability */}
          <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Hi, I’m{" "}
            <span className="text-amber-400 drop-shadow-lg">
              Tut Gatluak
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-xl md:text-2xl text-white/80 font-medium">
            Full-Stack Developer • React • Node.js • MySQL
          </h2>

          {/* Typing animation */}
          <p className="text-white/60 max-w-xl leading-relaxed min-h-[60px] text-lg">
            {displayText}
            <span className="animate-pulse text-amber-400">|</span>
          </p>

          {/* Mission statement */}
          <p className="text-amber-400 text-sm font-medium">
            Focused on solving recruitment and accessibility challenges through
            software.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Tailwind",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10
                           text-sm text-white/70 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 pt-4">

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

            <a
              href="/Tut_Gatluak_CV.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 rounded-xl
                         bg-white/5 border border-white/10 text-white
                         hover:bg-white/10 transition-all"
            >
              <Download size={18} />
              Download CV
            </a>

          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 flex-wrap">

            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                10K+
              </h3>

              <p className="text-sm text-white/60">
                User Flows Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                3+
              </h3>

              <p className="text-sm text-white/60">
                Projects Built
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-400">
                2+
              </h3>

              <p className="text-sm text-white/60">
                Years Experience
              </p>
            </div>

          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5 pt-8 text-white/60">

            <a
              href="https://github.com/Tutgatluak-bol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/in/pt-gatluak-bol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:ptgatluakb@gmail.com"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Mail size={22} />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Facebook size={22} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 hover:scale-110 transition-all"
            >
              <Instagram size={22} />
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

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl scale-110" />

            {/* Floating badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-20
                         bg-black/80 border border-amber-400
                         px-5 py-3 rounded-2xl backdrop-blur-md"
            >
              <p className="text-sm text-white/70 text-center">
                Building Real-World
              </p>

              <h4 className="text-amber-400 font-semibold text-center">
                Full-Stack Systems
              </h4>
            </div>

            {/* Image container */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden
                         border-4 border-amber-400/30 shadow-2xl"
            >

              <img
                src={ProfilePic}
                alt="Tut Gatluak"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-amber-400/10" />

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
        <ArrowDown size={28} />
      </motion.div>
    </section>
  )
}