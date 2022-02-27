import { render, screen } from '@testing-library/react';
import ProjectCards from './ProjectCards';

describe('<ProjectCards', () => {
  test('renders Project Cards', () => {
    render(<ProjectCards />);
    const projectCardsElement = screen.getAllByRole('listitem');
    expect(projectCardsElement).toHaveLength(4);
  });
});
