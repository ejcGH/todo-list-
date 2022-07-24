//selectors
const input = document.getElementById("input");
const addButton = document.querySelector(".addButton");
const todoList = document.querySelector(".todo-list");
const completedList = document.querySelector(".task-complete");
const items = todoList.querySelectorAll("todo-item");
const deleteTasks = document.querySelector(".removetask");

//event listeners
addButton.addEventListener("click", addTodo);
todoList.addEventListener("click", checkedTask);
deleteTasks.addEventListener("click", deleteTask);

//functions
function addTodo(event) {
  // event.preventDefault();
  //todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Check Mark Button
  const completeButton = document.createElement("input");
  completeButton.innerText = "";
  completeButton.type = "checkbox";
  completeButton.value = false;
  completeButton.classList.add("complete-btn");

  todoDiv.appendChild(completeButton);
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = input.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Check trash Button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "remove";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //append to list
  todoList.appendChild(todoDiv);
  //Clear todo input value
  input.value = "";
}
function deleteTask(e) {
  const item = e.target;

  //delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}

function checkedTask(e) {
  const item = e.target;
  item.checked = true;
  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
    completedList.appendChild(todo);
  } else if (item.classList[0] !== "complete-btn") {
  }
  // delete todo
  deleteTask(e);
}
