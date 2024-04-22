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
    let query = `SELECT *
  FROM tbl_possiblecourse l
  INNER JOIN tbl_ugcourse u ON u.ugcourse_id = l.ugcourse_id
  INNER JOIN tbl_pgcourse p ON p.pgcourse_id = l.pgcourse_id
  WHERE l.ugcourse_id = '${ugcourse_id}'`;
    console.log(query);
    con.query(query, [ugcourse_id], function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
