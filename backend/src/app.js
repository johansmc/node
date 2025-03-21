const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');

const createApp = () =>{
    app.use(cors({
        methods: ["GET","POST","PUT","DELETE"],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization']
    }))

    app.use(express.json());
    //Rutas
    app.use("/api",routes);

    app.get("/",(req,res)=>{
        res.send("Bienvenido a mi API");
    });

    return app;
}
module.exports = createApp;