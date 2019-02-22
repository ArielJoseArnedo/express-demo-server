'use-strict';
const bcryptNodejs = require('bcrypt-nodejs');
const { Usuario, sequelize, Persona } = require('../modelos');
const jwtServicio = require('../middleware/jwtServicio');


async function loginUser(username, password, hash) {

    const user = await Usuario.findOne({ where: { username: username } });
    if (user) {
        const match = bcryptNodejs.compareSync(password, user.get('password'));
        if (match) {
            return await hash ? jwtServicio.tokenUsuario(user) : user;
        }
        throw new Error('Username y/o contraseña son incorrectas');
    }
    throw new Error('Usuario no esta registrado');
}

async function addUser(person, user) {

    const hash = bcryptNodejs.hashSync(user.password);
    user.password = hash;

    try {
        let persona = await Persona.create(person);
        return await Usuario.create(user);
    } catch (err) {
        throw new Error('Uoops! No fue posible registrarte, intentalo de nuevo');
    }
}

module.exports = {
    loginUser,
    addUser
};