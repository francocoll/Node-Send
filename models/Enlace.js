const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enlacesSchema = new Schema({
    url: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        required: true
    },
    nombre_original: {
        type: String,
        required: true
    },
    descargar: {
        type: Number,
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuarios',
        default: null
    },
    password: {
        type: String
    },
    creado: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Enlaces', enlacesSchema)