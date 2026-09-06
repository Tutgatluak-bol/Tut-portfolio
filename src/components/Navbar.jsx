import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

 const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

  /*
  ================================================
  DARK MODE
  ================================================
  */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  /*
  ================================================
  ACTIVE SECTION
  ================================================
  */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    // Set the correct section on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  /*
  ================================================
  CLOSE MOBILE MENU
  ================================================
  */

  const handleNavigation = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        border-b
        border-gray-200/70
        bg-white/90
        backdrop-blur-md
        transition-colors
        duration-300

        dark:border-gray-800
        dark:bg-gray-950/90
      "
    >
      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
          lg:px-8
        "
      >
        {/* =========================================
            LOGO
        ========================================= */}

        <a
          href="#home"
          onClick={handleNavigation}
          className="
            group
            flex
            items-center
            gap-2
            text-xl
            font-bold
            tracking-tight
            text-gray-950
            transition-colors
            duration-300

            dark:text-white
          "
        >
          <span className="transition-colors duration-300 group-hover:text-[#B08A18]">
            Tut
          </span>

          <span className="text-[#C9A227]">
            Gatluak
          </span>
        </a>

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative
                  py-2
                  text-sm
                  font-medium
                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-[#B08A18] dark:text-[#C9A227]"
                      : "text-gray-500 hover:text-[#B08A18] dark:text-gray-400 dark:hover:text-[#C9A227]"
                  }
                `}
              >
                {link.name}

                {/* Active indicator */}

                <span
                  className={`
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    rounded-full
                    bg-[#C9A227]
                    transition-all
                    duration-300

                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* =========================================
            RIGHT SIDE ACTIONS
        ========================================= */}

        <div className="flex items-center gap-3">
          {/* Dark Mode */}

          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              text-gray-700
              transition-all
              duration-300

              hover:border-[#C9A227]
              hover:bg-[#C9A227]
              hover:text-white

              dark:border-gray-700
              dark:text-gray-300

              dark:hover:border-[#C9A227]
              dark:hover:bg-[#C9A227]
              dark:hover:text-white
            "
          >
            {isDark ? (
              <Sun size={18} strokeWidth={1.8} />
            ) : (
              <Moon size={18} strokeWidth={1.8} />
            )}
          </button>

          {/* Mobile Menu */}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={
              isOpen ? "Close menu" : "Open menu"
            }
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-gray-200
              text-gray-700
              transition-all
              duration-300

              hover:border-[#C9A227]
              hover:bg-[#C9A227]
              hover:text-white

              dark:border-gray-700
              dark:text-gray-300

              dark:hover:border-[#C9A227]
              dark:hover:bg-[#C9A227]
              dark:hover:text-white

              md:hidden
            "
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </nav>

      {/* ===========================================
          MOBILE NAVIGATION
      =========================================== */}

      <div
        className={`
          overflow-hidden
          border-t
          border-gray-200
          bg-white
          transition-all
          duration-300

          dark:border-gray-800
          dark:bg-gray-950

          md:hidden

          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col">
            {links.map((link) => {
              const isActive =
                activeSection ===
                link.href.replace("#", "");

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigation}
                  className={`
                    relative
                    border-b
                    border-gray-100
                    py-4
                    text-sm
                    font-medium
                    transition-colors
                    duration-300

                    dark:border-gray-800

                    ${
                      isActive
                        ? "text-[#B08A18] dark:text-[#C9A227]"
                        : "text-gray-500 hover:text-[#B08A18] dark:text-gray-400 dark:hover:text-[#C9A227]"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>

                    {/* Mobile active indicator */}

                    <span
                      className={`
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#C9A227]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0"
                        }
                      `}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}