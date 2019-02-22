'use-strict'
module.exports = (sequelize, DataTypes) => {
    var Mascota = sequelize.define('Mascota', {
        idMascota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_mascota'
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'nombre'
        },
        especie: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'especie'
        },
        residenteFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'fk_residente'
        }
    }, {
        tableName: 'mascota',
        createdAt: false,
        updatedAt: false
    });

    Mascota.associate = (models) => {
        models.Mascota.belongsTo(models.Residente, { foreignKey: 'residenteFk' }, { targetKey: 'idResidente' });
    };

    return Mascota;
};