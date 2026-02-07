import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Rocket, User } from "lucide-react";

// import my about image
import Aboutpic from "../assets/icons/Aboutpic.jpg";

// The arrays section
const skills = [
    {
        icon: <Code2 size={28} />,
        title: "Clean Code",
        desc: "Maintainable and scalable applications using modern practices.",
    },
    {
        icon: <Globe size={28} />,
        title: "Responsive Design",
        desc: "Interfaces that work beautifully on all devices.",
    },
    {
        icon: <Rocket size={28} />,
        title: "Performance",
        desc: "Fast, efficient, and reliable web experiences.",
    },
    {
        icon: <User size={28} />,
        title: "User Focus",
        desc: "Experiences designed around real user needs.",
    },
];

// The main function
export default function About() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-amber-400">Me</span>
          </h1>
          <p className="text-gray-300">
            Full‑stack developer passionate about building fast, scalable, and
            user‑friendly digital products that create real impact.
          </p>
        </motion.div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src={Aboutpic}
            alt="Developer workspace"
            className="rounded-2xl shadow-2xl object-cover w-full h-[420px]"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5">
            <h2 className="text-2xl font-semibold text-amber-400">Who I Am</h2>

            <p className="text-gray-300">
              I work with React, JavaScript, Node.js, Express, and MySQL to
              transform complex problems into elegant solutions while keeping
              performance and accessibility a priority.
            </p>

            <p className="text-gray-300">
              Known for attention to detail, continuous learning, and building
              products users genuinely enjoy.
            </p>

            <div className="flex gap-4 pt-2 flex-wrap">
              <span className="px-5 py-2 bg-amber-400 text-black font-semibold rounded-xl">
                Full‑Stack Developer
              </span>
              <span className="px-5 py-2 border border-amber-400 rounded-xl">
                Problem Solver
              </span>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4 hover:border-amber-400 transition"
            >
              <div className="text-amber-400">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Open to opportunities, collaborations, and innovative projects.
          </p>

          <button className="px-8 py-3 bg-amber-400 text-black font-semibold rounded-2xl hover:scale-105 transition-transform">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
}

