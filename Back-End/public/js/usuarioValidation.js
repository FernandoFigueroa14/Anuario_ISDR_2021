const { body } = require('express-validator');

const graduados = ['a01273759@itesm.mx', 'a01375560@itesm.mx', 'a01374459@itesm.mx', 'a01745998@itesm.mx', 'a01745778@itesm.mx', 'a01746139@itesm.mx','a01746121@itesm.mx', 'a01338802@itesm.mx', 'a01374942@itesm.mx', 'a01745810@itesm.mx', 'a01375823@itesm.mx', 'a01066264@itesm.mx', 'a01373852@itesm.mx', 'a01746540@itesm.mx', 'a01746099@itesm.mx', 'a01374496@itesm.mx', 'a01375428@itesm.mx', 'a01746134@itesm.mx', 'a01375000@itesm.mx', 'a01377189@itesm.mx', 'a01377519@itesm.mx', 'a01379685@itesm.mx', 'a01372933@itesm.mx', 'a01377545@itesm.mx', 'a01371996@itesm.mx', 'a01168868@itesm.mx'];

const validations = [
    body('nombres')
        .notEmpty()
        .withMessage('Debes de colocar tu nombre'),
    body('apellidos')
        .notEmpty()
        .withMessage('Debes de colocar tus apellidos'),
    body('email')
        .notEmpty()
        .withMessage('Debes de colocar tu correo electrónico')
        .isEmail()
        .withMessage('Correo electronico invalido')
        .custom((value, { req }) => {
            if (graduados.indexOf(value.toLowerCase()) < 0) {
              throw new Error('Correo invalido. Ingresa tu correo institucional');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
          }),
    body('contraseña')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isStrongPassword('',{returnScore: true})
        .withMessage('Contraseña debil: la contraseña debe de ser mínimo de 8 caracteres, alfanumérica y con un caracter especial')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres'),    
    body('contraseñaConfirm')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña')
        .isLength({min: 8})
        .withMessage('Tu contraseña debe contener al menos 8 caracteres')
        .custom((value, { req }) => {
            if (value !== req.body.contraseña) {
              throw new Error('La contraseña no es igual');
            }
        
            // Indicates the success of this synchronous custom validator
            return true;
          }),
    body('apodo')
        .notEmpty()
        .withMessage('Debes de colocar tu apodo'),
    body('path_foto')
        .notEmpty()
        .withMessage('Debes de colocar una foto de perfil')
    /*
        body('fotoUser')
    .custom((value, { req }) => {
        if (!req.file) {
          throw new Error('Debes de colocar una foto de perfil');
        }
    
        // Indicates the success of this synchronous custom validator
        return true;
      })
      */
]

module.exports = validations;