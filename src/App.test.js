import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('renders basic text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/withThemeSwitcher/i);
  expect(linkElement).toBeInTheDocument();
});
