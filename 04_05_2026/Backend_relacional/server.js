const express = require("express");
require('dotenv').config(); 

const app = express();
const puerto = process.env.PORT || 8000;

const { createSequelize } = require('./config/sequelize.config');
const sequelize = createSequelize();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allEstudiantesRoutes = require('./routes/estudiante.routes');
allEstudiantesRoutes(app);

// Conecta a la base y levanta el servidor
sequelize.sync().then(() => {
    console.log('Base de datos conectada.');
    
    app.listen(puerto, () => {
        console.log("Server listening at port", puerto);
    });
}).catch(err => {
    console.log('Error al conectar la BDD', err);
});