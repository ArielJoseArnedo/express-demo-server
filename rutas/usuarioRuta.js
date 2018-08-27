'use-strict'

const connectMultiparty = require('connect-multiparty');
const upload = connectMultiparty({uploadDir: './recursos/imagenes/perfil'});

var api = require('express').Router();

const controllerUsuario = require('../controladores/core/controllerUsuario');
const auth = require('../servicios/authServicio');

//Routes GET
api.get('/login', auth.authUsuario, controllerUsuario.inicioSesion);


//Router POST


// Router DELETE


// Router PUT

module.exports = api;









