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
let  ugcourse_id = req.body.ugcourse_id;
let  pgcourse_id = req.body.possiblecourse_id;
// let query = `SELECT * FROM tbl_possiblecourse;`; 
// con.query(query, (err, rows) => { if (err) 
// throw err; if (rows == "") { 
 let strquery = `INSERT INTO tbl_possiblecourse(ugcourse_id,pgcourse_id) VALUES(?,?);`; 
 console.log(strquery)
 con.query(strquery,[ugcourse_id,pgcourse_id]) 
 res.send({ message: 'Success' }) 
//  }
//   else { res.send({ message: 'Failed' }) 
//  } 
//  // console.log("1 record inserted");
//  });
 }); 
 
module.exports = router;