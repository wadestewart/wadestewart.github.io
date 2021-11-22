import React from 'react';
import './NavBarLinks.css';
import NavBarLink from './navbar-link/NavBarLink'

const NavBarLinkList = props => {
    const { links } = props;
    const linkItems = links.map((link, index) => {
        return (
            <NavBarLink name={link} key={index} />
        )
    });

    return linkItems;
}

export default NavBarLinkList;
