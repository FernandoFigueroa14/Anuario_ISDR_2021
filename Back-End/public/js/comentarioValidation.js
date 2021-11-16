const { body } = require('express-validator');

const validations = [
    body('contenido')
        .notEmpty()
        .withMessage('Debes de colocar tu nombre')
        .isLength({max: 2000})
        .withMessage('Tu publicación ha superado el límite de caracteres(2000)'),
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