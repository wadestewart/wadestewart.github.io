import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('<ProjectCard', () => {
    const props = {
        name: "Wade's Project",
        image: '.path/to/image',
        stack: ['Js', 'C#'],
        githubUrl: 'path/to/repo'
    }

    test('renders Project Card', () => {
        render(<ProjectCard {...props} />);
        const projectCardElement = screen.getByRole('listitem');
        expect(projectCardElement).toBeInTheDocument();
    });
    
    test('renders header with name', () => {
        render(<ProjectCard {...props} />);
        const headerElement = screen.getByRole('heading', { name: props.name });
        expect(headerElement).toBeInTheDocument();
    });
    
    test('passes correct url to img', () => {
        render(<ProjectCard {...props} />);
        const imgElement = screen.getAllByRole('img');
        expect(imgElement[0].src).toContain(props.image);
    });
    
    test('parses stack array into <p>', () => {
        render(<ProjectCard {...props} />);
        const pElement = screen.getAllByRole('note');
        expect(pElement[0].textContent).toEqual(props.stack[0]);
        expect(pElement[1].textContent).toEqual(props.stack[1]);
    });
    
    test('passes correct path to anchor', () => {
        render(<ProjectCard {...props} />);
        const anchorElement = screen.getByRole('link');
        expect(anchorElement.href).toContain(props.githubUrl);
    });
})
