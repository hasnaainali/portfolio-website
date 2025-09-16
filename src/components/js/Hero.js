import React, { useState, useEffect, useMemo } from "react";
import "../css/Hero.css";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  const words = useMemo(() => ["Full stack Developer", "Web Developer"], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoaderVisible(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timer;

    if (!isDeleting) {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 800);
        }
      }, 120);
    } else {
      timer = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((w) => w + 1);
        }
      }, 60);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]); 

  return (
    <>
      {loaderVisible && (
        <div className="page-loader">
          <div className="loader-inner" />
        </div>
      )}

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="image-container-hero">
            <img src="/profile.png" alt="Hasnain Ali" className="profile-img" />
          </div>
        </div>

        <div className="hero-right">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Hasnain Ali</h1>

          <h2 className="role">
            And I'm a{" "}
            <span className="typed" aria-hidden>
              {text}
            </span>
          </h2>

          <p className="desc">
            I build fast, accessible, and maintainable web applications using React and modern web technologies. I love clean UI, efficient code, and creating intuitive, user-friendly experiences.
          </p>

          <div className="socials-and-btns">
            <div className="socials" aria-label="social links">
              <a
                className="social-icon"
                href="https://www.instagram.com/comsats_atk_vibes"
                aria-label="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                className="social-icon"
                href="https://www.linkedin.com/in/hasnaainali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>

              <a
                className="social-icon"
                href="https://github.com/hasnaainali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <FaGithub />
              </a>
            </div>

            <div className="btns">
              <a href="#contact" className="hire-btn">
                Hire Me
              </a>
              <a href="#contact" className="contact-btn">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
