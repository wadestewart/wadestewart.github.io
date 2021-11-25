import React from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import ReactDOM from 'react-dom';

import NavBarLink from './NavBarLink';

describe('<NavBarLink />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <NavBarLink name="TEST" />
            </Router>
        , div);
    });
});
