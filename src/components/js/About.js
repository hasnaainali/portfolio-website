import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Layers, Award } from "lucide-react";
import "../css/About.css";

const About = () => {
  const aboutData = {
    introduction:
      "Full-Stack Developer with hands-on experience in building modern web applications. I specialize in React, Node.js, Express, MongoDB, and dynamic front-end design using HTML, CSS, and JavaScript.",
    mission:
      "My mission is to craft scalable, robust, and visually appealing applications while constantly learning cutting-edge technologies.",
    experience: "2+ years",
    location: "Islamabad, Pakistan",
    interests: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "AI/ML", "Web Development"]
  };

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "7+", label: "Technologies" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const timeline = [
    { year: "2025", title: "Full Stack Developer", description: "Built multiple full-stack web applications using React, Node.js, Express, and MongoDB." },
    { year: "2025", title: "Backend Developer", description: "Lead backend development projects for scalable APIs." },
    { year: "2024", title: "Frontend Developer", description: "Focused on React and modern JavaScript to create responsive web interfaces." }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Learn more about my journey & expertise</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="about-text"
          >
            <h3>Hello! I'm a Full-Stack Developer</h3>
            <p className="justify-text">{aboutData.introduction}</p>
            <p className="justify-text">{aboutData.mission}</p>

            <div className="about-details">
              <div className="detail-item">
                <Calendar className="detail-icon" />
                <span><strong>Experience:</strong> {aboutData.experience}</span>
              </div>
              <div className="detail-item">
                <MapPin className="detail-icon" />
                <span><strong>Location:</strong> {aboutData.location}</span>
              </div>
              <div className="detail-item">
                <Layers className="detail-icon" />
                <span><strong>Skills:</strong> {aboutData.interests.join(", ")}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="about-image"
          >
            <div className="image-container">
              <img
                src={`${process.env.PUBLIC_URL}/code.png`}
                alt="About Me"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x500/8B5CF6/FFFFFF?text=Your+Photo";
                }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="stats-container"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="stat-item" whileHover={{ scale: 1.05 }}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="timeline-container"
        >
          <h3>My Journey</h3>
          <div className="timeline">
            {timeline.map((item, index) => (
              <motion.div key={index} className="timeline-item" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + index * 0.2 }}>
                <div className="timeline-marker"><Award size={30} /></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
