const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario.model")

module.exports.autenticate = async (req, res, next ) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization;
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, "CLAVE");
            req.usuario = await Usuario.findOne({_id: decoded.id}).select('-password');

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