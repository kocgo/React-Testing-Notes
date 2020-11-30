// simple test with React Testing Library
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/components/counter";

test("counter increments and decrements when the buttons are clicked", () => {
  /* 
  React Testing Library will create the div for you
  Note that React Testing Library's render doesn't need you to pass a `div`
  So you only need to pass one argument. 
  Render returns an object with a bunch of utilities on it. 
  For now, let's just grab `container` which is
  the div that React Testing Library creates for us. 
*/

  const { container } = render(<Counter />);

  const [decrementButton, incrementButton] = container.querySelectorAll(
    "button"
  );
  const message = container.firstChild.querySelector("div");

  expect(message.textContent).toBe("Current count: 0");

  fireEvent.click(incrementButton);
  // Same thing with jest-dom assertion
  expect(message).toHaveTextContent("Current count: 1");
  fireEvent.click(decrementButton);
  expect(message.textContent).toBe("Current count: 0");
});
