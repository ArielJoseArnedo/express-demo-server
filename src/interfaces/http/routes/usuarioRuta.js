'use-strict'

const connectMultiparty = require('connect-multiparty');
const upload = connectMultiparty({ uploadDir: './recursos/imagenes/perfil' });

var api = require('express').Router();

const controllerUsuario = require('../controladores/core/controllerUsuario');
const auth = require('../middleware/auth');

//Routes GET



//Router POST
api.post('/login', controllerUsuario.inicioSesion);
// api.post('/adduser', auth.authUsuario, controllerUsuario.agregarUsuario);
api.post('/adduser', controllerUsuario.agregarUsuario);

// Router DELETE


// Router PUT

module.exports = api;