import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/js/Navbar";
import Hero from "./components/js/Hero";
import About from "./components/js/About";
import Skills from "./components/js/Skills";
import Services from "./components/js/Services";
import Portfolio from "./components/js/Projects";
import Contact from "./components/js/Contact";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          className="loader"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="loader-ring"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="background-animation">
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{ y: [0, -30, 0], x: [0, 15, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
