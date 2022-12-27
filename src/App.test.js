import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders learn react link', async () => {
    render(<App />);
    const foundElements = await screen.findAllByText(/Pace Checker/i);
    expect(foundElements).toBeDefined;
    foundElements.forEach(
        (foundElements) => expect(foundElements).toBeInTheDocument
    );
});
