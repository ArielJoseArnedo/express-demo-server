"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var Residente = sequelize.define('Residente', {}, {
    tableName: 'residente',
    createdAt: false,
    updatedAt: false
  });

  Residente.associate = function (models) {
    models.Residente.belongsTo(models.Persona, {
      foreignKey: 'numero_identificacion_fk'
    });
  };

  return Residente;
};