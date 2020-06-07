const requireDir = require('require-dir');
const {Sequelize} = require('sequelize');
const {getConnectionString} = require('./get-connection-string');

const connection = new Sequelize(getConnectionString(), {
    dialectOptions: {
        timezone: 'Etc/GMT-0',
    }
});

module.exports = {
    connection,
    getModel: name => {
        const modelInstance = connection.models[name];
        if (!modelInstance) {
            throw new Error(`Model ${name} does not exist.`);
        }
        return modelInstance;
    },
    initializeDatabaseConnection: () => {
        console.log('Connecting to database...');
        connection.authenticate();

        const models = requireDir('./models');
        return Object.keys(models).reduce((allModels, modelName) => {
            const init = models[modelName];
            const nextModel = init(connection);
            return {
                ...allModels,
                [modelName]: nextModel
            }
        }, {});
    }
};


