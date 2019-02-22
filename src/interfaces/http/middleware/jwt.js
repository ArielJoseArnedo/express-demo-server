const jwt = require('jwt-simple');
const moment = require('moment');
const semilla = '**proyecto-HP-MAN-SERVER**-con-biometria-y_toda_esa_joda**';

function tokenUser(user) {
    let payload = {
        sub: user.id_user,
        user: user.user,
        estado: user.estado,
        fechaDeCreacion: user.fechaDeCreacion,
        fechaDeVencimiento: user.fechaDeVencimiento,
        tipoDeuser: user.tipoDeuser,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload, semilla);
}

function tokenDevice(device) {
    let payload = {
        sub: device.id_device,
        numeroSerial: device.numeroSerial,
        estado: device.estado,
        fechaDeFuncionamiento: device.fechaDeFuncionamiento,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };
    return jwt.encode(payload, semilla);
}

module.exports = {
    tokenUser,
    tokenDevice
};