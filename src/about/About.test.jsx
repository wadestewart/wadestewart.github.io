import { render, screen } from '@testing-library/react';
import About from './About';

test('renders hello message', () => {
  render(<About />);
  const linkElement = screen.getByText(/Yello About!/i);
  expect(linkElement).toBeInTheDocument();
});
