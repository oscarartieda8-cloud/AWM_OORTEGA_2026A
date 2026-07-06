const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());

const env = require('./config/env');

const { createSequelize } = require('./config/sequelize.config');
const sequelize = createSequelize();
//MODELOS
require('./models/estudiante.model');
require('./models/materia.model');
require('./models/matricula.model'); // este archivo dispara los belongsToMany
require('./models/usuario.model');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ESTUDIANTES
const allEstudiantesRoutes = require('./routes/estudiante.routes');
allEstudiantesRoutes(app);
//MATERIAS
const allMateriasRoutes = require('./routes/materia.routes');
allMateriasRoutes(app);

//MATRICULAS 
const allMatriculasRoutes = require('./routes/matricula.routes');
allMatriculasRoutes(app);

//USUARIOS
const allUsuariosRoutes = require('./routes/usuario.routes');
allUsuariosRoutes(app);

// Conecta a la base y levanta el servidor
sequelize.sync().then(() => {
    console.log('Base de datos conectada.');

    app.listen(env.port, () => {
        console.log("Server listening at port", env.port);
    });
}).catch(err => {
    console.log('Error al conectar la BDD', err);
});