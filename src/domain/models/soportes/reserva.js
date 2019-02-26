'use-strict';
module.exports = (sequelize, DataTypes) => {
    var Reserva = sequelize.define('Reserva', {

    }, {
        tableName: 'reserva',
        createdAt: false,
        updatedAt: false
    });

    Reserva.associate = (models) => {};

    return Reserva;
};