import React from 'react';
import projects from '../projects/projectList';
import ProjectCard from '../projects/projectCard';

function Portfolio() {
  return (
    <div className="portfolio">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;