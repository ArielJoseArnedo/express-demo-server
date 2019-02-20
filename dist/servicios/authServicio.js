"use strict";
'use-strict';

var jwt = require('jwt-simple');

var moment = require('moment');

var semilla = '**proyecto-HP-MAN-SERVER**-con-biometria-y_toda_esa_joda**';

function authUsuario(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(200).send({
      message: 'No esta autorizado para realizar esta operacion'
    });
    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
      var payload = jwt.decode(token, semilla);

      if (payload.exp <= moment.unix()) {
        return res.status(404).send({
          error: 'Token ha caducado'
        });
      }
    } catch (err) {
      return res.status(404).send({
        error: 'Token no valido'
      });
    }
  }

  ;
  res.usuario = payload;
  next();
}

function authDispositivo(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(200).send({
      message: 'No esta autorizado para realizar esta operacion'
    });
  }

  var token = req.headers.authorization.replace(/['"]/ + g, '');

  try {
    var payloadDevice = jwt.decode(token, semilla);

    if (payloadDevice.exp <= moment.unix()) {
      return res.status(404).send({
        error: 'Token ha caducado'
      });
    }
  } catch (err) {
    return res.status(404).send({
      error: 'Token no valido'
    });
  }

  req.disposivito = payloadDevice;
  next();
}

module.exports = {
  authUsuario: authUsuario,
  authDispositivo: authDispositivo
};