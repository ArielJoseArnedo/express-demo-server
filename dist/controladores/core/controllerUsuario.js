"use strict";
'use-strict';

var bcryptNodejs = require('bcrypt-nodejs');

var jwtServicio = require('../../servicios/jwtServicio');

var log4js = require('log4js');

var Usuario = require('../../modelos/index').Usuario;

var Persona = require('../../modelos/index').Persona;

var log = log4js.getLogger('ControllerUsuario');

function inicioSesion(req, res) {
  var params = req.body;
  var usuarioIn = {
    username: params.username
  };
  Usuario.findOne(usuarioIn).then(function (usuario) {
    if (usuario) {
      bcryptNodejs.compare(params.password, usuario.password, function (err, check) {
        if (err) {
          res.status(500).send({
            error: 'Ouupps! Ocurrío un error inesperado. Por favor intentelo nuevamente'
          });
        } else {
          if (check) {
            if (params.getHash) {
              res.status(200).send({
                token: jwtServicio.tokenUsuario(usuario)
              });
            } else {
              res.status(200).send({
                usuario: usuario
              });
            }
          } else {
            res.status(300).send({
              error: 'El nombre de usuario o la contraseña son incorrectas'
            });
          }
        }
      });
    } else {
      res.status(300).send({
        error: 'El usuario con este username no existe'
      });
    }
  }).catch(function (err) {
    res.status(400).send({
      error: err
    });
  });
}

function agregarUsuario(req, res) {
  var params = req.body;
  var persona = {
    numeroIdentificacion: params.numero_de_identificacion,
    tipoDocumento: params.tipo_de_documento
  };
  var usuario = {
    username: params.username,
    password: '',
    estado: params.estado,
    fechaDeCreacion: params.fecha_de_creacion,
    tipoDeUsuario: params.tipo_de_usuario
  };
  console.log(persona);
  Persona.findOrCreate({
    where: persona,
    default: persona
  }).spread(function (persona, created) {
    bcryptNodejs.hash(params.password, null, null, function (err, hash) {
      if (err) {
        res.status(500).send({
          error: 'Ouupps! Ocurrío un error inesperado. Por favor intentelo nuevamente'
        });
      } else {
        usuario.password = hash;
        usuario.numero_identificacion_fk = persona.numeroIdentificacion;
        Usuario.create(usuario).then(function (usuario) {
          if (usuario) {
            res.status(200).send({
              persona: persona,
              usuario: usuario
            });
          } else {
            res.status(500).send({
              error: 'Ouups! El usuario no pudo ser creado'
            });
          }
        }).catch(function (err) {
          res.status(500).send({
            error: err
          });
        });
      }
    });
  }).catch(function (err) {
    res.status(500).send({
      error: err
    });
  });
}

module.exports = {
  inicioSesion: inicioSesion,
  agregarUsuario: agregarUsuario
};