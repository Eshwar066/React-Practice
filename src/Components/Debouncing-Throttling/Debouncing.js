const Debouncing = () => {
  const mydebounce = (cb, d) => {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, d);
    };
  };

  const handleChange = mydebounce((e) => {
    console.log(e.target.value);
  }, 1000);

  return (
    <>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Debouncing;
