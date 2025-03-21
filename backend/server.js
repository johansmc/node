const Connect = require('./config/db');
const createApp = require('./app');
const port = 3000;

const startServer = async()=>{
    try{
        await Connect();
    const app = createApp();
    app.listen(3000,()=>console.log(`Servidor iniciado en el puerto: ${port}`));
    }catch(err){
        console.log(err);
        process.exit(1);
    }
    
}

startServer();
