import React from "react";
import './projectCard.css';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
          <h2 className="project-title">{project.title}</h2>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-links">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
            {project.deployment && (
              <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                Deployment
              </a>
            )}
          </div>
        </div>
      );
    };
