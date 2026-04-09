# Comparativa entre asistentes de IA

## 1. Asistentes utilizados

* ChatGPT (OpenAI)
* Claude (Anthropic)

---

## 2. Explicación de conceptos

### Prompt utilizado

Explica los siguientes conceptos de JavaScript con ejemplos claros:

* Closures
* Event Loop
* Hoisting

---

### Análisis

#### ChatGPT

* **Claridad:** Alta. Utiliza un lenguaje sencillo y progresivo, explicando primero la idea general y luego mostrando ejemplos claros.
* **Profundidad:** Media-Alta. Explica cómo funcionan internamente los conceptos (especialmente closures y event loop) y menciona el contexto de ejecución.
* **Ejemplos:** Prácticos y fáciles de entender. Incluyen casos típicos que ayudan a visualizar el comportamiento real del código.

#### Claude

* **Claridad:** Muy alta. Suele estructurar mejor la explicación con pasos o secciones, facilitando la lectura.
* **Profundidad:** Media. Explica bien los conceptos pero en algunos casos simplifica detalles técnicos.
* **Ejemplos:** Buenos, aunque a veces más teóricos que prácticos.

---

## 3. Detección de errores

### Código utilizado

```javascript
function suma(a, b) {
  return a + b
}
console.log(suma(2))

function saludar(nombre) {
  if(nombre = "Juan") {
    return "Hola Juan"
  }
  return "Hola " + nombre
}

function obtenerUsuario() {
  return
  {
    nombre: "Ana"
  }
}
```

---

### Prompt utilizado

Encuentra los errores en este código JavaScript y explica por qué ocurren y cómo corregirlos.

---

### Análisis

#### ChatGPT

* **Precisión:** Alta. Identifica correctamente los tres errores:

  * Falta de argumento en `suma`
  * Uso incorrecto de asignación (`=` en lugar de `===`)
  * Problema de retorno automático en `obtenerUsuario`
* **Explicación:** Clara y detallada. Explica conceptos como coerción y automatic semicolon insertion.
* **Soluciones:** Correctas y bien justificadas, con ejemplos corregidos.

#### Claude

* **Precisión:** Alta. Detecta los errores principales.
* **Explicación:** Clara, aunque menos profunda en aspectos internos del lenguaje.
* **Soluciones:** Correctas, aunque menos detalladas en la justificación.

---

## 4. Generación de funciones

### Prompt utilizado

Implementa en JavaScript estas funciones:

1. Una función que reciba un array y devuelva solo los números pares
2. Una función que cuente cuántas veces aparece cada palabra en un string
3. Una función que haga debounce de otra función

---

### Análisis

#### ChatGPT

* **Calidad del código:** Alta. Código limpio, modular y bien estructurado.
* **Legibilidad:** Muy buena. Usa nombres claros y separación lógica.
* **Buenas prácticas:** Uso correcto de `const`/`let`, funciones puras cuando corresponde, y manejo adecuado de casos comunes.

Ejemplo generado (resumido):

```javascript
const obtenerPares = (arr) => arr.filter(num => num % 2 === 0);

const contarPalabras = (texto) => {
  const palabras = texto.split(" ");
  const conteo = {};
  for (let palabra of palabras) {
    conteo[palabra] = (conteo[palabra] || 0) + 1;
  }
  return conteo;
};

const debounce = (fn, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
```

---

#### Claude

* **Calidad del código:** Alta. Similar a ChatGPT, aunque a veces más simplificado.
* **Legibilidad:** Muy buena.
* **Buenas prácticas:** Correctas, aunque puede omitir algunos edge cases.

---

## 5. Conclusión

* **¿Cuál fue más claro?**
  Claude, por su estructura y explicaciones más ordenadas.

* **¿Cuál fue más técnico?**
  ChatGPT, ya que profundiza más en detalles internos del lenguaje.

* **¿Cuál generó mejor código?**
  ChatGPT, por incluir mejores prácticas y mayor robustez.

---

## Conclusión final

Ambos asistentes funcionan muy bien para tareas de desarrollo. claude suele destacar por lo claro y ordenado que presenta las ideas, mientras que chatgpt resalta más cuando se trata de profundizar en lo técnico y generar mejor código. Al final, cuál resulta más útil depende bastante del contexto, aunque en entornos técnicos más exigentes chatgpt suele tener una ligera ventaja.