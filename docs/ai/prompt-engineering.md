# Prompt Engineering aplicado al desarrollo

## Introducción

En este documento recojo distintos prompts utilizados durante el desarrollo del proyecto TaskFlow. El objetivo es experimentar con diferentes técnicas de prompt engineering para mejorar la calidad de las respuestas generadas por la inteligencia artificial.

Se han probado distintos enfoques como asignar roles, usar ejemplos, pedir razonamiento paso a paso y aplicar restricciones claras.

---

# Prompts utilizados

## 1. Prompt con rol (desarrollador senior)

**Prompt:**
Actúa como un desarrollador senior y refactoriza este código JavaScript para que sea más limpio y reutilizable.

**Por qué funciona:**
Asignar un rol hace que la IA genere código más estructurado, con mejores prácticas y mayor claridad.

---

## 2. Prompt con rol específico

**Prompt:**
Actúa como un experto en JavaScript y explica cómo funciona LocalStorage en este código.

**Por qué funciona:**
El rol enfoca la respuesta en profundidad técnica y mejora la calidad de la explicación.

---

## 3. Prompt con ejemplos (few-shot)

**Prompt:**
Ejemplo:
Input: tarea completada → Output: tarea marcada como true
Input: tarea pendiente → Output: tarea marcada como false

Ahora crea una función que filtre tareas completadas.

**Por qué funciona:**
Dar ejemplos ayuda a la IA a entender exactamente qué tipo de resultado se espera.

---

## 4. Prompt con razonamiento paso a paso

**Prompt:**
Explica paso a paso cómo funciona la función renderTasks en mi proyecto TaskFlow.

**Por qué funciona:**
Obliga a la IA a estructurar la explicación y facilita la comprensión del código.

---

## 5. Prompt con restricciones

**Prompt:**
Genera una función en JavaScript que añada tareas, sin usar librerías externas y con código reutilizable.

**Por qué funciona:**
Las restricciones limitan la respuesta y evitan soluciones innecesarias o demasiado complejas.

---

## 6. Prompt para generar código

**Prompt:**
Crea una función para eliminar una tarea por id en un array de objetos.

**Por qué funciona:**
Es un prompt claro y directo, lo que produce una solución rápida y funcional.

---

## 7. Prompt para refactorizar

**Prompt:**
Refactoriza esta función para que tenga menos código repetido y mejor legibilidad.

**Por qué funciona:**
Enfoca a la IA en mejorar el código en lugar de reescribirlo desde cero.

---

## 8. Prompt para añadir funcionalidades

**Prompt:**
Sugiere nuevas funcionalidades para una aplicación de tareas como TaskFlow.

**Por qué funciona:**
Permite obtener ideas creativas y ampliar el proyecto fácilmente.

---

## 9. Prompt para validación

**Prompt:**
Añade validaciones a este formulario para evitar datos inválidos.

**Por qué funciona:**
Guía a la IA hacia la mejora de la robustez del código.

---

## 10. Prompt para documentación

**Prompt:**
Genera comentarios JSDoc para estas funciones JavaScript.

**Por qué funciona:**
Automatiza la documentación y mejora la claridad del código.

---

# Conclusión

El uso de técnicas de prompt engineering permite obtener mejores resultados al trabajar con inteligencia artificial.

Los mejores prompts son aquellos que:

* Definen claramente el objetivo
* Incluyen contexto del problema
* Añaden restricciones o ejemplos
* Especifican el tipo de respuesta esperada
