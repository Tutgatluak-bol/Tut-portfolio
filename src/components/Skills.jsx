import React from "react";
import { motion } from "framer-motion";

import ReactLogo from "../assets/icons/react.svg";
import JsLogo from "../assets/icons/javascript.svg";
import NodeLogo from "../assets/icons/nodedotjs.svg";
import Mysql from "../assets/icons/mysql.svg";
import Tailwind from "../assets/icons/tailwind.svg";

const skills = [
  { name: "React", icon: ReactLogo, level: 90 },
  { name: "JavaScript", icon: JsLogo, level: 85 },
  { name: "Tailwind CSS", icon: Tailwind, level: 88 },
  { name: "Node.js", icon: NodeLogo, level: 80 },
  { name: "MySQL", icon: Mysql, level: 75 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black text-white py-28 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.10),transparent_65%)]" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-amber-400">Skills</span>
          </h2>

          <p className="text-white/60 mt-5 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build scalable, modern, and
            high-performance web applications.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 place-items-center">

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: "easeOut",
              }}
              className="group w-full max-w-[220px]"
            >
              {/* CARD */}
              <div
                className="relative flex flex-col items-center justify-center gap-5
                           rounded-3xl py-10 px-6
                           bg-white/5 border border-white/10
                           backdrop-blur-xl
                           transition-all duration-300
                           hover:-translate-y-2
                           hover:border-amber-400/50
                           hover:shadow-[0_0_40px_rgba(251,191,36,0.20)]"
              >
                {/* glow layer */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-400/5" />

                {/* ICON */}
                <div
                  className="relative w-16 h-16 flex items-center justify-center
                             rounded-2xl bg-black/40 border border-white/10
                             group-hover:border-amber-400/40
                             transition-all duration-300"
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-11 h-11 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* NAME */}
                <span className="text-base md:text-lg font-medium text-white/70 group-hover:text-amber-400 transition-colors">
                  {skill.name}
                </span>

                {/* SKILL BAR */}
                <div className="w-full space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-amber-400 rounded-full"
                    />
                  </div>

                  <div className="text-xs text-white/50 text-right">
                    {skill.level}%
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}