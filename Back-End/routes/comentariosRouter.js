const router = require('express').Router();
const comentarioController = require('../controllers/comentarioController');
const comentarioValidation = require('../public/js/comentarioValidation')

//Usuarios
router.get('/comentarios', comentarioController.readComentarios);
router.get('/comentario/:id', comentarioController.readComentario);
router.post('/comentario/agregar/:id', comentarioValidation, comentarioController.createComentario);
router.post('/comentario/actualizar/:id', comentarioController.updateComentario);
router.post('/comentario/eliminar/:id', comentarioController.deleteComentario);

module.exports = router;