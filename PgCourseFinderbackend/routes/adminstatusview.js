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
  let status = req.body.status;
  let query = `SELECT * FROM tbl_college l INNER JOIN tbl_login d ON d.login_id = l.login_id WHERE d.status ='${status}' `;
  console.log(query);
  con.query(query, [status], function (err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
