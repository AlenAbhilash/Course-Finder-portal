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
    let ugcourse_id = req.body.ugcourse_id; 
    let pgcourse_id = req.body.pgcourse_id;
    let fees = req.body.fees;
    let college_id = req.body.login_id; 
    let checkQuery = `SELECT * FROM tbl_collegepgcourse WHERE ugcourse_id=? AND pgcourse_id=? AND login_id=?`;

    con.query(checkQuery, [ugcourse_id, pgcourse_id, college_id], (err, rows) => {
        if (err) {
            console.error(err);
            console.log('Error checking for existing entry:', err.message);
            res.send({
                message: 'Error processing the request'
            });
            return;
        }
        if (rows.length > 0) {
            console.log('Entry already exists');
            res.send({
                message: 'Entry already exists'
            });
        } else {
            let insertQuery = `INSERT INTO tbl_collegepgcourse(ugcourse_id, pgcourse_id, fees, login_id) VALUES (?, ?, ?, ?)`;

            con.query(insertQuery, [ugcourse_id, pgcourse_id, fees, college_id], (err, result) => {
                if (err) {
                    console.error(err);
                    console.log('Error inserting data:', err.message);
                    res.send({
                        message: 'Error processing the request'
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
