'use-strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const semilla = '**proyecto-HP-MAN-SERVER**-con-biometria-y_toda_esa_joda**';

function tokenUsuario(usuario){
    let payload={
        sub: usuario.id_usuario,
        username: usuario.username,
        estado: usuario.estado,
        fechaDeCreacion : usuario.fechaDeCreacion,
        fechaDeVencimiento: usuario.fechaDeVencimiento,
        tipoDeUsuario: usuario.tipoDeUsuario,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix()
    };
    return jwt.encode(payload,secret);
}

function tokenDispositivo(dispositivo){
    let payload={
        sub: dispositivo.id_dispositivo,
        numeroSerial: dispositivo.numeroSerial,
        estado: dispositivo.estado,
        fechaDeFuncionamiento: dispositivo.fechaDeFuncionamiento,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix()
    };
    return jwt.encode(payload, secret);
}

module.exports={
    createTokenUser,
    createTokenDevice
};