"use strict";
'use-strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var fs = require('fs');

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';

var config = require(__dirname + '/../config/config.js')[env];

var db = {};
exports.db = db;
var FOLDERS_MODELS = ['core', 'controlacceso'];
var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
  define: {
    schema: config.schema
  },
  logging: config.logging
});
FOLDERS_MODELS.forEach(function (value) {
  var folder = __dirname.concat("/", value);

  fs.readdirSync(folder).filter(function (file) {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  }).forEach(function (file) {
    var model = sequelize['import'](path.join(folder, file));
    db[model.name] = model;
  });
  Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log(config);
console.log(sequelize);
var db = db;
exports.db = db;