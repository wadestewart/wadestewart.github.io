import React from 'react';
import { projects } from '../../data/projectData';
import ProjectCard from './project-card/ProjectCard';

const ProjectCards = () => {
    const cards = projects.map((project, i) => {
        return (
            <ProjectCard
                appUrl={project.appUrl}
                githubUrl={project.githubUrl}
                key={i}
                stack={project.stack}
                video={project.video}
            />
        )
    });
    return cards;
};

export default ProjectCards;
