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
        let login_id = req.body.login_id;
        let user_name = req.body.user_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let dis_id = req.body.dis_id;
        let loc_id = req.body.loc_id;
        let address = req.body.address;
        let pincode = req.body.pincode;
        let user_img = req.body.user_img;
    let strquery =  `UPDATE tbl_user SET user_name='${user_name}',email='${email}',phone='${phone}',dis_id='${dis_id}',loc_id='${loc_id}',address='${address}',pincode='${pincode}',user_img='${user_img}'  where login_id='${login_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;