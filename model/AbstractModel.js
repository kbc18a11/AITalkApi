const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const testValidator = require('../midleware/validators/testValidator');

class AbstractModel {
    constructor() {
    }

    /**
     * テーブル名を取得する抽象メソッド
     * @returns {null}
     * @constructor
     */
    static get abstractTABLE_NAME() {
    }

    /**
     * 対応したテーブルのレコードをすべて取得
     * @returns {Promise<*>}
     */
    static async all() {
        const sql = 'SELECT * FROM ??';
        //const errorSql = 'SELECT * FROM ?';

        //SQLを実行(rowsがSQLの実行結果)
        const [rows, fields] = await connection.query(sql, [this.abstractTABLE_NAME]);

        //console.log(rows);
        return rows;
    }
}

module.exports = AbstractModel;