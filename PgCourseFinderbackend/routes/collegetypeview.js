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
  let type = req.body.type;
  let query = `SELECT * FROM tbl_college WHERE type ='${type}' `;
  console.log(query);
  con.query(query, [type], function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
