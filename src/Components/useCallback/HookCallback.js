// import React, { useState, useCallback } from 'react';

// const HookCallback = () => {
//   const [name, setName] = useState('');

//   const handleChange = useCallback((e) => {
//     setName(e.target.value);
//   }, []);

//   return (
//     <div>
//       <input type="text" value={name} onChange={handleChange} />
//       <p>Hello, {name}!</p>
//     </div>
//   );
// };

// export default HookCallback;

import React, { useState, useCallback } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default MyComponent;
