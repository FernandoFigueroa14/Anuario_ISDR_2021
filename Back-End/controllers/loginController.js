const bcryptjs = require('bcryptjs');
const db = require('../database/models');
const { validationResult } = require('express-validator');

const Usuarios = db.Usuario;

const loginController = {
    login: async (req, res) => {
        let errors = validationResult(req);

        if(errors.isEmpty()){
            await Usuarios.findOne({
                where:{
                    email: req.body.email
                }
            })
            .then(usuario => {
                if(usuario){
                    let validationPassword = bcryptjs.compareSync(req.body.contraseña, usuario.contraseña);
                    if(validationPassword){
                        req.session.userLogged = usuario;
                        if(req.body.remember_user){
                            res.cookie('email', req.body.email, {maxAge: (1000*60)*60});
                        }
                        return res.json({status: 200, msg: "Inicio de sesión exitoso", usuario});
                    }else{
                        return res.json({
                            status: 400,
                            errors: {
                                contraseña: {
                                    msg: 'Las credenciales son inválidas'
                                }
                            }
                        })
                    }
                }
                    
                return res.json({
                    status: 400,
                    errors: {
                        email: {
                            msg: 'No se encuentra este correo electronico en nuestra base de datos'
                        }
                    }
                })
            })
            .catch(error => res.json({status: 400, errors: error}));
         }else {
            // Si hay errores
            res.json({status: 400, errors: errors.mapped()})
        }
    }
}

module.exports = loginController;