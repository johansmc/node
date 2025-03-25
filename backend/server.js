const Connect = require('./src/config/db');
const createApp = require('./src/app');
const port = 3000;

const startServer = async()=>{
    try{
        await Connect();
    const app = createApp();
    app.listen(port,()=>console.log(`Servidor iniciado en el puerto: ${port}`));
    }catch(err){
        console.log(err);
        process.exit(1);
    }
    
}

startServer();
