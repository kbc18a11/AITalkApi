const { check } = require('express-validator');

module.exports = [
    check('id').not().isEmpty().withMessage('必須項目です。'),
];