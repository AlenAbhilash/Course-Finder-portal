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
    let checkUsernameQuery = `SELECT * FROM tbl_login WHERE username = ?`;

    con.query(checkUsernameQuery, [req.body.username], (err, usernameResult) => {
        if (err) {
            console.error(err);
            return res.send({
                message: 'Error checking existing username',
                error: err.message
            });
        }

        if (usernameResult.length > 0) {
            return res.send({
                message: 'Username already exists'
            });
        }

        let collegeQuery = `INSERT INTO tbl_college(college_name, email, phone, type, website, dis_id, loc_id, Address, pincode, college_imge, login_id, reg_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURDATE())`;

        let loginQuery = `INSERT INTO tbl_login(username, password, role, status) VALUES (?, ?, ?, ?)`;

        let college_name = req.body.college_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let type = req.body.type;
        let website = req.body.website;
        let dis_id = req.body.dis_id;
        let loc_id = req.body.loc_id;
        let Address = req.body.Address;
        let pincode = req.body.pincode;
        let college_imge = path.basename(req.body.college_imge);
        let username = req.body.username;
        let password = req.body.password;

        con.query(loginQuery, [username, password, 'college', 'collegeconfirmation'], (err, loginResult) => {
            if (err) {
                console.error(err);
                return res.send({
                    message: 'Error inserting login data',
                    error: err.message
                });
            }
            let login_id = loginResult.insertId;
            con.query(collegeQuery, [college_name, email, phone, type, website, dis_id, loc_id, Address, pincode, college_imge, login_id], (err, collegeResult) => {
                if (err) {
                    console.error(err);
                    return res.send({
                        message: 'Error inserting college data',
                        error: err.message
                    });
                }
                console.log(collegeResult);

                const mailOptions = {
                    from: `" College Registration Successful: Welcome to PG COURSE FINDER PORTAL", "alanabhilash4@gmail.com"`,
                    to: `${email}`,
                    subject: "Registration Successful",
                    html: `Congratulations! 🎉 You've successfully registered for the PG Course Finder portal. Your journey Register the college pg course!`
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
