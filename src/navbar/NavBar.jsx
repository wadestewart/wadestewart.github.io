import React from "react";
import "./NavBar.css";
import NavBarLinks from "./navbar-links/NavBarLinks";

/**
 * @summary This component renders the NavBar which 
 */
const NavBar = () => {
    const links = [ 'home', 'github', 'linkedin', 'resume' ];
    return(
        <nav className="navbar">
            <ul className="flex-nav">
                <NavBarLinks links={links} />
            </ul>
        </nav>
    )
}

export default NavBar;
