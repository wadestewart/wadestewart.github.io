import React from "react";
import "./NavBar.css";
import NavBarLinks from "./navbar-links/NavBarLinks";

const NavBar = () => {
    const links = [ 'HOME', 'ABOUT', 'PROJECTS', 'CONTACT' ];
    return(
        <nav className="navbar">
            <ul className="flex-nav">
                <NavBarLinks links={links} />
            </ul>
        </nav>
    )
}

export default NavBar;
