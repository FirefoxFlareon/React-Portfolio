import React from 'react';
import projects from '../projects/projectList';
import ProjectCard from '../projects/projectCard';

export default function Portfolio() {
  return (
    <div className="portfolio">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
