var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var multer = require('multer');
var util = require('util');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",  
    password: "",
    database: "db_pgcoursefinder" 
});

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + "/../public/images");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

let uploadFile = multer({ storage: storage }).single("file");
let uploadFileMiddleware = util.promisify(uploadFile);

module.exports = uploadFileMiddleware;
