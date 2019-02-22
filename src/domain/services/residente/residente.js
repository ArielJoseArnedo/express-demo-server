const { Persona, PersonaNatural, Residente, sequelize, Mascota } = require('../../modelos');


async addResident(person, naturalPerson, resident) {
    sequelize.transaction((t) => {
        try {
            let personCreate = await Persona.create(person);
            let naturalPersonCreate = await PersonaNatural.create(naturalPerson);
            let residentCreate = await Residente.create(resident);
            return residentCreate;
        } catch (error) {
            t.rollback();
            throw new Error('Uoops! No fue posible registrarte, intentelo de nuevo');
        }
    });
}



module.exports = {
    addResident,
    registerPet
};