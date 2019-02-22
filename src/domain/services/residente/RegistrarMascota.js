const { Mascota } = require('../../modelos');

async registerPet(pet) {
    return await Mascota.create(pet);
}

module.exports = registerPet;