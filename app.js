// requiero express
const express = require('express');

// ejecuto la aplicación
const app = express();

// levanto el servidor
app.listen(3001, () => console.log('servidor corriendo en el puerto 3001'));

//Configuracion de archivos estaticos
app.use(express.static(__dirname + '/public'));

//requiero las rutas
const routes = require('./routes/rutas')
app.use('/', routes);