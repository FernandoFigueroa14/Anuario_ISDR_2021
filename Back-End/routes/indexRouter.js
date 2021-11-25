const router = require('express').Router();
const loginController = require('../controllers/loginController');
const publicacionController = require('../controllers/publicacionController');
const loginValidation = require('../public/js/loginValidation');

//Publicaciones
router.get('/publicaciones', publicacionController.readPublicaciones);

//Login
router.post('/login', loginValidation, loginController.login);

module.exports = router;