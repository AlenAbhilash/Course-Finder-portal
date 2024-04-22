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
        FROM tbl_seatreg l
        INNER JOIN tbl_collegepgcourse p ON p.collegepgcourse_id = l.collegepgcourse_id
        inner join tbl_pgcourse b on b.pgcourse_id = p.pgcourse_id
        INNER JOIN tbl_category x ON x.category_id = l.category_id
        WHERE l.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
