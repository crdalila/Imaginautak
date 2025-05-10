import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";
import './models/relations.js';

// cargar variables de entorno
dotenv.config();

// crear servidor express
const APP_PORT = process.env.APP_PORT;
const app = express();

// para acceder a los archivos públicos (imgs)
app.use(express.static("public"));

// poner en marcha cors
app.use(cors());

// para leer JSON de las peticiones
app.use(express.json());

// configurar rutas
app.use("/",router);


// iniciar servidor
app.listen(APP_PORT,()=>{
    console.log(`Backend conectado al puerto ${APP_PORT}`);
})
