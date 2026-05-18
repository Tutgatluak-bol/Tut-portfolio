import React from "react"
import { motion } from "framer-motion"

import ReactLogo from "../assets/icons/react.svg"
import JsLogo from "../assets/icons/javascript.svg"
import NodeLogo from "../assets/icons/nodedotjs.svg"
import Mysql from "../assets/icons/mysql.svg"
import Tailwind from "../assets/icons/tailwind.svg"

const skills = [
  { name: "React", icon: ReactLogo, level: 60 },
  { name: "JavaScript", icon: JsLogo, level: 75 },
  { name: "Tailwind CSS", icon: Tailwind, level: 88 },
  { name: "Node.js", icon: NodeLogo, level: 80 },
  { name: "MySQL", icon: Mysql, level: 75 },
]

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            My <span className="text-amber-400">Skills</span>
          </h2>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto leading-relaxed">
            Technologies I use to build scalable full-stack applications,
            APIs, and modern user interfaces.
          </p>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <h3 className="text-3xl font-semibold text-amber-400">
              What I Work With
            </h3>

            <p className="text-white/60 leading-relaxed">
              I specialize in building full-stack applications using modern
              JavaScript technologies. My focus is on performance, clean
              architecture, and scalable backend systems.
            </p>

            <p className="text-white/60 leading-relaxed">
              I continuously improve my skills through real-world projects like
              job boards, dashboards, and API-driven platforms.
            </p>

            {/* highlight box */}
            <div className="p-5 rounded-2xl border border-white/10 bg-white/5">
              <p className="text-sm text-white/60">
                Focus Areas:
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-semibold">
                  Frontend
                </span>

                <span className="px-3 py-1 rounded-full border border-amber-400 text-amber-400 text-xs">
                  Backend
                </span>

                <span className="px-3 py-1 rounded-full border border-white/20 text-white/60 text-xs">
                  APIs
                </span>

                <span className="px-3 py-1 rounded-full border border-white/20 text-white/60 text-xs">
                  Databases
                </span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SKILLS LIST */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >

            {skills.map((skill, i) => (
              <div key={skill.name} className="space-y-3">

                {/* TOP ROW */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6"
                    />

                    <span className="text-white/80 font-medium">
                      {skill.name}
                    </span>

                  </div>

                  <span className="text-sm text-amber-400">
                    {skill.level}%
                  </span>

                </div>

                {/* BAR */}
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                    className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                  />

                </div>

              </div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  )
}