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
    let query = `SELECT *
   FROM tbl_collegepgcourse l 
   INNER JOIN tbl_ugcourse u ON u.ugcourse_id = l.ugcourse_id WHERE l.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, [login_id], function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
