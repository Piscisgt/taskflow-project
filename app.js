// =====================
// SELECTORES
// =====================
const taskForm = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-title")
const taskList = document.querySelector("#task-list")

const totalElement = document.querySelector("#total")
const completedElement = document.querySelector("#completed")
const pendingElement = document.querySelector("#pending")

let tasks = []

// =====================
// EVENTOS
// =====================

taskForm.addEventListener("submit", handleAddTask)

// =====================
// FUNCIONES PRINCIPALES
// =====================

/**
 * Maneja el envío del formulario para añadir tareas
 * @param {Event} event
 */
function handleAddTask(event) {
  event.preventDefault()

  const title = taskInput.value.trim()

  if (!validateTask(title)) return

  const newTask = createTask(title)

  tasks.push(newTask)

  updateApp()

  taskForm.reset()
}

/**
 * Crea una nueva tarea
 * @param {string} title
 * @returns {Object}
 */
function createTask(title) {
  return {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  }
}

/**
 * Valida el título de la tarea
 * @param {string} title
 * @returns {boolean}
 */
function validateTask(title) {
  if (title === "") {
    alert("La tarea no puede estar vacía")
    return false
  }

  if (title.length < 3) {
    alert("La tarea debe tener al menos 3 caracteres")
    return false
  }

  return true
}

/**
 * Renderiza todas las tareas
 */
function renderTasks() {
  taskList.innerHTML = ""

  tasks.forEach(task => {
    const taskElement = createTaskElement(task)
    taskList.appendChild(taskElement)
  })
}

/**
 * Crea el elemento HTML de una tarea
 * @param {Object} task
 * @returns {HTMLElement}
 */
function createTaskElement(task) {
  const li = document.createElement("li")
  li.className = "bg-white p-3 rounded shadow flex justify-between items-center"

  const title = document.createElement("span")
  title.textContent = task.title

  if (task.completed) {
    title.classList.add("line-through", "text-gray-400")
  }

  const actions = createTaskActions(task)

  li.appendChild(title)
  li.appendChild(actions)

  return li
}

/**
 * Crea los botones de acción de una tarea
 * @param {Object} task
 * @returns {HTMLElement}
 */
function createTaskActions(task) {
  const container = document.createElement("div")

  const completeBtn = document.createElement("button")
  completeBtn.textContent = "✔"
  completeBtn.className = "mr-2"
  completeBtn.addEventListener("click", () => toggleTask(task.id))

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "❌"
  deleteBtn.addEventListener("click", () => deleteTask(task.id))

  container.appendChild(completeBtn)
  container.appendChild(deleteBtn)

  return container
}

/**
 * Cambia el estado de completado de una tarea
 * @param {number} id
 */
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )

  updateApp()
}

/**
 * Elimina una tarea
 * @param {number} id
 */
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id)
  updateApp()
}

/**
 * Actualiza estadísticas
 */
function updateStats() {
  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const pending = total - completed

  totalElement.textContent = total
  completedElement.textContent = completed
  pendingElement.textContent = pending
}

/**
 * Guarda tareas en LocalStorage
 */
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

/**
 * Carga tareas desde LocalStorage
 */
function loadTasks() {
  const data = localStorage.getItem("tasks")

  if (data) {
    tasks = JSON.parse(data)
  }

  updateApp()
}

/**
 * Actualiza toda la aplicación
 */
function updateApp() {
  renderTasks()
  updateStats()
  saveTasks()
}

// =====================
// INICIALIZACIÓN
// =====================
loadTasks()