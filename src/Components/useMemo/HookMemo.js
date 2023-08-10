// import React, { useState, useMemo } from 'react';

// const HookMemo = () => {
//   const [count, setCount] = useState(0);

//   const doubleCount = useMemo(() => {
//     console.log('Calculating doubleCount...');
//     return count * 2;
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Double Count: {doubleCount}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default HookMemo;

import React, { useState, useMemo } from "react";

const MyComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = useMemo(() => {
    console.log("Calculating fullName...");
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return (
    <div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>Full Name: {fullName}</p>
    </div>
  );
};

export default MyComponent;
