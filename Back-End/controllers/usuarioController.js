const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const Usuarios = db.Usuario;
const Publicaciones = db.Publicacion;

const usuarioController = {
    readUsuarios: async (req, res) => {
        Usuarios.findAll()
                .then(usuario => {
                    res.json(usuario)
                })
                .catch(error => {
                    res.json(error)
                })
    },
    readUsuario: async (req, res) => {
        Usuarios.findAll({
                    where: {id: req.params.id}
                })
                .then(usuario => {
                    res.json(usuario)
                })
                .catch(error => {
                    res.json(error)
                })
    },
    createUsuario: async (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            await Usuarios.findOne({where: {email: req.body.email}})
                .then(async usuario => {
                    if(usuario){
                        res.json({status:400, errors: "Usuario existente con este correo electrónico"});            
                    }else{
                        req.body.contraseña = bcryptjs.hashSync(req.body.contraseña, 10);
                        delete req.body.contraseñaConfirm;
                        await Usuarios.create(req.body)
                                    .then(resultado => {
                                        console.log(resultado);
                                        res.json({status: 201, estado: 'Usuario creado'});
                                    })
                                    .catch(error => {
                                        console.log(error);
                                        res.json({status: 400, errors: error});
                                    });
                                }
                    })
                .catch(error => {
                    console.log(error);
                    res.json({status: 400, errors: error});
                });
            } else {
            // Si hay errores
            res.json({status: 400, ...errors})
            }
    },
    updateUsuario: async (req, res) => {
        await Usuarios.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then((id) => {
            if(id[0]==1){
                res.json({status: 200, estado: "Usuario actualizado"});
            }else{
                res.json({status: 500, estado: "Usuario inexistente"});
            }
        })
        .catch(error => {
            res.json({estado: "Error"});
        });
    },
    deleteUsuario: async (req, res) => {
        await Usuarios.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((id) => {
            if(id==1){
                res.json({status: 200, estado: "Usuario eliminado"});
            }else{
                res.json({status: 500, estado: "Usuario inexistente"});
            }
        })
        .catch(error => {
            res.json({estado: "Error"});
        });
    },
};

module.exports = usuarioController;