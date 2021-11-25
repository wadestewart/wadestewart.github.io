import React from "react";
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import "./NavBar.css";
import NavBarLinks from "./navbar-links/NavBarLinks";

/**
 * @summary This component renders the NavBar which 
 */
const NavBar = () => {
    const links = [ 'Home', 'About', 'Projects', 'Contact' ];
    return(
        <Router>
            <nav className="navbar">
                <ul className="flex-nav">
                    <NavBarLinks links={links} />
                </ul>
            </nav>
        </Router>
    )
}

export default NavBar;
