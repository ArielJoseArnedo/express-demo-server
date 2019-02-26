'use-strict'
module.exports = (sequelize, DataTypes) => {
    var DatoBiometrico = sequelize.define('DatoBiometrico', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id_biometria'
        },
        huellaDigital: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true,
            field: 'hash_huella'
        },
        codigoSeguridad: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'security_code'
        },
        personaFk: {
            type: DataTypes.INTEGER,
            field: 'persona_id'
        }
    }, {
        tableName: 'dato_biometrico',
        createdAt: false,
        updatedAt: false
    });

    DatoBiometrico.associate = (models) => {
        models.DatoBiometrico.belongsTo(models.PersonaNatural, { foreignKey: 'persona_id' });
    };

    return DatoBiometrico;
};