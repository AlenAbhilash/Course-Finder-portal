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
    let seat_id = req.body.seat_id;
    let user_id = req.body.login_id;
    let checkQuery = `SELECT * FROM tbl_seatbooking WHERE seat_id=? AND login_id=? `;

    con.query(checkQuery, [seat_id, user_id], (err, rows) => {
        if (err) {
            console.error(err);
            res.send({
                message: 'Error checking for existing entry'
            });
            return;
        }

        if (rows.length > 0) {
            res.send({
                message: 'Entry already exists'
            });
        } else {
            let insertQuery = `INSERT INTO tbl_seatbooking(seat_id, login_id, bookingstatus, booked_date) VALUES (?, ?, ?, CURDATE())`;
            con.query(insertQuery, [seat_id, user_id, 'applied'], (err, result) => {
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
