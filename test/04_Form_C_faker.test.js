import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import faker from "faker";
import Form from "../src/components/Form";

/* 
  Override Pattern
  buildLoginForm({ username: "gokki" })
*/
function buildLoginForm(overrides) {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  };
}

test("submitting the form calls onSubmit with username and password", () => {
  const handleSubmit = jest.fn();

  render(<Form onSubmit={handleSubmit} />);

  const { username, password } = buildLoginForm();
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const usernameInputEl = screen.getByLabelText(/username/i);
  const passwordInputEl = screen.getByLabelText(/password/i);

  userEvent.type(usernameInputEl, username);
  userEvent.type(passwordInputEl, password);
  userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  });

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
