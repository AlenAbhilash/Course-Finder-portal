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
    let ugname = req.body.ugname;
    let ugimage = req.body.ugimage;
    let checkQuery = `SELECT * FROM tbl_ugcourse WHERE ugcourse_name=?`;

    con.query(checkQuery, [ugname], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send({
                message: 'Error checking existing data'
            });
        } else if (rows.length > 0) {
            res.status(400).send({
                message: 'Entry already exists'
            });
        } else {
            let insertQuery = `INSERT INTO tbl_ugcourse(ugcourse_name, ugcourse_img) VALUES (?, ?)`;

            con.query(insertQuery, [ugname, ugimage], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).send({
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
