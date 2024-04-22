var mysql = require('mysql');
var express = require('express'); 
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",  
    password: "",
    database: "db_pgcoursefinder" 
    });
router.get('/',(req,res,next)=>{ 
    let strquery = `SELECT * FROM tbl_ugcourse`;  
 // console.log(strquery)
 con.query(strquery,(err,result)=>{ 
    if(err) {console.log(err);} 
    // console.log(result);
     res.send(result) 
    });
 }); 
 module.exports=router; 