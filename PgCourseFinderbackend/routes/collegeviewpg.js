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
    let pgcourse_id = req.body.pgcourse_id;
    let query = `
    SELECT *
    FROM tbl_collegepgcourse l
    INNER JOIN tbl_college x ON x.login_id = l.login_id
    INNER JOIN tbl_pgcourse p ON p.pgcourse_id = l.pgcourse_id
    WHERE l.pgcourse_id ='${pgcourse_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
