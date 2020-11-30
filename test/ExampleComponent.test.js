import React from "react";
import ReactDOM from "react-dom";
import ExampleComponent from "../src/components/ExampleComponent";

describe("Example Component", function () {
  it("renders without crashing", function () {
    const div = document.createElement("div");
    ReactDOM.render(<ExampleComponent />, div);
    expect(div.innerHTML).toBe("<div>1</div>");
  });
});
