# Backend API - Herramientas utilizadas en desarrollo

## Axios

Axios es una librería de JavaScript utilizada para realizar peticiones HTTP desde aplicaciones frontend o backend. Facilita el envío de solicitudes GET, POST, PUT, PATCH y DELETE, además de ofrecer una sintaxis más sencilla que la API nativa fetch.

### Ventajas

* Sintaxis simple.
* Manejo automático de respuestas JSON.
* Interceptores para peticiones y respuestas.
* Compatible con navegadores y Node.js.

### Ejemplo

javascript
axios.get("/api/v1/tasks")
  .then(response => {
    console.log(response.data)
  })


---

## Postman

Postman es una herramienta utilizada para probar y documentar APIs REST.

### Usos principales

* Enviar peticiones HTTP.
* Validar respuestas del servidor.
* Probar endpoints antes de conectar el frontend.
* Compartir colecciones de pruebas.

### Ejemplo de uso en TaskFlow

Durante el desarrollo de la API se utilizó para probar:

* GET /api/v1/tasks
* POST /api/v1/tasks
* PATCH /api/v1/tasks/:id
* DELETE /api/v1/tasks/:id

---

## Swagger

Swagger es un conjunto de herramientas para documentar APIs REST.

Permite generar documentación interactiva donde los desarrolladores pueden:

* Consultar endpoints disponibles.
* Ver parámetros requeridos.
* Probar peticiones directamente desde el navegador.
* Facilitar la integración entre frontend y backend.

### Beneficios

* Documentación automática.
* Mejor comunicación entre equipos.
* Facilita el mantenimiento de APIs.

---

## Sentry

Sentry es una plataforma de monitorización y seguimiento de errores.

Permite detectar errores que ocurren en producción y recibir información detallada para solucionarlos rápidamente.

### Funcionalidades

* Registro automático de excepciones.
* Seguimiento de errores en frontend y backend.
* Alertas en tiempo real.
* Información sobre usuarios afectados.

### Ejemplo práctico

Si la API de TaskFlow genera un error interno (HTTP 500), Sentry puede registrar:

* Mensaje del error.
* Archivo donde ocurrió.
* Línea de código afectada.
* Contexto de la petición.

---

## Conclusión

Estas herramientas son ampliamente utilizadas en proyectos profesionales. Axios facilita las peticiones HTTP, Postman permite probar APIs, Swagger mejora la documentación y Sentry ayuda a monitorizar errores en producción.
