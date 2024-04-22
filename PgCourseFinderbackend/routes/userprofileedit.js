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
  let login_id = req.body.login_id;
  let query = ` SELECT *
  FROM tbl_user l
  INNER JOIN tbl_dis p ON p.dis_id = l.dis_id
  INNER JOIN tbl_loc u ON u.loc_id = l.loc_id
  WHERE l.login_id = '${login_id}'`;

  console.log(query);

  con.query(query, [login_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err); 
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
