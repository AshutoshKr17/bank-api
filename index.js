const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(bodyParser.json());

app.get("/banks", (req, res) => {
  db.query("SELECT * FROM banks", (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/branches", (req, res) => {
  const bankName = req.query.bank_name;
  const city = req.query.city;
  const query = `SELECT branches.* FROM branches`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/branches", (req, res) => {
  const bankName = req.query.bank_name;
  const city = req.query.city;
  const query = `SELECT branches.* FROM branches INNER JOIN banks ON banks.id = branches.bank_id WHERE banks.name = '${bankName}' AND branches.city = '${city}'`;

  db.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get("/branches", (req, res) => {
  const ifsc = req.query.ifsc;
  const query = `SELECT * FROM branches WHERE ifsc = '${ifsc}'`;
  connection.query(query, (error, results, fields) => {
    if (error) throw error;
    if (results.length === 0) {
      res.status(404).send({ error: "Branch not found" });
    } else {
      res.send(results[0]);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
