import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world', () => {
  render(<App />);
  const paragraphElement = screen.getByTestId('main-page');

  expect(paragraphElement).toBeInTheDocument();
});
