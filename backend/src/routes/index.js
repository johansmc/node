const express = require('express');
const router = express.Router();

const usuariosRoutes = require('./routes');

router.use('', usuariosRoutes);

module.exports = router;
