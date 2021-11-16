const router = require('express').Router();
const loginController = require('../controllers/loginController');
const publicacionController = require('../controllers/publicacionController');

//Publicaciones
router.get('/publicaciones', publicacionController.readPublicaciones);

//Login
router.post('/login', loginController.login);

module.exports = router;