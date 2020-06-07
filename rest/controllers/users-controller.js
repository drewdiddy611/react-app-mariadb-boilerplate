const METHODS = require('../method-constants');
const {getUsers} = require('../services/users-service');

const endpoints = [{
    url: '/users',
    method: METHODS.GET,
    handler: async (req, res) => {
        try {
            const users = await getUsers();

            res.json(users);
        } catch (error) {
            res.status(500).json('An error occurred while processing your request.');
        }
    }
}];

module.exports = endpoints;