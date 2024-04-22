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
    let query = `INSERT INTO tbl_pgcourse(pgcourse_name, pgcourse_img, ugcourse_id) VALUES (?, ?, ?)`;
    let pgCourseName = req.body.pgcourse_name; // Corrected variable name
    let pgCourseImage = req.body.pgcourse_img; // Corrected variable name
    let ugCourseId = req.body.ugcourse_id;

    con.query(query, [pgCourseName, pgCourseImage, ugCourseId], (err, result) => {
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
});

module.exports = router;
