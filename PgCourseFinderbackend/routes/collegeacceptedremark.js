const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const nodemailer = require('nodemailer');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_pgcoursefinder"
});

router.post('/', (req, res, next) => {
    let remark = req.body.remark;
    let seatbooking_id = req.body.seatbooking_id;
    let strquery = `UPDATE tbl_seatbooking SET remark='${remark}',bookingstatus='Accepted' where seatbooking_id='${seatbooking_id}'`;
    let useremailQuery = `SELECT d.email,x.college_name FROM tbl_seatbooking i 
    INNER JOIN tbl_seatreg z ON z.seat_id = i.seat_id
    INNER JOIN tbl_college x ON x.login_id = z.login_id
    INNER JOIN tbl_user d ON d.login_id = i.login_id 
    WHERE i.seatbooking_id='${seatbooking_id}'`;

    console.log(strquery);
    con.query(strquery, (err, rows) => {
        if (err) throw err;
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
                from: `"Accepted successfully:" <alanabhilash4@gmail.com>`,
                to: userEmail,
                subject: "Accepted successfully Passed",
                html: `<p>We are thrilled to inform you that you have successfully passed the interview process for our esteemed and are now eligible to secure a management seat in your desired program</p>.

                <p>Your academic achievements, coupled with your impressive performance during the interview, have demonstrated your commitment to excellence and align perfectly with our institution's values. We believe that you will contribute significantly to our academic community</p>.
                
                <p>To officially reserve your management seat, we kindly request an advance payment of $5,000. This payment will not only secure your place but also contribute towards initiating the administrative processes necessary for your enrollment form ${collegeName}</p>.`
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
