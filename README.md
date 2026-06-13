# TaskFlow

TaskFlow es una aplicación web de gestión de tareas que permite crear, completar, eliminar y organizar tareas de forma sencilla. El proyecto está desarrollado con HTML, JavaScript, Tailwind CSS y un backend REST construido con Node.js y Express.

## 🚀 Demo

Frontend:
https://TU-URL-VERCEL.vercel.app

Backend:
https://taskflow-backend-nyzm.onrender.com

---

## 📌 Funcionalidades

* ✅ Crear nuevas tareas
* ✔️ Marcar tareas como completadas
* ❌ Eliminar tareas
* 📊 Ver estadísticas (total, completadas y pendientes)
* 🔍 Buscar tareas por texto
* 🎯 Filtrar tareas (todas, completadas y pendientes)
* ⚡ Completar tareas mediante API REST
* 🌐 Persistencia mediante backend Express
* 📱 Diseño responsive para móvil y escritorio

---

## 🛠️ Tecnologías utilizadas

### Frontend

* HTML5
* JavaScript (Vanilla JS)
* Tailwind CSS
* Fetch API

### Backend

* Node.js
* Express
* Cors
* Dotenv
* Nodemon
* Render (https://taskflow-backend-nyzm.onrender.com)

### Herramientas

* Git
* GitHub
* Vercel
* Thunder Client
* Render

---

## 📂 Arquitectura del proyecto

taskflow-project/

├── index.html

├── app.js

├── docs/

│ ├── ai/

│ └── backend-api.md

├── server/

│ ├── src/

│ │ ├── config/

│ │ │ └── env.js

│ │ ├── controllers/

│ │ │ └── task.controller.js

│ │ ├── services/

│ │ │ └── task.service.js

│ │ ├── routes/

│ │ │ └── task.routes.js

│ │ └── index.js

│ ├── .env

│ └── package.json

└── README.md

---

## 🏗️ Arquitectura backend

La aplicación utiliza una arquitectura por capas:

### Routes

Reciben las peticiones HTTP y las redirigen al controlador correspondiente.

### Controllers

Validan los datos recibidos desde la red y generan respuestas HTTP adecuadas.

### Services

Contienen la lógica de negocio y gestionan las tareas almacenadas en memoria.

### Middlewares

El servidor utiliza:

* express.json() para procesar JSON.
* cors() para permitir peticiones desde el frontend.
* middleware de logging para registrar peticiones.
* middleware global de errores para gestionar excepciones.

---

## 🌐 API REST

### Obtener tareas

GET /api/v1/tasks

### Crear tarea

POST /api/v1/tasks

Body:

{
"title": "Aprender Express"
}

### Completar tarea

PATCH /api/v1/tasks/:id

### Eliminar tarea

DELETE /api/v1/tasks/:id

---

## 🧪 Testing manual

Se han realizado pruebas utilizando Thunder Client.

### Casos probados

* Obtener tareas (GET)
* Crear tareas válidas (POST)
* Crear tareas inválidas (400 Bad Request)
* Completar tareas (PATCH)
* Eliminar tareas existentes (DELETE)
* Eliminar tareas inexistentes (404 Not Found)

---

## 🧠 Uso de Inteligencia Artificial

Durante el desarrollo se utilizaron herramientas de IA para:

* Refactorización de código
* Generación de documentación
* Mejora de la arquitectura
* Resolución de errores
* Generación de funcionalidades adicionales

La documentación completa se encuentra en la carpeta docs/ai.

---

## 👨‍💻 Autor

Proyecto desarrollado como parte de un bootcamp de desarrollo web.

## 📄 Licencia

Proyecto con fines educativos.
