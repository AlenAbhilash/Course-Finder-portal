var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_pgcoursefinder"
});

router.post('/', (req, res, next) => {
  let pgcourse_id = req.body.pgcourse_id;
  let query = `select * FROM tbl_pgcourse WHERE pgcourse_id='${pgcourse_id}';`;

  console.log(query);

  con.query(query, [pgcourse_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err); 
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
