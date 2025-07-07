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
}   );

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