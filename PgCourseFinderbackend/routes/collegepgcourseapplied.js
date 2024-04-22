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
    let collegepgcourse_id = req.body.collegepgcourse_id;
    let login_id = req.body.login_id;
    let query = `
    SELECT DISTINCT o.seat_id, y.category_id, y.category_name
    FROM tbl_seatbooking o 
    INNER JOIN tbl_seatreg x ON x.seat_id = o.seat_id
    INNER JOIN tbl_category y ON y.category_id = x.category_id
    INNER JOIN tbl_collegepgcourse p ON p.collegepgcourse_id = x.collegepgcourse_id
    WHERE p.collegepgcourse_id ='${collegepgcourse_id}' AND x.login_id = '${login_id}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
