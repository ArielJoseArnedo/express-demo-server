const log4Js = require('log4js');

const {
    Persona,
    PersonaNatural,
    Residente,
    sequelize
} = require('../../models');

const log = log4Js.getLogger("AddResidente");

function addResident(person, naturalPerson, resident) {
     return sequelize.transaction(async(t) => {
        try {
            const personCreate = await Persona.create(person);
            const naturalPersonCreate = await PersonaNatural.create(naturalPerson);
            const residentCreate = await Residente.create(resident);
            return residentCreate;
        } catch (error) {
            t.rollback();
            log.error(`Error al realizar la transacción de agregar residente ${error.message}`);
            throw new Error('Uoops! No fue posible registrarte, intentelo de nuevo');
        }
    });
}

module.exports = addResident;