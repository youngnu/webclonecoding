const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")


let toDos = []

const saveToDo = () => {
    localStorage.setItem("toDos", JSON.stringify(toDos))
} 

const deleteToDo = (event) => {
    const deleteLi = event.target.parentElement
    toDos = toDos.filter((toDo)=> toDo.id !== parseInt(deleteLi.id))
    deleteLi.remove()
    saveToDo()
}

const paintToDo = (newToDo) => {
    const li = document.createElement('li')
    li.id = newToDo.id
    const button = document.createElement('button')
    button.innerText = '❌'
    button.addEventListener("click", deleteToDo)
    li.innerText = newToDo.text
    li.appendChild(button)
    todoList.appendChild(li)
}


const handleToDoSubmit = (event) => {
    event.preventDefault()
    const newToDo = todoInput.value
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    }
    todoInput.value = ""
    toDos.push(newToDoObj)
    paintToDo(newToDoObj);
    saveToDo(newToDoObj)
}

const savedToDos = localStorage.getItem("toDos")
if(savedToDos !== null){
    const parsedToDo = JSON.parse(savedToDos)
    parsedToDo.forEach(paintToDo)
}

todoForm.addEventListener("submit", handleToDoSubmit)