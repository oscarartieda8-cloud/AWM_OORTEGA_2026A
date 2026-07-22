const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario.model");

module.exports.autenticate = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, "CLAVE");
            req.usuario = await Usuario.findOne({
                where: { id: decoded.id },
                attributes: { exclude: ['password'] } // equivalente a .select('-password') de Mongoose
            });

            next();
        } catch (error) {
            return res.status(401).json({ message: 'No Autorizado!' });
        }
    } else {
        return res.status(401).json({ message: 'No hay token!' });
    }
};