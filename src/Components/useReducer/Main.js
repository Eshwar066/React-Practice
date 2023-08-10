import React, { useReducer } from "react";

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter1 = () => {
  // Initial state
  const initialState = { count: 0 };

  // useReducer returns current state and dispatch function
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>sai</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter1;
