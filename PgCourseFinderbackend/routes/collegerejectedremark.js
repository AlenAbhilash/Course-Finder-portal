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

    let strquery = `UPDATE tbl_seatbooking SET remark='${remark}',bookingstatus='Rejected' where seatbooking_id='${seatbooking_id}'`;

    let useremailQuery = `SELECT d.email,x.college_name FROM tbl_seatbooking i 
    INNER JOIN tbl_seatreg z ON z.seat_id = i.seat_id
    INNER JOIN tbl_college x ON x.login_id = z.login_id
    INNER JOIN tbl_user d ON d.login_id = i.login_id 
    WHERE i.seatbooking_id='${seatbooking_id}'`;

    console.log(strquery);

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

        con.query(strquery, (err, rows) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: 'Error updating seat booking' });
                return;
            }

            const mailOptions = {
                from: `"Rejected:" <alanabhilash4@gmail.com>`,
                to: userEmail,
                subject: "Rejected failed for",
                html: `<p> We hope this message finds you well. After careful consideration of your application and the subsequent interview, we regret to inform you that we are unable to offer you a management seat at our college for the upcoming academic term.</p>

                <p> While your application showcased commendable achievements, the selection process was highly competitive, and unfortunately, we had to make difficult decisions based on various criteria. We understand that this news may be disappointing, and we want to assure you that this decision does not diminish your accomplishments or potential.</p>
                
               <p> We appreciate the time and effort you invested in the application process and the interview. We encourage you to continue pursuing your academic and professional goals, as we believe you have the potential for success in other endeavors. form ${collegeName} </p>`
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
