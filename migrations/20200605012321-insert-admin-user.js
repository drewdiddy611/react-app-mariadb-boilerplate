'use strict';
const {hashString} = require('../database/hash-string');
let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.insert(
      'users',
      ['username', 'password', 'firstName', 'lastName', 'email'],
      ['admin', hashString('admin'), 'Joe', 'Dirt', 'joedirt@gmail.com']
  );
};

exports.down = function(db) {
  return db.runSql('DELETE FROM users WHERE username = ?', 'admin');
};

exports._meta = {
  "version": 1
};
