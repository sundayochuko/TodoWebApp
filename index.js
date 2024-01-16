const todoInput = document.getElementById("itemInput");
const todoItemsList = document.getElementById("todoItemsSection");
const totalItemsCount = document.getElementById("totalTodos");

// Add event listener for "Enter" key press
todoInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

function addTodo() {
  const todoText = todoInput.value.trim();

  if (!todoText) {
    return;
  }

  const listItem = document.createElement("li");

  listItem.innerHTML = `${todoText} <button onclick="deleteTodoItem(this)">Delete</button>`;

  todoItemsList.appendChild(listItem);
  todoInput.value = "";
  updateTotalTodos();
}

function deleteTodoItem(button) {
  const listItem = button.parentElement;
  todoItemsList.removeChild(listItem);
  updateTotalTodos();
}

function clearItems() {
  todoItemsList.innerHTML = "";
  updateTotalTodos();
}

function updateTotalTodos() {
  const count = todoItemsList.childElementCount;
  totalItemsCount.textContent = count;
}
