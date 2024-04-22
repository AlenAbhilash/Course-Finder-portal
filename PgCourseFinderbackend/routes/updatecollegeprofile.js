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
        let college_name = req.body.college_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let dis_id = req.body.dis_id;
        let loc_id = req.body.loc_id;
        let Address = req.body.Address;
        let pincode = req.body.pincode;
        let website = req.body.website;
        let type = req.body.type;
        let college_imge = req.body.college_imge;
    let strquery =  `UPDATE tbl_college SET college_name='${college_name}',email='${email}',phone='${phone}',dis_id='${dis_id}',loc_id='${loc_id}',Address='${Address}',pincode='${pincode}',website='${website}',type='${type}',college_imge='${college_imge}'  where login_id='${login_id}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
    });
    })
    module.exports = router;