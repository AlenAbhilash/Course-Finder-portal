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

router.post('/',(req,res,next)=>{ 
    let dis_id=req.body.dis_id;
    let loc_name= req.body.loc_name;
    
  

    let strquery = `INSERT INTO tbl_loc (dis_id,loc_name) VALUES(?,?);`; 
      con.query(strquery,  [dis_id,loc_name])
      res.send({ message: 'Success' })
      
}) 
 module.exports=router;