import { useContext } from "react";
import { MyContext } from "../../App";

const Child = () => {
  const a = useContext(MyContext);
  return (
    <>
      <span>Name:{a.name}</span>
      <br />
      <span>Age:{a.age}</span>
    </>
  );
};

export default Child;
