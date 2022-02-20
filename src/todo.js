const todoForm = document.querySelector("#f-todo");
const todoInput = document.querySelector("#f-todo input");
const todoList = document.querySelector("#todo-list");
let toDos = [];

const KEY_TODOS = "todos";

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(KEY_TODOS, JSON.stringify(toDos));
}

function paintTodo(toDo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    btn.innerText = "❌";
    span.innerText = toDo.text;
    li.id = toDo.id;

    btn.addEventListener("click", deleteTodo);

    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text:newTodo,
        id:Date.now()
    };

    toDos.push(newTodoObj);

    paintTodo(newTodoObj);
    saveToDos();
    
}

if(localStorage.getItem("username") !== null) {
    todoForm.classList.remove("hidden");
}

const savedTodos = localStorage.getItem(KEY_TODOS);
if(savedTodos) {
    const parsedTodos = JSON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}

todoForm.addEventListener("submit", handleTodo);
