const express = require('express')
const conectarDB = require('./config/db')
//crear server

const app = express()

//conectar a la db
conectarDB()

//puerto de la app

const port = process.env.PORT || 4000

app.use(express.json())

//Routing

app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'));

// Arrancar la app

app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor funciona en el puerto ${port}`)
})