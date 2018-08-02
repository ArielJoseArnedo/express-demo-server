'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = '**proyecto-control-access-HP**-con-biometria-y_toda_esa_joda**';

function createUsuarioToken(usuario) {
    var payload = {
        sub: usuario._id,
        username: usuario.username,
        estado: usuario.estado,
        fecha_creacion: usuario.fecha_creacion,
        fecha_desvinculacion: usuario.fecha_desvinculacion,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);
}

function createDispositivoToken(dispositivo) {
    var payload = {
        sub: dispositivo._id,
        identificacion: dispositivo.identificacion,
        estado: dispositivo.estado,
        tipo: dispositivo.tipo,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secret);
}

module.exports = {
    createUsuarioToken,
    createDispositivoToken
}