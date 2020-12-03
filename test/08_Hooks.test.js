import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useCounter from "../src/hooks/useCounter";
import "@testing-library/jest-dom/extend-expect";

const DummyComponent = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <div>
      <div>Current count: {count}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

test("exposes the count and increment/decrement functions", () => {
  // Render
  render(<DummyComponent />);
  const incrementButton = screen.getByRole("button", { name: /increment/i });
  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  const displayedMessage = screen.getByText(/current count/i);

  // Interactions & Assertions
  expect(displayedMessage).toHaveTextContent("Current count: 0");
  userEvent.click(incrementButton);
  expect(displayedMessage).toHaveTextContent("Current count: 1");
  userEvent.click(decrementButton);
  expect(displayedMessage).toHaveTextContent("Current count: 0");
});
