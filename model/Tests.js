const AbstractModel = require('./AbstractModel');
const connection = require('../database/mysqlConnection');
require('date-utils');

class Tests extends AbstractModel {
    constructor() {
        super();
    }

    /**
     * テーブル名
     * @override
     * @returns {string}
     */
    static get abstractTABLE_NAME() {
        return 'tests';
    }

    static async update(insertParam) {
        //UPDATE文
        const sql = `UPDATE ${this.abstractTABLE_NAME} SET text = ?,updated_at = ? WHERE id = ?`;

        //create_at用の日付時間取得
        insertParam.updated_at = new Date().toFormat('YYYY-MM-DD HH:MI:SS');

        //SQLを実行
        await connection.query(sql, [insertParam.text, insertParam.updated_at, insertParam.id]);
    }
}

module.exports = Tests;