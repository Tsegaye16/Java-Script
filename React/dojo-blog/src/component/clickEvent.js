const ClickEvent = () => {
  let name = "Tsegaye";
  function Click(name) {
    console.log(`My name is ${name} `);
  }
  return (
    <div>
      <h1>This is Click event</h1>
      <h3>My name is </h3>
      <button onClick={() => Click(name)}>Click me</button>
    </div>
  );
};

export default ClickEvent;
