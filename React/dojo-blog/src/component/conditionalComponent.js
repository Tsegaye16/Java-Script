import { useState } from "react";
import FunctionEvent from "./functionEvent";
import Counter from "./useState";
export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);
  if (display) {
    return (
      <div>
        <Counter></Counter>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          <FunctionEvent></FunctionEvent>
        </h1>
      </div>
    );
  }
}
