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
    let seatbooking_id = req.body.seatbooking_id;
    let user_id = req.body.login_id; 
    let checkQuery = `SELECT * FROM tbl_payment WHERE seatbooking_id=?`;
    con.query(checkQuery, [seatbooking_id], (err, rows) => { 
        if (err) throw err;
        if (rows.length > 0) {
            res.status(400).send({
                message: 'Entry already exists'
            });
        } else {
            let insertQuery = `INSERT INTO tbl_payment(seatbooking_id, login_id, amount, payment_date) VALUES (?, ?, ?, CURDATE())`;
            con.query(insertQuery, [seatbooking_id, user_id, '5000'], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send({
                        message: 'Error inserting data'
                    });
                } else {
                    console.log(result);
                    let statusQuery = `UPDATE tbl_seatbooking SET bookingstatus='booking completed' WHERE seatbooking_id='${seatbooking_id}'`;
                    con.query(statusQuery,(err) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send({
                                message: 'Update Error',
                                error: err.message
                            });
                        }
                        res.send({
                            message: 'Success'
                        });
                    });
                }
            });
        }
    });
}); 
module.exports = router;
