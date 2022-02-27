import React from 'react';
import { projects } from '../../data/projectData';
import ProjectCard from './project-card/ProjectCard';

const ProjectCards = () => {
    const cards = projects.map((project, i) => {
        return (
            <ProjectCard
                githubUrl={project.githubUrl}
                image = {project.image}
                key={i}
                name={project.name}
                stack={project.stack}
            />
        )
    })
    return cards;
};

export default ProjectCards;
