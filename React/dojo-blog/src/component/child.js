import React from "react";

const Child = (props) => {
  return (
    <div>
      <button onClick={props.greats}>Child</button>
    </div>
  );
};

export default Child;
