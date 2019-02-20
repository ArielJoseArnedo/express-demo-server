"use strict";
'use-strict';

var connectMultiparty = require('connect-multiparty');

var upload = connectMultiparty({
  uploadDir: './recursos/imagenes/perfil'
});

var api = require('express').Router();

var controllerUsuario = require('../controladores/core/controllerUsuario');

var auth = require('../servicios/authServicio'); //Routes GET
//Router POST


api.post('/login', controllerUsuario.inicioSesion); // api.post('/adduser', auth.authUsuario, controllerUsuario.agregarUsuario);

api.post('/adduser', controllerUsuario.agregarUsuario); // Router DELETE
// Router PUT

module.exports = api;