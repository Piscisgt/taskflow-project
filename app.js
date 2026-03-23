const form = document.querySelector("#task-form")
const input = document.querySelector("#task-title")
const list = document.querySelector("#task-list")

const totalEl = document.querySelector("#total")
const completedEl = document.querySelector("#completed")
const pendingEl = document.querySelector("#pending")

let tasks = []

form.addEventListener("submit", function(e){
  e.preventDefault()

  if(input.value.trim() === "") return

  const task = {
    id: Date.now(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(task)

  updateApp()

  input.value = ""
})

function renderTasks(){
  list.innerHTML = ""

  tasks.forEach(task => {

    const li = document.createElement("li")
    li.className = "bg-white p-3 rounded shadow flex justify-between items-center"

    const title = document.createElement("span")
    title.textContent = task.title
    if(task.completed){
      title.classList.add("line-through", "text-gray-400")
    }
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

    const actions = document.createElement("div")
    actions.appendChild(completeBtn)
    actions.appendChild(deleteBtn)

    li.appendChild(title)
    li.appendChild(actions)

    list.appendChild(li)
  })
}

function toggleTask(id){
  tasks = tasks.map(task => {
    if(task.id === id){
      return {...task, completed: !task.completed}
    }
    return task
  })

  updateApp()
}

function deleteTask(id){
  tasks = tasks.filter(task => task.id !== id)
  updateApp()
}

function updateStats(){
  const total = tasks.length
  const completed = tasks.filter(t => t.completed).length
  const pending = total - completed

  totalEl.textContent = total
  completedEl.textContent = completed
  pendingEl.textContent = pending
}

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(){
  const data = localStorage.getItem("tasks")

  if(data){
    tasks = JSON.parse(data)
  }

  updateApp()
}

function updateApp(){
  renderTasks()
  updateStats()
  saveTasks()
}

loadTasks()