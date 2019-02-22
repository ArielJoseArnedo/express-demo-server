const {
    Persona,
    PersonaNatural,
    Residente,
    sequelize
} = require('../../models');

const addResident = (person, naturalPerson, resident) => {
    sequelize.transaction(async(t) => {
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

module.exports = addResident;