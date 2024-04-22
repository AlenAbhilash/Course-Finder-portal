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
    let possiblecourse_id = req.body.possiblecourse_id;
    let college_id = req.body.login_id;
    let checkQuery = `SELECT * FROM tbl_collegepossiblecourse WHERE possiblecourse_id=? AND login_id=?`;

    con.query(checkQuery, [possiblecourse_id, college_id], (err, rows) => {
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
            let insertQuery = `INSERT INTO tbl_collegepossiblecourse(possiblecourse_id, login_id) VALUES (?, ?)`;

            con.query(insertQuery, [possiblecourse_id, college_id], (err, result) => {
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
