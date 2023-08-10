// const MemoizedAdder = () => {
//   const cache = {};
//   return (arg1, arg2) => {
//     // const [a, b] = [arg1, arg2].sort();
//     const key = arg1 + arg2;

//     if (cache[key]) {
//       console.log("returning from cache");
//       return cache[key];
//     }
//     const result = arg1 + arg2;
//     cache[key] = result;
//     return result;
//   };
// };

// const calculator = MemoizedAdder();

// console.log(calculator(1, 2));
// console.log(calculator(1, 2));
// console.log(calculator(1, 4));
// console.log(calculator(1, 2));
// console.log(calculator(1, 5));

// export default MemoizedAdder;
