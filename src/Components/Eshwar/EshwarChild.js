import React, { useState } from "react";

const DataChild = ({ updateUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, age });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>age:</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default DataChild;
