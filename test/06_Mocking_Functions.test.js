import React from "react";
import { render, screen } from "@testing-library/react";
import Location from "../src/components/Location";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  };
});

test("displays the users current location", async () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 40,
    },
  };

  // Run Geolocation Mock Implementation
  window.navigator.geolocation.getCurrentPosition.mockImplementation(
    (callback) => {
      callback(fakePosition);
    }
  );

  render(<Location />);
  screen.debug(); // ?
  expect(screen.getByText(/latitude/i)).toHaveTextContent(
    `Latitude: ${fakePosition.coords.latitude}`
  );
  expect(screen.getByText(/longitude/i)).toHaveTextContent(
    `Longitude: ${fakePosition.coords.longitude}`
  );
});
