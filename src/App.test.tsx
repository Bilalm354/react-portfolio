import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the word portfolio', () => {
  render(<App />);
  const text = screen.getByText(/portfolio/);
  expect(text).toBeInTheDocument();
});
