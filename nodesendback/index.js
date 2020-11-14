const express = require('express');
const conectarDB = require('./config/db');

// crear servidor
const app = express();

// Conectar la base de datos
conectarDB();

// Puerto de la app
const port = process.env.PORT || 4000;

// Habilitar leer los valores del body
app.use(express.json());

// Rutas de la app
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/enlaces', require('./routes/enlaces'));
app.use('/api/archivos', require('./routes/archivos'));

// Arrancar la app
app.listen(port, '0.0.0.0', () => {
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});