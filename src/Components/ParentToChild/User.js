import { useState } from "react";

const User = ({ user, setSelectedUser, deleteUser }) => {
  const [isEdited, setisEdited] = useState(false);

  return (
    <>
      <tr style={{ backgroundColor: `${isEdited ? "lightblue" : "white"}` }}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>
          <button onClick={() => deleteUser(user.id)}>delete</button>
        </td>
        <td>
          <button
            onClick={() => {
              setSelectedUser(user);
              setisEdited(true);
            }}
          >
            {isEdited ? "Edited" : "Edit"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
