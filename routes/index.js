const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/testValidator')
const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');

/* GET home page. */
router.get('/', testValidator, (req, res, next) => {
    connection.query('SELECT * FROM tests',(error, results, fields) =>{
        if(error) throw error;
        res.send(results);
    });

});




module.exports = router;
