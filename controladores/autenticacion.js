'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '**proyecto-control-access-HP**-con-biometria-y_toda_esa_joda**';

function autenticacionUsuario(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(200).send({
            message: 'La peticion no tiene la cabecera de autorizacion'
        });
    }

    next();
}

function autenticacionDispositivo(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(200).send({
            message: 'La peticion no tiene la cabecera de autorizacion'
        });
    }

    next();
}

module.exports = {
    autenticacionUsuario,
    autenticacionDispositivo
}