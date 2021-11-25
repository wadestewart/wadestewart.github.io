import wade from '../img/transparent-lander.png';
import React from 'react';
import './LandingPage.css'

/**
 * @summary This Landing Page component renders:
 *  1. an svg image,
 *  2. a typing animation,
 *  3. 
 */
const LandingPage = () => {
    const text = 'Full Stack Web Developer\n'
    + 'Creative Problem Solver\n'
    + 'Wearer of Glasses'
    return (
        <div className="landing-page">
            <img src={wade} className="wade-img" alt="wade" />
            <div className="landing-text">
              <div className="typing">
                  <p>Hi, I'm Wade.</p>
              </div>
              <div className="hl"></div>
              <span className="landing-span">{text}</span>
            </div>
        </div>
    )
}

export default LandingPage;
