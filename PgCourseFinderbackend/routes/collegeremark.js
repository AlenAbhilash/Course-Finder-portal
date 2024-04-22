var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var nodemailer = require('nodemailer');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});

router.post('/', (req, res, next) => {
    let interview_date = req.body.interview_date;
    let remark = req.body.remark;
    let seatbooking_id = req.body.seatbooking_id;

    let strquery = `UPDATE tbl_seatbooking SET interview_date='${interview_date}', remark='${remark}', bookingstatus='Scheduled interview' WHERE seatbooking_id='${seatbooking_id}'`;
    let useremailQuery = `SELECT d.email, x.college_name FROM tbl_seatbooking i 
    INNER JOIN tbl_seatreg z ON z.seat_id = i.seat_id
    INNER JOIN tbl_college x ON x.login_id = z.login_id
    INNER JOIN tbl_user d ON d.login_id = i.login_id 
    WHERE i.seatbooking_id='${seatbooking_id}'`;

    console.log(strquery);

    con.query(strquery, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Error updating seat booking' });
            return;
        }

        con.query(useremailQuery, (emailErr, emailRows) => {
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
            const collegeName = emailRows[0].college_name;

            const mailOptions = {
                from: `"Scheduled interview:" <alanabhilash4@gmail.com>`,
                to: userEmail,
                subject: "Scheduled Interview",
                html: `<p>Dear Candidate,</p>
                       <p>Your interview at ${collegeName} has been scheduled for ${interview_date}.</p>
                       <p>Remark: ${remark}</p>
                       <p>Thank you and best regards,</p>`
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

            transporter.sendMail(mailOptions, (sendMailErr, info) => {
                if (sendMailErr) {
                    console.error(sendMailErr);
                    res.status(500).send({ message: 'Error sending email' });
                    return;
                }

                res.send({ message: 'Success' });
            });
        });
    });
});

module.exports = router;
