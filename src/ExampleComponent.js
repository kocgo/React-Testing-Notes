import React, { useState } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(1);

  return <div>{count}</div>;
}

export default ExampleComponent;
