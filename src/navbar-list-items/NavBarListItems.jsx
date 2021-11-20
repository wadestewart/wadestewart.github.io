import React from 'react';

const NavBarListItems = props => {
    const listItems = props.map(item => {
        return (
            <li><a class="nav-scroll" href="#about">{item}</a></li>
        )
    });

    return listItems;
}

export default NavBarListItems;
