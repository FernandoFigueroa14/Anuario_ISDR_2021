const router = require('express').Router();
const usuarioController = require('../controllers/usuarioController');
const usuarioValidation = require('../public/js/usuarioValidation')

//Usuarios
router.get('/usuarios', usuarioController.readUsuarios);
router.get('/usuario/:id', usuarioController.readUsuario);
router.post('/usuario/agregar', usuarioValidation, usuarioController.createUsuario);
router.post('/usuario/actualizar/:id', usuarioController.updateUsuario);
router.post('/usuario/eliminar/:id', usuarioController.deleteUsuario);

module.exports = router;