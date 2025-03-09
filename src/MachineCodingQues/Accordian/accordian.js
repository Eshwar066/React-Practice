import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  let list = [
    { key: "fruits", value: "Mango" },
    { key: "fruit", value: "Banana" },
    { key: "frui", value: "Apple" },
    { key: "fru", value: "Orange" },
  ];

  const handleClick = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)} style={{ cursor: "pointer", marginBottom: "10px", border:"1px solid black", margin:"1rem",padding:"5px",width:"20%" }}>
          <div>{item.key}{"            "}👇</div>
          {selected === index && <div>{item.value}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
