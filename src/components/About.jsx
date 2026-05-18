import React from "react"
import { motion } from "framer-motion"
import { Code2, Globe, Rocket, User } from "lucide-react"

import Aboutpic from "../assets/icons/Aboutpic.jpg"

const skills = [
  {
    icon: <Code2 size={26} />,
    title: "Clean Code",
    desc: "Maintainable, scalable, and readable code using modern best practices.",
  },
  {
    icon: <Globe size={26} />,
    title: "Responsive Design",
    desc: "Interfaces optimized for all devices and screen sizes.",
  },
  {
    icon: <Rocket size={26} />,
    title: "Performance",
    desc: "Fast-loading, optimized, and efficient web applications.",
  },
  {
    icon: <User size={26} />,
    title: "User Experience",
    desc: "Designing intuitive systems focused on real user needs.",
  },
]

export default function About({ activeSection }) {
  const isActive = activeSection === "#about"

  return (
    <section
      id="about"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.10),transparent_60%)]" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            About <span className="text-amber-400">Me</span>
          </h1>

          {/* animated underline */}
          <div className="flex justify-center mt-6">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isActive ? 160 : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-[3px] bg-amber-400 rounded-full"
            />
          </div>

          <p className="text-white/60 mt-6 leading-relaxed text-lg">
            Full-stack developer focused on building fast, scalable, and
            user-friendly digital experiences that solve real-world problems.
          </p>
        </motion.div>

        {/* BIO SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* glow */}
            <div className="absolute -inset-3 bg-amber-400/20 blur-3xl rounded-3xl opacity-60 group-hover:opacity-80 transition" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <img
                src={Aboutpic}
                alt="Developer"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-amber-400/10" />

            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-amber-400">
              Who I Am
            </h2>

            <p className="text-white/60 leading-relaxed">
              I build modern full-stack applications using React, Node.js,
              Express, and MySQL, with a focus on clean architecture, scalable
              backend systems, and intuitive UI design.
            </p>

            <p className="text-white/60 leading-relaxed">
              I enjoy solving real-world problems through software engineering,
              improving user experience, and building systems that actually
              deliver value in production environments.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 pt-2">

              <span className="px-5 py-2 rounded-xl bg-amber-400 text-black font-semibold shadow-lg">
                Full-Stack Developer
              </span>

              <span className="px-5 py-2 rounded-xl border border-amber-400 text-amber-400">
                Problem Solver
              </span>

              <span className="px-5 py-2 rounded-xl border border-white/10 text-white/60">
                UI/UX Focused
              </span>

            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-xl
                           hover:scale-105 active:scale-95 transition-transform shadow-lg"
              >
                Let’s Work Together
              </a>
            </div>

          </motion.div>
        </div>

        {/* SKILLS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-amber-400/50 hover:bg-white/10 transition-all duration-300"
            >

              {/* glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-amber-400/5 opacity-0 group-hover:opacity-100 transition" />

              <div className="relative">

                <div className="text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {skill.title}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed">
                  {skill.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Meaningful
          </h2>

          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Open to opportunities, collaborations, and impactful software
            projects that solve real problems.
          </p>

          <a
            href="#contact"
            className="mt-6 inline-block px-8 py-3 bg-amber-400 text-black font-semibold rounded-xl
                       hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            Contact Me
          </a>
        </motion.div>

      </div>
    </section>
  )
}