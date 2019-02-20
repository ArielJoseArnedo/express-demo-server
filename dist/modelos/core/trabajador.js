"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var Trabajador = sequelize.define('Trabajador', {}, {
    tableName: 'trabajador',
    createdAt: false,
    updatedAt: false
  });

  Trabajador.associate = function (models) {
    models.Trabajador.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk'
    });
  };

  return Trabajador;
};