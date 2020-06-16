const {check} = require('express-validator');

module.exports = {
    //post用
    post: [check('text').not().isEmpty().withMessage('必須項目です。')]
};