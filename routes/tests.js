const express = require('express');
const router = express.Router();
const rules = require('../midleware/validationRule/testsRules')
const validator = require('validatorjs');
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

/**
 * @POST
 * testsに新しいレコードを挿入
 */
router.post('/test', async (req, res, next) => {
    //バリデーションの検証を受ける値
    const verificationValue = {
        text: req.query.text
    }
    //バリデーションの結果にエラーがあるかのチェック
    const validation = new validator(verificationValue, rules.post.rule, rules.post.errorMessage);
    if (validation.fails()) {
        //エラーを422で返す
        return res.status(422).send({errors: validation.errors.all()});
    }

    try {
        //レコードの挿入開始
        await Tests.insert({text: req.query.text});
        return res.send({'insertResult': true});
    } catch (error) {
        //レコードの挿入失敗時
        console.log(error);
        return res.status(500).send({'insertResult': false});
    }
});

/**
 * @PUT
 * レコードの更新
 */
router.put('/test/:id', async (req, res, next) => {
    //バリデーションの結果にエラーがあるかのチェック

    //バリデーションの検証を受ける値
    const verificationValue = {
        id: req.params.id,
        text: req.query.text
    }
    //バリデーションの結果にエラーがあるかのチェック
    const validation = new validator(verificationValue, rules.put.rule, rules.put.errorMessage);
    if (validation.fails()) {
        //エラーを422で返す
        return res.status(422).send({errors: validation.errors.all()});
    }



    return res.send(req.query.text);
})

module.exports = router;
