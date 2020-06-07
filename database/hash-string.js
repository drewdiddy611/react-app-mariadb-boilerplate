const hash = require('hash.js');

module.exports = {
    hashString: value => hash.sha256().update(value).digest('hex')
};
