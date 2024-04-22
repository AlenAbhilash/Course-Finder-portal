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
    let seat_id = req.query.seat_id;
    let query = `
    SELECT *
    FROM tbl_seatreg l
    INNER JOIN tbl_collegepgcourse p ON p.collegepgcourse_id = l.collegepgcourse_id
    INNER JOIN tbl_pgcourse x ON x.pgcourse_id = p.pgcourse_id  
    INNER JOIN tbl_category u ON u.category_id = l.category_id
    WHERE l.seat_id = '${seat_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
