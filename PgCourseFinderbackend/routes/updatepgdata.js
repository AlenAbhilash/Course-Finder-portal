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
        let  pgcourse_id = req.body.pgcourse_id;
        let ugcourse_id = req.body.ugcourse_id;
    let pgcourse_name = req.body.pgcourse_name;
    let pgcourse_img = req.body.pgcourse_img;
    let strquery =  `UPDATE tbl_pgcourse SET ugcourse_id='${ugcourse_id}',pgcourse_name='${pgcourse_name}',pgcourse_img='${pgcourse_img}' where pgcourse_id='${pgcourse_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;