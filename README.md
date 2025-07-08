# Todo-list-backend

Este proyecto es una API backend para una aplicación de lista de tareas.

## Tecnologías usadas

- Node.js
- Express

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <url-del-repositorio>
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia el servidor:
    ```bash
    npm start
    ```

## Despliegue

Puedes desplegar la aplicación en servicios como Heroku, Vercel, o cualquier VPS que soporte Node.js.

## Rutas disponibles

- `GET /tasks` — Obtiene todas las tareas.
- `GET /tasks/:id` — Obtiene una tarea por ID.
- `POST /tasks` — Crea una nueva tarea.
- `PUT /tasks/:id` — Actualiza una tarea existente.
- `DELETE /tasks/:id` — Elimina una tarea.
- `GET /estado/:estado` — Filtra las tareas según su estado (`true` para completado, `false` para pendiente).

**Ejemplo:**  
Para obtener todas las tareas completadas, realiza una petición GET a:  
```
GET /estado/true
```
Para obtener las tareas pendientes:  
```
GET /estado/false
```

Estas rutas pueden ser probadas usando herramientas como Thunder Client o Postman.

