const AbstractModel = require('./AbstractModel');

class Tests extends AbstractModel {
    constructor() {
        super();
    }

    /**
     * テーブル名
     * @override
     * @returns {string}
     */
    static get abstractTABLE_NAME(){
        return 'tests';
    }
}

module.exports = Tests;