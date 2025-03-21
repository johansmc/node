const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/crear', usuariosController.crearUsuario);

module.exports = router;