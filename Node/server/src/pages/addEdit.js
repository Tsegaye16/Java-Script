import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./addEdit.css";
import { useParams, Link } from "react-router-dom"; // Updated import

import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("all input field are require!!!");
    } else {
      if (!id) {
        axios
          .post("http://localhost:9000/api/post", { name, email, contact })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("user is added successfully!!!");
      } else {
        axios
          .put(`http://localhost:9000/api/update/${id}`, {
            name,
            email,
            contact,
          })
          .then(() => {
            setState({ name: "", email: "", contact: "" });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("user is updated successfully!!!");
      }

      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Add Contact</h1>

      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="You Name..."
          value={name || ""}
          onChange={handleInputChange}
        ></input>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="You E-mail..."
          value={email || ""}
          onChange={handleInputChange}
        ></input>

        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="You Contact..."
          value={contact || ""}
          onChange={handleInputChange}
        ></input>
        <input type="submit" value={id ? "Update" : "Save"} />
        <Link to={"/"}>
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
