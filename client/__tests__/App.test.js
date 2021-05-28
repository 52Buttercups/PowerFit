import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Component', () => {
  it('Renders App component correctly', () => {
    const appComponent = render(<App/>);
    expect(appComponent.exists()).toBe(true);
  });
});
