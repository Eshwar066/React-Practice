import { useEffect, useState } from "react";

const TimerCount = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCount((setCount) => setCount + 1);
    }, 1000);
    return () => {
      clearInterval(IntervalId);
    };
  }, []);
  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default TimerCount;
