module.exports = router; var
express = require('express'); 
var router = express.Router();  
var mysql = require('mysql'); 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder" 
    });
    router.post('/', (req, res, next) => {
        let  collegepgcourse_id = req.body.collegepgcourse_id;
        let category_id = req.body.category_id;
    let seat_number = req.body.seat_number;
    let seat_id = req.body.seat_id;
    let strquery =  `UPDATE tbl_seatreg SET collegepgcourse_id='${collegepgcourse_id}',category_id='${category_id}',seat_number='${seat_number}' where seat_id='${seat_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;