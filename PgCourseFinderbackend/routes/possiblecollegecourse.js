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
  let college_id = req.body.college_id;
  let query = `SELECT *
  FROM tbl_collegepossiblecourse c
  INNER JOIN tbl_possiblecourse x ON c.possiblecourse_id = x.possiblecourse_id
  INNER JOIN tbl_ugcourse u ON u.ugcourse_id = x.ugcourse_id
  INNER JOIN tbl_pgcourse h ON h.pgcourse_id = x.pgcourse_id
  INNER JOIN tbl_college a ON a.login_id = c.login_id
  WHERE a.college_id = '${college_id}'`;
  console.log(query);

  con.query(query, [college_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err); 
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
