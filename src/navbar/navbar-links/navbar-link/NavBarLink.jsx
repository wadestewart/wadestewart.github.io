import React from "react";
import {
    Link
} from "react-router-dom";
import "./NavBarLink.css";

const NavBarLink = props => {
    const { index, name } = props;
    const path = `/${name}`;
    if (name === 'home') {
        return (
            <li className="logo" key={index} >
            <a className="link" href={path}>
                        <svg className="WadeLogo1_Image" data-name="WadeLogo1 Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.071 75.889">
                            <title>WadeLogo</title>
                                <path className="cls-1" d="M67.209,51.84a4.119,4.119,0,0,1-3.6.72C64.408,51.919,66.111,52.181,67.209,51.84Z"/>
                                <path className="cls-1" d="M76.212,70.225a8.638,8.638,0,0,1-5.04-.48C68.047,62.952,80.344,63.9,76.212,70.225Z"/>
                                <path className="cls-1" d="M59.769,66c.455,1.279.207,1.8.48,3.12a2.886,2.886,0,0,0-1.44,1.2c-.557-.255-1.942-.923-2.64-.24-.7-.746-1.513-1.367-1.2-3.12C56.636,66.115,57.914,64.822,59.769,66Z"/>
                                <path className="cls-1" d="M68.011,66.145c2.583,4.218-3.924,6.168-5.28,2.64A3.366,3.366,0,0,1,68.011,66.145Z"/>
                                <path className="cls-1" d="M67.689,49.68c.454.476.841.409,1.44.24-.822.492-.794.586-.96,1.44-1.319-.2-3.808,1.049-4.8,0,.493-.231,1.171-.033,1.2-1.2-.988.142-.844-.5-2.4.24.258,1.319.032,1.031,0,2.64-.781-1.459-.226-.073-.72.24-.677.429-2.093-.28-2.88.24-.068.724,1.858.681,1.92.48.385,1-1.3.517-2.16.24-4.473,7.766-8.451,16.029-16.32,20.4-6.217,2.846-14.4.554-17.28-4.08.214.147.429.29.48,0-.211-2.012-3.687-3.444-4.08-5.28,1.718.442,2.042,2.278,3.6,2.88-.291-1.947-2.3-2.595-3.36-3.84-1.132-1.329-1.666-3.064-3.12-4.08.485,2.235,2.3,3.137,3.36,4.8-2.125-.175-3.48-3.037-4.56-5.04-.6.466.29,1.454.48,1.92-1.935-.513-.569-5.073-2.64-5.52-1.709-6.39,1.51-12.412,6.48-12.96.488-.054.967-.7,1.2-.72.757-.079,1.646.13,2.64,0s1.487.582,2.64.72c.909.108,1.943-.536,2.4-.48,2.353.286,4.82,1.868,7.2,2.64,5.476,1.777,11.12,2.592,16.08,3.6,1.675-2.368,2.821-9.405,3.12-15.12.214-4.071-.177-7.878-2.16-9.84-5.952-.48-9.766,3.17-13.2,6-.08,5.181-3.454,10.288-7.68,6.72-.791-2.757,1.057-5.406,1.44-7.68.921-5.472-1.433-9.8-2.4-14.16-7.592,2.393-6.308,12.414-5.28,20.64.145,1.161-.433,2.284-.48,3.36-.7-.524-2.913,1.7-4.8.24-2.064-6.176-3.645-12.835-6.72-18a19.962,19.962,0,0,0-1.68,8.88c.146,4.08,2.465,9.539-2.4,10.08-.951.1-1.4-.533-2.4-.96a68.762,68.762,0,0,0-6-20.64C2.007,16.812.1,14.755.009,13.68a3.388,3.388,0,0,1,2.16-3.36c5.436-1.39,6.165,7.226,7.92,9.84,1.6-2.752,2.438-6.83,6-6.48,3.264.32,3.888,4.823,5.52,7.44,1.8-4.921,3.9-9.541,8.64-11.52.146-1.974-2.732-3.591-2.88-5.52-.2-2.6,2.527-4.229,5.04-2.64C33.227.818,34.717.868,35.289,0c4.782,1.617,10.5.656,15.36,1.68-.2.681-1.109.651-1.2,1.44-.071.631.931.189.72.96a1.674,1.674,0,0,0-1.68,1.44A28.1,28.1,0,0,1,36.009,6c1.265,5.055,4.421,10.3,4.8,17.04,4.342-1.457,8.625-5.067,14.16-4.32,3.363.453,5.967,4.089,6.72,7.92,1.5,7.608-.955,15.053-2.4,22.56,3.781.815,8.34-.485,11.28-.96C70.973,49.132,68.692,49.4,67.689,49.68Zm-42.24-2.4c-5.772-.643-6.641,3.261-5.76,7.68,1.255,6.293,8.385,16.092,16.32,16.08,8.25-.013,9.785-7.066,14.4-12-.057-1.98,2.059-3.058,1.44-4.8-1.827.05-8.159-.354-8.88-2.16.307.013.332.307.72.24.211-.771-.622-.5-.72-.96.613-.259.84,1.033,1.2.24-1.364-1.639-3.19.55-2.64.96C36.28,51.44,31.056,47.9,25.449,47.28Zm26.64,6c.008-.728-.842-.6-1.44-.72C50.575,53.673,51.11,53,52.089,53.28Z"/>
                                <path className="cls-1" d="M21.849,68.16a1.046,1.046,0,0,1,1.2,0c.031.43-.294.506-.24.96C22.246,69.043,22.272,68.377,21.849,68.16Z"/>
                        </svg>
                    </a>
            </li>
        )
    } else {
        return (
            <li key={index}>
                <Link to={path} className="link" >{name.toUpperCase()}</Link>
            </li>
        )
    }

}

export default NavBarLink;
