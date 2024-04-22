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
    let sdate=req.body.startdate;
    let edate=req.body.enddate;
    let query = `SELECT * FROM tbl_user u INNER JOIN tbl_dis d ON d.dis_id = u.dis_id WHERE 
    reg_date>'${sdate}' and reg_date<'${edate}'`;
    console.log(query);
    con.query(query, function (err, rows) {
        if (err) throw err;
    
        res.send(rows);
    });
});

module.exports = router;
