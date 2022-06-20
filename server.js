
// Creamos enlace que necesitamos
const express = require('express');
const app = express();

// establecer el motor de visualización en ejs
app.set('view engine', 'ejs');

// use res.render para cargar un archivo de  "ejs view ""

// Página index 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// Página about 
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 este es el puerto mágico');