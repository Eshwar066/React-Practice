import { useEffect, useState } from "react";
import EditUser from "./EditUser";
import User from "./User";

const SecondForm = ({ user }) => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEdited, setisEdited] = useState(false);

  useEffect(() => {
    if (user) {
      setUserList([...userList, user]);
    }
  }, [user]);

  const deleteUser = (id) => {
    let newList = userList.filter((user) => user.id !== id);
    setUserList(newList);
  };

  const editUser = (updatedUser) => {
    let newList = userList.map((user) => {
      if (updatedUser.id === user.id) {
        user.name = updatedUser.name;
        user.age = updatedUser.age;
      }
      return user;
    });
    console.log(newList);
    setUserList(newList);
    setSelectedUser(null);
  };
  return (
    <>
      {/* <h1>{user.name}</h1>
      <h1>{user.age}</h1> */}
      <table border="5">
        <tbody>
          {userList.map((user) => (
            // <User
            //   key={user.id}
            //   user={user}
            //   deleteUser={deleteUser}
            //   setSelectedUser={setSelectedUser}
            // />
            <tr>
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
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <EditUser selectedUser={selectedUser} editUser={editUser} />
      )}
    </>
  );
};

export default SecondForm;
