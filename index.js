'use-strict'

var app = require('./app');
var debug = require('debug')('express-sequelize');
var http = require('http');
var models = require('./modelos');

//crear la variable de port
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

// 'postgres://username:password@ip:puerto/name_datadase' -- usando PhAdmin local
// const sequelize = new Sequelize('postgres://postgres:bdatos@localhost:52651/ph_man_database');

// 'postgres://username:password@ip:puerto/name_datadase' -- PhAdmin con docker
//const sequelize = new Sequelize('postgres://postgres:bdatos@db:5432/ph_man_database');

models.sequelize.sync().then(function () {

    server.listen(port, function () {
        debug('Servidor Access Control PH Corriendo en el puerto: ' + server.address().port);
    });
    server.on('error', onError);
    server.on('listening', onListening);
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) return val;

    if (port >= 0) return port;

    return false;
}



function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' se requieren privilegios');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' ya esta en uso');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}