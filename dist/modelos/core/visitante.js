"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var Visitante = sequelize.define('Visitante', {}, {
    tableName: 'visitante',
    createdAt: false,
    updatedAt: false
  });

  Visitante.associate = function (models) {
    models.Visitante.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk'
    });
  };

  return Visitante;
};