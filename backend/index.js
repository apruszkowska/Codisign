const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "users",
  insecureAuth: true,
  port: 3307,
});

app.post("/register", (req, res) => {
  const { login, password } = req.body;

  db.query(
    "INSERT INTO users (login, password) VALUES (?, ?)",
    [login, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error occurred while registering.");
      } else {
        res.status(200).send("Registered successfully!");
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { login, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE login = ? AND password = ?",
    [login, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
        res.status(500).send("Error occurred while registering.");
      }

      if (result.length > 0) {
        res.send(result);
        res.status(200).send("Registered successfully!");
      } else {
        res.send({ message: "Wrong login or password." });
      }
    }
  );
});

app.listen(5175, () => {
  console.log("Server is running on http://localhost:5175");
});
