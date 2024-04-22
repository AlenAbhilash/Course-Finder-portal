var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});

router.get('/', (req, res, next) => { 
    let query = `SELECT * FROM tbl_user u INNER JOIN tbl_dis d ON d.dis_id = u.dis_id`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
    
        res.send(rows);
    });
});

module.exports = router;
