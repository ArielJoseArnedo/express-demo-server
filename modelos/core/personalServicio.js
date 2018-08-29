'use-strict'
module.exports = (sequelize, DataTypes) => {
    var PersonalDeServicio = sequelize.define('PersonalDeServicio',{

    },{
        tableName: 'personal_de_servicio',
        createdAt: false,
        updatedAt: false
    });

    PersonalDeServicio.associate = function(models){
         models.PersonalDeServicio.belongsTo(models.Persona,{foreignKey:'numero_identificacion_fk'});
    };

    return PersonalDeServicio;
};