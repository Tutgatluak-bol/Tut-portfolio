import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaTiktok,
} from "react-icons/fa";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className="
        border-t
        border-gray-200
        bg-white
        text-gray-900
        transition-colors
        duration-300
        dark:border-gray-800
        dark:bg-gray-950
        dark:text-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              className="
                text-lg
                font-bold
                tracking-tight
                text-gray-900
                transition-colors
                duration-300
                dark:text-white
              "
            >
              Tut <span className="text-[#C9A227]">Gatluak</span>
            </a>

            <p
              className="
                mt-3
                max-w-xs
                text-sm
                leading-6
                text-gray-500
                dark:text-gray-400
              "
            >
              Full-Stack Developer building modern and practical web
              applications.
            </p>

            <a
              href="mailto:ptgatluakb@gmail.com"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-500
                transition-colors
                hover:text-[#B08A18]
                dark:text-gray-400
                dark:hover:text-[#D4AF37]
              "
            >
              <Mail size={15} />
              ptgatluakb@gmail.com
            </a>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-900
                dark:text-white
              "
            >
              Navigation
            </h3>

            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-[#B08A18]
                      dark:text-gray-400
                      dark:hover:text-[#D4AF37]
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-900
                dark:text-white
              "
            >
              Connect
            </h3>

            <div className="mt-4 flex gap-2">
              <a
                href="https://linkedin.com/in/pt-gatluak-bol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-500
                  transition
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
                  hover:text-white
                  dark:border-gray-700
                  dark:text-gray-400
                "
              >
                <FaLinkedinIn size={14} />
              </a>

              <a
                href="https://github.com/Tutgatluak-bol"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-500
                  transition
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
                  hover:text-white
                  dark:border-gray-700
                  dark:text-gray-400
                "
              >
                <FaGithub size={14} />
              </a>

              <a
                href="https://tiktok.com/@ptgatluakb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  text-gray-500
                  transition
                  hover:border-[#C9A227]
                  hover:bg-[#C9A227]
                  hover:text-white
                  dark:border-gray-700
                  dark:text-gray-400
                "
              >
                <FaTiktok size={14} />
              </a>
            </div>

            <a
              href="#contact"
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-gray-900
                transition-colors
                hover:text-[#B08A18]
                dark:text-white
                dark:hover:text-[#D4AF37]
              "
            >
              Let's work together

              <ArrowUpRight
                size={16}
                className="text-[#C9A227]"
              />
            </a>
          </div>

          {/* CONTACT */}
          <div>
            <h3
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gray-900
                dark:text-white
              "
            >
              Contact
            </h3>

            <div
              className="
                mt-4
                space-y-2
                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              <a
                href="mailto:ptgatluakb@gmail.com"
                className="
                  block
                  transition-colors
                  hover:text-[#B08A18]
                  dark:hover:text-[#D4AF37]
                "
              >
                ptgatluakb@gmail.com
              </a>

              <a
                href="tel:+211923482721"
                className="
                  block
                  transition-colors
                  hover:text-[#B08A18]
                  dark:hover:text-[#D4AF37]
                "
              >
                +211 923 482 721
              </a>

              <p>Juba, South Sudan</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-2
            border-t
            border-gray-200
            py-5
            text-xs
            text-gray-400
            transition-colors
            duration-300
            dark:border-gray-800
            dark:text-gray-500
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Tut Gatluak. All rights reserved.
          </p>

          <p>
            Built with{" "}
            <span className="text-[#C9A227]">React</span>
            {" · "}
            <span className="text-[#C9A227]">Tailwind CSS</span>
            {" · "}
            <span className="text-[#C9A227]">Framer Motion</span>
          </p>
        </div>

      </div>
    </footer>
  );
}