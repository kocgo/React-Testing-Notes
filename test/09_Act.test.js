import React from "react";
import { render, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useCounter from "../src/hooks/useCounter";
import "@testing-library/jest-dom/extend-expect";

test("exposes the count and increment/decrement functions", () => {
  let result;

  function DummyComponent() {
    result = useCounter();
    return null;
  }

  // Render
  render(<DummyComponent />);
  // use Act to fire events that update state, it will re-render the component
  expect(result.count).toBe(0);
  act(() => result.increment());
  expect(result.count).toBe(1);
  act(() => result.decrement());
  expect(result.count).toBe(0);
});
