// =====================
// SELECTORES
// =====================
const taskForm = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-title")
const taskList = document.querySelector("#task-list")

const totalElement = document.querySelector("#total")
const completedElement = document.querySelector("#completed")
const pendingElement = document.querySelector("#pending")

// NUEVOS SELECTORES
const filterAllBtn = document.querySelector("#filter-all")
const filterCompletedBtn = document.querySelector("#filter-completed")
const filterPendingBtn = document.querySelector("#filter-pending")

const searchInput = document.querySelector("#search-input")

const completeAllBtn = document.querySelector("#complete-all")
const clearCompletedBtn = document.querySelector("#clear-completed")

let tasks = []
let currentFilter = "all"
let searchText = ""

// =====================
// EVENTOS
// =====================

taskForm.addEventListener("submit", handleAddTask)

// FILTROS
filterAllBtn.addEventListener("click", () => {
  currentFilter = "all"
  renderTasks()
})

filterCompletedBtn.addEventListener("click", () => {
  currentFilter = "completed"
  renderTasks()
})

filterPendingBtn.addEventListener("click", () => {
  currentFilter = "pending"
  renderTasks()
})

// BUSCADOR
searchInput.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase()
  renderTasks()
})

// ACCIONES GLOBALES
completeAllBtn.addEventListener("click", () => {
  tasks = tasks.map(t => ({ ...t, completed: true }))
  updateApp()
})

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter(t => !t.completed)
  updateApp()
})

// =====================
// FUNCIONES PRINCIPALES
// =====================

function handleAddTask(event) {
  event.preventDefault()

  const title = taskInput.value.trim()

  if (!validateTask(title)) return

  const newTask = createTask(title)

  tasks.push(newTask)

  updateApp()

  taskForm.reset()
}

function createTask(title) {
  return {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  }
}

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

// =====================
// RENDER CON FILTROS Y BUSQUEDA
// =====================

function renderTasks() {
  taskList.innerHTML = ""

  let filteredTasks = tasks

  // FILTRO POR ESTADO
  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter(t => t.completed)
  }

  if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter(t => !t.completed)
  }

  // FILTRO POR TEXTO
  filteredTasks = filteredTasks.filter(t =>
    t.title.toLowerCase().includes(searchText)
  )

  filteredTasks.forEach(task => {
    const taskElement = createTaskElement(task)
    taskList.appendChild(taskElement)
  })
}

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

function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  )

  updateApp()
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id)
  updateApp()
}

// =====================
// STATS + STORAGE
// =====================

function updateStats() {
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed

  totalElement.textContent = total
  completedElement.textContent = completed
  pendingElement.textContent = pending
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
  const data = localStorage.getItem("tasks")

  if (data) {
    tasks = JSON.parse(data)
  }

  updateApp()
}

function updateApp() {
  renderTasks()
  updateStats()
  saveTasks()
}

// =====================
// INIT
// =====================
loadTasks()