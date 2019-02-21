const express = require('express');
const bodyParser = require('body-parser');
const usuarioRuta = require('./src/rutas/usuarioRuta');

const app = express();

// var deviceRoute = require('./vistas/dispositivoRuta');
// var phRoute = require('./vistas/propiedadRuta');
// var biencomunRoute = require('./vistas/bienComunRuta');

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
app.use('/ph', usuarioRuta);
// app.use('/ph', phRoute);
// app.use('/ph', biencomunRoute);

module.exports = app;