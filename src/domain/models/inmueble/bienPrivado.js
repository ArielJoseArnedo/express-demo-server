'use-strict';
module.exports = (sequelize, DataTypes) => {
    var BienPrivado = sequelize.define('BienPrivado', {
        id: {

        },
        matriculaInmobiliario: {

        },
        referenciaCatrastral: {

        },
        propiedadHorizontalFk: {

        },
        nomenclaturaInmobilidariaFk: {

        }
    }, {
        tableName: 'bien_privado',
        createdAt: false,
        updatedAt: false
    });

    BienPrivado.associate = (models) => {};

    return BienPrivado;
};