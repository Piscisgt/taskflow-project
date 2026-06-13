// =====================
// SELECTORES
// =====================
const taskForm = document.querySelector("#task-form")
const taskInput = document.querySelector("#task-title")
const taskList = document.querySelector("#task-list")

const totalElement = document.querySelector("#total")
const completedElement = document.querySelector("#completed")
const pendingElement = document.querySelector("#pending")

const filterAllBtn = document.querySelector("#filter-all")
const filterCompletedBtn = document.querySelector("#filter-completed")
const filterPendingBtn = document.querySelector("#filter-pending")

const searchInput = document.querySelector("#search-input")

const completeAllBtn = document.querySelector("#complete-all")
const clearCompletedBtn = document.querySelector("#clear-completed")

// =====================
// CONFIG
// =====================
const API_URL = "http://localhost:3000/api/v1/tasks"

let tasks = []
let currentFilter = "all"
let searchText = ""

// =====================
// EVENTOS
// =====================

taskForm.addEventListener("submit", handleAddTask)

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

searchInput.addEventListener("input", (e) => {
  searchText = e.target.value.toLowerCase()
  renderTasks()
})

// Estas funciones siguen siendo locales por ahora
completeAllBtn.addEventListener("click", () => {
  tasks = tasks.map(task => ({
    ...task,
    completed: true
  }))

  updateApp()
})

clearCompletedBtn.addEventListener("click", () => {
  tasks = tasks.filter(task => !task.completed)

  updateApp()
})

// =====================
// API
// =====================

async function loadTasks() {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error("Error al cargar tareas")
    }

    tasks = await response.json()

    updateApp()
  } catch (error) {
    console.error(error)
    alert("Error al cargar tareas")
  }
}

async function handleAddTask(event) {
  event.preventDefault()

  const title = taskInput.value.trim()

  if (!validateTask(title)) return

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    })

    if (!response.ok) {
      throw new Error("Error al crear tarea")
    }

    await loadTasks()

    taskForm.reset()
  } catch (error) {
    console.error(error)
    alert("No se pudo crear la tarea")
  }
}

async function deleteTask(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })

    if (!response.ok) {
      throw new Error("Error al eliminar")
    }

    await loadTasks()
  } catch (error) {
    console.error(error)
    alert("No se pudo eliminar la tarea")
  }
}

// =====================
// VALIDACIONES
// =====================

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
// RENDER
// =====================

function renderTasks() {
  taskList.innerHTML = ""

  let filteredTasks = tasks

  if (currentFilter === "completed") {
    filteredTasks = filteredTasks.filter(task => task.completed)
  }

  if (currentFilter === "pending") {
    filteredTasks = filteredTasks.filter(task => !task.completed)
  }

  filteredTasks = filteredTasks.filter(task =>
    task.title.toLowerCase().includes(searchText)
  )

  filteredTasks.forEach(task => {
    const taskElement = createTaskElement(task)
    taskList.appendChild(taskElement)
  })
}

function createTaskElement(task) {
  const li = document.createElement("li")
  li.className =
    "bg-white p-3 rounded shadow flex justify-between items-center"

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

  completeBtn.addEventListener("click", () => {
    toggleTask(task.id)
  })

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "❌"

  deleteBtn.addEventListener("click", () => {
    deleteTask(task.id)
  })

  container.appendChild(completeBtn)
  container.appendChild(deleteBtn)

  return container
}

// Temporal hasta crear PATCH en backend
function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  )

  updateApp()
}

// =====================
// STATS
// =====================

function updateStats() {
  const total = tasks.length
  const completed = tasks.filter(task => task.completed).length
  const pending = total - completed

  totalElement.textContent = total
  completedElement.textContent = completed
  pendingElement.textContent = pending
}

function updateApp() {
  renderTasks()
  updateStats()
}

// =====================
// INIT
// =====================

loadTasks()