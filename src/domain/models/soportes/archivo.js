'use-strict';
module.exports = (sequelize, DataTypes) => {
    var Archivo = sequelize.define('Archivo', {
        idArchivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            fielt: 'id_archivo'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        fechaDeCarga: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
            allowNull: false,
            field: 'upload_date'
        },
        urlArchivo: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'url_path_file'
        }
    }, {
        tableName: 'Archivo',
        createdAt: false,
        updatedAt: false
    });

    Archivo.associate = (models) => {};

    return Archivo;
};