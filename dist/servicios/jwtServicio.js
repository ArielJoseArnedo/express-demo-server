"use strict";
'use-strict';

var jwt = require('jwt-simple');

var moment = require('moment');

var semilla = '**proyecto-HP-MAN-SERVER**-con-biometria-y_toda_esa_joda**';

function tokenUsuario(usuario) {
  var payload = {
    sub: usuario.id_usuario,
    username: usuario.username,
    estado: usuario.estado,
    fechaDeCreacion: usuario.fechaDeCreacion,
    fechaDeVencimiento: usuario.fechaDeVencimiento,
    tipoDeUsuario: usuario.tipoDeUsuario,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };
  return jwt.encode(payload, semilla);
}

function tokenDispositivo(dispositivo) {
  var payload = {
    sub: dispositivo.id_dispositivo,
    numeroSerial: dispositivo.numeroSerial,
    estado: dispositivo.estado,
    fechaDeFuncionamiento: dispositivo.fechaDeFuncionamiento,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix()
  };
  return jwt.encode(payload, semilla);
}

module.exports = {
  tokenUsuario: tokenUsuario,
  tokenDispositivo: tokenDispositivo
};