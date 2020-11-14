require('dotenv').config({ path: 'variables.env' });
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (authHeader) {
        // Obtener el token y comprobar que es valido
        const token = authHeader.split(' ')[1];

        // Comprobar el JWT
        try {
            const usuario = jwt.verify(token, process.env.SECRETA)
            req.usuario = usuario;
        } catch (error) {
            console.log(error);
        }
    }
    return next();
}