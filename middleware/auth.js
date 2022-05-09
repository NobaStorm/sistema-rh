const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "debugkey");
        req.admin = decoded
        next();// si ya se tiene token te pasa a la siguiente ruta
    }
    catch(error){
        return res.status(401).json({code: 401, message: "No tienes Permiso"})

    }
}