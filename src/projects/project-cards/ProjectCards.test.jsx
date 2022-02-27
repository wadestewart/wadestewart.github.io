import { render, screen } from '@testing-library/react';
import ProjectCards from './ProjectCards';

test('renders Project Cards', () => {
  render(<ProjectCards />);
  screen.debug();
//   const projectCardsElement = screen.getByRole('list');
//   expect(projectCardsElement).toBeInTheDocument();
});
