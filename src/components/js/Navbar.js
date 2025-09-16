import React, { useState } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
      <a href="/resume.pdf" className="cv-btn" download>
        Download CV
      </a>
    </nav>
  );
};

export default Navbar;
