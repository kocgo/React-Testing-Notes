import React from "react";
import ReactDOM from "react-dom";
import ExampleComponent from "./ExampleComponent";

const App = () => {
  return <ExampleComponent />;
};

ReactDOM.render(<App />, document.getElementById("testDiv"));
let root = document.getElementById("testDiv").innerHTML;
root;
