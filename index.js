import express from "express";
import cors from "cors";
import rutasProductos from "./src/routes/products.routes.js"
import { configDotenv } from "dotenv";
import rutaLogin from "./src/routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT || 3000;

const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}


app.use(cors(corsConfig)) //configuramos los Headers de CORS
app.use(express.json())

app.use("/api", rutaLogin)


app.use((req, res, next) => {
    console.log(`Datos recibidos:  ${req.method} ${req.url}`);
    next();
});

app.use("/api", rutasProductos)

app.use((req, res, next) => { 
    res.status(404).send('Recurso no encontrado o ruta inválida');
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})