'use-strict'
module.exports = (sequelize, DataTypes) => {
    var PersonaJuridica = sequelize.define('PersonaJuridica',{
        objetoSocial:{
            type: DataTypes.STRING,
            field: 'objeto_social'
        },
        razonSocial:{
            type: DataTypes.STRING,
            field: 'razon_social'
        }
    },{
        tableName: 'Persona_Juridica',
        createdAt: false,
        updatedAt: false
    });

    PersonaJuridica.associate = function(models){
        console.log(models);
    };

    return PersonaJuridica;
};