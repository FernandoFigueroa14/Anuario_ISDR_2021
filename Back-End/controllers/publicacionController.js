const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const Comentarios = db.Comentario;
const Usuarios = db.Usuario;
const Publicaciones = db.Publicacion;

const publicacionController = {
    readPublicaciones: async (req, res) => {
        await Publicaciones.findAll({include: [
            {association: "autor"},
            {association: "perfil"},
            {association: "comentario"}
            ]})
            .then(publicacion => {
                res.json({status: 200, publicacion});
            })
            .catch(error => console.log(error))
    },
};

module.exports = publicacionController;