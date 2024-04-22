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
    let login_id = req.query.login_id;
    let query = `
        SELECT *
        FROM tbl_collegepgcourse l
        INNER JOIN tbl_pgcourse p ON p.pgcourse_id = l.pgcourse_id
        INNER JOIN tbl_ugcourse u ON u.ugcourse_id = l.ugcourse_id
        WHERE l.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
