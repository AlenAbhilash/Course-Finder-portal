var mysql = require('mysql');
var express = require('express');
var path = require('path');
var router = express.Router();
const nodemailer = require("nodemailer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});

router.post('/', (req, res, next) => {
    let user_name = req.body.user_name;
    let email = req.body.email;
    let phone = req.body.phone;
    let dis_id = req.body.dis_id;
    let loc_id = req.body.loc_id;
    let address = req.body.address;
    let pincode = req.body.pincode;
    let user_img = path.basename(req.body.user_img);
    let username = req.body.username;
    let password = req.body.password;

    con.query('SELECT * FROM tbl_login WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error(err);
            return res.send({
                message: 'Error checking existing username',
                error: err.message
            });
        }

        if (results.length > 0) {
            return res.send({
                message: 'Username already exists'
            }); 
        }
        let loginQuery = `INSERT INTO tbl_login(username, password, role, status) VALUES (?, ?, ?, ?)`;

        con.query(loginQuery, [username, password, 'user', 'userconfirmation'], (err, loginResult) => {
            if (err) {
                console.error(err);
                return res.send({
                    message: 'Error inserting login data',
                    error: err.message
                });
            }

            let login_id = loginResult.insertId;
            let userQuery = `INSERT INTO tbl_user(user_name, email, phone, dis_id, loc_id, address, pincode, login_id, reg_date, user_img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURDATE(), ?)`;

            con.query(userQuery, [user_name, email, phone, dis_id, loc_id, address, pincode, login_id, user_img], (err, userResult) => {
                if (err) {
                    console.error(err);
                    return res.send({
                        message: 'Error inserting user data',
                        error: err.message
                    });
                }

                console.log(userResult);

                const mailOptions = {
                    from: `"Student Registration Successful: Welcome to PG COURSE FINDER PORTAL", "alanabhilash4@gmail.com"`,
                    to: `${email}`,
                    subject: "Registration Successful",
                    html: `Congratulations! 🎉 You've successfully registered for the PG Course Finder portal. Your journey to discovering the perfect postgraduate courses begins now!`
                };

                const transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 587,
                    secure: false,
                    auth: {
                        user: "alanabhilash4@gmail.com",
                        pass: "cghd yiiq gvwm plyd"
                    }
                });

                transporter.sendMail(mailOptions, (err, info) => {
                    if (err)
                        console.log(err);
                    console.log(info);
                });

                res.send({
                    message: 'Success'
                });
            });
        });
    });
});

module.exports = router;
