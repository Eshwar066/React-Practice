import React from "react";

const Counter = ({ count, Increment, Decrement }) => {
  return (
    <div>
      <span>{count}</span>
      <button onClick={Increment}>Add</button>
      <button onClick={Decrement}>minus</button>
    </div>
  );
};

export default Counter;
