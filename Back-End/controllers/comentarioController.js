const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const Comentarios = db.Comentario;
const Usuarios = db.Usuario;
const Publicaciones = db.Publicacion;

const comentarioController = {
    readComentarios: async (req, res) => {
        Comentarios.findAll()
                .then(comentario => {
                    res.json(comentario)
                })
                .catch(error => {
                    res.json(error)
                })
    },
    readComentario: async (req, res) => {
        Comentarios.findAll({
                    where: {id: req.params.id}
                })
                .then(comentario => {
                    res.json(comentario)
                })
                .catch(error => {
                    res.json(error)
                })
    },
    createComentario: async (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            await Usuarios.findOne({where: {email: req.session.userLogged.email}})
                .then(async usuario => {
                    if(usuario){
                        let fecha = new Date();
                        await Comentarios.create({...req.body, fecha: fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()})
                        .then(resultado => {
                            res.json({status: 201, estado: 'Comentario creado'});
                        })
                        .catch(error => {
                            console.log(error);
                            res.json({estado: 'Error'});
                        });

                        await Comentarios.findOne({where: {contenido: req.body.contenido}})
                        .then(async id => {
                                console.log(id);
                                await Publicaciones.create({
                                    id_comentario: id.id,
                                    id_autor: usuario.id,
                                    id_perfil: req.body.id_perfil
                                })
                                .then(resultado => {
                                    console.log(resultado);
                                })
                                .catch(error => {
                                    console.log(error);
                                    res.json({estado: 'Error'});
                                });
                        })
                        .catch(error => {
                            console.log(error);
                            res.json({estado: 'Error'});
                        });
                    }else{
                        res.json({estado: "Debes de iniciar sesión para poder comentar"});            
                        }
                    })
                .catch(error => {
                    console.log(error);
                    res.json({estado: "Error"});
                });
            } else {
            // Si hay errores
            res.json({status: 400, errors})
            }
    },
    updateComentario: async (req, res) => {
        await Comentarios.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then((id) => {
            if(id[0]==1){
                res.json({status: 200, estado: "Comentario actualizado"});
            }else{
                res.json({status: 500, estado: "Comentario inexistente"});
            }
        })
        .catch(error => {
            res.json({estado: "Error"});
        });
    },
    deleteComentario: async (req, res) => {
        await Usuarios.findOne({where: {email: req.session.userLogged.email}})
                .then(async usuario => {
                    if(usuario){
                        await Comentarios.destroy({
                            where: {
                                id: req.params.id
                            }
                        })
                        .then((id) => {
                            if(id==1){
                                res.json({status: 200, estado: "Comentario eliminado"});
                            }else{
                                res.json({status: 500, estado: "Comentario inexistente"});
                            }
                        })
                        .catch(error => {
                            res.json({estado: "Error"});
                        });

                        await Publicaciones.destroy({
                            where: {
                                id_comentario: req.params.id
                            }
                        })
                        .then((id) => {
                            if(id==1){
                                res.json({status: 200, estado: "Comentario eliminado"});
                            }else{
                                res.json({status: 500, estado: "Comentario inexistente"});
                            }
                        })
                        .catch(error => {
                            res.json({estado: "Error"});
                        });
                        
                    }else{
                        res.json({estado: "Debes de iniciar sesión para poder comentar"});            
                        }
                    })
                .catch(error => {
                    console.log(error);
                    res.json({estado: "Error"});
                });
    },
};

module.exports = comentarioController;