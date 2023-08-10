import React from "react";
import Second from "./Second";

const First = () => {
  const data = "Hello Eshwar";
  return (
    <>
      <Second data={data} />
    </>
  );
};

export default First;
