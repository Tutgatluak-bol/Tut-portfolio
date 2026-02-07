import React from "react";
import { motion } from "framer-motion";

import ReactLogo from "../assets/icons/react.svg";
import JsLogo from "../assets/icons/javascript.svg";
import NodeLogo from "../assets/icons/nodedotjs.svg";
import Mysql from "../assets/icons/mysql.svg";
import Tailwind from "../assets/icons/tailwind.svg";

const skills = [
  { name: "React", icon: ReactLogo },
  { name: "JavaScript", icon: JsLogo },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Node.js", icon: NodeLogo },
  { name: "MySQL", icon: Mysql },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-amber-400">Skills</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-2 p-4 bg-zinc-700 border border-zinc-800 rounded-2xl hover:border-amber-400 hover:scale-105 transition-all cursor-default"
            >
              <div className="text-amber-400">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <span className="text-white font-semibold text-sm md:text-base">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
