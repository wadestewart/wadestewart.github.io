import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Project Cards', () => {
  render(<Projects />);
  const projectCardsElement = screen.getByRole('list');
  expect(projectCardsElement).toBeInTheDocument();
});
