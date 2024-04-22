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
        let category_id = req.body.category_id;
        let query = `DELETE FROM tbl_category WHERE category_id='${category_id}';`;
        con.query(query,(err,rows) => {
        if (err) throw err;
        res.send({message:'Success'}
        );
        });
        });
        module.exports = router;