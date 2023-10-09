import Child from "./child";
import React from "react";

const Parent = () => {
  const greatHandler = () => {
    alert("Huy my parents");
  };
  return (
    <div>
      <Child greats={greatHandler} />
    </div>
  );
};

export default Parent;
