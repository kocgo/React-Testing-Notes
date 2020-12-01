import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { build, fake } from "@jackfranklin/test-data-bot";
import {
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginSubmission from "../src/components/LoginSubmission";

const buildLoginForm = build({
  fields: {
    username: fake((f) => f.internet.userName()),
    password: fake((f) => f.internet.password()),
  },
});

const server = setupServer(
  rest.post(
    "https://auth-provider.example.com/api/login",
    async (req, res, ctx) => {
      if (!req.body.password) {
        return res(ctx.status(400), ctx.json({ message: "password required" }));
      }
      if (!req.body.username) {
        return res(ctx.status(400), ctx.json({ message: "username required" }));
      }
      return res(ctx.json({ username: req.body.username }));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("logging in displays the user's username", async () => {
  render(<LoginSubmission />); // ?
  const { username, password } = buildLoginForm(); // ?

  userEvent.type(screen.getByLabelText(/username/i), username); // ?
  userEvent.type(screen.getByLabelText(/password/i), password); // ?
  userEvent.click(screen.getByRole("button", { name: /submit/i }));
});
