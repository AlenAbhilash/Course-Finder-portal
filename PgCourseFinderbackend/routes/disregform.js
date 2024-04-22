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
/* GET users listing. */ 
router.post('/',function (req, res, next){  
let dis_name = req.body.dis_name; 
let query = `SELECT * FROM tbl_dis where dis_name='${dis_name}';`; 
con.query(query, (err, rows) => { if (err) 
throw err; if (rows == "") { 
 let strquery = `INSERT INTO tbl_dis (dis_name) VALUES(?);`; 
 con.query(strquery, [dis_name]) 
 res.send({ message: 'Success' }) 
 }
  else { res.send({ message: 'Failed' }) 
 } 
 // console.log("1 record inserted");
 });
 }); 
 
module.exports = router;