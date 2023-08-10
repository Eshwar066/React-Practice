import { useState, useEffect } from "react";

const EditItem = ({ item, updatedData }) => {
  const [update, setHello] = useState(null);

  useEffect(() => {
    if (item) {
      setHello(item.title);
    }
    // console.log(item.title);
  }, [item]);

  const handleData = (e) => {
    e.preventDefault();
    updatedData({ id: item.id, update });
    // console.log(update)
  };

  return (
    <div>
      <form onSubmit={handleData}>
        <input
          type="text"
          value={update}
          onChange={(e) => setHello(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditItem;
