const mysql = require('mysql');

const Connect = async()=>{
    try{
    const connection = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node'
    });
    console.log('Conectado a la base de datos');
    global.db = connection;
    }catch(err){    
        console.log('Error al conectar a la base de datos:', err);
        process.exit(1);
    }
}

module.exports = Connect;