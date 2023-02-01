// test button
import React from "react";
import { Button } from ".";
import { render, screen } from "@testing-library/react";

test("renders button", () => {
  render(<Button variant="primary">Test</Button>);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("renders button label", () => {
  render(<Button variant="primary">Test</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Test");
});

test("renders button with variant", () => {
  render(<Button variant="primary">Test</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveClass("button-primary");
});

test("renders button with custom style", () => {
  render(<Button variant="primary" style={{ color: "red" }}>Test</Button>);
  const button = screen.getByRole("button");
  expect(button).toHaveStyle("color: red");
});

