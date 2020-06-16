const connection = require('../database/mysqlConnection');
require('date-utils');

class AbstractModel {
    constructor() {
    }

    /**
     * テーブル名を取得する抽象メソッド
     * @returns {string}
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

    /**
     * INSERT文を実行
     * @param insertParam
     * @param{string} sql
     * @returns {Promise<void>}
     */
    static async insert(insertParam) {
        const sql = `INSERT ${this.abstractTABLE_NAME} SET ?;`;//INSERT文

        //create_at用の日付時間取得
        insertParam.created_at = new Date().toFormat('YYYY-MM-DD HH:MI:SS');

        //console.log(insertParam);
        //SQLを実行
        await connection.query(sql, insertParam);
    }
}

module.exports = AbstractModel;