'use-strict'

//importar express
var express = require('express');

//cargar el Router
var api = express.Router();

//cargar el controlador
var controladorBiencomun = require('../controladores/controladorBiencomun');

//cargar el middleware de autenticacion
var autenticacion = require('../controladores/autenticacion');

//cargar si se requiere el connect-multiparty

//cargar las rutas get


//cargar las rutas post


//cargar las rutas put


//cargar las rutas delete



//exportar la ruta
module.exports = api;