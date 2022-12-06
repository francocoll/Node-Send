const Usuario = require('../models/Usuarios')

exports.nuevoUsuario = async (req, res) => {

    //verificar si estuvo registrado
    const { email } = req.body
    let usuario = await Usuario.findOne({ email })

    if (usuario) {
        return res.status(400).json({ msg: 'el usuario ya esta registrado' })
    }

    usuario = await new Usuario(req.body)
    usuario.save()
    res.json({ msg: 'Usuario creado correctamente' })
}