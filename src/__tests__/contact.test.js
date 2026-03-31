import { render, screen } from "@testing-library/react";
import Contact from "../component/Contact";
import "@testing-library/jest-dom";
test("should render the contact page", () => {
  render(<Contact />);
  const contact = screen.getByRole("heading");
  expect(contact).toBeInTheDocument();
});

test("should render two inputs", () => {
  render(<Contact />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});
test("should render a button", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
