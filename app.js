const todoInput = document.getElementById("todoInput");
const saveBtn = document.getElementById("saveBtn");
const todoList = document.querySelector(".js-todo-container");

let todos = [];


window.onload = () =>{
    todos = JSON.parse((localStorage.getItem("todos"))) || [];
    todos.forEach(todo => addTodo(todo));
    
}

saveBtn.addEventListener("click",() => {
    let task = todoInput.value;
    todos.push(task);
    addTodo(task);
    localStorage.setItem("todos",JSON.stringify(todos));
    console.log(todos);
    
    todoInput.value = "";

} )


const addTodo = (todoTask) =>{
    let todo = document.createElement("p");
    todo.innerText = todoTask;
    todoList.appendChild(todo);
    todo.style.cursor = "pointer";

    todo.addEventListener("click",()=>{
        todo.style.textDecoration = "line-through";
        
        remove(todo);
        
    })
    todo.addEventListener("dblclick",()=>{
        todoList.removeChild(todo)
        remove(todoTask);
    })
}

function remove  (todoTask){
    const removeItem =  todos.indexOf(todoTask);
    if(removeItem > -1){
        todos.splice(removeItem,1)
        console.log(todos);
        
    }
    localStorage.setItem("todos",todos)
}


