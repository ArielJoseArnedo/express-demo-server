'use-strict'
module.exports = (sequelize, Sequelize) => {
    var Persona = sequelize.define('persona',{
        numeroIdentificacion:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'numero_identificacion'
        },
        tipoDocumento:{
            type: Sequelize.STRING,
            allowNull: false,
            field: 'tipo_documento'
        },
        image:{
            type: Sequelize.STRING,
            field: 'image'
        }
    },{
        createdAt: false,
        updatedAt: false
    });

    Persona.associate = function(models){
        console.log(models);
    };

    return Persona;
};