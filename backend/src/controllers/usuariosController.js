const usuariosService = require('../services/usuariosService');

exports.crearUsuario = async (req, res) => {
    try {
        console.log("Datos recibidos en el controlador:", req.body); 

        if (!req.body.password) {
            return res.status(400).json({ error: "La contraseña es requerida" });
        }

        const user = {
            names: req.body.names,
            email: req.body.email,
            password: req.body.password
        };

        const result = await usuariosService.crearUsuario(user);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error en el controlador:", error);
        res.status(500).json({ error: error.message });
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