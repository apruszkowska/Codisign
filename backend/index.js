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
  console.log("test");
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

app.listen(5175, () => {
  console.log("Server is running on http://localhost:5175");
});
