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
        let seat_id = req.body.seat_id;
        let query = `DELETE FROM  tbl_seatreg WHERE seat_id='${seat_id}';`;
        con.query(query,(err,rows) => {
        if (err) throw err;
        res.send({message:'Success'}
        );
        });
        });
        module.exports = router;