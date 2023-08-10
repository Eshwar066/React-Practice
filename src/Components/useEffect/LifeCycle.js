import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default Timer;

// import React, { useState, useEffect } from "react";

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     // console.log("Component mounted");

//     const intervalId = setInterval(() => {
//       // setSeconds((prevSeconds) => prevSeconds + 1);
//       // console.log("Component updated");
//     }, 1000);

//     return () => {
//       console.log("Component unmounted");
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <div>
//       <p>Seconds: {seconds}</p>
//     </div>
//   );
// };

// export default Timer;
