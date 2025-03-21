const usuariosService = require('../services/usuariosService');

exports.crearUsuario = async (req, res,next) => {
    try {
        const user = req.body;
        const result = await usuariosService.crearUsuario(user);
        res.status(200).json(result);
    } catch (err) {
        next(err); 
    }
};

exports.login = async (req, res,next) => {
    try {
        const user = req.body;
        const result = await usuariosService.login(user);
        res.status(200).json(result);
    } catch (err) {
        next(err); 
    }
};