'use-strict';
const httpStatus = require('http-status');
const UsuarioService = require('../../servicios/UsuarioService');



function inicioSesion(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const hash = req.body.hash;

    UsuarioService.loginUser(username, password, hash).then(usuario => {
        res.status(httpStatus.OK).send({ usuario: usuario });
    }).catch(err => {
        res.status(httpStatus.NOT_ACCEPTABLE).send({ error: err.message });
    });
}

function agregarUsuario(req, res) {

    let persona = {
        numeroIdentificacion: req.body.identificacion,
        tipoDocumento: req.body.documento
    };

    let usuario = {
        username: req.body.username,
        password: req.body.password,
        estado: req.body.estado,
        tipoDeUsuario: req.body.usuario,
        personaId: req.body.identificacion
    };
    UsuarioService.addUser(persona, usuario).then(usuario => {
        res.status(httpStatus.OK).send({ usuario: usuario });
    }).catch(err => {
        res.status(httpStatus.NOT_FOUND).send({ error: err.message });
    });
}


module.exports = {
    inicioSesion,
    agregarUsuario
};