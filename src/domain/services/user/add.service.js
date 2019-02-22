const { Persona, Usuario } = require('../../models');
const bcryptNodejs = require('bcrypt-nodejs');

const addUser = async(person, user) => {

    const hash = bcryptNodejs.hashSync(user.password);
    user.password = hash;

    try {
        let persona = await Persona.create(person);
        return await Usuario.create(user);
    } catch (err) {
        throw new Error('Uoops! No fue posible registrarte, intentalo de nuevo');
    }
}

module.exports = addUser;