import React, { useState } from "react";
import SecondForm from "./SecondForm";

const FirstForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [user, setUser] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id = Math.round(Math.random() * 1000);
    setUser({ name, age, id });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <br />
        <label>age:</label>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <SecondForm user={user} />
    </>
  );
};

export default FirstForm;
