import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders yello message', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Yello Contact!/i);
  expect(linkElement).toBeInTheDocument();
});
