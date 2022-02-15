import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders yello message', () => {
  render(<Projects />);
  const linkElement = screen.getByText(/Yello Projects!/i);
  expect(linkElement).toBeInTheDocument();
});
