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
    let login_id = req.body.login_id;
    let bookingstatus = req.body.bookingstatus;
    let query = `
    SELECT  * FROM tbl_seatbooking o 
   INNER JOIN tbl_seatreg r on r.seat_id = o.seat_id
   INNER JOIN tbl_category y on y.category_id = r.category_id
   INNER JOIN tbl_collegepgcourse b on b.collegepgcourse_id = r.collegepgcourse_id
   INNER JOIN tbl_pgcourse x on x.pgcourse_id = b.pgcourse_id
   INNER JOIN tbl_college e on e.login_id = r.login_id
   WHERE o.login_id ='${login_id}' AND o.bookingstatus='${bookingstatus}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
