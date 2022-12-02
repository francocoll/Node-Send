const express = require('express')
const conectarDB = require('./config/db')
//crear server

const app = express()

//conectar a la db
conectarDB()


console.log('Comenzando')

//puerto de la app

const port = process.env.PORT || 4000


//Routing

app.use('/api/usuarios', require('./routes/usuarios'))

// Arrancar la app

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor funciona en el puerto ${port}`)
})