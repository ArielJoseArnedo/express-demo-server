'use-strict'
module.exports = (sequelize, DataTypes) => {
    var Dispositivo = sequelize.define('Dispositivo', {
        idDispositivo: {

        },
        numeroSerial: {

        },
        estado: {

        },
        fechaDeFuncionamiento: {

        },
        createdAt:{

        }
    },{
        tableName: 'dispositivo',
        updatedAt: false
    });
    
    Dispositivo.associate = (models) =>{
        console.log(models);
    };

    return Dispositivo;
};
