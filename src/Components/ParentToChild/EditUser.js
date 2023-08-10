import { useEffect, useState } from "react";

const EditUser = ({ selectedUser, editUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setAge(selectedUser.age);
    }
  }, [selectedUser]);

  const handleuser = (e) => {
    e.preventDefault();
    editUser({ id: selectedUser.id, name, age });
  };

  return (
    <>
      <form onSubmit={handleuser}>
        <label>name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>age:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditUser;
