import React, { useState } from "react";
import DataChild from "./EshwarChild";

const SecondData = () => {
  const [data, setData] = useState([]);

  const updateUser = (newUser) => {
    setData([...data, newUser]);
  };

  return (
    <>
      {data.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
      <DataChild updateUser={updateUser} />
    </>
  );
};

export default SecondData;
