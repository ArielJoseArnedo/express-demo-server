const { Persona, Usuario } = require('../../models');
const bcryptNodejs = require('bcrypt-nodejs');
const log4js = require('log4js');

log4js.configure(require('../../../config/log4js.json'));
const log = log4js.getLogger("add-user");

const addUser = async(person, user) => {

    const hash = bcryptNodejs.hashSync(user.password);
    user.password = hash;

    try {
        let persona = await Persona.create(person);
        return await Usuario.create(user);
    } catch (err) {
        log.error(`Error: ${err}`)
        throw new Error('Uoops! No fue posible registrarte, intentalo de nuevo');
    }
}

module.exports = addUser;