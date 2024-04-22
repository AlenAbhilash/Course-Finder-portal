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
        FROM tbl_college l
        INNER JOIN tbl_dis p ON p.dis_id = l.dis_id
        INNER JOIN tbl_loc u ON u.loc_id = l.loc_id
        WHERE l.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
