import React, { useRef } from "react";

const HookRef = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Submit</button>
    </div>
  );
};

export default HookRef;
