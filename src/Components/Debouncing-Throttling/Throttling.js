import React, { useState, useEffect } from "react";
import { throttle } from "lodash";

const ThrottledComponent = () => {
  const [count, setCount] = useState(0);

  // Throttled handler function
  const throttledHandleClick = throttle(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000); // Throttle interval of 1000ms (1 second)

  // Event handler attached to the button
  const handleClick = () => {
    throttledHandleClick();
  };

  // Cleanup function to clear the throttle timer
  useEffect(() => {
    return () => {
      throttledHandleClick.cancel();
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ThrottledComponent;
