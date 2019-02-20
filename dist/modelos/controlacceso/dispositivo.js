"use strict";
'use-strict';

module.exports = function (sequelize, DataTypes) {
  var Dispositivo = sequelize.define('Dispositivo', {
    idDispositivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      fielt: 'id_dispositivo'
    },
    numeroSerial: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      fielt: 'numero_serial'
    },
    estado: {
      type: DataTypes.ENUM,
      //configurar a ENUM
      allowNull: false,
      values: ['ACTIVO', 'FUERA_DE_SERVICIO', 'SUSPENDIDO', 'EN_MANTENIMIENTO'],
      defaultValue: 'ACTIVO',
      fielt: 'estado'
    },
    fechaDeFuncionamiento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      fielt: 'fecha_de_funcionamiento'
    }
  }, {
    tableName: 'dispositivo',
    updatedAt: false,
    createdAt: false
  });

  Dispositivo.associate = function (models) {};

  return Dispositivo;
};