import express, { json } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Amare_Abewa12",
  database: "crud",
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//fetch data from database and send to `api/get`
app.get("/api/get", (req, res) => {
  const select = "SELECT * FROM users";
  db.query(select, (err, result) => {
    res.send(result);
  });
});
//delete data from database based on user needs
app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const remove = "DELETE FROM users WHERE id = ?";
  db.query(remove, id, (err, result) => {
    if (err) {
      console.log("error is occurred");
    }
  });
});

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const update = "SELECT * FROM users WHERE id = ?";
  db.query(update, id, (err, result) => {
    if (err) {
      console.log("error is occurred");
    }
    res.send(result);
  });
});
//Update the database based on user needs
app.put("/api/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, contact } = req.body;
  const update =
    "UPDATE users SET  name = ?, email=? ,contact = ? WHERE id = ?";
  db.query(update, [name, email, contact, id], (err, result) => {
    if (err) {
      console.log("error is occurred");
    }
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { name, email, contact } = req.body;
  const insert = "INSERT INTO users (name,email, contact) VALUES (?,?,?)";
  db.query(insert, [name, email, contact], (err, res) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(9000, (res, req) => {
  console.log("server is running...");
});
