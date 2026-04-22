import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">

      {/* subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* TOP CTA SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something{" "}
            <span className="text-amber-400">Great Together</span>
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            I’m open to freelance work, collaborations, and full-time
            opportunities. Let’s turn ideas into scalable digital products.
          </p>

          <a
            href="#contact"
            className="inline-block mt-6 px-8 py-3 bg-amber-400 text-black font-semibold rounded-xl
                       hover:scale-105 active:scale-95 transition-transform shadow-lg"
          >
            Contact Me
          </a>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400">
              PT Gatluak
            </h3>

            <p className="text-white/60 mt-4 leading-relaxed">
              Full-Stack Developer focused on building fast, scalable, and
              modern web applications using React, Node.js, and MySQL.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navigation
            </h3>

            <ul className="space-y-2 text-white/60">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="hover:text-amber-400 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <p className="text-white/60 space-y-2">
              <div>
                Email:{" "}
                <a
                  href="mailto:ptgatluakb@gmail.com"
                  className="hover:text-amber-400 transition"
                >
                  ptgatluakb@gmail.com
                </a>
              </div>

              <div>
                Phone:{" "}
                <a
                  href="tel:+211923482721"
                  className="hover:text-amber-400 transition"
                >
                  +211 923 482 721
                </a>
              </div>

              <div className="pt-2">Juba, South Sudan</div>
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>

            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com/profile.php?id=61583085802467"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://tiktok.com/@ptgatluakb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition"
              >
                <FaTiktok />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://github.com/tutgatluak-bol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:text-amber-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
          <p>© {new Date().getFullYear()} PT Gatluak — TechCare</p>

          <p className="mt-2 md:mt-0">
            Built with React • Tailwind • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}