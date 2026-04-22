import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Rocket, User } from "lucide-react";
import Aboutpic from "../assets/icons/Aboutpic.jpg";

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
];

export default function About({ activeSection }) {
  const isActive = activeSection === "#about";

  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About <span className="text-amber-400">Me</span>
          </h1>

          {/* 🔥 Animated ACTIVE UNDERLINE */}
          <div className="flex justify-center mt-5">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: isActive ? 140 : 0,
                opacity: isActive ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-[3px] bg-amber-400 rounded-full"
            />
          </div>

          <p className="text-white/60 mt-6 leading-relaxed">
            Full-stack developer focused on building fast, scalable, and
            user-friendly digital experiences that deliver real value.
          </p>
        </motion.div>

        {/* BIO SECTION */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-amber-400/10 blur-2xl rounded-3xl" />

            <img
              src={Aboutpic}
              alt="Developer"
              className="relative rounded-3xl w-full h-[420px] object-cover border border-white/10 shadow-2xl"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-semibold text-amber-400">
              Who I Am
            </h2>

            <p className="text-white/60 leading-relaxed">
              I build applications using React, Node.js, Express, and MySQL,
              focusing on clean architecture, performance optimization, and
              real-world usability.
            </p>

            <p className="text-white/60 leading-relaxed">
              I value simplicity, continuous learning, and crafting products
              users can rely on and enjoy using daily.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-3 pt-3">
              <span className="px-5 py-2 rounded-xl bg-amber-400 text-black font-semibold">
                Full-Stack Developer
              </span>

              <span className="px-5 py-2 rounded-xl border border-amber-400 text-amber-400">
                Problem Solver
              </span>
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
              transition={{ delay: i * 0.08 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6
                         hover:border-amber-400/50 transition-all duration-300"
            >
              <div className="text-amber-400 mb-3 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {skill.title}
              </h3>

              <p className="text-white/50 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-10"
        >
          <h2 className="text-3xl font-bold">
            Let’s Build Something Meaningful
          </h2>

          <p className="text-white/50 mt-3 max-w-xl mx-auto">
            Open to opportunities, collaborations, and impactful projects.
          </p>

          <button className="mt-6 px-8 py-3 bg-amber-400 text-black font-semibold rounded-xl
                             hover:scale-105 active:scale-95 transition-transform shadow-lg">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}