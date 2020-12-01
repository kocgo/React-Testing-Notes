import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/components/counter";

test("counter increments and decrements when the buttons are clicked", () => {
  const { container } = render(<Counter />);
  // Screen queries (Accesibility properties)
  // (`getByRole` can work for the button too)
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  const message = container.firstChild.querySelector("div");

  expect(message).toHaveTextContent("Current count: 0");
  fireEvent.click(incrementButton);
  expect(message).toHaveTextContent("Current count: 1");
  // Same thing with userEvent
  userEvent.click(decrementButton);
  expect(message).toHaveTextContent("Current count: 0");
});
