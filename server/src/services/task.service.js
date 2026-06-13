let tasks = []

function getAllTasks() {
  return tasks
}

function createTask(data) {
  const task = {
    id: Date.now(),
    title: data.title,
    completed: false,
    createdAt: new Date()
  }

  tasks.push(task)

  return task
}

function deleteTask(id) {
  const taskExists = tasks.find(task => task.id === id)

  if (!taskExists) {
    throw new Error("NOT_FOUND")
  }

  tasks = tasks.filter(task => task.id !== id)
}

function toggleTask(id) {
  const task = tasks.find(task => task.id === id)

  if (!task) {
    throw new Error("NOT_FOUND")
  }

  task.completed = !task.completed

  return task
}

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  toggleTask
}