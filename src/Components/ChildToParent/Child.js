import React, { useState } from "react";

const ChildData = ({ updateUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, age });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>age:</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ChildData;
