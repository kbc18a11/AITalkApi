const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/testValidator')
const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const Tests = require('../model/Tests');

/* GET home page. */
router.get('/', testValidator, (req, res, next) => {
    let a = 'aaa';
    /*const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }*/

    Tests.all().then(data => {
        console.log(data)
        return res.send(data);
    });

});


module.exports = router;
