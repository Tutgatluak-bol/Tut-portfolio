import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "JobBoard Platform (CEO Project)",
    desc: "A full-stack job marketplace platform where employers post jobs and candidates apply. Built with React, Node.js, Express, MySQL, and real-time features.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
    github: "https://github.com/Tutgatluak-bol/jobboard",
    demo: "#",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    highlight: true,
  },
  {
    title: "Personal Portfolio Website",
    desc: "A modern developer portfolio showcasing projects, skills, and experience with smooth animations and responsive design.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/username/personal-portfolio",
    demo: "#",
    img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Weather App",
    desc: "A real-time weather application fetching live data from APIs with dynamic UI updates based on location.",
    tech: ["React", "API", "Tailwind"],
    github: "https://github.com/username/weather-app",
    demo: "#",
    img: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-24 px-6 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.08),transparent_60%)]" />

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
            My <span className="text-amber-400">Projects</span>
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mt-4 leading-relaxed">
            A selection of real-world applications demonstrating full-stack
            development, API integration, and scalable system design.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300
                ${
                  project.highlight
                    ? "border-amber-400/40 shadow-[0_0_35px_rgba(251,191,36,0.15)]"
                    : "border-white/10"
                }
                bg-white/5 backdrop-blur-md
                hover:-translate-y-2 hover:border-amber-400/50`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4">

                <h3 className="text-lg font-semibold">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-5 pt-3 text-sm">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live
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