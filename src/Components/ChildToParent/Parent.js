import { useState } from "react";
import ChildData from "./Child";

const ParentData = () => {
  //const [user,setUser]=useState({})
  const [userList, setUserList] = useState([]);
  console.log(userList);
  const updateUser = (newUser) => {
    setUserList([...userList, newUser]);
  };
  return (
    <>
      <table border="5">
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ChildData updateUser={updateUser} />
    </>
  );
};

export default ParentData;
