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
    let query = `SELECT c.pgcourse_name, e.college_name, w.user_name, o.bookingstatus
    FROM tbl_seatbooking o 
    INNER JOIN tbl_seatreg x ON x.seat_id = o.seat_id
    INNER JOIN tbl_login z ON z.login_id = o.login_id
    INNER JOIN tbl_user w ON w.login_id = z.login_id
    INNER JOIN tbl_category y ON y.category_id = x.category_id
    INNER JOIN tbl_collegepgcourse p ON p.collegepgcourse_id = x.collegepgcourse_id
    INNER JOIN tbl_pgcourse c ON c.pgcourse_id = p.pgcourse_id
    INNER JOIN tbl_college e ON e.login_id = x.login_id;`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
