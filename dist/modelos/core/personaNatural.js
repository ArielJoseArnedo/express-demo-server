"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var PersonaNatural = sequelize.define('PersonaNatural', {
    nombres: {
      type: DataTypes.STRING,
      field: 'nombre'
    },
    apellidos: {
      type: DataTypes.STRING,
      field: 'apellidos'
    }
  }, {
    tableName: 'persona_natural',
    createdAt: false,
    updatedAt: false
  });

  PersonaNatural.associate = function (models) {
    console.log(models);
  };

  return PersonaNatural;
};