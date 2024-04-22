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
    let category_id = req.body.category_id; 
    let login_id = req.body.login_id;
    let query = `
    SELECT * FROM tbl_seatbooking o 
    INNER JOIN tbl_seatreg x ON x.seat_id = o.seat_id
    INNER JOIN tbl_login z on z.login_id = o.login_id
    INNER JOIN tbl_user w on w.login_id = z.login_id
    INNER JOIN tbl_category y ON y.category_id = x.category_id
    INNER JOIN tbl_collegepgcourse p ON p.collegepgcourse_id = x.collegepgcourse_id
    INNER JOIN tbl_pgcourse c ON c.pgcourse_id = p.pgcourse_id
    WHERE y.category_id ='${category_id}' AND x.login_id ='${login_id}' AND o.bookingstatus='applied'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
