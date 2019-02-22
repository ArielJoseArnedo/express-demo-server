const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const config = require('../../config/config')[process.env.NODE_ENV || 'development'];

var db = {};
const FOLDERS_MODELS = ['core', 'controlacceso'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    logging: false
});

FOLDERS_MODELS.forEach((value) => {

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
module.exports = db;