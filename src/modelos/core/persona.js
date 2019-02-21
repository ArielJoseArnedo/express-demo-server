'use-strict'
module.exports = (sequelize, DataTypes) => {
    var Persona = sequelize.define('Persona', {
        numeroIdentificacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'numero_identificacion'
        },
        tipoDocumento: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'tipo_documento'
        },
        image: {
            type: DataTypes.STRING,
            field: 'image'
        }
    }, {
        tableName: 'persona',
        createdAt: false,
        updatedAt: false
    });

    Persona.associate = (models) => {


    };

    return Persona;
};