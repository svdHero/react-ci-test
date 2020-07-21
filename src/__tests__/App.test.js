import { render } from '@testing-library/react'
import React from 'react'
import App from '../App'
import { expectedFoo } from './App.testcases'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('foo', () => {
  const expectedValue = expectedFoo
  const actualValue = "Lorem Ipsum"
  expect(actualValue).toBe(expectedValue);
});
