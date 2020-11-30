import React, { useState } from "react";
import ReactDOM from "react-dom";

const ExampleComponent = () => {
  const [count, setCount] = useState(1);

  return <div>{count}</div>;
};

ReactDOM.render(<ExampleComponent />, document.getElementById("testDiv"));

let root = document.getElementById("testDiv").innerHTML;

root;
