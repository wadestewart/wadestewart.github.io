import React from 'react';
import './ProjectCard.css';
import gh from '../../../img/gh-logo.png';

const ProjectCard = props => {
    // concatenate string of the tech stacks
    let techString = '';
    props.stack.forEach(technology => {
        techString += ` ${technology} `;
    })

    // set the ref for the video play/pause on hover
    let vidRef = React.createRef();
    const playVideo = () => {
        vidRef.current.play();
    }
    const pauseVideo = () => {
        vidRef.current.pause();
    }

    // on click redirect to deployed application
    const handleClick = url => {
        const newWindow = window.open(url, '_blank', 'noopener noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    return (
        <div className="project-card" role="listitem">
            <video
                className="card-vid"
                muted="muted"
                onClick={() => handleClick(props.appUrl)}
                onMouseOver={() => playVideo()}
                onMouseOut={() => pauseVideo()}
                ref={vidRef}
                src={props.video}
            >
            </video>
            <span>{techString}</span>
            <object data="" type="wut/lol">
                <a href={props.githubUrl} target='_blank' rel='noreferrer'>
                    <img className='gh-logo' src={gh} alt='Clickable link to GitHub' />
                </a>
            </object>
        </div>
    );
};

export default ProjectCard;
