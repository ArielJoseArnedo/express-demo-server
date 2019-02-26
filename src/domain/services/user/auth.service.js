const bcryptNodejs = require('bcrypt-nodejs');
const { Usuario } = require('../../models');
const { jwt } = require('../../../interfaces/http/middleware');
const log4js = require('log4js');
log4js.configure(require('../../../config/log4js.json'));
const log = log4js.getLogger("auth-user");

const loginUser = async function(username, password, hash) {

    const user = await Usuario.findOne({ where: { username: username } });

    if (user) {
        const match = bcryptNodejs.compareSync(password, user.get('password'));
        if (match) {
            return await hash ? jwt.tokenUser(user) : user;
        }

        log.debug(`loginUser - Username y/o contraseña son incorrectas ${username}`);

        throw new Error('Username y/o contraseña son incorrectas');
    }

    log.debug(`Usuario no esta registrado ${username}`);

    throw new Error('Usuario no esta registrado');
}

module.exports = loginUser;