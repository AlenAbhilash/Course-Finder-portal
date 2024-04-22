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
let cat_name = req.body.category_name; 
let query = `SELECT * FROM tbl_category where category_name='${cat_name}';`; 
con.query(query, (err, rows) => { if (err) 
throw err; if (rows == "") { 
 let strquery = `INSERT INTO tbl_category (category_name) VALUES(?);`; 
 con.query(strquery, [cat_name]) 
 res.send({ message: 'Success' }) 
 }
  else { res.send({ message: 'Failed' }) 
 } 
 // console.log("1 record inserted");
 });
 }); 
 
module.exports = router;