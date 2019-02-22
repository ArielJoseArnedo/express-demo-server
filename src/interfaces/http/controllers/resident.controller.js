'use-strict';


function addResidente(req, res) {
    let persona = {
        numeroIdentificacion: req.body.identificacion,
        tipoDocumento: req.body.documento
    };
    const naturalPerson = {
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        personaId: req.body.identificacion
    };
    const resident = {

    };


}

function registrarMascota(req, res) {
    let mascota = {
        nombre: req.body.nombre,
        especie: req.body.especie,
        residenteFk: req.body.residente
    };


}