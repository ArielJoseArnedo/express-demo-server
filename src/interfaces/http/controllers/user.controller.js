const { userService } = require('../../../domain/services');

const httpStatus = require('http-status');

function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const hash = req.body.hash;
    userService.authUser(username, password, hash).then(user => {
        res.status(httpStatus.OK).send({ user: user });
    }).catch(err => {
        res.status(httpStatus.NOT_ACCEPTABLE).send({ error: err.message });
    });
}

function registerUser(req, res) {

    let person = {
        numeroIdentificacion: req.body.identificacion,
        tipoDocumento: req.body.documento
    };

    let user = {
        username: req.body.username,
        password: req.body.password,
        estado: req.body.estado,
        tipoDeUsuario: req.body.user,
        personaId: req.body.identificacion
    };
    userService.addUser(person, user).then(user => {
        res.status(httpStatus.OK).send({ user: user });
    }).catch(err => {
        res.status(httpStatus.NOT_FOUND).send({ error: err.message });
    });
}


module.exports = {
    login,
    registerUser
};