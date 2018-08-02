'use-strict'

//cargar orm y app.js
//var mongoose = require('mongoose');
const Sequelize = require('sequelize');
var app = require('./app');

//crear la variable de port
var port = process.env.PORT || 3000;
process.env.DB_HOST = 'postgres';

const sequelize = new Sequelize('postgres://postgres:bdatos@db:5432/dbaccesscontrol');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(port, (err) => {
            if (!err) {
                console.log('Servidor Access Control PH Corriendo');
            } else {
                console.log('Error! Not runs the Server');
            }
        });

    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
/*
mongoose.connect('mongodb://localhost:27017/control_access_ph', (err) => {
    if (err) {
        throw err;
    }
    //
    app.listen(port, (err) => {
        if (!err) {
            console.log('Servidor Access Control PH Corriendo');
        } else {
            console.log('Error! Not runs the Server');
        }
    });

});*/