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
    let strquery = `SELECT * FROM tbl_college j 
    inner join tbl_dis d on d.dis_id = j.dis_id
    inner join tbl_login x  on x.login_id = j.login_id`;
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
