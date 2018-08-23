'use-strict'

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.js')[env];
var db = {};
const FOLDERS_MODELS = ['core', 'controlacceso'];


if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {   
  var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    define: {
      schema: config.schema
    }
  });
}

FOLDERS_MODELS.forEach(function (value) {

  let folder = __dirname.concat("\\",value);
  fs
    .readdirSync(folder)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
       var model = sequelize['import'](path.join(folder, file));
       db[model.name] = model;
    });

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;