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
    const username = req.body.username;
    const password = generateRandomPassword(8);
    const userExistsQuery = `SELECT * FROM tbl_login WHERE username='${username}'`;

    con.query(userExistsQuery, (userExistsErr, userExistsRows) => {
        if (userExistsErr) {
            console.error(userExistsErr);
            res.status(500).send({ message: 'Error checking username existence' });
            return;
        }

        if (userExistsRows.length === 0) {
            console.log(`Invalid username: ${username}`);
            res.status(400).send({ message: 'Invalid username' });
            return;
        }

        const role = userExistsRows[0].role;

        let useremailQuery;
        let collegeemailQuery;

        if (role === 'user') {
            useremailQuery = `SELECT email FROM tbl_user t INNER JOIN tbl_login x on x.login_id = t.login_id WHERE x.username='${username}' and x.role='user'`;
        } else if (role === 'college') {
            collegeemailQuery = `SELECT email FROM tbl_college t INNER JOIN tbl_login x on x.login_id = t.login_id WHERE x.username='${username}' and x.role='college'`;
        }

        const finalQuery = useremailQuery || collegeemailQuery;

        if (!finalQuery) {
            res.status(500).send({ message: 'Error constructing email query' });
            return;
        }

        con.query(finalQuery, (emailErr, emailRows) => {
            if (emailErr) {
                console.error(emailErr);
                res.status(500).send({ message: 'Error fetching email' });
                return;
            }

            if (emailRows.length === 0) {
                res.status(404).send({ message: 'Email not found for the user' });
                return;
            }

            const userEmail = emailRows[0].email;
            const mailOptions = {
                from: `"Password Updated successfully:" <alanabhilash4@gmail.com>`,
                to: userEmail,
                subject: "Password Updated", 
                html: `Password Updated. The New Password is :'${password}'`
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

            const strquery = `UPDATE tbl_login SET password='${password}' WHERE username='${username}'`;

            con.query(strquery, (updateErr, updateRows) => {
                if (updateErr) {
                    console.error(updateErr);
                    res.status(500).send({ message: 'Error updating password' });
                    return;
                }

                transporter.sendMail(mailOptions, (mailErr, info) => {
                    if (mailErr) {
                        console.error(mailErr);
                        res.status(500).send({ message: 'Error sending email' });
                    } else {
                        console.log(info);
                        res.send({ message: 'Success' });
                    }
                });
            });
        });
    });
});

function generateRandomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

module.exports = router;
