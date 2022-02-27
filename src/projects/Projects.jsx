import React from 'react';
import './Projects.css';
import ProjectCards from './project-cards/ProjectCards';

const Projects = () => {
    return (
        <div className='project-cards' role='list'>
            <ProjectCards />
        </div>
    )
}

export default Projects;
