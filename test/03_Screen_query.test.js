import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/components/counter";

test("counter increments and decrements when the buttons are clicked", () => {
  const { container } = render(<Counter />);
  // Screen queries (Accesibility properties)
  const incrementButton = screen.getByText("Increment");
  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  const message = container.firstChild.querySelector("div");

  expect(message).toHaveTextContent("Current count: 0");
  fireEvent.click(incrementButton);
  expect(message).toHaveTextContent("Current count: 1");
  // Same thing with userEvent
  // userEvent.click executes all types of clicks (mousedown, mouseUp, click etc)
  userEvent.click(decrementButton);
  expect(message).toHaveTextContent("Current count: 0");

  // Alternative assertion with Snapshots
  expect(message).toMatchSnapshot(); // ?
});
