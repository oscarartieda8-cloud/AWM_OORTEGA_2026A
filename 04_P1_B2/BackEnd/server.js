// 1. Importaciones principales
const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 8000;

// 2. Middlewares (¡Siempre antes de las rutas!)
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// 3. Conexión a la Base de Datos
require('./server/config/mongoose.config'); // Ajusta la ruta según tu carpeta

// 4. Importar e inicializar Rutas
const rutasRestaurante = require('./server/routes/restaurante.routes');
const rutasUsuario = require('./server/routes/usuario.routes');

rutasRestaurante(app);
rutasUsuario(app);

// 5. Levantar el servidor (¡Siempre al final!)
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});