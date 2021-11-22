import React from 'react';
import ReactDOM from 'react-dom';

import NavBarLink from './NavBarLink';

describe('<NavBarLink />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBarLink name="TEST" />, div);
    });
});
