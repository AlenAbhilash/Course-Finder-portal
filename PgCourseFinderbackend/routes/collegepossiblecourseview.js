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
    FROM tbl_collegepossiblecourse c
    INNER JOIN tbl_possiblecourse x ON c.possiblecourse_id = x.possiblecourse_id
    INNER JOIN tbl_ugcourse u ON u.ugcourse_id = x.ugcourse_id
    INNER JOIN tbl_pgcourse h ON h.pgcourse_id = x.pgcourse_id
    WHERE c.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
