const { body } = require('express-validator');

const validations = [
    body('email')
        .notEmpty()
        .withMessage('Debes de colocar tu email'),
    body('contraseña')
        .notEmpty()
        .withMessage('Debes de colocar tu contraseña'),
]

module.exports = validations;