'use-strict';
module.exports = (sequelize, DataTypes) => {
    var SoporteMedico = sequelize.define('SoporteMedico', {

    }, {
        tableName: 'soporte_medico',
        createdAt: false,
        updatedAt: false
    });

    SoporteMedico.associate = (models) => {};

    return SoporteMedico;
};