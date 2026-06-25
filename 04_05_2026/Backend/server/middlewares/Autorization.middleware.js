const jwt = require('jsonwebtoken');
const Estudiante = require("../models/estudiante.model")

module.exports.autenticate = async (req, res, next ) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization;
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, "CLAVE"); //aqui está payload de mi token
            req.estudiante = await Estudiante.findOne({_id: decoded.id}).select('-password');

            next();
        }
        catch(error){
            res.status(401).json({message: 'No Autorizado!'});
        }
    }

    if(!token){
        res.status(401).json({message: 'No hay token!'})
    }
}