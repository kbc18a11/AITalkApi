const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/testValidator')
const {validationResult} = require('express-validator');

/* GET home page. */
router.get('/', testValidator, (req, res, next) => {
    // バリデーションの結果にエラーがあるかのチェック
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    res.send('b');
});


module.exports = router;
