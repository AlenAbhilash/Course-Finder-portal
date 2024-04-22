var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder" 
});
router.post('/', (req, res, next) => {
    let ugcourse_id = req.body.ugcourse_id;
    let query = `SELECT DISTINCT z.college_name,z.college_imge,z.email,z.type,z.Address,z.college_id,q.ugcourse_id
    FROM tbl_collegepossiblecourse l
    INNER JOIN tbl_possiblecourse q on q.possiblecourse_id = l.possiblecourse_id
    INNER JOIN tbl_ugcourse u ON u.ugcourse_id = q.ugcourse_id
    INNER JOIN tbl_pgcourse c ON c.pgcourse_id = q.pgcourse_id
    INNER JOIN tbl_college z ON z.login_id = l.login_id
    WHERE q.ugcourse_id = '${ugcourse_id}'`;
    console.log(query);
    con.query(query, [ugcourse_id], function (err, rows) {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;
