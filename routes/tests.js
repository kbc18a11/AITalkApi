const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/testValidator')
const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const Tests = require('../model/Tests');

/* GET home page. */
router.get('/', testValidator, (req, res, next) => {

    //データをすべて取得
    Tests.all().then(data => {
        console.log(data)
        return res.send(data);
    });

});


module.exports = router;
