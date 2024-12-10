import React, { useState } from "react";

function Counter() {
  // Declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ margin: "5px", padding: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: "5px", padding: "10px" }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: "5px", padding: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
