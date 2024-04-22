var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var con = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});
 
router.get('/', (req, res, next) => {
    let strquery = `SELECT * FROM tbl_category`;
    con.query(strquery, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).json(result);
        }
    });
});

module.exports = router;
