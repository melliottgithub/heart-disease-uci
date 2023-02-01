import React from "react";
import { render, screen } from "@testing-library/react";
import App from ".";

test('renders the landing page', () => {
  render(<App />);
});

test('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/Predict Your Heart Disease/i);
  expect(title).toBeInTheDocument();
});

