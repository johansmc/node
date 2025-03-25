const usuariosRepository = require('../repositories/usuariosRepository');   
const bcrypt = require('bcrypt');
exports.crearUsuario = async (user) => {

    if(!user.password){
        throw new Error('La contraseña es requerida');
    }

    return await usuariosRepository.crearUsuario(user);
};

exports.login = async (user) => {
    try {
        const { email, password } = user;

        if (!email || !password) {
            throw new Error("Email y contraseña son requeridos");
        }

        const usuarioEncontrado = await usuariosRepository.login(user);
        
        if (!usuarioEncontrado) {
            throw new Error("Usuario no encontrado");
        }

       
        const contraseñaValida = bcrypt.compareSync(password, usuarioEncontrado.pass);

        if (!contraseñaValida) {
            throw new Error("Contraseña incorrecta");
        }

        return { message: "Login exitoso", user: usuarioEncontrado };
    } catch (error) {
        throw new Error(error.message);
    }
};
