const { Mascota } = require('../../models');

const registerPet = async(pet) => {
    return await Mascota.create(pet);
}

module.exports = registerPet;