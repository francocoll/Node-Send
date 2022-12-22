const Usuario = require('../models/Usuarios')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
require('dotenv').config({ path: 'variables.env' })

exports.autenticarUsuario = async (req, res, next) => {

    //revisar si hay errores

    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }


    //buscar el uaurio para ver si esta registrado
    const { email, password } = req.body
    const usuario = await Usuario.findOne({ email })
    if (!usuario) {
        res.status(401).json({ msg: 'el usuario no existe' })
        return next()
    }


    //verificar el password y autenticar el usuario
    if (bcrypt.compareSync(password, usuario.password)) {
        //crear JWT
        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        })
        res.json({ token })
    } else {
        res.status(401).json({ msg: 'password incorrect' })
        return next()
    }
}


exports.usuarioAutenticado = (req, res, next) => {

    res.json({ usuario: req.usuario })
}