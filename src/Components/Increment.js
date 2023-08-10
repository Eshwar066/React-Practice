import React, { useState } from "react";
import updatedComponent from "./Hoc";

function Increment() {
  const initialCount = 0;
  const [Count, setCount] = useState(0);

  return (
    <>
      <span>{Count}</span>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={() =>
          setCount((prevCount) =>
            prevCount > 0 ? prevCount - 1 : initialCount
          )
        }
      >
        decrement
      </button>
      <button onClick={() => setCount(initialCount)}>reset</button>
    </>
  );
}

export default updatedComponent(Increment);
