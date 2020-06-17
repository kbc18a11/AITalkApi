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

    /**
     * @override
     * @param insertParam
     * @returns {Promise<void>}
     */
    static async update(insertParam) {
        //UPDATE文
        const sql = `UPDATE ${this.abstractTABLE_NAME} SET text = ?,updated_at = ? WHERE id = ?`;

        //create_at用の日付時間取得
        insertParam.updated_at = new Date().toFormat('YYYY-MM-DD HH:MI:SS');

        //SQLの実行
        await super.update(insertParam, sql);
    }
}

module.exports = Tests;