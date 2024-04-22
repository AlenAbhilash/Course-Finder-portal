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
   SELECT  * FROM tbl_payment o 
    INNER JOIN tbl_seatbooking x ON x.seatbooking_id = o.seatbooking_id
    INNER JOIN tbl_seatreg c ON c.seat_id = x.seat_id
    INNER JOIN tbl_collegepgcourse y ON y.collegepgcourse_id = c.collegepgcourse_id
    INNER JOIN tbl_pgcourse p ON p.pgcourse_id = y.pgcourse_id
    INNER JOIN tbl_category f ON f.category_id = c.category_id
    INNER JOIN tbl_login e ON e.login_id = x.login_id
    INNER JOIN tbl_college t ON t.login_id = c.login_id
    INNER JOIN tbl_user q on q.login_id = x.login_id
    WHERE c.login_id='${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
    
        res.send(rows);
    });
});

module.exports = router;
