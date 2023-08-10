import { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState("");

  let charSet =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()";

  const generatedpassword = () => {
    let res = "";
    let char = "";
    for (let i = 0; i < 20; i++) {
      char = Math.floor(Math.random() * charSet.length);
      res += charSet[char];
    }
    console.log(res);
    setPassword(res);

    // return res;
  };

  const handleCopy = () => {
    // navigator.clipboard.writeText(copy);
  };
  // generatedpassword();

  return (
    <>
      {/* header and copy button */}
      <div
        className="container"
        style={{
          backgroundColor: "lightblue",
          border: "solid black 2px",
          padding: "20px"
        }}
      >
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="text">{password}</div>
          <button className="btn" onClick={handleCopy}>
            copy
          </button>
        </div>
        <button onClick={generatedpassword}>Generate Password</button>
      </div>
    </>
  );
};

export default Password;
