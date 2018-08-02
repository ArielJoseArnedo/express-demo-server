'use-strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar las rutas
var deviceRoute = require('./vistas/dispositivoRuta');
var phRoute = require('./vistas/propiedadRuta');
var biencomunRoute = require('./vistas/bienComunRuta');

//cargar el body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
    res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');
    next();
});

//configurar las rutas
app.use('/device', deviceRoute);
app.use('/ph', phRoute);
app.use('/ph', biencomunRoute);



module.exports = app;