const usuariosRepository = require('../repositories/usuariosRepository');   
const bcrypt = require('bcrypt');
exports.crearUsuario = async (user) => {
    return await usuariosRepository.crearUsuario(user);
};
exports.login = async (user) => {
    const result = await usuariosRepository.login(user);
    if(result === null){
        console.log('El usuario no existe');
    }else if(!bcrypt.compareSync(user.password, result.password)){
        console.log('La contraseña es incorrecta');
    }else{
        console.log('El usuario es correcto');
    }
    return {
        message:'Inicio de sesion exitoso',
        usurio: result.names
    }
}