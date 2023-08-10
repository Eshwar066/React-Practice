import React, { useState } from "react";

const Parent = () => {
  const [Message, setMessage] = useState("");
  const eventhandle = (data) => {
    setMessage(data);
  };
  return (
    <div>
      <Child onData={eventhandle} />
      <p>from child:{Message}</p>
    </div>
  );
};

const Child = ({ onData }) => {
  return (
    <div>
      <button onClick={() => onData("hello world")}>add</button>
    </div>
  );
};

export default Parent;
