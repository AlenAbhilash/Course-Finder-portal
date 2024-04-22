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
        let  loc_id = req.body.loc_id;
        let dis_id = req.body.dis_id;
    let loc_name = req.body.loc_name;
    let strquery =  `UPDATE tbl_loc SET dis_id='${dis_id}',loc_name='${loc_name}' where loc_id='${loc_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;