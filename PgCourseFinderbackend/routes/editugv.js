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
  let ugcourse_id = req.body.ugcourse_id;
  let query = `select * FROM tbl_ugcourse WHERE ugcourse_id='${ugcourse_id}';`;

  console.log(query);

  con.query(query, [ugcourse_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err); 
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
