import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import "../css/Skills.css";
import { skills } from "../../data";

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>My Skills</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((category, cIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={cIndex}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cIndex * 0.2 }}
              >
                <div className="category-header" style={{ color: category.color }}>
                  {Icon && <Icon className="category-icon" />}
                  <h3>{category.category}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, sIndex) => (
                    <motion.div
                      key={sIndex}
                      className="skill-item"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: `0px 0px 15px ${category.color}`,
                      }}
                    >
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>

                      <div className="progress-bar">
                        <motion.div
                          className="progress"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: cIndex * 0.2 + sIndex * 0.1 }}
                        />
                      </div>

                      <button
                        className="view-details-btn"
                        onClick={() => setSelectedSkill(skill)}
                      >
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="skill-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="close-modal"
                  onClick={() => setSelectedSkill(null)}
                >
                  <X size={24} />
                </button>

                <h3>{selectedSkill.name}</h3>

                <div className="skill-level-display">
                  <div className="level-bar">
                    <motion.div
                      className="level-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1 }}
                      style={{ backgroundColor: "#4DB5FF" }}
                    />
                  </div>
                  <span>{selectedSkill.level}%</span>
                </div>

                <p className="skill-description">{selectedSkill.description}</p>

                <div className="skill-details">
                  <div className="detail-row">
                    <div className="detail-label">Experience:</div>
                    <div className="detail-value">{selectedSkill.experience}</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">Projects Built:</div>
                    <div className="detail-value">
                      <ul>
                        {selectedSkill.projects.map((project, index) => (
                          <li key={index}>{project}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
