import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Frequently from "./components/Frequently.jsx"; 
import ContactForm from "./components/ContactForm.jsx";  // ✅ Corrected
import Footer from "./components/footer.jsx";  

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Frequently /> 
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
