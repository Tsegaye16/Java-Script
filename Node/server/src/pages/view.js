import { useEffect, useState } from "react";
import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./view.css";

function Views() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/get/${id}`)
      .then((resp) => setUser({ ...resp.data[0] }));
  }, [id]);

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User contact detail</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>E-mail:</strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact:</strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Views;
