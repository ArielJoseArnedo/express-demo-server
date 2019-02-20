"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var Administrador = sequelize.define('Administrador', {}, {
    tableName: 'administrador',
    createdAt: false,
    updatedAt: false
  });

  Administrador.associate = function (models) {
    models.Administrador.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk'
    });
  };

  return Administrador;
};