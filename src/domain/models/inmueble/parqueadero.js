'use-strict';
module.exports = (sequelize, DataTypes) => {
    var Parqueadero = sequelize.define('Parqueadero', {

    }, {
        tableName: 'parqueadero',
        createdAt: false,
        updatedAt: false
    });

    Parqueadero.associate = (models) => {};

    return Parqueadero;
};