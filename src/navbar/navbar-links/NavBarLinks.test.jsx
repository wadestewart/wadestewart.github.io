import React from 'react';
import ReactDOM from 'react-dom';

import NavBarLinkList from './NavBarLinks';

describe('<NavBarLinks />', () => {
    const links = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBarLinkList links={links} />, div);
    });
});
