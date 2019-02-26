'use-strict';
module.exports = (sequelize, DataTypes) => {
    var BienComun = sequelize.define('BienComun', {

    }, {
        tableName: 'bienComun',
        createdAt: false,
        updatedAt: false
    });

    BienComun.associate = (models) => {};

    return BienComun;
};