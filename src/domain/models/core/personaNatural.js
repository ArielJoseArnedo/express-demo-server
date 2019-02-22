'use-strict'
module.exports = (sequelize, DataTypes) => {
    var PersonaNatural = sequelize.define('PersonaNatural', {
        nombres: {
            type: DataTypes.STRING,
            field: 'nombre'
        },
        apellidos: {
            type: DataTypes.STRING,
            field: 'apellidos'
        },
        personaId: {
            type: DataTypes.INTEGER,
            field: 'persona_id'
        }
    }, {
        tableName: 'persona_natural',
        createdAt: false,
        updatedAt: false
    });

    PersonaNatural.associate = (models) => {
        models.PersonaNatural.belongsTo(models.Persona, { foreignKey: 'personaId' });
    };

    return PersonaNatural;
};