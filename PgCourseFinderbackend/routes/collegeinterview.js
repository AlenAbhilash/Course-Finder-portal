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
    SELECT  * FROM tbl_seatbooking o 
    INNER JOIN tbl_seatreg x ON x.seat_id = o.seat_id
    INNER JOIN tbl_category c ON c.category_id = x.category_id
    INNER JOIN tbl_collegepgcourse y ON y.collegepgcourse_id = x.collegepgcourse_id
    INNER JOIN tbl_pgcourse p ON p.pgcourse_id = y.pgcourse_id
    INNER JOIN tbl_login e ON e.login_id = x.login_id
    INNER join tbl_user g ON g.login_id = o.login_id
    WHERE x.login_id='${login_id}' AND bookingstatus ='Scheduled interview'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
