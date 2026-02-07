import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Sample projects data
const projects = [
  {
    title: "Portfolio Website",
    desc: "My personal portfolio built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/username/portfolio",
    demo: "#",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "E-commerce App",
    desc: "Full-stack e-commerce web app with Node.js, Express, MySQL, and React.",
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: "https://github.com/username/ecommerce",
    demo: "#",
    img: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Blog Platform",
    desc: "A responsive blogging platform with user authentication and CRUD features.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/username/blog-platform",
    demo: "#",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-amber-400">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of projects showcasing my skills in front-end and
            full-stack development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.desc}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-amber-400 text-black text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.github}
                    target="https://github.com/Tutgatluak-bol/"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
