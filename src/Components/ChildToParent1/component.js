// Parent component
function Parent() {
  const handleDataFromChild = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  );
}

// Child component
function Child({ sendDataToParent }) {
  const sendData = () => {
    const data = "Hello from child!";
    sendDataToParent(data);
  };

  return <button onClick={sendData}>Send Data</button>;
}
