import React from 'react';
import './ProjectCard.css';
import gh from '../../../img/gh-logo.png';

const ProjectCard = props => {
    const parsedStack = props.stack.map((technology, i) => {
        return (
            <p key={i}>{technology}</p>
        )
    })
    return (
        <div className="project-card">
            <h1>{props.name}</h1>
            <img className="card-img" src={props.image} alt="Visual Card Description" />
            <span>{parsedStack}</span>
            <object data="" type="wut/lol">
                <a href={props.githubUrl} target='_blank' rel='noreferrer'>
                    <img src={gh} alt='Clickable link to GitHub' />
                </a>
            </object>
        </div>
    );
};

export default ProjectCard;
