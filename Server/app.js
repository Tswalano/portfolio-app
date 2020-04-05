var express = require("express");
var { db } = require("./Config/Connection");
var { selectQuery } = require("./Config/Query");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

// ############ Express Middlewear
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
  res.json({ message: "This is CORS-enabled for all origins!" });
});

// connection test
app.get("/test", (req, res) => {
  db.query("SELECT * FROM nodesql.customers", (err, results) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Connected", results);
      res.json({ data: results });
    }
  });
});

app.get("/test2", (req, res) => {
  db.query(selectQuery("customers"), (err, results) => {
    if (err) {
      res.json({
        error: true,
        message: err.sqlMessage,
        code: err.code
      });
    } else {
      res.json({ data: results });
    }
  });
});

app.listen(8001, function() {
  console.log("CORS-enabled web server listening on port 80");
});
