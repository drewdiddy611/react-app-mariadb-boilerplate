const path = require('path');
const express = require('express');
const config = require('config');
const {initializeDatabaseConnection} = require('./database/setup');
const {initializeControllers} = require('./server/intialize-controllers');
const cons = require('consolidate');

const port = (config.has('server.port') && config.get('server.port')) || process.env.PORT || 80;
const app = express();

app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'front-end'));
app.set('view engine', 'html');

initializeDatabaseConnection();
app.get('/', function(_, res) {
    // put props to pass to client here.
    const propsToClient = JSON.stringify({

    });

    // front-end/index.html --> this file will be overwritten, do not edit it.
    // Instead, edit client/public/index.html
    res.render('index', {propsToClient});
});
app.use(express.static(path.join(__dirname, 'front-end')));

initializeControllers(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));