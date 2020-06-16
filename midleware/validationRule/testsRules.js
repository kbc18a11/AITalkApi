module.exports = {
    //post用
    post: {
        rule: {
            text: 'required'
        },
        errorMessage: {
            required: '必須項目です。',
        }
    },
    //put用
    put: {
        rule: {
            id: 'required|integer',
            text: 'required'
        },
        errorMessage: {
            required: '必須項目です。',
            integer: '数値で入力してください'
        }
    }
};