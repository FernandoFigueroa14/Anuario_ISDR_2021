const db = require('../../database/models');

const Usuarios = db.Usuario;

function userLoggedMiddleware(req, res, next){
    if(req.cookies.email){
        let cookieEmail = req.cookies.email;   

        Usuarios.findOne({    
            where:{
                email: cookieEmail
            }
        })
        .then(usuario => {
                if(usuario){
                    req.session.userLogged = usuario;
                }
            })
            .catch(error => res.send(error));
    }
    console.log(req.session);
    next();
}

module.exports = userLoggedMiddleware;