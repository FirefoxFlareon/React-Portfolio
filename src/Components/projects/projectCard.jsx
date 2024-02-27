import React from "react";

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <a href={project.repo}> GitHub Repo</a>
            <br></br>
            <a href={project.deployment}>{project.deployment}</a>
            <br></br>
            <img src={project.image} alt={project.title} style={{ width: '75%', height: '75%' }} />
        </div>
    )
};
