const taskService = require("../services/task.service")

function getTasks(req, res) {
  const tasks = taskService.getAllTasks()

  res.status(200).json(tasks)
}

function createTask(req, res) {
  const { title } = req.body

  // VALIDACIÓN
  if (
    !title ||
    typeof title !== "string" ||
    title.trim().length < 3
  ) {
    return res.status(400).json({
      error: "El título es obligatorio y debe tener al menos 3 caracteres"
    })
  }

  const newTask = taskService.createTask({
    title: title.trim()
  })

  res.status(201).json(newTask)
}

function deleteTask(req, res, next) {
  try {
    const id = Number(req.params.id)

    taskService.deleteTask(id)

    res.status(204).send()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getTasks,
  createTask,
  deleteTask
}