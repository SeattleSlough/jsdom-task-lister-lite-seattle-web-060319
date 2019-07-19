
function getTask() {
    let form = document.querySelector("#create-task-form")
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        task = document.getElementById('new-task-description').value
        addTask(task)
        task = ""
    })
}

 function addTask(arg) {
     let ul = document.getElementById('tasks')
     let li = document.createElement('li')
     li.innerText = arg
     li.style.fontSize = "x-small"
     let button = document.createElement('button')
     button.innerText = "x"
     ul.appendChild(li)
     li.appendChild(button)
     deleteTask()
 }

 function deleteTask() {
    allLis = document.querySelectorAll('li')
    console.log("hello")
    allLis.forEach (li => {
       let button = li.querySelector('button')
       button.addEventListener("click", function(e) {
         li.remove()
       }) 
    })
 }

 getTask()
