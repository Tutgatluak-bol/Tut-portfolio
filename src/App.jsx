import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Frequently from "./components/Frequently.jsx"; 
import ContactForm from "./components/contactForm.jsx"; 
import Footer from "./components/footer.jsx";  
import Testimonials from "./components/Testimonials.jsx";  

const App = () => {
  return (
    <div className="overflow-x-hidden">
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
