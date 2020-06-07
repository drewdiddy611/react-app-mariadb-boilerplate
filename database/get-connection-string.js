const config = require('config');
const dbConfig = config.get('database');

module.exports = {
    getConnectionString: () => {
        const host = dbConfig.get('host');
        const user = dbConfig.get('user');
        const password = dbConfig.get('password');
        const database = dbConfig.get('database');

        return `mariadb://${user}:${password}@${host}:3306/${database}`;
    }
};