const {getModel} = require('../../database/setup');

module.exports = {
    getUsers: () => {
        return getModel('user').findAll();
    }
};