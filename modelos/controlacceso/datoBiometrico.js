'use-strict'
module.exports = (sequelize, DataTypes) => {
    var DatoBiometrico = sequelize.define('DatoBiometrico',{

    },{
        tableName: 'dato_biometrico',
        createdAt: false,
        updatedAt: false
    });

    DatoBiometrico.associate = function(models){
        models.DatoBiometrico.belongsTo(models.PersonaNatural,{foreignKey:'numero_identificacion_fk'});
    };

    return DatoBiometrico;
};