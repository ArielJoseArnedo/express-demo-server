'use-strict';
module.exports = (sequelize, DataTypes) => {
    var SoporteReserva = sequelize.define('SoporteReserva', {

    }, {
        tableName: 'soporte_reserva',
        createdAt: false,
        updatedAt: false
    });

    SoporteReserva.associate = (models) => {};

    return SoporteReserva;
};