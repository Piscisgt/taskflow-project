const form = document.querySelector("#task-form")
const input = document.querySelector("#task-title")
const list = document.querySelector("#task-list")
let tasks = []
form.addEventListener("submit", function(e){
e.preventDefault()
const task = {
id: Date.now(),
title: input.value,
completed: false,
createdAt: new Date()
}
tasks.push(task)
renderTasks()
input.value = ""
})

function renderTasks(){
list.innerHTML = ""
tasks.forEach(task => {
const li = document.createElement("li")
li.textContent = task.title
list.appendChild(li)
})
}

function saveTasks(){
localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks(){
const data = localStorage.getItem("tasks")
if(data){
tasks = JSON.parse(data)
renderTasks()
}}
loadTasks()