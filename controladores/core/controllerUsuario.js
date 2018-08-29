'use-strict'

const bcryptNodejs = require('bcrypt-nodejs');
const jwtServicio = require('../../servicios/jwtServicio');
const log4js = require('log4js');

const Usuario = require('../../modelos/index').Usuario;
const Persona = require('../../modelos/index').Persona;

const log = log4js.getLogger('ControllerUsuario');

function inicioSesion(req, res) {
    let params = req.body;

    let usuarioIn = {
        username: params.username
    }

    Usuario.findOne(usuarioIn).then((usuario) => {
        if (usuario) {
            bcryptNodejs.compare(params.password, usuario.password, (err, check) => {
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
    }).catch((err) => {
        res.status(400).send({
            error: err
        });
    });
}

function agregarUsuario(req, res) {

    let params = req.body;

    let persona = {
        numeroIdentificacion: params.numero_de_identificacion,
        tipoDocumento: params.tipo_de_documento
    };

    let usuario = {
        username: params.username,
        password: '',
        estado: params.estado,
        fechaDeCreacion: params.fecha_de_creacion,
        tipoDeUsuario: params.tipo_de_usuario,
    };
    

    console.log(persona);
     Persona.findOrCreate({where : persona, default: persona}).spread((persona, created) =>{
        bcryptNodejs.hash(params.password, null, null, (err, hash)=>{
            if(err){
                res.status(500).send({
                    error: 'Ouupps! Ocurrío un error inesperado. Por favor intentelo nuevamente'
                });
            }else{
                usuario.password = hash;
                usuario.numero_identificacion_fk = persona.numeroIdentificacion;
                Usuario.create(usuario).then((usuario) =>{
                    if(usuario){
                       res.status(200).send({persona: persona, usuario: usuario});
                    }else{
                       res.status(500).send({error: 'Ouups! El usuario no pudo ser creado'});
                    }
                }).catch((err) =>{
                    res.status(500).send({error: err});
                });

            }
        });
     }).catch((err) =>{
        res.status(500).send({error: err});
    });
}


module.exports = {
    inicioSesion,
    agregarUsuario
}