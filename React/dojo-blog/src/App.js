// import Hello from "./component/Hello";
// import Message from "./component/ClassComp";
import Friend from "./component/properties";
import Counter from "./component/useState";
import FunctionEvent from "./component/functionEvent";
import ClassEvent from "./component/classEvent";
import Hooks from "./component/functionalHooks";
import ConditionalComponent from "./component/conditionalComponent";
import Product from "./component/products";
import ClickEvent from "./component/clickEvent";
import Event from "./component/day2";
import Increment from "./component/increment";
import Parent from "./component/parrent";

function App() {
  return (
    <div>
      <Parent />
      <Increment />
      <Event />
      <Friend first_name="Amare" last_name="Abewa" />
      <Counter />
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent>
      <Hooks></Hooks>
      <ConditionalComponent></ConditionalComponent>
      <Product></Product>
      <ClickEvent></ClickEvent>
    </div>
  );
}

export default App;
