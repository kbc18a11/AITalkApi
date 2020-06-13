const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const testValidator = require('../midleware/validators/testValidator')

class AbstractModel {
    constructor(props) {

    }

}