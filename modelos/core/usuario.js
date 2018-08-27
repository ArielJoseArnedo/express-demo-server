'use-strict'
module.exports = (sequelize, DataTypes) =>{
    var Usuario = sequelize.define('Usuario',{
        idUsuario:{
            type: DataTypes.INTEGER,
        },
        username: {
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING,
        },
        estado:{
            type: DataTypes.ENUM,//configurar a ENUM
        },
        fechaDeCreacion:{
            type: DataTypes.DATE,
        },
        fechaDeVencimiento: {
            type: DataTypes.DATE,
        },
        tipoDeUsuario:{
            type: DataTypes.ENUM,//configurar a ENUM
        }
    },{
        tablaName: 'usuario',
        createdAt: false,
        updatedAt: false
    });

    Usuario.associate = (models) =>{
        console.log(models);
        
    };

    return Usuario;
};