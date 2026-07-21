const express = require("express");
const app = express();
const puerto = 8001;

const cors = require('cors');

require('./server/config/mongoose.config'); //Config

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));


const allAuthorsRoutes = require('./server/routes/autor.routes');

allAuthorsRoutes(app);

app.listen(puerto, () => {
    console.log("Server listening at port", puerto)
})

