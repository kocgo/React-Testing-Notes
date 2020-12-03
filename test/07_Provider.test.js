import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../src/providers/Theme";
import EasyButton from "../src/components/EasyButton";
import "@testing-library/jest-dom/extend-expect";

test("renders with the light styles for the light theme", () => {
  render(
    <ThemeProvider>
      <EasyButton>Easy</EasyButton>
    </ThemeProvider>
  );
  const button = screen.getByRole("button", { name: /easy/i });
  expect(button).toHaveStyle(`
    background-color: white;
    color: black;
  `);
});
