const {check, param} = require('express-validator');

module.exports = {
    //post用
    post: [check('text').not().isEmpty().withMessage('必須項目です。')],
    //put用
    put: [
        check('id').isNumeric().withMessage('数値を入力してください。'),
        check('text').not().isEmpty().withMessage('必須項目です。')
    ]
};