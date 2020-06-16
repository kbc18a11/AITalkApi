const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/tests/testsValidator')
const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const Tests = require('../model/Tests');


/**
 * @GET
 * testsのレコードをすべて取得
 */
router.get('/tests', async (req, res, next) => {

    try {
        //レコードをすべて取得
        const allRows = await Tests.all();
        //console.log(allRows);

        //レコードを返す
        return res.send(allRows);
    } catch (error) {
        //レコードの取得失敗時
        console.log(error);
        res.status(500);
        return res.send({'error': 'サーバー側でエラーが発生しました'});
    }

});

router.post('/test', testValidator.post, async (req, res, next) => {
    //バリデーションの結果にエラーがあるかのチェック
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    try {
        //データの挿入開始
        await Tests.insert({text: req.query.text});
        return res.send({'insertResult': true});
    } catch (error) {
        //レコードの挿入失敗時
        console.log(error);
        res.status(500);
        return res.send({'insertResult': false});
    }
});

module.exports = router;
