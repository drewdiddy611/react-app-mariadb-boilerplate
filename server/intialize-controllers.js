const requireDir = require('require-dir');

const toFlatArray = (allControllers, controllers) => [...allControllers, ...controllers];

module.exports = {
    initializeControllers: app => {
        console.log('Initializing routes...');

        const controllers = requireDir('./controllers');
        Object.values(controllers)
            .reduce(toFlatArray, [])
            .forEach(controller => {
                const {url, method, handler} = controller;
                console.log(`Setting url: ${method} ${url}...`);
                app[method.toLowerCase()](url, handler);
            });
    }
};