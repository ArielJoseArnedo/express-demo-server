'use-strict'
module.exports = (sequelize, DataTypes) => {
    var Residente = sequelize.define('Residente', {
        idResidente: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_residente'
        },
        tipoResidente: {
            type: DataTypes.ENUM, //configurar a ENUM
            allowNull: false,
            values: ['ACTIVO', 'INACTIVO', 'SUSPENDIDO'],
            defaultValue: 'ACTIVO',
            field: 'tipo_residente'
        },
        personaId: {
            type: DataTypes.INTEGER,
            field: 'persona_id'
        }
    }, {
        tableName: 'residente',
        createdAt: false,
        updatedAt: false
    });

    Residente.associate = (models) => {
        models.Residente.belongsTo(models.PersonaNatural, { foreignKey: 'persona_id' });
        models.Residente.hasMany(models.Mascota, { foreignKey: 'residenteFk' }, { sourceKey: 'idResidente' });
    };

    return Residente;
};