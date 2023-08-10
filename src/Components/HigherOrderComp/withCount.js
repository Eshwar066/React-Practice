import React, { useState } from "react";

const withCount = (WrappedContent) => {
  return () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const Increment = () => {
      setCount(count + 1);
    };
    const Decrement = () => {
      setCount(count - 1);
    };
    return (
      <WrappedContent
        Increment={Increment}
        count={count}
        Decrement={Decrement}
      />
    );
  };
};

export default withCount;
