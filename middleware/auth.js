const jwt = require('jsonwebtoken')
require('dotenv').config({ path: 'variables.env' })


module.exports = (req, res) => {
    const authHeader = req.get('Authorization')
    if (authHeader) {
        //obtener token
        const token = authHeader.split(' ')[1]
        //comprobar jwt
        try {
            const usuario = jwt.verify(token, process.env.SECRETA)
            req.usuario = usuario
        } catch (error) {
            console.log(error)
            console.log('jwt no valido')
        }
    }
    
}