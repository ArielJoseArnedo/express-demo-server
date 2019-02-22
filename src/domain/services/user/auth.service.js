const bcryptNodejs = require('bcrypt-nodejs');
const { Usuario } = require('../../models');
const { jwt } = require('../../../interfaces/http/middleware');


const loginUser = async function(username, password, hash) {

    const user = await Usuario.findOne({ where: { username: username } });

    if (user) {
        const match = bcryptNodejs.compareSync(password, user.get('password'));
        if (match) {
            return await hash ? jwt.tokenUser(user) : user;
        }
        throw new Error('Username y/o contraseña son incorrectas');
    }

    throw new Error('User no esta registrado');
}

module.exports = loginUser;