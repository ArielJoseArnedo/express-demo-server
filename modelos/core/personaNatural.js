'use-strict'
module.exports = (sequelize, DataTypes) => {
    var PersonaNatural = sequelize.define('PersonaNatural',{
        nombres:{
            type: DataTypes.STRING,
            field: 'nombre'
        },
        apellidos:{
            type: DataTypes.STRING,
            field: 'apellidos'
        }
    },{
        tableName: 'Persona_Natural',
        createdAt: false,
        updatedAt: false
    });

    PersonaNatural.associate = function(models){
        console.log(models);
    };

    return PersonaNatural;
};