import express from 'express';

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let tasks = [
    {
        id: 1,
        titulo: 'Task 1',
        descripcion: 'Description for Task 1',
        estado: false
    },
    {
        id: 2,
        titulo: 'Task 2',
        descripcion: 'Description for Task 2',
        estado: true
    }
]

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        titulo: req.body.title,
        descripcion: req.body.description,
        estado: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const { titulo, descripcion, estado } = req.body;
    const task = tasks.find((t) => t.id === id);

    if (task) {
        if (titulo !== undefined) task.titulo = titulo;
        if (descripcion !== undefined) task.descripcion = descripcion;
        if (estado !== undefined) task.estado = estado;
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
    
    res.json(task);
})

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});