import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState({});
  const { backgroundColor, setbackgroundColor } = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ name, age });
  };
  return (
    <div style={{ backgroundColor, minHeight: "100vh" }}>
      <form onSubmit={handleSubmit}>
        <span>Name:</span>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <span>Age:</span>
        <input type="text" onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Submit</button>
        <button
          onClick={() =>
            setbackgroundColor(backgroundColor === "red" ? "blue" : "red")
          }
        >
          toggle
        </button>
      </form>
      <MyContext.Provider value={data}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default Parent;
