import React, { useState } from "react";

function Parent() {
  const [message, setMessage] = useState("");

  const handleDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onData={handleDataFromChild} />
      <p>Message from Child: {message}</p>
    </div>
  );
}

function Child({ onData }) {
  const handleClick = () => {
    const data = "Hello from Child!";
    onData(data);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Parent;
