"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var PersonaJuridica = sequelize.define('PersonaJuridica', {
    objetoSocial: {
      type: DataTypes.STRING,
      field: 'objeto_social'
    },
    razonSocial: {
      type: DataTypes.STRING,
      field: 'razon_social'
    }
  }, {
    tableName: 'persona_juridica',
    createdAt: false,
    updatedAt: false
  });

  PersonaJuridica.associate = function (models) {
    models.PersonaJuridica.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk'
    });
  };

  return PersonaJuridica;
};