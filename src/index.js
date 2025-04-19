import express from "express";
import dotenv from "dotenv";
//import router from "./routes/router.js";

// cargar variables de entorno
dotenv.config();

// crear servidor express
const APP_PORT = process.env.APP_PORT;
const app = express();

//para leer JSON de las peticiones
app.use(express.json());

// configurar rutas
//app.use("/",router);


// Iniciar servidor
app.listen(APP_PORT,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})
