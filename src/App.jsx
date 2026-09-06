import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Frequently from "./components/frequently.jsx";
import ContactForm from "./components/contactForm.jsx";
import Footer from "./components/footer.jsx";
import Testimonials from "./components/Testimonials.jsx";

const App = () => {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-gray-900
        transition-colors
        duration-300
        dark:bg-gray-950
        dark:text-white
      "
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Frequently />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;