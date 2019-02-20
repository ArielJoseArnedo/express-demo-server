'use-strict'

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require(__dirname + '/../config/config.js')[process.env.NODE_ENV || 'development'];
var db = {};
const FOLDERS_MODELS = ['core', 'controlacceso'];

// const sequelize = new Sequelize(config.database, config.username, config.password, {
//     host: config.host,
//     port: config.port,
//     dialect: config.dialect,
//     define: {
//         schema: config.schema
//     },
//     logging: config.logging
// });
const sequelize = new Sequelize('ph-man-database', 'phman_user', 'root', {
    // the sql dialect of the database
    // currently supported: 'mysql', 'sqlite', 'postgres', 'mssql'
    dialect: 'postgres',

    // custom host; default: localhost
    host: 'postgres',

    // custom port; default: dialect default
    port: 5432,

    // disable logging; default: console.log
    logging: false
});
FOLDERS_MODELS.forEach(function(value) {

    let folder = __dirname.concat("/", value);
    fs
        .readdirSync(folder)
        .filter(file => {
            return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
        })
        .forEach(file => {
            const model = sequelize['import'](path.join(folder, file));
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
console.log(config);
console.log(sequelize);
module.exports = db;