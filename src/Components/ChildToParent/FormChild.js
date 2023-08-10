import { useEffect, useState } from "react";

const FormChild22 = ({ Submit }) => {
  // const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   if (Submit) {
  //     setUserList([...userList, Submit]);
  //   }
  // }, [Submit]);

  // return (
  //   <>
  //     {userList.map((user) => (
  //       <>
  //         <label>{user.name}</label>
  //         <br />
  //         <label>{user.email}</label>
  //         <br />
  //         <label>{user.gender}</label>
  //         <br />
  //         <label>{user.occupation}</label>
  //         <br />
  //         <label>{user.lang}</label>
  //       </>
  //     ))}
  //   </>
  // );

  return (
    <>
      <h1>{Submit.name}</h1>
      <br />
      <h1>{Submit.email}</h1>
      <br />
      <h1>{Submit.gender}</h1>
      <br />
      <h1>{Submit.occupation}</h1>
      <br />
      <h1>{Submit.lang}</h1>
      <br />
    </>
  );
};

export default FormChild22;
