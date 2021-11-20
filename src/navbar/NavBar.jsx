import React from "react";
import "./NavBar.css";
import LogoHomeButton from "../home-logo-button/LogoHomeButton";

const NavBar = () => {
    return(
        <nav className="navbar">
        <ul className="flex-nav">
            <LogoHomeButton />
            
            <li>PROJECTS</li>
            <li>CONTACT</li>
        </ul>
    </nav>
    )
}

export default NavBar;
