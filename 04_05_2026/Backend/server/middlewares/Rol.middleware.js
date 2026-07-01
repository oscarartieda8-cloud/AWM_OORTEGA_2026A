module.exports.tieneRol = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(401).json({ message: 'No Autorizado!' });
        }

        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({ message: 'No tienes permisos para esta accion!' });
        }

        next();
    }
}