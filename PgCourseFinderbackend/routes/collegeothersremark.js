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
        let remark = req.body.remark;
    let seatbooking_id = req.body.seatbooking_id;
    let strquery =  `UPDATE tbl_seatbooking SET remark='${remark}',bookingstatus='Under consideration' where seatbooking_id='${seatbooking_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;