import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../src/components/Form";

test("submitting the form calls onSubmit with username and password", () => {
  let submittedData;

  const handleSubmit = (data) => {
    submittedData = data;
  };

  render(<Form onSubmit={handleSubmit} />);

  const username = "gokhan";
  const password = "gg";
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const usernameInputEl = screen.getByLabelText(/username/i);
  const passwordInputEl = screen.getByLabelText(/password/i);
  // Prints current html
  // screen.debug();
  userEvent.type(usernameInputEl, username);
  userEvent.type(passwordInputEl, password);
  userEvent.click(submitButton);

  expect(submittedData).toEqual({
    username,
    password,
  });
});
