import { useEffect, useState } from "react";

const DocumnetTitle = () => {
  const [age, setAge] = useState(0);
  const [title, setTitle] = useState("");
  useEffect(() => {
    // console.log(age);
    document.title = title;
  }, [title]);

  return (
    <>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={() => setAge(age + 1)}>Add</button>
    </>
  );
};

export default DocumnetTitle;
