import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddEdit from "./pages/addEdit";
import Views from "./pages/view";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addEdit" element={<AddEdit />}></Route>
          <Route exact path="/update/:id" element={<AddEdit />}></Route>
          <Route exact path="/view/:id" element={<Views />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
