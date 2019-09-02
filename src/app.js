const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const customers = require('./routes/tareas'); 
const routes = require('./routes');
const app = express();


//Funciones
app.use(express.json());

//Archivos estaticos: fuentes,js,css..
app.use(express.static(__dirname + './js/componentes/App.vue'));

//app.set('port', process.env.PORT || 4000);

/*app.get('/', routes.index);
app.get('/tareas', tareas.list);
app.get('/tareas/añadir', tareas.add);
app.post('/tareas/añadir', tareas.save);
app.get('/tareas/eliminar/:id', tareas.delete);
app.get('/tareas/editar/:id', tareas.edit);
app.post('/tareas/editar/:id', tareas.update);*/


app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});