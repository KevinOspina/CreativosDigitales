const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

//const customers = require('./routes/tareas'); 
//const routes = require('./routes');
//const app = express();


//Funciones
//app.use(express.json());
var tareas = require('./routes/tareas'); 
var routes = require('./routes');
var app = express();

//Archivos estaticos: fuentes,js,css..
app.use(express.static(__dirname + './../src/html'));

//app.set('port', process.env.PORT || 4000);

//Rutas

app.get('/tareas/add' ,tareas.add);
app.post('/tareas/add', tareas.save);

//app.use('/api/tareas', require('./routes/tareas'));
/*
app.get('/', routes.index);
app.get('/tareas', tareas.list);
app.get('/tareas/add', tareas.add);
app.post('/tareas/add', tareas.save);
app.get('/tareas/delete/:id', tareas.delete);
app.get('/tareas/edit/:id', tareas.edit);
app.post('/tareas/edit/:id', tareas.update);
*/

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});