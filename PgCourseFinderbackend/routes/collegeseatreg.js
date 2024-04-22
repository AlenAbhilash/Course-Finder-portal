var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});

router.post('/', function (req, res, next) {
    let category_id = req.body.category_id;
    let collegepgcourse_id = req.body.collegepgcourse_id;
    let college_id = req.body.login_id;
    let seat_number = req.body.seat_number;
    let checkQuery = `SELECT * FROM tbl_seatreg WHERE category_id=? AND collegepgcourse_id=? AND login_id=?`;

    con.query(checkQuery, [category_id, collegepgcourse_id, college_id, seat_number], (err, rows) => {
        if (err) {
            console.error(err);
            res.send({
                message: 'Error checking for existing entry'
            });
            return;
        }
        if (rows.length > 0) {
            console.log('Entry already exists');
            res.send({
                message: 'Entry already exists'
            });
        } else {
            let insertQuery = `INSERT INTO tbl_seatreg(category_id, collegepgcourse_id, login_id, seat_number) VALUES (?, ?, ?, ?)`;

            con.query(insertQuery, [category_id, collegepgcourse_id, college_id, seat_number], (err, result) => {
                if (err) {
                    console.error(err);
                    res.send({
                        message: 'Error inserting data'
                    });
                } else {
                    console.log(result);
                    res.send({
                        message: 'Success'
                    });
                }
            });
        }
    });
});
module.exports = router;
