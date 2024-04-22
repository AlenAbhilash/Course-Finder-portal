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
  let college_id = req.body.college_id;
  let query = `SELECT
  x.college_id,
  x.college_name,
  x.email,
  x.phone,
  x.website,
  x.Address,
  x.type,
  x.college_imge,
  d.dis_name,  
  l.loc_name, 
  h.seat_id,
  GROUP_CONCAT(DISTINCT seat_number) AS seat_numbers,
  GROUP_CONCAT(DISTINCT category_name) AS category_names,
  GROUP_CONCAT(DISTINCT pgcourse_name) AS pgcourse_names,
  GROUP_CONCAT(DISTINCT ugcourse_name) AS ugcourse_names,
  GROUP_CONCAT(DISTINCT CONCAT(category_name, ',', pgcourse_name, ',', seat_number)) AS totalseats

FROM
  tbl_college x
  INNER JOIN tbl_dis d ON d.dis_id = x.dis_id
  INNER JOIN tbl_loc l ON l.loc_id = x.loc_id
  LEFT JOIN tbl_login y ON y.login_id = x.login_id
  LEFT JOIN tbl_seatreg h ON h.login_id = y.login_id
  LEFT JOIN tbl_category z ON z.category_id = h.category_id
  LEFT JOIN tbl_collegepgcourse pg ON pg.collegepgcourse_id = h.collegepgcourse_id 
  LEFT JOIN tbl_pgcourse o ON o.pgcourse_id = pg.pgcourse_id
  LEFT JOIN tbl_ugcourse a ON a.ugcourse_id = pg.ugcourse_id

WHERE
  x.college_id = '${college_id}'
GROUP BY
  x.college_id, x.college_name, x.email, x.phone, x.website, x.Address, x.type, x.college_imge, d.dis_name, l.loc_name;`;

  console.log(query);

  con.query(query, [college_id], (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send(err); 
    } else {
      res.send(rows);
    }
  });
});

module.exports = router;
