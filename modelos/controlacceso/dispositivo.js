'use-strict'
module.exports = (sequelize, DataTypes) => {
    var Dispositivo = sequelize.define('Dispositivo', {
        
    },{
        tableName: 'dispositivo'
    });
    
    Dispositivo.associate = (models) =>{
        
    };

    return Dispositivo;
};
