const connectMultiparty = require('connect-multiparty');

const { userController } = require('../controllers');

const upload = connectMultiparty({ uploadDir: './recursos/imagenes/perfil' });

const api = require('express').Router();

const { auth } = require('../middleware');

//Routes GET



//Router POST
api.post('/login', userController.login);
// api.post('/adduser', auth.authUsuario, userController.agregarUsuario);
api.post('/adduser', userController.registerUser);

// Router DELETE


// Router PUT

module.exports = api;