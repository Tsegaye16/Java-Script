import React, { useState } from "react";
const Event = () => {
  let [state, setState] = useState({ message: "Hello Guys" });
  const handle = () => {
    setState({ message: "Good by" });
  };
  return (
    <div>
      <h1>
        <h1>{state.message}</h1>
        <button onClick={handle}>
          <h1>
            <h1>Go</h1>
          </h1>
        </button>
      </h1>
    </div>
  );
};
export default Event;
