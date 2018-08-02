'use-strict'

//cargar los modelos
var DispositivoSchema = require("../modelos/dispositivoSchema");

//cargar el mecanismo de encriptacion de claves
var bcrypt = require('bcrypt-nodejs');

//cargar el mecanismo de generacion de tokens de seguridad


function verificarContraseña(req, res) {
    res.status(200).send({ mesage: 'contraseña recibida' });
}

function verificarEstado(req, res) {
    res.status(200).send({ mesage: 'estado recibida' });
}

function agregarDispositivo(req, res) {
    res.status(200).send({ mesage: 'dispositivo agregado?' });
}

function actualizarDispositivo(req, res) {
    res.status(200).send({ mesage: 'dispositivo actualizado?' });
}

function eliminarDispositivo(req, res) {
    res.status(200).send({ mesage: 'dispositivo eliminado' });
}

function listarDispositivo(req, res) {
    res.status(200).send({ mesage: 'dispositivo listado?' });
}

function obtenerDispositivo(req, res) {
    res.status(200).send({ mesage: 'dispositivo obtendido?' });
}

module.exports = {
    verificarContraseña,
    verificarEstado,
    agregarDispositivo,
    actualizarDispositivo,
    eliminarDispositivo,
    listarDispositivo,
    obtenerDispositivo
};