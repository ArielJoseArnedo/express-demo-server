"use strict";
'use-strict'; //importar express

var express = require('express'); //cargar el Router


var api = express.Router(); //cargar el controlador

var controladorDispositivo = require('../controladores/controladorDispositivo'); //cargar el middleware de autenticacion


var autenticacion = require('../controladores/autenticacion'); //cargar si se requiere el connect-multiparty
//cargar las rutas get


api.get('/getDevice', autenticacion.autenticacionDispositivo, controladorDispositivo.obtenerDispositivo);
api.get('/getDevices', controladorDispositivo.listarDispositivo); //cargar las rutas post

api.post('/checkPass', controladorDispositivo.verificarContraseña);
api.post('/checkState', controladorDispositivo.verificarContraseña);
api.post('/addDevice', controladorDispositivo.agregarDispositivo); //cargar las rutas put

api.put('/updateDevice', controladorDispositivo.actualizarDispositivo); //cargar las rutas delete

api.delete('/removeDevice', controladorDispositivo.eliminarDispositivo); //exportar la ruta

module.exports = api;