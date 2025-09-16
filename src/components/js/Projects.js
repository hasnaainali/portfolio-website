import React, { useState } from "react"; 
import { Play, Github, X } from "lucide-react";
import "../css/Projects.css";
import { projects } from "../../data";

const Projects = () => {
  const [videoModal, setVideoModal] = useState(null);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="projects-card">
            <div className="image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="projects-overlay">
                <button
                  className="overlay-btn"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github size={18} /> GitHub
                </button>

                <button
                  className="overlay-btn"
                  onClick={() => setVideoModal(project.videoUrl)}
                >
                  <Play size={18} /> Demo
                </button>
              </div>
            </div>

            <div className="projects-info">
              <h3>{project.title}</h3>
              <p className="justify-text">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {videoModal && (
        <div className="video-overlay">
          <div className="video-modal">
            <button className="close-modal" onClick={() => setVideoModal(null)}>
              <X size={24} />
            </button>
            <iframe
              src={videoModal}
              width="100%"
              height="480"
              allow="autoplay"
              title="Project Demo"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
