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
        let ugcourse_id = req.body.ugcourse_id;
        let ugcourse_name = req.body.ugcourse_name;
    let ugcourse_img = req.body.ugcourse_img;
    let strquery =  `UPDATE tbl_ugcourse SET ugcourse_name='${ugcourse_name}',ugcourse_img='${ugcourse_img}' where ugcourse_id='${ugcourse_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;