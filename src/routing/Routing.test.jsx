import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

import Routing from './Routing';
import NavBar from '../navbar/NavBar';

describe('<Routing />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Routing />, div);
    });

    test('renders Navbar', () => {
        render(<Routing />);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });
});
