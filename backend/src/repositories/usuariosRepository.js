const bcrypt = require('bcrypt');
exports.crearUsuario = async (user) => {
    
    const passHash = bcrypt.hashSync(user.password, 10);
    
    return new Promise((resolve, reject) => {
        const q = "INSERT INTO usuarios (names, email, pass) VALUES (?, ?, ?)";
        const values = [user.names, user.email, passHash];

        global.db.query(q, values, (err, results) => { 
            if (err) {
                reject(err);
            } else {
                resolve({
                    message: "Usuario creado con éxito",
                    results
                });
            }
        });
    });
};


exports.login = async (user) => {
const q = "SELECT * FROM usuarios WHERE email = ?";
return new Promise((resolve,reject)=>{
    global.db.query(q, [user.email], (err, results)=>{
        if(err){
            reject(err);
        }else{
            resolve(results[0]);
        }
    })
})
}