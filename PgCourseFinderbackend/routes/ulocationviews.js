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
    let dis_id = req.body.dis_id;
    let query = `SELECT * FROM tbl_loc l INNER JOIN tbl_dis d ON d.dis_id = l.dis_id WHERE l.dis_id ='${dis_id}'`;
    console.log(query);
    con.query(query, [dis_id], function (err, rows) {
      if (err) throw err;
      res.send(rows);
    });
  });
  
  module.exports = router;
