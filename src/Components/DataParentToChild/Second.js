import { useState } from "react";

const Second = ({ data }) => {
  const [name, setName] = useState("");
  const update = () => {
    setName({ data });
  };
  return (
    <>
      <span>{name.data}</span>
      <button onClick={update}>Click</button>
    </>
  );
};

export default Second;
