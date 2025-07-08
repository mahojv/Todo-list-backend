
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let tasks = [
  {
    id: 1,
    titulo: 'Comprar víveres',
    descripcion: 'Comprar leche, pan y huevos en el súper.',
    estado: false
  },
  {
    id: 2,
    titulo: 'Estudiar NodeJS',
    descripcion: 'Revisar documentación oficial y hacer ejercicios.',
    estado: true
  },
  {
    id: 3,
    titulo: 'Hacer ejercicio',
    descripcion: 'Salir a correr 30 minutos por el parque.',
    estado: false
  },
  {
    id: 4,
    titulo: 'Llamar a mamá',
    descripcion: 'Preguntar cómo está y ponerse al día.',
    estado: true
  },
  {
    id: 5,
    titulo: 'Leer un libro',
    descripcion: 'Leer 20 páginas del libro de desarrollo personal.',
    estado: false
  },
  {
    id: 6,
    titulo: 'Organizar escritorio',
    descripcion: 'Limpiar y organizar papeles y cables.',
    estado: false
  },
  {
    id: 7,
    titulo: 'Planificar semana',
    descripcion: 'Hacer lista de tareas y reuniones importantes.',
    estado: true
  },
  {
    id: 8,
    titulo: 'Preparar presentación',
    descripcion: 'Hacer diapositivas para reunión del viernes.',
    estado: false
  },
  {
    id: 9,
    titulo: 'Regar plantas',
    descripcion: 'Regar todas las plantas del balcón.',
    estado: true
  },
  {
    id: 10,
    titulo: 'Actualizar CV',
    descripcion: 'Agregar cursos recientes y proyectos.',
    estado: false
  }
];


app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
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

app.get('/filter/:estado', (req, res) => {
    const estado = req.params.estado === 'true';
    const filteredTasks = tasks.filter((t) => t.estado === estado);
    res.json(filteredTasks);

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});