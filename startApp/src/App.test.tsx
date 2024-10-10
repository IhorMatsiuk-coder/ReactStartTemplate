import { describe, expect, it, test } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  it('renders the main page', () => {
    render(<App />);
    expect(true).toBeTruthy();
  });
});
