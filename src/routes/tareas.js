//const router = express.Router();
const express = require('express');


const { Client } = require('pg')
const client = new Client({
    user: "postgres",
    password: "kevinospina03",
    host: "localhost",
    port: 5432,
    database: "postgres"
})

client.connect();

//Listar las tareas
exports.list = function (req, res) {

    client.query('SELECT * FROM tareas', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('tareas/list', { title: "Tareas", data: result.rows });
    });

};

//Añadir una tarea
exports.add = function (req, res) {
    res.render('tareas/add', { title: "Añadir Tareas" });
};

//Editar una tarea
exports.edit = function (req, res) {

    var id = req.params.id;

    client.query('SELECT * FROM tareas WHERE id=$1', [id], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.render('tareas/edit', { title: "Editar Tareas", data: result.rows });
    });

};

//Añadir una tarea
exports.save = function (req, res) {

    var cols = [req.body.id, req.body.descripcion, req.body.fecha, req.body.prioridad];

    client.query('INSERT INTO tareas(id,descripcion, fecha,prioridad) VALUES($1, $2, $3, $4) RETURNING *', cols, function (err, result) {
        if (err) {
            console.log("Error Añadiendo la tarea: %s ", err);
        }
        res.redirect('/tareas');
    });

};

//Actualizar una tarea
exports.update = function (req, res) {

    var cols = [req.body.id, req.body.descripcion, req.body.fecha, req.body.prioridad];

    client.query('UPDATE tareas SET descripcion=$1, fecha=$2,prioridad=$3, WHERE id=$4', cols, function (err, result) {
        if (err) {
            console.log("Error actualizando : %s ", err);
        }
        res.redirect('/tareas');
    });

};

//Elliminar una area
exports.delete = function (req, res) {

    var id = req.params.id;

    client.query("DELETE FROM tareas WHERE id=$1", [id], function (err, rows) {
        if (err) {
            console.log("Error eliminando : %s ", err);
        }
        res.redirect('/tareas');
    });

};


