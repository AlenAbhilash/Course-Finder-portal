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
    let loc_id = req.body.loc_id;
    let query = `SELECT * FROM tbl_loc where loc_id ='${loc_id}'`;
    console.log(query);
    con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
});
});
/* GET users listing. */
module.exports = router;
